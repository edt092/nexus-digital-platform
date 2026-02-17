export default function PainPoints() {
  return (
    <section
      className="py-24 px-6 bg-surface/50 border-y border-border-dim"
      id="soluciones"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="font-mono text-primary text-xs mb-2 uppercase tracking-widest">
              {"// diagnosis_mode"}
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tight">
              ¿Tu tecnología está frenando tu crecimiento?
            </h2>
          </div>
          <div className="text-gray-500 font-mono text-xs uppercase hidden md:block">
            IDENTIFYING_BOTTLENECKS... [OK]
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group bg-surface p-8 rounded-xl border border-border-dim hover:border-primary/50 transition-all">
            <div className="size-12 rounded bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
              <span className="material-symbols-outlined text-red-500">
                speed
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">
              Sitios Lentos
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Pérdida de clientes inmediata por tiempos de carga deficientes.
              Cada milisegundo es una fuga de capital.
            </p>
            <div className="text-[10px] font-mono text-red-500/50 uppercase">
              Status: critical_latency
            </div>
          </div>
          {/* Card 2 */}
          <div className="group bg-surface p-8 rounded-xl border border-border-dim hover:border-primary/50 transition-all">
            <div className="size-12 rounded bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary">
                search_off
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">
              SEO Inexistente
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Regalando tráfico a la competencia por falta de autoridad técnica y
              arquitectura de datos obsoleta.
            </p>
            <div className="text-[10px] font-mono text-primary/50 uppercase">
              Status: visibility_zero
            </div>
          </div>
          {/* Card 3 */}
          <div className="group bg-surface p-8 rounded-xl border border-border-dim hover:border-primary/50 transition-all">
            <div className="size-12 rounded bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
              <span className="material-symbols-outlined text-amber-500">
                leak_add
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">
              Embudo Roto
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Falta de automatización y escalabilidad en la captura de leads.
              Tecnología que no escala con tu ambición.
            </p>
            <div className="text-[10px] font-mono text-amber-500/50 uppercase">
              Status: pipeline_leak
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
