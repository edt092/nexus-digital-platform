export default function CTA() {
  return (
    <section className="py-24 px-6 mb-20">
      <div className="max-w-7xl mx-auto bg-primary rounded-2xl p-10 md:p-20 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
          <div className="text-[200px] font-black absolute -bottom-10 -right-10 leading-none select-none tracking-tighter uppercase italic">
            NEXUS
          </div>
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-6 leading-none">
              Agenda una Consultoría Técnica de 15 min
            </h2>
            <p className="text-xl text-white/80 font-mono mb-8 italic">
              Recibe nuestro Checklist de Salud SEO 2026
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/593987098437?text=Hola%20Solicito%20una%20auditor%C3%ADa%20gratuita%2C%20me%20pueden%20ayudar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-10 py-5 rounded font-black text-lg hover:bg-gray-100 transition-all uppercase tracking-tight inline-block"
              >
                RESERVAR SLOT AHORA
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-background-dark/30 backdrop-blur p-8 rounded-xl border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-4xl">
                  checklist
                </span>
                <span className="font-bold text-xl uppercase italic">
                  SEO Health Checklist v2.0
                </span>
              </div>
              <ul className="space-y-4 font-mono text-sm">
                <li className="flex items-center gap-3">
                  <span className="text-green-400 material-symbols-outlined">
                    check_circle
                  </span>{" "}
                  Core Web Vitals Audit
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400 material-symbols-outlined">
                    check_circle
                  </span>{" "}
                  Semantic Architecture Review
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400 material-symbols-outlined">
                    check_circle
                  </span>{" "}
                  Conversion Funnel Debugging
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400 material-symbols-outlined">
                    check_circle
                  </span>{" "}
                  Tech Debt Assessment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
