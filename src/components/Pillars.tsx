const services = [
  {
    icon: "code",
    badge: "CORE",
    title: "Desarrollo Web",
    description:
      "Aplicaciones de alto rendimiento construidas con React, Next.js y arquitectura Cloud Native. Obtenemos puntuaciones 99/100 en Core Web Vitals para garantizar velocidad máxima, experiencia de usuario impecable y posicionamiento prioritario en buscadores.",
    features: ["PWA & Headless CMS", "SSR + Edge Rendering"],
  },
  {
    icon: "query_stats",
    badge: "GROWTH",
    title: "SEO Técnico",
    description:
      "Más que palabras clave: ingeniería de datos aplicada al posicionamiento. Diseñamos arquitecturas semánticas, implementamos marcado Schema avanzado y construimos autoridad algorítmica que los motores de búsqueda priorizan con consistencia.",
    features: ["Indexing Optimization", "Competitive AI Analysis"],
  },
  {
    icon: "settings_input_component",
    badge: "EFFICIENCY",
    title: "Automatización",
    description:
      "Conectamos tu CRM, ERP y herramientas de marketing en un ecosistema digital fluido. Eliminamos tareas repetitivas, aceleramos los ciclos de venta y liberamos a tu equipo para enfocarse en lo que realmente genera ingresos.",
    features: ["Zapier / Make Expert", "Custom API Bridges"],
  },
];

export default function Pillars() {
  return (
    <section
      id="servicios"
      className="py-20 px-6 md:px-12"
      style={{ backgroundColor: "#081425" }}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2
            className="font-bold text-[#d8e3fb] mb-3"
            style={{ fontSize: "48px", lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: 700 }}
          >
            Soluciones de Ingeniería
          </h2>
          <p className="text-[#c4c6cd] text-[16px] leading-relaxed">
            Arquitectura digital diseñada para escalar sin fricciones.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass-card p-8 rounded-xl group transition-all duration-300 hover:bg-white/[0.04]"
            >
              {/* Icon + badge row */}
              <div className="flex justify-between items-start mb-6">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "36px", color: "#b3c5ff" }}
                >
                  {s.icon}
                </span>
                <span
                  className="font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full"
                  style={{
                    background: "rgba(2, 102, 255, 0.12)",
                    color: "#b3c5ff",
                    border: "1px solid rgba(2, 102, 255, 0.25)",
                  }}
                >
                  {s.badge}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-[#d8e3fb] font-semibold mb-3"
                style={{ fontSize: "28px", lineHeight: "1.3" }}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-[#c4c6cd] text-[15px] leading-relaxed mb-6">
                {s.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 font-mono text-[13px] text-[#d8e3fb]"
                    style={{ letterSpacing: "0.04em" }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "16px", color: "#b3c5ff" }}
                    >
                      check_circle
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
