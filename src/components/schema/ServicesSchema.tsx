export default function ServicesSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://nexusdigital.tech/#service-seo",
        name: "SEO Técnico y Data-Driven",
        alternateName: "Data-Driven SEO",
        description:
          "Posicionamiento en buscadores mediante ingeniería de datos: auditorías técnicas, optimización de Core Web Vitals, arquitectura de contenido, investigación de keywords con intención comercial y estrategia de enlazado para dominar resultados de búsqueda en España, Ecuador y Colombia.",
        url: "https://nexusdigital.tech/#servicios",
        provider: {
          "@id": "https://nexusdigital.tech/#organization",
        },
        areaServed: [
          { "@type": "Country", name: "Ecuador" },
          { "@type": "Country", name: "Colombia" },
        ],
        serviceType: "SEO",
        category: "Marketing Digital",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios SEO",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Auditoría SEO Técnica",
                description:
                  "Análisis técnico completo del sitio web con detección de errores de rastreo, velocidad, Core Web Vitals y arquitectura de URLs.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Optimización On-Page",
                description:
                  "Optimización de metadata, estructura de encabezados, datos estructurados y contenido orientado a posicionamiento orgánico.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Estrategia de Contenido SEO",
                description:
                  "Investigación de keywords de alto potencial y creación de contenido posicionable orientado a conversión.",
              },
            },
          ],
        },
      },
      {
        "@type": "Service",
        "@id": "https://nexusdigital.tech/#service-dev",
        name: "Desarrollo Web de Alto Rendimiento",
        alternateName: "High-Performance Dev",
        description:
          "Desarrollo de sitios web y aplicaciones escalables con arquitectura de alto rendimiento usando Next.js. Código optimizado para conversión, tiempos de carga inferiores a 1 segundo y disponibilidad garantizada del 99.8%.",
        url: "https://nexusdigital.tech/#servicios",
        provider: {
          "@id": "https://nexusdigital.tech/#organization",
        },
        areaServed: [
          { "@type": "Country", name: "Ecuador" },
          { "@type": "Country", name: "Colombia" },
        ],
        serviceType: "Desarrollo Web",
        category: "Tecnología Digital",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de Desarrollo",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Desarrollo de Landing Pages",
                description:
                  "Landing pages de alta conversión con arquitectura Next.js, optimización de velocidad y diseño orientado a resultados medibles.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Desarrollo de E-Commerce",
                description:
                  "Tiendas online con pagos integrados, experiencia de usuario optimizada y arquitectura escalable para mercados de Latinoamérica y España.",
              },
            },
          ],
        },
      },
      {
        "@type": "Service",
        "@id": "https://nexusdigital.tech/#service-growth",
        name: "Ecosistemas de Crecimiento Digital",
        alternateName: "Growth Ecosystems",
        description:
          "Automatización de procesos de ventas y marketing digital. Ecosistemas digitales que operan 24/7 sin cuellos de botella, combinando tecnología, datos y estrategia para escalar ingresos de forma sostenida.",
        url: "https://nexusdigital.tech/#servicios",
        provider: {
          "@id": "https://nexusdigital.tech/#organization",
        },
        areaServed: [
          { "@type": "Country", name: "Ecuador" },
          { "@type": "Country", name: "Colombia" },
        ],
        serviceType: "Automatización de Marketing",
        category: "Crecimiento Digital",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de Crecimiento Digital",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Automatización de Embudos de Ventas",
                description:
                  "Implementación de flujos automatizados de captación, nurturing y conversión de leads usando herramientas de marketing automation.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Estrategia de Marketing Digital Integral",
                description:
                  "Diseño y ejecución de estrategias multicanal que combinan SEO, SEM, contenidos y redes sociales para escalar ingresos de forma sostenida.",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
