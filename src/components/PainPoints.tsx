const pains = [
  {
    icon: "speed",
    title: "Sitios Lentos",
    body: "Cada 100 ms adicionales de carga reduce hasta un 7% tu tasa de conversión. Un Core Web Vitals pobre provoca pérdidas directas en ventas y caídas en el ranking de búsqueda. Construimos sitios que responden en menos de 1 segundo en cualquier dispositivo, en cualquier red.",
  },
  {
    icon: "search_off",
    title: "SEO Invisible",
    body: "El 91% del tráfico orgánico se concentra en la primera página de Google. Si tu sitio no aparece entre los primeros resultados, estás invisible para clientes que ya están buscando lo que ofreces. Aplicamos ingeniería semántica, arquitectura técnica y marcado Schema para dominar los rankings de forma sostenida.",
  },
  {
    icon: "leak_add",
    title: "Embudos Rotos",
    body: "Invertir en tráfico sin conversiones es dinero quemado. Formularios que fallan, páginas lentas y flujos de compra confusos destruyen tu ROI antes de que el cliente llegue a pagar. Auditamos cada punto de fuga y sellamos el embudo con automatización inteligente y UX optimizada para la conversión.",
  },
];

export default function PainPoints() {
  return (
    <section
      className="py-20 px-6 md:px-12"
      style={{ backgroundColor: "#040e1f" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {pains.map((p) => (
          <div
            key={p.title}
            className="glass-card p-8 border-l-4 border-l-amber-500 rounded-lg"
          >
            <span
              className="material-symbols-outlined text-amber-500 mb-4 block"
              style={{ fontSize: "28px" }}
            >
              {p.icon}
            </span>
            <h3 className="text-[16px] font-bold text-[#d8e3fb] mb-2">
              {p.title}
            </h3>
            <p className="text-[#c4c6cd] text-[15px] leading-relaxed">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
