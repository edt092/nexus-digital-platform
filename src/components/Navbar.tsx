export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-primary rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-xl">
              terminal
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
        </div>
        <a
          href="https://wa.me/593987098437?text=Hola%20Solicito%20una%20auditor%C3%ADa%20gratuita%2C%20me%20pueden%20ayudar%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded font-bold text-sm transition-all flex items-center gap-2 group"
        >
          <span>AUDITORÍA GRATUITA</span>
          <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1 animate-[nudge_1.5s_ease-in-out_infinite]">
            arrow_forward
          </span>
        </a>
      </div>
    </nav>
  );
}
