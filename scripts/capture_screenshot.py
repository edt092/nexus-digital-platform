from playwright.sync_api import sync_playwright
import json, time

URL = "https://nexusdigital.tech/"
OUT = "E:/coding/proyectos-personales/activos/nexus-digital/screenshots"

VIEWPORTS = [
    {"name": "desktop",  "width": 1440, "height": 900},
    {"name": "mobile",   "width": 375,  "height": 812},
    {"name": "tablet",   "width": 768,  "height": 1024},
]

def capture(page, name, width, height, suffix=""):
    path = f"{OUT}/{name}{suffix}.png"
    page.screenshot(path=path, full_page=False)
    print(f"SAVED: {path}")
    return path

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        report = {}

        for vp in VIEWPORTS:
            name   = vp["name"]
            w, h   = vp["width"], vp["height"]

            ctx  = browser.new_context(
                viewport={"width": w, "height": h},
                user_agent=(
                    "Mozilla/5.0 (Linux; Android 12; Pixel 6) "
                    "AppleWebKit/537.36 (KHTML, like Gecko) "
                    "Chrome/112.0.0.0 Mobile Safari/537.36"
                ) if name == "mobile" else (
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                    "AppleWebKit/537.36 (KHTML, like Gecko) "
                    "Chrome/112.0.0.0 Safari/537.36"
                ),
                java_script_enabled=True,
            )
            page = ctx.new_page()
            try:
                page.goto(URL, wait_until="domcontentloaded", timeout=60000)
                # Give extra time for rendering
                page.wait_for_timeout(3000)
            except Exception as e:
                print(f"WARNING goto ({name}): {e}")

            atf_path   = capture(page, name, w, h, "_atf")
            full_path  = f"{OUT}/{name}_full.png"
            page.screenshot(path=full_path, full_page=True)
            print(f"SAVED: {full_path}")

            # --- Metrics collection ---
            try:
                metrics = page.evaluate("""() => {
                    const h1 = document.querySelector('h1');
                    const allH1 = [...document.querySelectorAll('h1')].map(e => ({
                        text: e.innerText.slice(0,120),
                        rect: e.getBoundingClientRect()
                    }));
                    const ctas = [];
                    document.querySelectorAll('a, button').forEach(el => {
                        const r = el.getBoundingClientRect();
                        if (r.width > 0 && r.height > 0) {
                            ctas.push({
                                text: el.innerText.slice(0,60),
                                tag: el.tagName,
                                rect: {top: r.top, left: r.left, width: r.width, height: r.height},
                                inViewport: r.top >= 0 && r.top < window.innerHeight
                            });
                        }
                    });
                    const imgs = [...document.querySelectorAll('img')].map(i => ({
                        src: i.src.slice(0,80),
                        width: i.width,
                        height: i.height,
                        naturalW: i.naturalWidth,
                        naturalH: i.naturalHeight,
                        hasWidthAttr: i.hasAttribute('width'),
                        hasHeightAttr: i.hasAttribute('height'),
                        loading: i.loading
                    }));
                    const hScroll = document.body.scrollWidth > window.innerWidth;
                    const popups = [...document.querySelectorAll('[class*="modal"],[class*="popup"],[class*="overlay"],[class*="interstitial"]')]
                        .filter(e => {
                            const s = window.getComputedStyle(e);
                            return s.display !== 'none' && s.visibility !== 'hidden' && s.opacity !== '0';
                        })
                        .map(e => ({tag: e.tagName, className: e.className.slice(0,60)}));

                    const fontSizes = [];
                    document.querySelectorAll('p, li, span, a').forEach(el => {
                        const fs = parseFloat(window.getComputedStyle(el).fontSize);
                        if (fs > 0) fontSizes.push(fs);
                    });
                    const minFont = fontSizes.length ? Math.min(...fontSizes) : null;
                    const avgFont = fontSizes.length ? (fontSizes.reduce((a,b)=>a+b,0)/fontSizes.length).toFixed(1) : null;

                    const smallTargets = [];
                    document.querySelectorAll('a, button, [role=button], input, select').forEach(el => {
                        const r = el.getBoundingClientRect();
                        if (r.width > 0 && r.height > 0 && (r.width < 48 || r.height < 48)) {
                            smallTargets.push({
                                tag: el.tagName,
                                text: (el.innerText||el.value||'').slice(0,40),
                                w: Math.round(r.width),
                                h: Math.round(r.height)
                            });
                        }
                    });

                    return {
                        title: document.title,
                        allH1,
                        ctas: ctas.slice(0,25),
                        imgs,
                        hScroll,
                        popups,
                        minFont,
                        avgFont,
                        smallTargets: smallTargets.slice(0,20),
                        viewport: {w: window.innerWidth, h: window.innerHeight},
                        bodyScrollW: document.body.scrollWidth,
                        bodyText200: document.body.innerText.slice(0,200),
                    };
                }""")
            except Exception as e:
                metrics = {"error": str(e)}

            report[name] = metrics
            ctx.close()

        # --- No-JS pass (SSR check, desktop only) ---
        ctx_nojs = browser.new_context(
            viewport={"width": 1440, "height": 900},
            java_script_enabled=False,
        )
        page_nojs = ctx_nojs.new_page()
        try:
            page_nojs.goto(URL, wait_until="domcontentloaded", timeout=60000)
            page_nojs.wait_for_timeout(2000)
        except Exception as e:
            print(f"WARNING no-js: {e}")
        nojs_path = f"{OUT}/desktop_nojs_atf.png"
        page_nojs.screenshot(path=nojs_path, full_page=False)
        print(f"SAVED: {nojs_path}")
        try:
            nojs_text = page_nojs.evaluate("() => document.body.innerText.slice(0, 600)")
            report["nojs_body_preview"] = nojs_text
        except Exception as e:
            report["nojs_body_preview"] = f"error: {e}"
        ctx_nojs.close()

        browser.close()

        print("\n=== METRICS JSON ===")
        print(json.dumps(report, indent=2, default=str))

if __name__ == "__main__":
    main()
