import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full py-8 border-t font-mono text-xs uppercase tracking-widest"
      style={{
        background: "#020c1a",
        borderColor: "#0d1a2d",
        color: "#4b5563",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center px-12 gap-4 max-w-[1400px] mx-auto">
        <div style={{ color: "#374151" }}>
          © {new Date().getFullYear()} NexusDigital. All Systems Operational.
        </div>

        <div className="flex gap-6">
          <a
            href="mailto:hola@nexusdigital.tech"
            className="transition-colors hover:text-slate-300"
            style={{ color: "#4b5563" }}
          >
            hola@nexusdigital.tech
          </a>
          <Link
            href="/legal/privacidad"
            className="transition-colors hover:text-slate-300"
            style={{ color: "#4b5563" }}
          >
            Privacidad
          </Link>
          <Link
            href="/legal/terminos"
            className="transition-colors hover:text-slate-300"
            style={{ color: "#4b5563" }}
          >
            Términos
          </Link>
        </div>

        <div className="flex items-center gap-2 text-emerald-500 opacity-80 hover:opacity-100 transition-opacity">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Status: Active
        </div>
      </div>
    </footer>
  );
}
