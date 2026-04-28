import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nexusdigital.tech",
      lastModified: new Date("2026-04-28"),
    },
    {
      url: "https://nexusdigital.tech/casos",
      lastModified: new Date("2026-04-28"),
    },
    {
      url: "https://nexusdigital.tech/digital-assets/paw-art-studio",
      lastModified: new Date("2026-04-28"),
    },
  ];
}
