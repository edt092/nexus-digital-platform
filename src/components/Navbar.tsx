import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-primary rounded flex items-center justify-center">
            <span className="font-mono text-white text-xs font-black leading-none select-none">
              &gt;_
            </span>
          </div>
          <span className="text-xl font-black tracking-tighter uppercase italic">
            Nexus<span className="text-primary">Digital</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-mono text-xs text-gray-400 uppercase tracking-widest">
          <a
            className="hover:text-primary transition-colors"
            href="#soluciones"
          >
            {"// soluciones"}
          </a>
          <a
            className="hover:text-primary transition-colors"
            href="#manifiesto"
          >
            {"// manifiesto"}
          </a>
          <a
            className="hover:text-primary transition-colors"
            href="#resultados"
          >
            {"// resultados"}
          </a>
          <Link
            className="hover:text-primary transition-colors"
            href="/casos"
          >
            {"// casos"}
          </Link>
          <Link
            className="hover:text-primary transition-colors flex items-center gap-1.5 text-primary/80"
            href="/digital-assets/paw-art-studio"
          >
            <span className="material-symbols-outlined text-xs">store</span>
            {"// assets"}
          </Link>
        </div>
        <a
          href="https://wa.me/593987098437?text=Hola%20Solicito%20una%20auditor%C3%ADa%20gratuita%2C%20me%20pueden%20ayudar%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded font-bold text-sm transition-all"
        >
          AUDITORÍA GRATUITA
        </a>
      </div>
    </nav>
  );
}
