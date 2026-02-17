export default function Manifesto() {
  return (
    <section className="py-24 px-6" id="manifiesto">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-xl overflow-hidden border border-border-dim bg-surface shadow-2xl">
          <div className="terminal-header h-10 flex items-center px-4 justify-between">
            <div className="flex gap-1.5">
              <div className="size-3 rounded-full bg-red-500/50"></div>
              <div className="size-3 rounded-full bg-amber-500/50"></div>
              <div className="size-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
              manifesto.exe
            </div>
            <div className="w-12"></div>
          </div>
          <div className="p-10 md:p-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 tracking-tighter italic">
              El Manifiesto de NexusDigital
            </h2>
            <div className="space-y-6 font-mono text-gray-400 text-lg leading-relaxed">
              <p>
                <span className="text-primary font-bold">&gt;</span> No somos
                una agencia.
              </p>
              <p>
                <span className="text-primary font-bold">&gt;</span> Somos{" "}
                <span className="text-white italic">
                  ingenieros de ventas
                </span>
                .
              </p>
              <p>
                <span className="text-primary font-bold">&gt;</span> Desplegamos
                ecosistemas blindados para capturar la demanda de tu mercado.
              </p>
              <p>
                <span className="text-primary font-bold">&gt;</span> Si tu
                código no es una máquina de facturación, lo borramos y empezamos
                de nuevo.
              </p>
              <div className="pt-6">
                <span className="inline-block px-4 py-2 border border-primary text-primary text-sm uppercase tracking-widest animate-pulse">
                  E_O_F REACHED
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
