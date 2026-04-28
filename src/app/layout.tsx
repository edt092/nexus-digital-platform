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
  title: "NexusDigital | Growth Engineering",
  description:
    "Somos tu brazo tecnológico en España, Ecuador y Colombia. Construimos ecosistemas digitales de alto rendimiento diseñados para escalar tus ventas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
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
