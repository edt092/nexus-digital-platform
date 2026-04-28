interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const pageUrl = items[items.length - 1]?.url ?? "https://nexusdigital.tech";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}/#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Pre-built breadcrumb configs for each route
export const homeBreadcrumb: BreadcrumbItem[] = [
  { name: "Inicio", url: "https://nexusdigital.tech" },
];

export const casosBreadcrumb: BreadcrumbItem[] = [
  { name: "Inicio", url: "https://nexusdigital.tech" },
  { name: "Casos de Éxito", url: "https://nexusdigital.tech/casos" },
];

export const digitalAssetsBreadcrumb: BreadcrumbItem[] = [
  { name: "Inicio", url: "https://nexusdigital.tech" },
  {
    name: "Digital Assets",
    url: "https://nexusdigital.tech/digital-assets/paw-art-studio",
  },
];
