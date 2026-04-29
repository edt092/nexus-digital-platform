import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos de Servicio | NexusDigital",
  description:
    "Términos y condiciones de contratación de los servicios de NexusDigital — desarrollo web, SEO técnico y automatización para Ecuador y Colombia.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/legal/terminos",
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

export default function TermsPage() {
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
          Términos de Servicio
        </span>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] mb-3" style={{ color: "#b3c5ff" }}>
            {"// legal.terminos"}
          </div>
          <h1
            className="font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#d8e3fb", lineHeight: 1.15, letterSpacing: "-0.02em" }}
          >
            Términos y Condiciones de Servicio
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
            El uso de los servicios de <strong style={{ color: "#d8e3fb" }}>NexusDigital</strong> implica
            la aceptación plena de estos Términos y Condiciones. Si no está de acuerdo con alguna de las
            cláusulas, le rogamos que no contrate nuestros servicios y contacte con nosotros para resolver
            cualquier duda antes de iniciar una relación comercial.
          </p>
        </div>

        <Section title="1. Partes del Contrato">
          <p>
            Estos términos regulan la relación contractual entre:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong style={{ color: "#d8e3fb" }}>Prestador del servicio:</strong> NexusDigital, agencia de ingeniería digital con operaciones en Ecuador y Colombia (en adelante, "NexusDigital").
            </li>
            <li>
              <strong style={{ color: "#d8e3fb" }}>Cliente:</strong> la persona natural o jurídica que contrata alguno de los servicios ofrecidos por NexusDigital.
            </li>
          </ul>
        </Section>

        <Section title="2. Descripción de los Servicios">
          <p>NexusDigital ofrece los siguientes servicios profesionales:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong style={{ color: "#d8e3fb" }}>Desarrollo web:</strong> diseño, desarrollo e implementación de sitios web y aplicaciones con tecnologías como Next.js, React y Tailwind CSS.</li>
            <li><strong style={{ color: "#d8e3fb" }}>SEO técnico:</strong> auditoría, optimización y posicionamiento orgánico en motores de búsqueda mediante ingeniería de datos y arquitectura semántica.</li>
            <li><strong style={{ color: "#d8e3fb" }}>Automatización:</strong> integración de herramientas digitales (CRM, ERP, APIs) para optimizar flujos de trabajo y reducir la intervención manual.</li>
            <li><strong style={{ color: "#d8e3fb" }}>Consultoría digital:</strong> asesoramiento estratégico en ingeniería de crecimiento digital.</li>
          </ul>
          <p className="mt-3">
            Las especificaciones, alcance, plazos y precio de cada proyecto quedan definidos en una <strong style={{ color: "#d8e3fb" }}>propuesta comercial escrita</strong> aceptada por ambas partes antes del inicio del trabajo.
          </p>
        </Section>

        <Section title="3. Proceso de Contratación">
          <p>El proceso estándar de contratación es el siguiente:</p>
          <ol className="list-decimal pl-5 space-y-2 mt-2">
            <li>El cliente contacta a NexusDigital a través del sitio web o por WhatsApp.</li>
            <li>NexusDigital realiza una <strong style={{ color: "#d8e3fb" }}>auditoría gratuita</strong> y elabora una propuesta personalizada.</li>
            <li>El cliente acepta la propuesta de forma escrita (correo o mensaje).</li>
            <li>Se acuerda y abona un <strong style={{ color: "#d8e3fb" }}>anticipo del 50%</strong> para dar inicio al proyecto (salvo acuerdo distinto por escrito).</li>
            <li>Al entregar el proyecto, el cliente abona el <strong style={{ color: "#d8e3fb" }}>saldo restante</strong> antes de recibir accesos o archivos finales.</li>
          </ol>
        </Section>

        <Section title="4. Precios y Forma de Pago">
          <p>
            Los precios se expresan en <strong style={{ color: "#d8e3fb" }}>dólares estadounidenses (USD)</strong> e incluyen todos los impuestos aplicables en cada país, salvo indicación expresa en contrario.
          </p>
          <p>
            Los medios de pago aceptados son: transferencia bancaria, pago móvil (Nequi, Daviplata para Colombia; transferencias desde Ecuador), y otros que se indiquen en la propuesta comercial.
          </p>
          <p>
            El retraso en el pago de más de <strong style={{ color: "#d8e3fb" }}>7 días hábiles</strong> sobre la fecha acordada faculta a NexusDigital a suspender el servicio o retener los entregables hasta regularización del pago.
          </p>
        </Section>

        <Section title="5. Plazos de Entrega">
          <p>
            Los plazos de entrega son los estipulados en la propuesta comercial. NexusDigital no será responsable de retrasos causados por:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Demora del cliente en proporcionar contenido, accesos o aprobaciones.</li>
            <li>Cambios en el alcance del proyecto solicitados tras el inicio del trabajo.</li>
            <li>Causas de fuerza mayor o caso fortuito.</li>
          </ul>
          <p className="mt-3">
            Cualquier modificación al alcance que implique tiempo o costo adicional será presupuestada por separado y requerirá aprobación escrita del cliente.
          </p>
        </Section>

        <Section title="6. Propiedad Intelectual">
          <p>
            Una vez abonada la totalidad del precio pactado, el cliente adquiere la <strong style={{ color: "#d8e3fb" }}>titularidad de los entregables finales</strong> del proyecto (código fuente, diseños, contenidos creados específicamente para él).
          </p>
          <p>
            NexusDigital retiene el derecho de <strong style={{ color: "#d8e3fb" }}>mencionar el proyecto en su portfolio</strong> como referencia comercial, salvo solicitud expresa de confidencialidad por parte del cliente.
          </p>
          <p>
            Las herramientas, librerías de terceros, plantillas y cualquier activo preexistente utilizado en el desarrollo están sujetos a sus respectivas licencias de software libre o comercial, que el cliente acepta al contratar el servicio.
          </p>
        </Section>

        <Section title="7. Confidencialidad">
          <p>
            Ambas partes se comprometen a mantener la confidencialidad de la información sensible intercambiada durante la relación comercial (datos del negocio, estrategias, credenciales de acceso). Esta obligación permanece vigente por un período de <strong style={{ color: "#d8e3fb" }}>dos (2) años</strong> tras la finalización del proyecto.
          </p>
        </Section>

        <Section title="8. Limitación de Responsabilidad">
          <p>
            NexusDigital realiza su trabajo bajo estándares profesionales, pero no garantiza resultados específicos de negocio (volumen de ventas, posiciones concretas en buscadores, ROI) dado que estos dependen de factores externos fuera de su control.
          </p>
          <p>
            La responsabilidad total de NexusDigital frente al cliente, por cualquier concepto, estará limitada al <strong style={{ color: "#d8e3fb" }}>importe total abonado</strong> por el servicio en cuestión durante los últimos 6 meses.
          </p>
          <p>
            NexusDigital no será responsable de daños indirectos, lucro cesante, pérdida de datos o daño reputacional derivados del uso o imposibilidad de uso de los servicios prestados.
          </p>
        </Section>

        <Section title="9. Cancelación y Devoluciones">
          <p>
            El cliente puede cancelar el proyecto en cualquier momento notificándolo por escrito. En tal caso:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Si la cancelación ocurre antes del inicio del trabajo: se reembolsa el 100% del anticipo.</li>
            <li>Si el trabajo ya ha comenzado: NexusDigital facturará el porcentaje completado del proyecto; el exceso del anticipo será devuelto o la diferencia deberá ser abonada según corresponda.</li>
            <li>Proyectos de SEO mensual: cancelables con <strong style={{ color: "#d8e3fb" }}>15 días de aviso previo</strong> al siguiente período de facturación.</li>
          </ul>
        </Section>

        <Section title="10. Ley Aplicable y Resolución de Disputas">
          <p>
            Estos términos se rigen, con carácter general, por las leyes de la <strong style={{ color: "#d8e3fb" }}>República del Ecuador</strong>. Para clientes domiciliados en Colombia, será de aplicación preferente la legislación colombiana en lo que les resulte más favorable como consumidores.
          </p>
          <p>
            Ante cualquier controversia, las partes intentarán resolverla de mutuo acuerdo en un plazo de <strong style={{ color: "#d8e3fb" }}>30 días</strong>. De no alcanzarse acuerdo, la disputa se someterá a los tribunales competentes del domicilio del prestador del servicio, salvo que la normativa de protección al consumidor del país del cliente disponga un fuero distinto.
          </p>
        </Section>

        <Section title="11. Modificaciones a estos Términos">
          <p>
            NexusDigital se reserva el derecho de actualizar estos Términos en cualquier momento. Los cambios serán publicados en esta página con su correspondiente fecha de actualización y no afectarán a los contratos vigentes salvo acuerdo expreso de ambas partes.
          </p>
        </Section>

        <Section title="12. Contacto">
          <p>Para cualquier consulta sobre estos Términos de Servicio:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong style={{ color: "#d8e3fb" }}>Email:</strong>{" "}
              <a href="mailto:hola@nexusdigital.tech" style={{ color: "#b3c5ff" }}>
                hola@nexusdigital.tech
              </a>
            </li>
            <li>
              <strong style={{ color: "#d8e3fb" }}>WhatsApp:</strong>{" "}
              <a href="https://wa.me/593979097543" target="_blank" rel="noopener noreferrer" style={{ color: "#b3c5ff" }}>
                +593 97 909 7543
              </a>
            </li>
          </ul>
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
            href="/legal/privacidad"
            className="font-mono text-[12px] uppercase tracking-widest transition-colors hover:text-amber-400"
            style={{ color: "#6b7280" }}
          >
            Política de Privacidad →
          </Link>
        </div>
      </main>
    </div>
  );
}
