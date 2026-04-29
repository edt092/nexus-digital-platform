export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-16">
      {/* Background ambient blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-15"
        style={{
          background: "radial-gradient(circle, #0266ff 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "float-blob 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(circle, #ffb95f 0%, transparent 70%)",
          filter: "blur(100px)",
          animation: "float-blob 16s ease-in-out infinite reverse",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        {/* Headline */}
        <h1
          className="font-bold text-[#d8e3fb] tracking-tight"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 4.5rem)",
            lineHeight: 1.1,
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Convertimos tu web en un{" "}
          <span className="italic" style={{ color: "#ffb95f" }}>
            motor de crecimiento
          </span>
          .
        </h1>

        {/* Sub-headline */}
        <p
          className="text-[#c4c6cd] leading-relaxed max-w-2xl mx-auto"
          style={{ fontSize: "18px", lineHeight: "1.6" }}
        >
          Consultoría de ingeniería digital de alto rendimiento. Optimizamos
          infraestructuras, SEO y automatización para empresas que no se
          conforman con lo estándar.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <a
            href="https://wa.me/593979097543?text=Hola%2C%20somos%20tus%20especialistas%20en%20SEO%20de%20que%20pa%C3%ADs%20nos%20visitas%20y%20como%20podemos%20ayudarte%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 text-slate-950 font-semibold text-[14px] tracking-wide px-10 py-4 rounded hover:bg-amber-400 transition-all glow-amber"
          >
            Solicitar Auditoría Gratuita
          </a>
          <a
            href="#metricas"
            className="border font-semibold text-[14px] tracking-wide px-10 py-4 rounded transition-all hover:bg-[#0266ff] hover:text-white"
            style={{
              borderColor: "#0266ff",
              color: "#b3c5ff",
            }}
          >
            Ver Resultados
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #081425, transparent)",
        }}
      />
    </section>
  );
}
