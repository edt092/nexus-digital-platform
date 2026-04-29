import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | NexusDigital",
  description:
    "Política de privacidad y tratamiento de datos personales de NexusDigital, conforme a la Ley Orgánica de Protección de Datos Personales de Ecuador (LOPDP) y la Ley 1581 de 2012 de Colombia.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/legal/privacidad",
  },
};

const UPDATED = "29 de abril de 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2
        className="font-bold mb-4"
        style={{ fontSize: "20px", color: "#d8e3fb", letterSpacing: "-0.01em" }}
      >
        {title}
      </h2>
      <div
        className="space-y-3 leading-relaxed"
        style={{ fontSize: "15px", color: "#c4c6cd" }}
      >
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: "#081425", minHeight: "100vh" }}>
      {/* Top bar */}
      <div
        className="border-b px-6 md:px-12 py-4 flex items-center gap-3"
        style={{ background: "#040e1f", borderColor: "rgba(255,255,255,0.06)" }}
      >
        <Link
          href="/"
          className="font-mono text-[11px] uppercase tracking-widest transition-colors hover:text-amber-400"
          style={{ color: "#6b7280" }}
        >
          ← NexusDigital
        </Link>
        <span style={{ color: "#374151" }}>/</span>
        <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: "#b3c5ff" }}>
          Política de Privacidad
        </span>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] mb-3" style={{ color: "#b3c5ff" }}>
            {"// legal.privacidad"}
          </div>
          <h1
            className="font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#d8e3fb", lineHeight: 1.15, letterSpacing: "-0.02em" }}
          >
            Política de Privacidad y Tratamiento de Datos Personales
          </h1>
          <p className="font-mono text-[12px] uppercase tracking-widest" style={{ color: "#6b7280" }}>
            Última actualización: {UPDATED}
          </p>
        </div>

        {/* Intro */}
        <div
          className="glass-card rounded-lg p-6 mb-10"
          style={{ borderLeft: "3px solid #ffb95f" }}
        >
          <p style={{ fontSize: "15px", color: "#c4c6cd", lineHeight: "1.7" }}>
            NexusDigital (en adelante, <strong style={{ color: "#d8e3fb" }}>"el Responsable"</strong>) opera
            en Ecuador y Colombia y está comprometido con la protección de los datos personales de sus
            usuarios, conforme a la{" "}
            <strong style={{ color: "#d8e3fb" }}>
              Ley Orgánica de Protección de Datos Personales de Ecuador (LOPDP, vigente desde mayo de 2023)
            </strong>{" "}
            y la{" "}
            <strong style={{ color: "#d8e3fb" }}>
              Ley Estatutaria 1581 de 2012 de Colombia
            </strong>{" "}
            y su Decreto Reglamentario 1377 de 2013.
          </p>
        </div>

        <Section title="1. Identidad del Responsable del Tratamiento">
          <p>
            <strong style={{ color: "#d8e3fb" }}>Nombre comercial:</strong> NexusDigital
          </p>
          <p>
            <strong style={{ color: "#d8e3fb" }}>Actividad:</strong> Agencia de ingeniería digital — desarrollo web, SEO técnico y automatización.
          </p>
          <p>
            <strong style={{ color: "#d8e3fb" }}>Países de operación:</strong> Ecuador y Colombia.
          </p>
          <p>
            <strong style={{ color: "#d8e3fb" }}>Correo de contacto:</strong>{" "}
            <a href="mailto:privacidad@nexusdigital.tech" style={{ color: "#b3c5ff" }}>
              privacidad@nexusdigital.tech
            </a>
          </p>
          <p>
            <strong style={{ color: "#d8e3fb" }}>WhatsApp:</strong>{" "}
            <a href="https://wa.me/593979097543" target="_blank" rel="noopener noreferrer" style={{ color: "#b3c5ff" }}>
              +593 97 909 7543
            </a>
          </p>
        </Section>

        <Section title="2. Datos Personales que Recopilamos">
          <p>Recopilamos exclusivamente los datos necesarios para prestar nuestros servicios:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong style={{ color: "#d8e3fb" }}>Datos de contacto:</strong> nombre, número de teléfono/WhatsApp, correo electrónico, cuando el usuario inicia una conversación voluntariamente.</li>
            <li><strong style={{ color: "#d8e3fb" }}>Datos del negocio:</strong> nombre de la empresa, URL del sitio web, país, sector, cuando se solicita una auditoría o consultoría.</li>
            <li><strong style={{ color: "#d8e3fb" }}>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas y tiempo de sesión (vía cookies de análisis, sujeto a consentimiento).</li>
          </ul>
          <p className="mt-3">
            <strong style={{ color: "#d8e3fb" }}>No recopilamos</strong> datos sensibles (origen racial, salud, filiación política, creencias religiosas) ni datos de menores de 18 años.
          </p>
        </Section>

        <Section title="3. Finalidades y Base Legal del Tratamiento">
          <div className="space-y-4">
            {[
              {
                fin: "Prestación del servicio contratado",
                base: "Ejecución de contrato (Art. 17 LOPDP / Art. 6 Ley 1581)",
                detalle: "Gestionar solicitudes de auditoría, consultoría y desarrollo web.",
              },
              {
                fin: "Comunicación comercial",
                base: "Consentimiento previo del titular",
                detalle: "Envío de propuestas, presupuestos e información sobre servicios relevantes.",
              },
              {
                fin: "Análisis de uso del sitio web",
                base: "Interés legítimo / Consentimiento (cookies analíticas)",
                detalle: "Mejorar el rendimiento y la experiencia del sitio.",
              },
              {
                fin: "Cumplimiento de obligaciones legales",
                base: "Obligación legal",
                detalle: "Responder ante autoridades competentes cuando la ley lo exija.",
              },
            ].map((r) => (
              <div key={r.fin} className="rounded-lg p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="font-semibold mb-1" style={{ color: "#d8e3fb" }}>{r.fin}</p>
                <p className="font-mono text-[11px] uppercase tracking-wider mb-2" style={{ color: "#ffb95f" }}>{r.base}</p>
                <p>{r.detalle}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="4. Derechos del Titular de los Datos">
          <p>
            Dependiendo del país desde el que nos contacte, le asisten los siguientes derechos, ejercibles de forma gratuita:
          </p>

          <div className="mt-4 rounded-lg overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <table className="w-full text-[13px]">
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                  <th className="text-left p-3 font-mono uppercase tracking-wider text-[11px]" style={{ color: "#b3c5ff" }}>Derecho</th>
                  <th className="text-center p-3 font-mono uppercase tracking-wider text-[11px]" style={{ color: "#b3c5ff" }}>Ecuador (LOPDP)</th>
                  <th className="text-center p-3 font-mono uppercase tracking-wider text-[11px]" style={{ color: "#b3c5ff" }}>Colombia (Ley 1581)</th>
                </tr>
              </thead>
              <tbody style={{ color: "#c4c6cd" }}>
                {[
                  ["Acceso / Conocer", "✓", "✓"],
                  ["Rectificación / Actualización", "✓", "✓"],
                  ["Cancelación / Supresión", "✓", "✓"],
                  ["Oposición", "✓", "✓"],
                  ["Portabilidad", "✓", "—"],
                  ["Limitación del tratamiento", "✓", "✓"],
                  ["Revocar consentimiento", "✓", "✓"],
                ].map(([d, ec, co]) => (
                  <tr key={d} style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <td className="p-3">{d}</td>
                    <td className="p-3 text-center" style={{ color: ec === "✓" ? "#10b981" : "#6b7280" }}>{ec}</td>
                    <td className="p-3 text-center" style={{ color: co === "✓" ? "#10b981" : "#6b7280" }}>{co}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            Para ejercer cualquiera de estos derechos, envíe una solicitud a{" "}
            <a href="mailto:privacidad@nexusdigital.tech" style={{ color: "#b3c5ff" }}>
              privacidad@nexusdigital.tech
            </a>{" "}
            indicando su nombre completo, el derecho que desea ejercer y una descripción clara de su solicitud. Responderemos en un plazo máximo de{" "}
            <strong style={{ color: "#d8e3fb" }}>15 días hábiles</strong> (Ecuador) /{" "}
            <strong style={{ color: "#d8e3fb" }}>10 días hábiles</strong> (Colombia).
          </p>
        </Section>

        <Section title="5. Transferencias Internacionales de Datos">
          <p>
            NexusDigital puede utilizar herramientas de terceros (ej. Google Analytics, servicios de alojamiento en la nube) que implican transferencia de datos fuera de Ecuador y Colombia. En todos los casos exigimos que dichos proveedores ofrezcan garantías adecuadas de protección, tales como cláusulas contractuales tipo o certificaciones equivalentes.
          </p>
        </Section>

        <Section title="6. Conservación de los Datos">
          <p>
            Los datos personales se conservarán durante el tiempo estrictamente necesario para cumplir la finalidad para la que fueron recabados y, en todo caso, mientras subsista la relación contractual o comercial. Una vez concluida esta, los datos se suprimirán o anonimizarán, salvo que una obligación legal exija su conservación por un período determinado.
          </p>
        </Section>

        <Section title="7. Política de Cookies">
          <p>
            Este sitio puede utilizar cookies técnicas (necesarias para el funcionamiento) y cookies analíticas (para medir el tráfico y la experiencia de usuario). Las cookies analíticas solo se activarán con su consentimiento explícito. Puede configurar su navegador para rechazar o eliminar las cookies en cualquier momento; no obstante, algunas funcionalidades del sitio podrían verse afectadas.
          </p>
        </Section>

        <Section title="8. Autoridades de Control">
          <p>
            Si considera que el tratamiento de sus datos no se ajusta a la normativa aplicable, puede presentar una reclamación ante la autoridad competente:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong style={{ color: "#d8e3fb" }}>Ecuador:</strong> Superintendencia de Protección de Datos Personales (SPDP) —{" "}
              <a href="https://www.protecciondatos.gob.ec" target="_blank" rel="noopener noreferrer" style={{ color: "#b3c5ff" }}>
                www.protecciondatos.gob.ec
              </a>
            </li>
            <li>
              <strong style={{ color: "#d8e3fb" }}>Colombia:</strong> Superintendencia de Industria y Comercio (SIC) —{" "}
              <a href="https://www.sic.gov.co" target="_blank" rel="noopener noreferrer" style={{ color: "#b3c5ff" }}>
                www.sic.gov.co
              </a>
            </li>
          </ul>
        </Section>

        <Section title="9. Modificaciones a esta Política">
          <p>
            NexusDigital se reserva el derecho de actualizar esta Política de Privacidad en cualquier momento para adaptarse a cambios normativos o de negocio. La fecha de última actualización figurará siempre al inicio del documento. El uso continuado del sitio tras la publicación de cambios implicará la aceptación de los mismos.
          </p>
        </Section>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <Link
            href="/"
            className="font-mono text-[12px] uppercase tracking-widest transition-colors hover:text-amber-400"
            style={{ color: "#6b7280" }}
          >
            ← Volver al inicio
          </Link>
          <span className="mx-4" style={{ color: "#374151" }}>·</span>
          <Link
            href="/legal/terminos"
            className="font-mono text-[12px] uppercase tracking-widest transition-colors hover:text-amber-400"
            style={{ color: "#6b7280" }}
          >
            Términos de Servicio →
          </Link>
        </div>
      </main>
    </div>
  );
}
