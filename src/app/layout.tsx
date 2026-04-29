import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import OrganizationSchema from "@/components/schema/OrganizationSchema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexusdigital.tech"),
  title: "NexusDigital | Agencia SEO y Desarrollo Web — Ecuador y Colombia",
  description:
    "Somos tu brazo tecnológico en Ecuador y Colombia. Construimos ecosistemas digitales de alto rendimiento diseñados para escalar tus ventas.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://nexusdigital.tech",
    siteName: "NexusDigital",
    title: "NexusDigital | Agencia SEO y Desarrollo Web — Ecuador y Colombia",
    description:
      "Construimos ecosistemas digitales de alto rendimiento para escalar ventas en Ecuador y Colombia. SEO técnico, Next.js y automatización.",
    locale: "es_EC",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusDigital | Agencia SEO y Desarrollo Web",
    description:
      "Construimos ecosistemas digitales de alto rendimiento para escalar ventas en Ecuador y Colombia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,300,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable} font-display text-white antialiased overflow-x-hidden`}
      >
        <OrganizationSchema />
        {children}
      </body>
    </html>
  );
}
