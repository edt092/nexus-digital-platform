# NexusDigital.tech — Full SEO Audit Report

**Date:** 2026-04-28
**Business type:** Digital Agency (España / Ecuador / Colombia)
**Stack:** Next.js App Router + Tailwind CSS v4 + Netlify
**Auditors:** 6 specialist subagents (Technical, Content, Schema, Sitemap, Performance, Visual)

---

## SEO Health Score: 40 / 100

| Category | Weight | Score | Weighted |
|----------|--------|-------|---------|
| Technical SEO | 25% | 40/100 | 10.0 |
| Content Quality | 25% | 45/100 | 11.3 |
| On-Page SEO | 20% | 50/100 | 10.0 |
| Schema / Structured Data | 10% | 20/100 | 2.0 |
| Performance (CWV) | 10% | 35/100 | 3.5 |
| Images | 5% | 25/100 | 1.3 |
| AI Search Readiness | 5% | 44/100 | 2.2 |
| **Total** | | | **40.2 / 100** |

The site has excellent technical foundations (SSR/SSG, clean URL structure, proper `next/font` optimization for Inter/Roboto Mono, no tracking bloat) but is undermined by several deployment gaps and a small number of high-impact structural problems. Fixing the top 5 critical issues alone would push the score to roughly **62/100**.

---

## Core Web Vitals Summary

| Metric | Rating | Root Cause |
|--------|--------|------------|
| LCP | **Poor** | 120+ MB de GIFs preloaded compitiendo con el LCP element |
| CLS | **Needs Improvement** | `<img>` sin dimensiones + Material Symbols FOUT |
| INP | **Good** | Mínima interactividad client-side |
| FCP | **Needs Improvement** | Stylesheet render-blocking de Material Symbols |
| TTFB | Borderline (~700ms) | Verificar que Netlify edge caching esté activo |

**Overall CWV: Failing.** Convertir GIFs a video y eliminar los preload hints es el cambio de mayor impacto en todos los métricas.

---

## Qué ya funciona bien

- HTTPS con redirects 301 para www y HTTP — correcto
- `next/font` para Inter y Roboto Mono — elimina round-trips a Google Fonts
- Las 3 rutas `page.tsx` devuelven HTTP 200
- Imágenes de Pillars usan correctamente `next/image` con dimensiones explícitas y lazy loading
- Sin scripts de analytics/tracking — cero overhead de JS de terceros sobre INP
- Botón de WhatsApp como `<a>` SVG inline — cero network requests
- React Server Components en toda la app — Googlebot ve el contenido completo en el primer fetch
- Datos verificados con GSC con disclosure honesto de meses parciales en `/casos`
- Estructura de URLs limpia, profundidad mínima, viewport meta correcto en mobile

---

## CRÍTICO — Corregir antes del siguiente deploy

### C-1 — robots.txt y sitemap.xml devuelven HTTP 404 (CAMBIO REALIZADO)

`src/app/robots.ts` y `src/app/sitemap.ts` existen localmente pero **nunca han sido commiteados**. Ambos aparecen como untracked (`??`) en git. El deploy en Netlify no los incluye.

**Impacto:** Googlebot no puede auto-descubrir páginas. GSC reportará error en robots.txt. Las páginas `/casos` y `/digital-assets/paw-art-studio` no tienen inlinks externos y no serán indexadas de forma confiable sin sitemap.

**Fix:**
```bash
git add src/app/robots.ts src/app/sitemap.ts
git commit -m "feat: add robots.ts and sitemap.ts"
```
Tras el deploy, enviar `https://nexusdigital.tech/sitemap.xml` manualmente en Google Search Console.

---

### C-2 — Zero JSON-LD se renderiza en el HTML en producción (todo el schema es descartado silenciosamente) (CAMBIO REALIZADO)

`OrganizationSchema` está colocado dentro de `<head>` en `layout.tsx`. Next.js App Router gestiona `<head>` a través del metadata API — los componentes arbitrarios dentro del JSX de `<head>` son descartados silenciosamente. `ServicesSchema` y `BreadcrumbSchema` en la homepage tampoco aparecen en el HTML renderizado.

**Cobertura efectiva de schema para Googlebot: 0 tipos.**

**Fix** — mover `<OrganizationSchema />` de dentro de `<head>` al inicio de `<body>` en `layout.tsx`:

```tsx
// src/app/layout.tsx
<body className={...}>
  <OrganizationSchema />   {/* ← movido aquí desde <head> */}
  {children}
</body>
```

Verificar tras el deploy:
```bash
curl https://nexusdigital.tech | grep "ld+json"
# Debe devolver 3 script tags
```

---

### C-3 — 120+ MB de GIFs preloaded al cargar la página (LCP catastrófico)

El `<head>` contiene `<link rel="preload" as="image">` para los 6 GIFs de proyectos simultáneamente. Dos GIFs medidos fueron de **50.5 MB** y **33.4 MB**. Todos los preloads compiten por bandwidth antes de que el contenido LCP pueda pintar — esto solo pone el LCP en zona **Poor (>4s)** en cualquier red real.

**Fix:**
1. Eliminar los 6 preload hints de GIFs del `<head>` de inmediato
2. Convertir GIFs a `<video autoplay loop muted playsinline>` con fuentes WebM + MP4 (reducción >90% de tamaño)
3. Envolver `seo.png` (785 KB PNG) en `next/image` con `loading="lazy"` — está below the fold

```tsx
// src/components/Projects.tsx — reemplazar <img> con <video>
<video autoPlay loop muted playsInline className="w-full h-full object-cover ...">
  <source src={project.webm} type="video/webm" />
  <source src={project.mp4} type="video/mp4" />
</video>
```

---

### C-4 — Privacy Policy y Terms of Service son enlaces muertos

`Footer.tsx` tiene ambos enlaces legales apuntando a `href="#"`. El sitio opera en tres países y vende productos digitales a $300–450 USD. Páginas legales no funcionales son un fallo directo de "Trustworthiness" en las QRG de Google (sept 2025) y un riesgo legal.

**Fix:** Crear `src/app/legal/privacidad/page.tsx` y `src/app/legal/terminos/page.tsx`, actualizar los hrefs del Footer, y agregar ambas URLs a `sitemap.ts`.

---

### C-5 — Botones de compra en PawArtStudio son no funcionales

`/digital-assets/paw-art-studio` es una página transaccional con botones "Comprar Código" y "Empezar Ahora" que no tienen acción. Una página de conversión con el mecanismo de compra roto es un fallo de señal de confianza en páginas YMYL.

**Fix:** Conectar botones a WhatsApp con plan pre-relleno:
```tsx
<a
  href="https://wa.me/593987098437?text=Quiero+el+plan+Starter"
  target="_blank"
  rel="noopener noreferrer"
>
  Comprar Código
</a>
```

---

### C-6 — SearchAction del schema apunta a un endpoint de búsqueda inexistente

`OrganizationSchema.tsx` declara `potentialAction.urlTemplate: "https://nexusdigital.tech/?s={search_term_string}"` — un parámetro estilo WordPress en una app Next.js sin función de búsqueda. Google rastreará esa URL, recibirá la homepage, y rechazará el Sitelinks Searchbox o marcará un error de structured data en GSC.

**Fix:** Eliminar el bloque completo `potentialAction` del nodo WebSite en `OrganizationSchema.tsx`.

---

## ALTO — Corregir en la próxima semana

### H-1 — Sin canonical tags en ninguna página

Las 3 páginas no tienen `<link rel="canonical">`. Sin él, Google infiere canonicals y variantes con trailing slash pueden competir.

**Fix** — agregar a `layout.tsx` metadata:
```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://nexusdigital.tech'),
  alternates: { canonical: '/' },
  // ...
};
```
Agregar `alternates.canonical` específico en `casos/page.tsx` y `paw-art-studio/page.tsx`.

---

### H-2 — Sin Open Graph ni Twitter Card meta en ninguna página

Zero tags OG/Twitter. Los shares de WhatsApp (el canal primario del sitio) se renderizan sin imagen de preview.

**Fix** — agregar a `layout.tsx` metadata:
```ts
openGraph: {
  title: 'NexusDigital | Agencia SEO y Desarrollo Web',
  description: 'Somos tu brazo tecnológico en España, Ecuador y Colombia...',
  url: 'https://nexusdigital.tech',
  siteName: 'NexusDigital',
  locale: 'es_ES',
  type: 'website',
  images: [{ url: '/og-image.png', width: 1200, height: 630 }],
},
twitter: {
  card: 'summary_large_image',
  images: ['/og-image.png'],
},
```
Crear `/public/og-image.png` a 1200×630px.

---

### H-3 — Sin menú de navegación en mobile

Los nav links son `hidden md:flex`. Por debajo de 768px el sitio **no tiene navegación alguna** — sin hamburger, sin drawer, sin bottom bar. Los usuarios en mobile no pueden llegar a `/casos`, `#soluciones`, `#manifiesto` ni ninguna sección excepto haciendo scroll.

**Fix:** Agregar toggle hamburger en `Navbar.tsx` que abra un drawer full-screen con los mismos links en mobile. También aumentar el botón CTA del Navbar a `py-3` mínimo para alcanzar el touch target de 48px.

---

### H-4 — El color primario falla el contraste WCAG AA

`#0072f5` sobre `#050608` = ~3.8:1. Falla el mínimo 4.5:1 para texto normal. Se usa en el badge de status del Hero, labels mono, líneas de status de tarjetas, números de Pillars, caracteres de prompt del Manifesto y hover de nav links.

**Fix:** Oscurecer a `#005ecb` (~4.6:1) o usar `#ffffff` para el texto mono pequeño que actualmente usa `text-primary`. También: `gray-500` (`#6b7280`) sobre `#111418` = ~3.6:1 (falla) — usado en Footer y líneas de status de tarjetas; subir a `gray-400`.

---

### H-5 — Targeting de keywords primarias indefinido

El H1 es un statement de posicionamiento de marca. El meta title apunta a "Growth Engineering" (inglés, volumen de búsqueda negligible en español). Ningún heading apunta a "agencia SEO Ecuador," "desarrollo web Colombia," "agencia digital España," ni ninguna query en español que un prospecto usaría.

**Fix:**
- Meta title → `NexusDigital | Agencia SEO y Desarrollo Web — España, Ecuador y Colombia`
- H2 encima de Pillars → `Servicios de Ingeniería Digital`
- Subheadline del Hero → incluir un keyword de servicio de forma natural

---

### H-6 — Sin autor ni miembro del equipo nombrado en ningún sitio

Bajo las QRG de septiembre 2025, "Experience" requiere un creador humano identificable. No hay ninguna persona nombrada en ninguna página (el handle de GitHub `edt092` solo aparece en links de Projects). Los quality raters no pueden verificar la expertise declarada.

**Fix:** Agregar una sección "Equipo" o "About" con el nombre del fundador, 2–3 frases de background y link a LinkedIn. Referenciar al fundador en OrganizationSchema como nodo `Person` con `worksFor`.

---

### H-7 — Word count de homepage por debajo del mínimo (~520 palabras)

Una página que sirve tanto de homepage como de página de servicios principal necesita ≥800 palabras para cobertura temática adecuada. La página no aborda: proceso, rango de precios, fit de cliente, duración de engagement, ni justificación geográfica.

**Fix:** Expandir descripciones de PainPoints cards (actualmente 15–20 palabras → objetivo 40–60 palabras). Agregar sección "Cómo trabajamos". Agregar una frase de metodología bajo cada Pillar.

---

### H-8 — Social proof de PawArtStudio es un patrón fabricado

"+40 emprendedores ya operando en la región" con iniciales placeholder (JD, AM, RL) es un dark pattern reconocido, explícitamente marcado en las QRG de septiembre 2025 como "señal de reputación engañosa."

**Fix:** Eliminar el cluster de avatares completamente, o reemplazar con una cita real atribuida de un usuario verificable con su consentimiento.

---

## MEDIO — Corregir en el próximo mes

| # | Issue | Archivo | Fix |
|---|-------|---------|-----|
| M-1 | `seo.png` (785 KB PNG) — sin dimensiones, sin lazy, below the fold | `GrowthStack.tsx` | Envolver en `next/image`, `loading="lazy"`, `width={1536}`, `height={1024}` |
| M-2 | Los 6 `<img>` de GIFs — sin width/height, sin lazy | `Projects.tsx` | Agregar dimensiones o migrar a `<video>`; agregar `loading="lazy"` |
| M-3 | BreadcrumbSchema no se usa en `/casos` ni `/paw-art-studio` | `casos/page.tsx`, `paw-art-studio/page.tsx` | Importar `BreadcrumbSchema` + `casosBreadcrumb`/`digitalAssetsBreadcrumb` (los exports ya existen en `BreadcrumbSchema.tsx`) |
| M-4 | Ruta padre `/digital-assets` es un link roto (sin page.tsx) | `src/app/digital-assets/` | Crear `page.tsx` listando digital assets, o eliminar el paso intermedio del breadcrumb |
| M-5 | Material Symbols cargado via `<link>` render-blocking | `layout.tsx:31` | Agregar preconnect hints; limitar a los iconos en uso: añadir `&icon_names=analytics,arrow_forward,code,...` a la URL |
| M-6 | Footer copyright es "© 2024" (el sitio muestra contenido de 2026) | `Footer.tsx` | Reemplazar con `© {new Date().getFullYear()} NEXUS DIGITAL` |
| M-7 | Métricas agregadas sin atribuir (+300% tráfico, 50+ proyectos) | `GrowthStack.tsx` | Agregar atribución de cliente/timeframe bajo cada métrica, o reducir a números verificables |
| M-8 | Títulos de pillars en inglés en página en español | `Pillars.tsx`, `CTA.tsx` | Traducir a español o agregar subtítulo en español bajo cada heading inglés |
| M-9 | Sin testimoniales de clientes en ninguna página | `/casos`, `Projects.tsx` | Agregar una cita atribuida por caso de estudio en `/casos`; una en homepage Projects |
| M-10 | Logo de OrganizationSchema usa `favicon.ico` | `OrganizationSchema.tsx` | Agregar `/public/logo.png` (mín 512×512) y actualizar `ImageObject.url` del schema |
| M-11 | `sameAs` solo tiene GitHub — señal de entidad débil | `OrganizationSchema.tsx` | Agregar página de LinkedIn, Instagram y Google Business Profile |
| M-12 | Security headers faltantes | Config de Netlify | Agregar `netlify.toml` con `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` |
| M-13 | Botón "VER MANIFIESTO" sin onClick handler | `Hero.tsx` | Agregar `onClick={() => document.querySelector('#manifiesto')?.scrollIntoView({ behavior: 'smooth' })}` |
| M-14 | Sin email de contacto en ningún lado | `Footer.tsx`, `OrganizationSchema.tsx` | Agregar `hola@nexusdigital.tech` al footer y al ContactPoint de OrganizationSchema |
| M-15 | Los 6 links de demo de proyectos van a `"#"` | `Projects.tsx` | Agregar URLs reales o eliminar links muertos |

---

## BAJO — Backlog

| # | Issue | Fix |
|---|-------|-----|
| L-1 | HSTS sin `includeSubDomains; preload` | Actualizar headers de Netlify |
| L-2 | `H4` usado directamente bajo `H2` en Pillars (salta H3) | Cambiar tags de títulos de pillars de `h4` a `h3` |
| L-3 | BreadcrumbList de un solo item en homepage (sin valor en SERPs) | Eliminar de homepage; mantener solo en sub-páginas |
| L-4 | `changeFrequency` y `priority` en `sitemap.ts` (ignorados por Google) | Eliminar ambos campos, mantener solo `url` + `lastModified` |
| L-5 | Todas las fechas `lastModified` del sitemap son idénticas (señal de fabricación) | Usar fechas reales por ruta |
| L-6 | Meta description de Casos sin frase de CTA | Añadir: "Descubre cómo escalamos su tráfico orgánico desde cero." |
| L-7 | Botón "AUDITORÍA GRATUITA" del Navbar por debajo de 48px touch target | Agregar `py-3` al CTA del Navbar en mobile |
| L-8 | Sin `scroll-behavior: smooth` globalmente | Agregar `html { scroll-behavior: smooth; }` a `globals.css` |
| L-9 | WebPage schema sin `primaryImageOfPage` | Agregar referencia a `/og-image.png` una vez creado |
| L-10 | Texto `gray-600` en project cards falla contraste | Subir a `gray-400` mínimo |

---

## Schema — Detalle técnico

### Estado actual: 0 tipos renderizados en producción

| Bloque | Ubicación | HTML en vivo | Fuente |
|--------|-----------|-------------|--------|
| Organization + WebSite + WebPage (@graph) | `layout.tsx` | NO PRESENTE | Existe |
| ServicesSchema (3x Service) | `page.tsx` | NO PRESENTE | Existe |
| BreadcrumbList (homeBreadcrumb) | `page.tsx` | NO PRESENTE | Existe |

### Problemas de validación en el código fuente

| # | Severity | Problema | Fix |
|---|----------|----------|-----|
| 1 | Critical | Zero JSON-LD renderizado — schema en ubicación incorrecta | Mover `<OrganizationSchema />` de `<head>` a `<body>` |
| 2 | Critical | `SearchAction.target.urlTemplate` usa `?s=` en app Next.js sin búsqueda | Eliminar `potentialAction` del nodo WebSite |
| 3 | High | `logo.url` apunta a `.ico` — Google rechaza favicons como logos | Reemplazar con `/logo.png` (PNG/JPG/WebP, mín 112×112px) |
| 4 | High | `ContactPoint` usa `contactOption: "TollFree"` para un link de WhatsApp | Eliminar `contactOption: "TollFree"` |
| 5 | High | `sameAs` solo tiene un perfil de GitHub | Agregar LinkedIn, Instagram y otras URLs verificadas |
| 6 | Medium | `BreadcrumbList` en homepage tiene solo 1 item — sin valor en SERPs | Aceptable para root; asegurar ≥2 items en sub-páginas |
| 7 | Medium | `areaServed` usa nombres de países en español (`"España"`) en vez de inglés ISO | Cambiar a `"Spain"`, `"Ecuador"`, `"Colombia"` |
| 8 | Medium | Nodo `#service-growth` sin `hasOfferCatalog` — inconsistente con otros servicios | Agregar `hasOfferCatalog` con ≥2 items `Offer` |
| 9 | Medium | Sin schema `Person` para el fundador — señal E-E-A-T débil | Agregar nodo `Person` al `@graph` |
| 10 | Low | Nodo `WebPage` sin referencia `breadcrumb` cross-reference | Agregar `"breadcrumb": {"@id": ".../#breadcrumb"}` |
| 11 | Low | `BreadcrumbList` sin `@id` — no puede ser referenciado por `WebPage.breadcrumb` | Agregar `"@id": "https://nexusdigital.tech/#breadcrumb"` |

### OrganizationSchema corregida

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://nexusdigital.tech/#organization",
      "name": "NexusDigital",
      "url": "https://nexusdigital.tech",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://nexusdigital.tech/#logo",
        "url": "https://nexusdigital.tech/logo.png",
        "contentUrl": "https://nexusdigital.tech/logo.png",
        "width": 512,
        "height": 512,
        "caption": "NexusDigital"
      },
      "description": "Agencia de ingeniería digital especializada en SEO técnico, desarrollo web de alto rendimiento y ecosistemas de crecimiento digital para empresas en España, Ecuador y Colombia.",
      "foundingDate": "2024",
      "areaServed": [
        { "@type": "Country", "name": "Spain" },
        { "@type": "Country", "name": "Ecuador" },
        { "@type": "Country", "name": "Colombia" }
      ],
      "contactPoint": [{
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["Spanish"],
        "url": "https://wa.me/593987098437"
      }],
      "sameAs": [
        "https://github.com/edt092",
        "https://www.linkedin.com/company/nexusdigital-tech",
        "https://www.instagram.com/nexusdigital.tech"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://nexusdigital.tech/#website",
      "url": "https://nexusdigital.tech",
      "name": "NexusDigital | Growth Engineering",
      "inLanguage": "es",
      "publisher": { "@id": "https://nexusdigital.tech/#organization" }
    },
    {
      "@type": "WebPage",
      "@id": "https://nexusdigital.tech/#webpage",
      "url": "https://nexusdigital.tech",
      "name": "NexusDigital | Growth Engineering",
      "inLanguage": "es",
      "isPartOf": { "@id": "https://nexusdigital.tech/#website" },
      "about": { "@id": "https://nexusdigital.tech/#organization" },
      "datePublished": "2024-01-01",
      "dateModified": "2026-04-27",
      "breadcrumb": { "@id": "https://nexusdigital.tech/#breadcrumb" }
    }
  ]
}
```

---

## Content / E-E-A-T — Detalle

### Scores E-E-A-T

| Dimensión | Score | Peso QRG |
|-----------|-------|---------|
| Experience (Experiencia) | 38/100 | 20% |
| Expertise (Expertise) | 42/100 | 25% |
| Authoritativeness (Autoridad) | 30/100 | 25% |
| Trustworthiness (Confianza) | 52/100 | 30% |

### Word count por página

| Página | Palabras estimadas | Mínimo recomendado | Estado |
|--------|-------------------|--------------------|--------|
| Homepage `/` | ~520–560 | 800 (página de servicios) | Por debajo |
| `/casos` | ~700–750 | 600 (caso de estudio) | Pasa |
| `/digital-assets/paw-art-studio` | ~600–650 | 700 (página de producto) | Borderline |

### Inventario de señales de confianza

| Señal | Estado |
|-------|--------|
| Contacto (WhatsApp) | Presente — funcional |
| Email de contacto | Ausente |
| Dirección física | Ausente |
| Nombre legal / registro | Ausente |
| Privacy Policy | Link presente, `href="#"` — no funcional |
| Terms of Service | Link presente, `href="#"` — no funcional |
| Testimoniales de clientes | Ausentes en todas las páginas |
| Logos de clientes | Ausentes |
| Portfolio con demos vivos | Presente — todos los links de demo van a `"#"` |
| Bios de autor/equipo | Ausentes |
| Certificaciones / partner badges | Ausentes |
| Perfiles en redes sociales | Solo GitHub |
| Datos verificados de terceros | Presentes en `/casos` (screenshots de GSC) |
| Señales de pago (PawArtStudio) | Mencionadas en copy; botones de compra no funcionales |

---

## Sitemap — Detalle

### Estado actual

```
GET https://nexusdigital.tech/sitemap.xml → HTTP 404
GET https://nexusdigital.tech/robots.txt  → HTTP 404
```

### Cobertura de rutas

| Archivo de ruta | URL inferida | En sitemap |
|----------------|-------------|-----------|
| `src/app/page.tsx` | `https://nexusdigital.tech` | Sí |
| `src/app/casos/page.tsx` | `https://nexusdigital.tech/casos` | Sí |
| `src/app/digital-assets/paw-art-studio/page.tsx` | `https://nexusdigital.tech/digital-assets/paw-art-studio` | Sí |
| `src/app/digital-assets/page.tsx` | `https://nexusdigital.tech/digital-assets` | No existe (ruta huérfana) |

### sitemap.ts simplificado (recomendado)

```ts
// src/app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nexusdigital.tech",
      lastModified: new Date("2026-04-27"), // fecha real de último cambio
    },
    {
      url: "https://nexusdigital.tech/casos",
      lastModified: new Date("2026-04-27"),
    },
    {
      url: "https://nexusdigital.tech/digital-assets/paw-art-studio",
      lastModified: new Date("2026-04-27"),
    },
  ];
  // Nota: changeFrequency y priority son ignorados por Google — eliminados
}
```

---

## Performance — Detalle

### Análisis de imágenes

| Asset | Formato | Tamaño | next/image | lazy | Dimensiones | Problema |
|-------|---------|--------|-----------|------|-------------|---------|
| `seo.png` | PNG | 785 KB | No | No | Sin definir | Crítico |
| `gif-pawart.gif` | GIF | 50.5 MB | No | No | Sin definir | Crítico |
| `gif-promogimmicks.gif` | GIF | 33.4 MB | No | No | Sin definir | Crítico |
| `gif-*.gif` (4 más) | GIF | ~20–50 MB c/u | No | No | Sin definir | Crítico |
| `pillar-1-v2.png` | PNG→WebP | Optimizado | Sí | lazy | 600×338 | Correcto |
| `pillar-2.png` | PNG→WebP | Optimizado | Sí | lazy | 600×338 | Correcto |
| `pillar-3.png` | PNG→WebP | Optimizado | Sí | lazy | 600×338 | Correcto |

**Payload total de imágenes preloaded en `<head>`: ~120+ MB** (si los GIFs promedian 20 MB c/u).

### Estrategia de fuentes

| Fuente | Método | Estado |
|--------|--------|--------|
| Inter | `next/font/google` | Correcto — self-hosted, sin round-trip externo |
| Roboto Mono | `next/font/google` | Correcto — self-hosted, sin round-trip externo |
| Material Symbols Outlined | `<link>` directo en `<head>` | Problema — render-blocking, no subsetted, variable font completo |

**Fix para Material Symbols** — usar subset con solo los iconos en uso:
```html
<!-- Solo los iconos que se usan realmente -->
<link
  rel="preconnect"
  href="https://fonts.googleapis.com"
/>
<link
  rel="preconnect"
  href="https://fonts.gstatic.com"
  crossOrigin="anonymous"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0&icon_names=analytics,arrow_forward,code,lock,open_in_new,schedule,star&display=swap"
  rel="stylesheet"
/>
```

---

## Archivos clave referenciados

| Archivo | Issues principales |
|---------|-------------------|
| `src/app/layout.tsx` | Schema en `<head>`, Material Symbols blocking, falta canonical + OG meta |
| `src/app/robots.ts` | **No deployado** (untracked) |
| `src/app/sitemap.ts` | **No deployado** (untracked) |
| `src/app/page.tsx` | ServicesSchema + BreadcrumbSchema no rinden en HTML |
| `src/app/casos/page.tsx` | Missing BreadcrumbSchema, el más fuerte en contenido |
| `src/app/digital-assets/paw-art-studio/page.tsx` | Botones de compra rotos, social proof fabricada |
| `src/components/schema/OrganizationSchema.tsx` | SearchAction inválida, logo favicon.ico, sameAs incompleto |
| `src/components/schema/BreadcrumbSchema.tsx` | exports `casosBreadcrumb` y `digitalAssetsBreadcrumb` listos pero sin usar |
| `src/components/Projects.tsx` | `<img>` sin dimensiones, GIFs sin lazy, demo links a `"#"` |
| `src/components/GrowthStack.tsx` | `seo.png` sin next/image, sin dimensiones, métricas sin atribuir |
| `src/components/Pillars.tsx` | Patrón correcto de next/image — usar como referencia |
| `src/components/Footer.tsx` | Links legales muertos, copyright 2024 estático |
| `src/components/Hero.tsx` | Botón "VER MANIFIESTO" sin onClick handler |
| `src/components/Navbar.tsx` | Sin menú mobile, touch target del CTA button demasiado pequeño |

---

## Plan de acción priorizado

### Semana 1 — Crítico (desbloquea indexación y schema)
- [ ] Commitear y deployar `robots.ts` y `sitemap.ts`
- [ ] Mover `<OrganizationSchema />` de `<head>` a `<body>` en `layout.tsx`
- [ ] Eliminar `potentialAction` / `SearchAction` de OrganizationSchema
- [ ] Conectar botones de compra de PawArtStudio a WhatsApp
- [ ] Crear páginas legales `/legal/privacidad` y `/legal/terminos`
- [ ] Enviar sitemap a Google Search Console

### Semana 2 — Alto impacto en rendimiento y visibilidad
- [ ] Eliminar los 6 preload hints de GIFs del `<head>`
- [ ] Convertir GIFs a `<video>` (WebM + MP4)
- [ ] Agregar canonical tags en las 3 páginas
- [ ] Agregar Open Graph + Twitter Card meta + crear `og-image.png`
- [ ] Implementar menú hamburger en `Navbar.tsx` para mobile
- [ ] Corregir contraste: `#0072f5` → `#005ecb`; `gray-500` → `gray-400`
- [ ] Agregar keyword "agencia SEO" al meta title y al H2 de Pillars
- [ ] Agregar nombre del fundador + sección "Equipo"

### Semana 3–4 — Contenido y confianza
- [ ] Envolver `seo.png` en `next/image` con lazy + dimensiones
- [ ] Agregar dimensiones a los 6 `<img>` de GIFs (o migrar a `<video>`)
- [ ] Importar BreadcrumbSchema en `casos/page.tsx` y `paw-art-studio/page.tsx`
- [ ] Crear `src/app/digital-assets/page.tsx` o limpiar el breadcrumb roto
- [ ] Agregar preconnect hints para Material Symbols + subset URL
- [ ] Actualizar `footer.tsx`: `© {new Date().getFullYear()}`, email de contacto
- [ ] Agregar atribución de cliente/timeframe a las 4 métricas de GrowthStack
- [ ] Eliminar social proof placeholder (JD, AM, RL) de PawArtStudio
- [ ] Agregar ≥1 cita de cliente por caso en `/casos`
- [ ] Agregar logo PNG en `/public/logo.png` (512×512) + actualizar OrganizationSchema
- [ ] Agregar LinkedIn + Instagram a `sameAs` en OrganizationSchema
- [ ] Traducir títulos de Pillars y CTA checklist al español
- [ ] Conectar demo links de proyectos a URLs reales o eliminar

### Backlog
- [ ] HSTS `includeSubDomains; preload`
- [ ] Cambiar H4 de Pillars a H3
- [ ] Eliminar `changeFrequency` y `priority` de `sitemap.ts`
- [ ] Agregar `scroll-behavior: smooth` a `globals.css`
- [ ] Wiring del botón "VER MANIFIESTO" en `Hero.tsx`
- [ ] Subir touch target del CTA button de Navbar en mobile a `py-3`
- [ ] `netlify.toml` con security headers
- [ ] `primaryImageOfPage` en WebPage schema
- [ ] Corregir `gray-600` en project cards a `gray-400`
