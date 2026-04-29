import { ImageResponse } from "next/og";

export const alt = "NexusDigital | Agencia SEO y Desarrollo Web — Ecuador y Colombia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#081425",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: 24,
          }}
        >
          <span style={{ color: "#d8e3fb" }}>{">"}_ Nexus</span>
          <span style={{ color: "#ffb95f" }}>Digital</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#c4c6cd",
            letterSpacing: "0.01em",
            marginBottom: 48,
          }}
        >
          Agencia SEO · Desarrollo Web · Ecuador &amp; Colombia
        </div>

        {/* Bottom badge */}
        <div
          style={{
            display: "flex",
            gap: 16,
            fontSize: 16,
            color: "#6b7280",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
          }}
        >
          <span style={{ color: "#6b7280" }}>Growth Engineering</span>
          <span style={{ color: "#374151" }}>·</span>
          <span style={{ color: "#6b7280" }}>nexusdigital.tech</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
