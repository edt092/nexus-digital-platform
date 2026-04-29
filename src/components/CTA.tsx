export default function CTA() {
  return (
    <section
      className="py-20 px-6 md:px-12"
      style={{ backgroundColor: "#081425" }}
    >
      <div className="max-w-4xl mx-auto text-center glass-card px-10 py-20 rounded-3xl">
        {/* Label */}
        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#b3c5ff] mb-6">
          {"// siguiente_paso"}
        </div>

        {/* Heading */}
        <h2
          className="font-bold text-[#d8e3fb] mb-6 tracking-tight"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: "1.15",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          ¿Listo para crecer con datos,{" "}
          <span className="italic" style={{ color: "#ffb95f" }}>
            no con humo
          </span>
          ?
        </h2>

        {/* Sub-text */}
        <p
          className="text-[#c4c6cd] leading-relaxed mb-12 max-w-2xl mx-auto"
          style={{ fontSize: "18px", lineHeight: "1.6" }}
        >
          Nuestra agenda se llena rápido. Asegura tu lugar para el próximo
          trimestre y transforma tu presencia digital hoy.
        </p>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/593979097543?text=Hola%2C%20somos%20tus%20especialistas%20en%20SEO%20de%20que%20pa%C3%ADs%20nos%20visitas%20y%20como%20podemos%20ayudarte%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-emerald-600 text-white font-semibold text-[15px] px-10 py-4 rounded-full hover:bg-emerald-500 transition-all hover:scale-105 active:scale-95"
        >
          <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.004 2.667c-7.364 0-13.337 5.973-13.337 13.333 0 2.347.613 4.64 1.78 6.667L2.667 29.333l6.84-1.793A13.28 13.28 0 0 0 16.004 29.333c7.36 0 13.333-5.973 13.333-13.333S23.364 2.667 16.004 2.667Zm0 24.4a11.04 11.04 0 0 1-5.627-1.54l-.404-.24-4.186 1.098 1.116-4.08-.263-.42A11.01 11.01 0 0 1 4.933 16c0-6.1 4.967-11.067 11.07-11.067 6.1 0 11.064 4.967 11.064 11.067 0 6.103-4.964 11.067-11.063 11.067Zm6.07-8.287c-.334-.167-1.97-.973-2.276-1.083-.306-.114-.529-.167-.752.167-.222.333-.862 1.083-1.057 1.306-.195.222-.39.25-.723.083-.334-.167-1.41-.52-2.685-1.656-.992-.884-1.662-1.977-1.857-2.31-.195-.334-.02-.514.147-.68.15-.15.334-.39.5-.584.167-.195.223-.334.334-.556.112-.222.056-.417-.028-.584-.083-.167-.751-1.812-1.03-2.48-.27-.65-.546-.562-.751-.573l-.64-.01c-.222 0-.584.083-.89.417-.306.333-1.168 1.14-1.168 2.78 0 1.64 1.196 3.226 1.362 3.448.167.222 2.353 3.593 5.703 5.04.797.344 1.418.55 1.903.703.799.254 1.527.218 2.102.132.641-.096 1.971-.806 2.249-1.584.278-.778.278-1.445.195-1.584-.084-.14-.306-.222-.64-.39Z" />
          </svg>
          Hablemos por WhatsApp
        </a>

        {/* Trust badge */}
        <div className="mt-10 flex items-center justify-center gap-2 font-mono text-[11px] text-[#8e9197] uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
          </span>
          Datos verificados con Google Search Console · Sin compromisos
        </div>
      </div>
    </section>
  );
}
