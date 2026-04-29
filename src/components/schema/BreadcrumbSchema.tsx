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

export const homeBreadcrumb: BreadcrumbItem[] = [
  { name: "Inicio", url: "https://nexusdigital.tech" },
];

export const privacidadBreadcrumb: BreadcrumbItem[] = [
  { name: "Inicio", url: "https://nexusdigital.tech" },
  { name: "Política de Privacidad", url: "https://nexusdigital.tech/legal/privacidad" },
];

export const terminosBreadcrumb: BreadcrumbItem[] = [
  { name: "Inicio", url: "https://nexusdigital.tech" },
  { name: "Términos de Servicio", url: "https://nexusdigital.tech/legal/terminos" },
];
