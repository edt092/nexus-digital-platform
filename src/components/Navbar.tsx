"use client";

import { useState } from "react";

const links = [
  { label: "Servicios",  sectionId: "servicios" },
  { label: "Métricas",   sectionId: "metricas" },
  { label: "Manifiesto", sectionId: "manifiesto" },
];

const WA_URL =
  "https://wa.me/593979097543?text=Hola%2C%20somos%20tus%20especialistas%20en%20SEO%20de%20que%20pa%C3%ADs%20nos%20visitas%20y%20como%20podemos%20ayudarte%3F";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleLink(id: string) {
    setOpen(false);
    scrollTo(id);
  }

  return (
    <header className="fixed top-0 w-full z-50 glass-nav">
      <nav className="flex justify-between items-center h-16 px-6 md:px-12 w-full max-w-[1400px] mx-auto">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="font-mono text-lg font-bold text-slate-50 uppercase tracking-tight select-none bg-transparent border-0 cursor-pointer"
        >
          &gt;_ Nexus<span className="text-amber-400">Digital</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.sectionId)}
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate-400 hover:text-amber-400 transition-colors bg-transparent border-0 cursor-pointer"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Right: CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 text-slate-950 px-4 py-2.5 rounded font-semibold text-[13px] tracking-wide hover:bg-amber-400 transition-all duration-200 active:scale-95"
          >
            Auditoría Gratuita
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded transition-colors hover:bg-white/5"
          >
            <span
              className="block w-5 h-[2px] bg-slate-300 rounded-full transition-all duration-300 origin-center"
              style={open ? { transform: "translateY(7px) rotate(45deg)" } : {}}
            />
            <span
              className="block w-5 h-[2px] bg-slate-300 rounded-full transition-all duration-300"
              style={open ? { opacity: 0, transform: "scaleX(0)" } : {}}
            />
            <span
              className="block w-5 h-[2px] bg-slate-300 rounded-full transition-all duration-300 origin-center"
              style={open ? { transform: "translateY(-7px) rotate(-45deg)" } : {}}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: open ? "400px" : "0px",
          borderTop: open ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div
          className="flex flex-col px-6 py-4 gap-1"
          style={{ background: "rgba(4, 14, 31, 0.97)" }}
        >
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => handleLink(l.sectionId)}
              className="font-mono text-[12px] uppercase tracking-[0.14em] text-slate-400 hover:text-amber-400 transition-colors py-3 border-b border-white/5 last:border-0 text-left bg-transparent border-l-0 border-r-0 border-t-0 cursor-pointer w-full"
            >
              {l.label}
            </button>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 bg-amber-500 text-slate-950 text-center py-3 rounded font-semibold text-[13px] tracking-wide hover:bg-amber-400 transition-colors"
          >
            Auditoría Gratuita
          </a>
        </div>
      </div>
    </header>
  );
}
