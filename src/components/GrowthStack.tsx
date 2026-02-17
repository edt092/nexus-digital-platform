export default function Results() {
  return (
    <section
      className="py-24 px-6 bg-primary/5 border-y border-primary/20 relative"
      id="resultados"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="font-mono text-primary text-xs mb-2 uppercase tracking-widest">
            {"// output_metrics"}
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
            Resultados que Hablan Solos
          </h2>
          <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-border-dim shadow-[0_0_50px_rgba(0,114,245,0.1)]">
            <img
              src="/seo.png"
              alt="Métricas de rendimiento SEO - Google Search Console"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-surface p-8 rounded-xl border border-border-dim text-center">
            <div className="text-5xl font-black italic text-primary mb-2">
              +300<span className="text-2xl">%</span>
            </div>
            <div className="font-mono text-xs text-gray-500 uppercase">
              Tráfico orgánico
            </div>
          </div>
          <div className="bg-surface p-8 rounded-xl border border-border-dim text-center">
            <div className="text-5xl font-black italic text-primary mb-2">
              50<span className="text-2xl">+</span>
            </div>
            <div className="font-mono text-xs text-gray-500 uppercase">
              Proyectos desplegados
            </div>
          </div>
          <div className="bg-surface p-8 rounded-xl border border-border-dim text-center">
            <div className="text-5xl font-black italic text-primary mb-2">
              &lt;1<span className="text-2xl">s</span>
            </div>
            <div className="font-mono text-xs text-gray-500 uppercase">
              Tiempo de carga promedio
            </div>
          </div>
          <div className="bg-surface p-8 rounded-xl border border-border-dim text-center">
            <div className="text-5xl font-black italic text-primary mb-2">
              99.8<span className="text-2xl">%</span>
            </div>
            <div className="font-mono text-xs text-gray-500 uppercase">
              Uptime garantizado
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-400 font-mono text-sm italic border-l-4 border-primary pl-6 inline-block text-left">
            No prometemos métricas vacías. Cada número es el resultado de
            ingeniería aplicada a la conversión real de nuestros clientes.
          </p>
        </div>
      </div>
    </section>
  );
}
