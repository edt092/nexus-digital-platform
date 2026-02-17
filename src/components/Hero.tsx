export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="font-mono text-primary text-sm mb-4 tracking-[0.2em] flex items-center gap-2">
          <span className="size-2 rounded-full bg-primary animate-pulse"></span>
          SYSTEM_STATUS: OPTIMIZING_REVENUE
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase">
          EL CÓDIGO QUE NO GENERA INGRESOS ES{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            CÓDIGO MUERTO
          </span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed mb-10 border-l-2 border-primary/30 pl-6">
          Somos tu aliado tecnológico para impulsar el crecimiento de tu negocio.
          <br />
          Diseñamos ecosistemas digitales sólidos, eficientes y preparados para escalar.
          <br />
          Convertimos estrategia y tecnología en resultados medibles.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/593987098437?text=Hola%20Solicito%20una%20auditor%C3%ADa%20gratuita%2C%20me%20pueden%20ayudar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-4 rounded-lg font-black tracking-wide text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
          >
            AUDITORÍA DE CRECIMIENTO GRATUITA
            <span className="material-symbols-outlined">analytics</span>
          </a>
          <button className="bg-surface border border-border-dim text-gray-300 px-8 py-4 rounded-lg font-bold hover:bg-white/5 transition-colors flex items-center justify-center gap-3">
            VER MANIFIESTO
          </button>
        </div>
      </div>
      {/* Decoration element */}
      <div className="absolute -right-20 top-40 opacity-10 pointer-events-none hidden lg:block">
        <pre className="font-mono text-[10px] text-primary leading-none">
          {`01010101 01010101
11100011 11100011
00011100 00011100
GROWTH_V2_INIT...
CORE_ENGINE_ACTIVE
REVENUE_SCALE: MAX`}
        </pre>
      </div>
    </section>
  );
}
