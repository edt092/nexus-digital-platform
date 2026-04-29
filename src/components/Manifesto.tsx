export default function Manifesto() {
  return (
    <section
      id="manifiesto"
      className="py-20 px-6 md:px-12 font-mono overflow-hidden"
      style={{ backgroundColor: "#040e1f" }}
    >
      <div
        className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {/* Window chrome */}
        <div
          className="flex items-center gap-2 px-4 py-3 border-b"
          style={{
            background: "#2a3548",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          <span
            className="text-[11px] text-[#8e9197] ml-3 uppercase tracking-widest"
          >
            manifesto.sh
          </span>
        </div>

        {/* Terminal body */}
        <div
          className="p-8 md:p-12 space-y-8"
          style={{ background: "#081425" }}
        >
          <p>
            <span className="text-[#44474c]">$ </span>
            <span className="text-emerald-400">cat manifesto.txt</span>
          </p>

          <div className="space-y-4 text-[14px] leading-relaxed text-[#d8e3fb]">
            <p>
              <span className="text-amber-400 font-bold">01.</span> No vendemos humo,
              entregamos{" "}
              <span style={{ color: "#b3c5ff" }}>código</span>.
            </p>
            <p>
              <span className="text-amber-400 font-bold">02.</span> La estética sin{" "}
              <span style={{ color: "#b3c5ff" }}>rendimiento</span> es fracaso.
            </p>
            <p>
              <span className="text-amber-400 font-bold">03.</span> El SEO no es suerte,
              es{" "}
              <span style={{ color: "#b3c5ff" }}>ingeniería de datos</span>.
            </p>
            <p>
              <span className="text-amber-400 font-bold">04.</span> La simplicidad es la
              máxima{" "}
              <span style={{ color: "#b3c5ff" }}>sofisticación</span> tecnológica.
            </p>
          </div>

          <p className="text-[#8e9197] italic text-[13px]">
            {"// Todo sistema que no crece, está muriendo."}
          </p>

          {/* Blinking cursor */}
          <div className="flex items-center gap-2">
            <span className="text-[#44474c]">$</span>
            <span
              className="inline-block w-2 h-5 bg-amber-400"
              style={{ animation: "blink-cursor 1.1s step-end infinite" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
