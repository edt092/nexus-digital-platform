import Image from "next/image";

const metrics = [
  { value: "+240%", label: "Tráfico Orgánico" },
  { value: "0.8s", label: "LCP Promedio" },
  { value: "-45%", label: "CPA Reducido" },
  { value: "12.4%", label: "Conversión Prom." },
];

export default function GrowthStack() {
  return (
    <section
      id="metricas"
      className="py-20 px-6 md:px-12"
      style={{ backgroundColor: "#111c2d" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left: copy + metrics */}
        <div className="lg:w-1/2 space-y-8">
          <div>
            <h2
              className="font-bold text-[#d8e3fb] mb-4"
              style={{ fontSize: "48px", lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: 700 }}
            >
              Resultados Verificables
            </h2>
            <p className="text-[#c4c6cd] text-[18px] leading-relaxed">
              Nuestros clientes no ven estimaciones, ven dashboards de crecimiento
              real. Datos extraídos directamente de Google Search Console y Analytics.
            </p>
          </div>

          {/* KPI grid */}
          <div className="grid grid-cols-2 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="space-y-1">
                <div
                  className="font-mono font-bold leading-none"
                  style={{
                    fontSize: "clamp(2.8rem, 5vw, 4rem)",
                    color: "#ffb95f",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {m.value}
                </div>
                <div
                  className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#c4c6cd]"
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <p className="font-mono text-[13px] italic text-[#c4c6cd] border-l-4 border-amber-500/50 pl-5 leading-relaxed">
            No prometemos métricas vacías. Cada número es el resultado de ingeniería
            aplicada a la conversión real de nuestros clientes.
          </p>

          <p className="font-mono text-[11px] uppercase tracking-wider text-[#6b7280] border-t border-white/5 pt-4">
            * Promedios medidos en clientes activos vía Google Analytics y Search Console. Resultados individuales varían según industria y punto de partida.
          </p>
        </div>

        {/* Right: screenshot */}
        <div className="lg:w-1/2 w-full">
          <div className="glass-card rounded-xl aspect-video relative overflow-hidden">
            <Image
              src="/seo.png"
              alt="Métricas de rendimiento SEO — Google Search Console"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-70 rounded-xl"
              loading="lazy"
            />
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                background: "linear-gradient(to top, #111c2d 0%, transparent 50%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
