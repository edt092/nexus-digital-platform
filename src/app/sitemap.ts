import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nexusdigital.tech",
      lastModified: new Date("2026-04-29"),
    },
    {
      url: "https://nexusdigital.tech/legal/privacidad",
      lastModified: new Date("2026-04-29"),
    },
    {
      url: "https://nexusdigital.tech/legal/terminos",
      lastModified: new Date("2026-04-29"),
    },
  ];
}
