export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": "https://nexusdigital.tech/#organization",
        name: "NexusDigital",
        alternateName: "Nexus Digital",
        url: "https://nexusdigital.tech",
        logo: {
          "@type": "ImageObject",
          "@id": "https://nexusdigital.tech/#logo",
          url: "https://nexusdigital.tech/logo.png",
          contentUrl: "https://nexusdigital.tech/logo.png",
          width: 512,
          height: 512,
          caption: "NexusDigital",
        },
        image: { "@id": "https://nexusdigital.tech/#logo" },
        description:
          "Agencia de ingeniería digital especializada en SEO técnico, desarrollo web de alto rendimiento y ecosistemas de crecimiento digital para empresas en España, Ecuador y Colombia.",
        slogan: "Growth Engineering",
        foundingDate: "2024",
        areaServed: [
          { "@type": "Country", name: "Spain" },
          { "@type": "Country", name: "Ecuador" },
          { "@type": "Country", name: "Colombia" },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["Spanish"],
            url: "https://wa.me/593987098437",
          },
        ],
        sameAs: ["https://github.com/edt092"],
        knowsAbout: [
          "SEO técnico",
          "Desarrollo web",
          "Next.js",
          "Posicionamiento en buscadores",
          "Ecosistemas digitales",
          "Automatización de ventas",
          "Core Web Vitals",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://nexusdigital.tech/#website",
        url: "https://nexusdigital.tech",
        name: "NexusDigital | Growth Engineering",
        description:
          "Somos tu brazo tecnológico en España, Ecuador y Colombia. Construimos ecosistemas digitales de alto rendimiento diseñados para escalar tus ventas.",
        inLanguage: "es",
        publisher: {
          "@id": "https://nexusdigital.tech/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://nexusdigital.tech/#webpage",
        url: "https://nexusdigital.tech",
        name: "NexusDigital | Growth Engineering",
        description:
          "Somos tu brazo tecnológico en España, Ecuador y Colombia. Construimos ecosistemas digitales de alto rendimiento diseñados para escalar tus ventas.",
        inLanguage: "es",
        isPartOf: {
          "@id": "https://nexusdigital.tech/#website",
        },
        about: {
          "@id": "https://nexusdigital.tech/#organization",
        },
        breadcrumb: {
          "@id": "https://nexusdigital.tech/#breadcrumb",
        },
        datePublished: "2024-01-01",
        dateModified: "2026-04-28",
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
