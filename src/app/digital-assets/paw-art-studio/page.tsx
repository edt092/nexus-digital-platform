import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PawArtStudio — Negocio de IA para Mascotas | NexusDigital Digital Assets",
  description:
    "Adquiere PawArtStudio: plataforma SaaS lista para lanzar que vende camisetas personalizadas con arte de mascotas generado por Google Gemini. Integrado con Wompi (CO) y PayPhone (EC). Lanza en 24h.",
};

const features = [
  {
    icon: "smart_toy",
    title: "Arte Real con Google Gemini",
    desc: "Retratos automáticos que capturan la esencia de la mascota en estilos artísticos únicos.",
  },
  {
    icon: "view_in_ar",
    title: "Mockups 3D Interactivos",
    desc: "Visualización en tiempo real de la camiseta en un entorno 3D antes de comprar.",
  },
  {
    icon: "account_balance_wallet",
    title: "Pagos Locales",
    desc: "Integración nativa con Wompi (Colombia) y PayPhone (Ecuador) lista para usar.",
  },
  {
    icon: "notifications_active",
    title: "Notificaciones Telegram",
    desc: "Recibe alertas instantáneas de nuevas ventas y diseños directamente en tu celular.",
  },
];

const deliverables = [
  {
    icon: "terminal",
    title: "Código Fuente Completo",
    desc: "Next.js 15, Tailwind CSS, Prisma ORM. Código limpio y modular.",
  },
  {
    icon: "description",
    title: "Documentación Técnica",
    desc: "Manual paso a paso para configurar APIs de Gemini y Pagos.",
  },
  {
    icon: "cloud_sync",
    title: "Guía de Despliegue",
    desc: "Publica en Netlify o Vercel en menos de 10 minutos.",
  },
  {
    icon: "support_agent",
    title: "Soporte de Lanzamiento",
    desc: "Canal directo para dudas técnicas de instalación.",
  },
];

export default function PawArtStudioPage() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ backgroundColor: "#050608", color: "#f8fafc", fontFamily: "Inter, sans-serif" }}
    >
      {/* ── Top breadcrumb banner ─────────────────────────────────────── */}
      <div
        className="border-b"
        style={{ background: "#111418", borderColor: "#232931" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 transition-colors"
            style={{ fontFamily: "monospace", fontSize: "10px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.1em" }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>terminal</span>
            NexusDigital
          </Link>
          <span style={{ color: "#232931", fontSize: "12px" }}>/</span>
          <Link
            href="/digital-assets"
            style={{ fontFamily: "monospace", fontSize: "10px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.1em" }}
          >
            Digital Assets
          </Link>
          <span style={{ color: "#232931", fontSize: "12px" }}>/</span>
          <span style={{ fontFamily: "monospace", fontSize: "10px", color: "#0072f5", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            PawArtStudio
          </span>
          <div className="ml-auto flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: "#22c55e" }}
              ></span>
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: "#22c55e" }}
              ></span>
            </span>
            <span
              style={{ fontFamily: "monospace", fontSize: "10px", color: "#22c55e", textTransform: "uppercase", letterSpacing: "0.1em" }}
            >
              LISTING ACTIVO
            </span>
          </div>
        </div>
      </div>

      {/* ── Sticky PawArtStudio Header ────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "rgba(5, 6, 8, 0.85)",
          backdropFilter: "blur(12px)",
          borderColor: "#232931",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div
                className="flex items-center justify-center rounded-lg"
                style={{ width: "36px", height: "36px", background: "rgba(0,114,245,0.1)", border: "1px solid rgba(0,114,245,0.3)" }}
              >
                <span className="material-symbols-outlined" style={{ color: "#0072f5", fontSize: "20px" }}>pets</span>
              </div>
              <span className="font-black tracking-tight" style={{ fontSize: "18px" }}>
                PawArt<span style={{ color: "#0072f5" }}>Studio</span>
              </span>
            </div>

            {/* Nav links */}
            <nav
              className="hidden md:flex items-center gap-8"
              style={{ fontFamily: "monospace", fontSize: "11px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.1em" }}
            >
              {["#oportunidad", "#funciones", "#incluye", "#precios"].map((href) => (
                <a
                  key={href}
                  href={href}
                  className="transition-colors hover:text-white"
                  style={{ color: "#6b7280" }}
                >
                  {href.slice(1)}
                </a>
              ))}
            </nav>

            <a
              href="#precios"
              className="font-black text-white text-sm px-5 py-2 rounded transition-all"
              style={{ background: "#0072f5" }}
            >
              Comprar Ahora
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Grid BG */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,114,245,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,114,245,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="space-y-8">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{
                  border: "1px solid rgba(0,114,245,0.3)",
                  background: "rgba(0,114,245,0.06)",
                  color: "#0072f5",
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ backgroundColor: "#0072f5" }}
                  ></span>
                  <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ backgroundColor: "#0072f5" }}
                  ></span>
                </span>
                Listado en NexusDigital · Digital Assets
              </div>

              <h1
                className="font-black leading-tight tracking-tighter"
                style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", lineHeight: 1.05 }}
              >
                Lanza tu negocio<br /> de IA en{" "}
                <span
                  style={{
                    backgroundImage: "linear-gradient(135deg, #0072f5, #60a5fa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  24h
                </span>
              </h1>

              <p className="text-lg leading-relaxed" style={{ color: "#9ca3af", maxWidth: "480px" }}>
                Vende camisetas personalizadas con arte generado por{" "}
                <strong style={{ color: "#fff" }}>Google Gemini</strong>. Integrado con{" "}
                <strong style={{ color: "#fff" }}>Wompi (CO)</strong> y{" "}
                <strong style={{ color: "#fff" }}>PayPhone (EC)</strong>. Automatización total desde el pedido hasta la producción.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#precios"
                  className="flex items-center justify-center gap-2 font-black text-white px-8 py-4 rounded transition-all"
                  style={{ background: "#0072f5", fontSize: "17px", boxShadow: "0 8px 32px rgba(0,114,245,0.25)" }}
                >
                  Comprar Negocio por $300
                  <span className="material-symbols-outlined">rocket_launch</span>
                </a>
                <button
                  className="flex items-center justify-center gap-2 font-bold px-8 py-4 rounded transition-all"
                  style={{
                    background: "#111418",
                    border: "1px solid #232931",
                    color: "#d1d5db",
                    fontSize: "17px",
                  }}
                >
                  Ver Demo en Vivo
                  <span className="material-symbols-outlined" style={{ color: "#0072f5" }}>play_circle</span>
                </button>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4" style={{ fontSize: "13px", color: "#6b7280" }}>
                <div className="flex -space-x-2">
                  {(["JD", "AM", "RL"] as const).map((initials, i) => (
                    <div
                      key={initials}
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: "32px",
                        height: "32px",
                        border: "2px solid #050608",
                        background: i === 1 ? "#0072f5" : i === 0 ? "#1f2937" : "#374151",
                        fontSize: "10px",
                        fontWeight: 800,
                        color: "#fff",
                      }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <span>+40 emprendedores ya operando en la región</span>
              </div>
            </div>

            {/* Right: Visual mockup */}
            <div className="relative">
              <div
                className="absolute -inset-8 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(0,114,245,0.12) 0%, transparent 70%)" }}
              />
              <div
                className="relative rounded-xl overflow-hidden shadow-2xl"
                style={{ background: "#111418", border: "1px solid #232931" }}
              >
                {/* Browser chrome */}
                <div
                  className="px-4 py-3 flex items-center gap-2 border-b"
                  style={{ background: "#0d1117", borderColor: "#232931" }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ background: "rgba(239,68,68,0.5)" }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: "rgba(234,179,8,0.5)" }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: "rgba(34,197,94,0.5)" }} />
                  </div>
                  <span
                    className="ml-2"
                    style={{ fontFamily: "monospace", fontSize: "11px", color: "#4b5563" }}
                  >
                    pawartstudio.com/studio
                  </span>
                </div>

                {/* AI Demo visual */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    aspectRatio: "16/9",
                    background: "linear-gradient(135deg, #0d1117 0%, #0a1628 50%, #050608 100%)",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div
                        className="rounded-full flex items-center justify-center"
                        style={{
                          width: "128px",
                          height: "128px",
                          background: "radial-gradient(circle, rgba(0,114,245,0.2) 0%, transparent 70%)",
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ color: "rgba(0,114,245,0.5)", fontSize: "72px" }}>
                          pets
                        </span>
                      </div>
                      <div
                        className="absolute rounded-full animate-spin"
                        style={{
                          inset: "-16px",
                          border: "1px solid rgba(0,114,245,0.15)",
                          animationDuration: "8s",
                        }}
                      />
                      <div
                        className="absolute rounded-full animate-spin"
                        style={{
                          inset: "-32px",
                          border: "1px solid rgba(0,114,245,0.07)",
                          animationDuration: "12s",
                          animationDirection: "reverse",
                        }}
                      />
                    </div>
                  </div>
                  {/* Scanline overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,114,245,0.02) 2px, rgba(0,114,245,0.02) 4px)",
                    }}
                  />
                </div>

                {/* Processing bar */}
                <div className="p-4" style={{ background: "rgba(17,20,24,0.8)" }}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined" style={{ color: "#0072f5", fontSize: "16px" }}>
                        auto_awesome
                      </span>
                      <span style={{ fontFamily: "monospace", fontSize: "11px", color: "#d1d5db" }}>
                        Gemini 1.5 Pro Rendering...
                      </span>
                    </div>
                    <span style={{ fontFamily: "monospace", fontSize: "10px", color: "#4b5563", textTransform: "uppercase" }}>
                      PROCESADO EN 4.2s
                    </span>
                  </div>
                  <div
                    className="w-full rounded-full overflow-hidden"
                    style={{ height: "6px", background: "#232931" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: "92%",
                        background: "linear-gradient(90deg, #0072f5, #60a5fa)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Metrics Bar ──────────────────────────────────────────────── */}
      <section
        className="py-12 border-y"
        id="oportunidad"
        style={{ background: "rgba(17,20,24,0.4)", borderColor: "#232931" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "trending_up", iconColor: "#22c55e", bg: "rgba(34,197,94,0.08)", label: "Crecimiento Mascotas 2026", value: "+45% YoY" },
              { icon: "currency_exchange", iconColor: "#0072f5", bg: "rgba(0,114,245,0.08)", label: "Margen de Ganancia Neto", value: "60% – 75%" },
              { icon: "stars", iconColor: "#a855f7", bg: "rgba(168,85,247,0.08)", label: "Tendencia IA Latam", value: "#1 Oportunidad" },
            ].map((m) => (
              <div
                key={m.label}
                className="flex items-center gap-4 p-6 rounded-xl"
                style={{ background: "#111418", border: "1px solid #232931" }}
              >
                <div
                  className="flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{ width: "48px", height: "48px", background: m.bg }}
                >
                  <span className="material-symbols-outlined" style={{ color: m.iconColor }}>
                    {m.icon}
                  </span>
                </div>
                <div>
                  <p
                    style={{ fontFamily: "monospace", fontSize: "10px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}
                  >
                    {m.label}
                  </p>
                  <p className="font-black" style={{ fontSize: "24px", color: "#fff" }}>
                    {m.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-black mb-3" style={{ fontSize: "30px" }}>
              El mercado de personalización está explotando
            </h2>
            <p style={{ color: "#9ca3af", lineHeight: "1.7" }}>
              En Colombia y Ecuador, los dueños de mascotas gastan un 30% más en productos personalizados. Con PawArtStudio, escalas sin necesidad de diseñadores manuales.
            </p>
          </div>
        </div>
      </section>

      {/* ── Features Grid ────────────────────────────────────────────── */}
      <section className="py-24" id="funciones">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              style={{ fontFamily: "monospace", fontSize: "11px", color: "#0072f5", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "12px" }}
            >
              {"// TECNOLOGÍA"}
            </div>
            <h2 className="font-black mb-4" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>
              Stack de Clase Mundial
            </h2>
            <p style={{ color: "#6b7280" }}>
              Un ecosistema diseñado para la conversión y la eficiencia operativa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-8 rounded-xl transition-all duration-300 hover:bg-primary/5 cursor-default"
                style={{ background: "#111418", border: "1px solid #232931" }}
              >
                <div
                  className="flex items-center justify-center rounded-lg mb-6 group-hover:bg-primary/20 transition-colors"
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(0,114,245,0.1)",
                    border: "1px solid rgba(0,114,245,0.2)",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ color: "#0072f5", fontSize: "24px" }}>
                    {f.icon}
                  </span>
                </div>
                <h3 className="font-black mb-3" style={{ fontSize: "17px", color: "#fff" }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.6" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Automated Workflow ───────────────────────────────────────── */}
      <section
        className="py-24 overflow-hidden border-y"
        style={{ background: "rgba(17,20,24,0.3)", borderColor: "#232931" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual flow */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Column 1 */}
                <div className="space-y-4 pt-12">
                  {/* Step 1: Client photo */}
                  <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #232931" }}>
                    <div
                      className="w-full flex items-center justify-center"
                      style={{
                        height: "192px",
                        background: "linear-gradient(135deg, #1a1f2e 0%, #111827 100%)",
                      }}
                    >
                      <div className="text-center">
                        <span className="material-symbols-outlined" style={{ fontSize: "48px", color: "#374151" }}>
                          photo_camera
                        </span>
                        <div
                          style={{ marginTop: "8px", fontFamily: "monospace", fontSize: "10px", color: "#4b5563" }}
                        >
                          client_photo.jpg
                        </div>
                      </div>
                    </div>
                    <div
                      className="p-3 text-center font-black uppercase tracking-widest"
                      style={{ background: "#0d1117", fontSize: "11px", color: "#6b7280" }}
                    >
                      1. Foto del Cliente
                    </div>
                  </div>

                  {/* Step 2: AI Art */}
                  <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(0,114,245,0.3)" }}>
                    <div
                      className="w-full flex items-center justify-center relative"
                      style={{
                        height: "256px",
                        background: "linear-gradient(135deg, #0a1628 0%, #0d2040 50%, #050a15 100%)",
                      }}
                    >
                      <div className="relative">
                        <div
                          className="rounded-full flex items-center justify-center"
                          style={{
                            width: "96px",
                            height: "96px",
                            background: "radial-gradient(circle, rgba(0,114,245,0.3) 0%, transparent 70%)",
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: "52px", color: "#0072f5" }}>
                            auto_awesome
                          </span>
                        </div>
                        <div
                          className="absolute rounded-full animate-spin"
                          style={{ inset: "-12px", border: "1px solid rgba(0,114,245,0.2)", animationDuration: "6s" }}
                        />
                      </div>
                    </div>
                    <div
                      className="p-3 text-center font-black uppercase tracking-widest text-white"
                      style={{ background: "#0072f5", fontSize: "11px" }}
                    >
                      2. Arte Generado por IA
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                  {/* Step 3: 3D Mockup */}
                  <div
                    className="rounded-xl overflow-hidden relative z-10"
                    style={{
                      border: "1px solid #232931",
                      transform: "scale(1.05)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                    }}
                  >
                    <div
                      className="w-full flex items-center justify-center"
                      style={{
                        height: "320px",
                        background: "linear-gradient(135deg, #1a1f2e 0%, #0f1520 100%)",
                      }}
                    >
                      <div className="text-center">
                        <div className="relative inline-block">
                          <span className="material-symbols-outlined" style={{ fontSize: "96px", color: "#374151" }}>
                            checkroom
                          </span>
                          <span
                            className="material-symbols-outlined absolute"
                            style={{
                              fontSize: "40px",
                              color: "rgba(0,114,245,0.6)",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%) translateY(-4px)",
                            }}
                          >
                            pets
                          </span>
                        </div>
                        <div
                          style={{ marginTop: "8px", fontFamily: "monospace", fontSize: "10px", color: "#4b5563" }}
                        >
                          3D PREVIEW ACTIVE
                        </div>
                      </div>
                    </div>
                    <div
                      className="px-4 py-3 flex justify-between items-center border-t"
                      style={{ background: "rgba(17,20,24,0.9)", borderColor: "#232931" }}
                    >
                      <span
                        style={{ fontFamily: "monospace", fontSize: "10px", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em" }}
                      >
                        3. Preview 3D
                      </span>
                      <span className="material-symbols-outlined" style={{ color: "#0072f5", fontSize: "16px" }}>
                        3d_rotation
                      </span>
                    </div>
                  </div>

                  {/* Step 4: Order ready */}
                  <div
                    className="rounded-xl p-6 text-center"
                    style={{
                      border: "1px solid rgba(34,197,94,0.25)",
                      background: "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(5,150,105,0.08) 100%)",
                    }}
                  >
                    <span
                      className="material-symbols-outlined block mb-2"
                      style={{ fontSize: "40px", color: "#22c55e" }}
                    >
                      shopping_cart_checkout
                    </span>
                    <p className="font-black" style={{ color: "#22c55e" }}>
                      ORDEN LISTA
                    </p>
                    <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>
                      Enviado a producción automáticamente
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <div
                style={{ fontFamily: "monospace", fontSize: "11px", color: "#0072f5", textTransform: "uppercase", letterSpacing: "0.15em" }}
              >
                {"// AUTOMATIZACIÓN"}
              </div>
              <h2
                className="font-black leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 2.6rem)" }}
              >
                Flujo de Trabajo<br />Completamente Automatizado
              </h2>
              <p style={{ fontSize: "17px", color: "#9ca3af", lineHeight: "1.7" }}>
                No necesitas saber de diseño. El cliente sube una foto, nuestra integración con Gemini crea el arte, el cliente previsualiza su camiseta en 3D y paga en moneda local. Tú solo recibes la notificación y coordinas el envío.
              </p>
              <ul className="space-y-4">
                {[
                  "Cero intervención manual en el diseño",
                  "Liquidación directa en Pesos (CO) o Dólares (EC)",
                  "Escalabilidad infinita sin equipo técnico",
                  "Stack moderno: Next.js 15 + Prisma + Gemini API",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div
                      className="flex items-center justify-center rounded flex-shrink-0"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginTop: "2px",
                        background: "rgba(0,114,245,0.1)",
                        border: "1px solid rgba(0,114,245,0.3)",
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ color: "#0072f5", fontSize: "12px" }}>
                        check
                      </span>
                    </div>
                    <span style={{ color: "#d1d5db" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's Included ──────────────────────────────────────────── */}
      <section className="py-24" id="incluye">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-12 relative overflow-hidden"
            style={{ background: "#111418", border: "1px solid #232931" }}
          >
            {/* Decorative BG icon */}
            <div
              className="absolute top-0 right-0 p-8 pointer-events-none"
              style={{ opacity: 0.04 }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "200px" }}>
                code_blocks
              </span>
            </div>

            {/* Live badge */}
            <div className="absolute top-6 right-6">
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ backgroundColor: "#22c55e" }}
                  ></span>
                  <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ backgroundColor: "#22c55e" }}
                  ></span>
                </span>
                <span
                  style={{ fontFamily: "monospace", fontSize: "10px", color: "#22c55e", textTransform: "uppercase", letterSpacing: "0.08em" }}
                >
                  Entrega Inmediata
                </span>
              </div>
            </div>

            <div className="relative z-10 max-w-3xl">
              <div
                style={{ fontFamily: "monospace", fontSize: "11px", color: "#0072f5", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "12px" }}
              >
                {"// DELIVERABLES"}
              </div>
              <h2 className="font-black mb-10" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)", color: "#fff" }}>
                ¿Qué estás comprando exactamente?
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {deliverables.map((d) => (
                  <div key={d.title} className="flex gap-4">
                    <div
                      className="flex items-center justify-center rounded-lg flex-shrink-0"
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "rgba(0,114,245,0.1)",
                        border: "1px solid rgba(0,114,245,0.2)",
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ color: "#0072f5" }}>
                        {d.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-black mb-1" style={{ color: "#fff" }}>{d.title}</h4>
                      <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.6" }}>{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────── */}
      <section
        className="py-24 border-t"
        id="precios"
        style={{ background: "rgba(17,20,24,0.25)", borderColor: "#232931" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              style={{ fontFamily: "monospace", fontSize: "11px", color: "#0072f5", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "12px" }}
            >
              {"// INVERSIÓN"}
            </div>
            <h2 className="font-black mb-4" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>
              Elige tu Nivel de Lanzamiento
            </h2>
            <p style={{ color: "#6b7280" }}>
              Inversión única. Sin cargos mensuales. Propiedad total del código.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plan 1: DIY */}
            <div
              className="p-8 rounded-2xl flex flex-col"
              style={{ background: "#111418", border: "1px solid #232931" }}
            >
              <div className="mb-8">
                <div
                  style={{ fontFamily: "monospace", fontSize: "10px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}
                >
                  PLAN_01
                </div>
                <h3 className="font-black mb-2" style={{ fontSize: "20px" }}>
                  Build-It-Yourself
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-black" style={{ fontSize: "48px" }}>$300</span>
                  <span style={{ color: "#6b7280", fontSize: "14px" }}>USD / único</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  { ok: true, text: "Código Fuente (Next.js 15)" },
                  { ok: true, text: "Integración Gemini & Wompi/PayPhone" },
                  { ok: true, text: "Documentación de Setup" },
                  { ok: false, text: "Instalación por nosotros" },
                ].map((item) => (
                  <li
                    key={item.text}
                    className="flex items-center gap-2"
                    style={{ fontSize: "14px", color: item.ok ? "#d1d5db" : "#4b5563" }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "16px", color: item.ok ? "#22c55e" : "#374151" }}
                    >
                      {item.ok ? "check" : "close"}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-4 rounded-lg font-black text-white transition-all"
                style={{ background: "#232931", border: "1px solid #374151", fontSize: "15px" }}
              >
                Comprar Código
              </button>
            </div>

            {/* Plan 2: Full Concierge */}
            <div
              className="p-8 rounded-2xl flex flex-col relative"
              style={{
                border: "2px solid #0072f5",
                background: "linear-gradient(135deg, rgba(0,114,245,0.07) 0%, #111418 60%)",
                boxShadow: "0 0 40px rgba(0,114,245,0.15)",
              }}
            >
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 text-white font-black uppercase rounded-full px-4 py-1"
                style={{ background: "#0072f5", fontSize: "10px", letterSpacing: "0.12em" }}
              >
                MÁS POPULAR
              </div>

              <div className="mb-8">
                <div
                  style={{ fontFamily: "monospace", fontSize: "10px", color: "#0072f5", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}
                >
                  PLAN_02
                </div>
                <h3 className="font-black mb-2" style={{ fontSize: "20px" }}>
                  Full Concierge
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-black" style={{ fontSize: "48px", color: "#fff" }}>$450</span>
                  <span style={{ color: "#6b7280", fontSize: "14px" }}>USD / único</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Todo lo del plan DIY",
                  "Setup Completo & Deployment",
                  "Conexión de Dominio y APIs",
                  "1 Mes de Soporte Técnico VIP",
                ].map((text) => (
                  <li key={text} className="flex items-center gap-2" style={{ fontSize: "14px", color: "#d1d5db" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "16px", color: "#0072f5" }}>
                      check
                    </span>
                    {text}
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-4 rounded-lg font-black text-white transition-all"
                style={{
                  background: "#0072f5",
                  fontSize: "15px",
                  boxShadow: "0 8px 24px rgba(0,114,245,0.3)",
                }}
              >
                Empezar Ahora
              </button>
            </div>
          </div>

          {/* Trust signals */}
          <div
            className="mt-12 flex flex-wrap justify-center gap-8"
            style={{ fontFamily: "monospace", fontSize: "11px", color: "#4b5563", textTransform: "uppercase", letterSpacing: "0.1em" }}
          >
            {[
              { icon: "verified_user", color: "#22c55e", text: "Licencia Comercial Incluida" },
              { icon: "code", color: "#0072f5", text: "Código en GitHub Privado" },
              { icon: "headset_mic", color: "#a855f7", text: "Soporte vía Telegram" },
            ].map((t) => (
              <div key={t.text} className="flex items-center gap-2">
                <span className="material-symbols-outlined" style={{ fontSize: "16px", color: t.color }}>
                  {t.icon}
                </span>
                {t.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer
        className="py-12 border-t"
        style={{ background: "rgba(17,20,24,0.5)", borderColor: "#232931" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="flex items-center justify-center rounded-lg"
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "rgba(0,114,245,0.1)",
                    border: "1px solid rgba(0,114,245,0.3)",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ color: "#0072f5", fontSize: "18px" }}>
                    pets
                  </span>
                </div>
                <span className="font-black" style={{ fontSize: "17px" }}>PawArtStudio</span>
              </div>
              <p style={{ fontSize: "14px", color: "#6b7280", maxWidth: "320px", lineHeight: "1.7", marginBottom: "16px" }}>
                La solución definitiva para emprendedores digitales que buscan capitalizar la ola de la IA generativa en el mercado de mascotas.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 transition-colors"
                style={{ fontFamily: "monospace", fontSize: "11px", color: "#4b5563", textTransform: "uppercase", letterSpacing: "0.08em" }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>arrow_back</span>
                Volver a NexusDigital
              </Link>
            </div>

            <div>
              <h4
                className="font-black mb-4"
                style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em" }}
              >
                Legal
              </h4>
              <ul className="space-y-3" style={{ fontSize: "14px", color: "#6b7280" }}>
                <li><a className="transition-colors hover:text-white" href="#">Términos de Licencia</a></li>
                <li><a className="transition-colors hover:text-white" href="#">Política de Reembolso</a></li>
                <li><a className="transition-colors hover:text-white" href="#">Uso de API</a></li>
              </ul>
            </div>

            <div>
              <h4
                className="font-black mb-4"
                style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em" }}
              >
                Contacto
              </h4>
              <ul className="space-y-3" style={{ fontSize: "14px", color: "#6b7280" }}>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>mail</span>
                  soporte@pawartstudio.com
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>chat</span>
                  Telegram: @PawArtBiz
                </li>
              </ul>
            </div>
          </div>

          <div
            className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
            style={{
              borderColor: "#232931",
              fontFamily: "monospace",
              fontSize: "10px",
              color: "#4b5563",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            <p>© 2026 PawArtStudio · Listado por NexusDigital</p>
            <span>Hecho para Colombia 🇨🇴 y Ecuador 🇪🇨</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
