import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Casos de Éxito | NexusDigital",
  description:
    "Resultados reales de SEO orgánico verificados con Google Search Console. Casos de PromoGimmicks y KronoSoloPromocionales en Ecuador y Colombia.",
};

const promoTrend = [
  { label: "ENE", clicks: 11, partial: true },
  { label: "FEB", clicks: 46, partial: false },
  { label: "MAR", clicks: 73, partial: false },
  { label: "ABR", clicks: 66, partial: true },
];

const promoKeywords = [
  { query: "abanicos personalizados ecuador", clicks: 5, impressions: 54, ctr: "9.26%", position: 6 },
  { query: "abanicos promocionales", clicks: 2, impressions: 6, ctr: "33.33%", position: 5 },
  { query: "abanico personalizado", clicks: 1, impressions: 10, ctr: "10%", position: 7 },
  { query: "aplausometro", clicks: 1, impressions: 7, ctr: "14.29%", position: 9 },
  { query: "gimmicks", clicks: 0, impressions: 161, ctr: "0%", position: 8 },
];

const promoPages = [
  { url: "/tienda/abanico/", clicks: 35, impressions: 286, ctr: "12.24%", position: 6.7 },
  { url: "/ (homepage)", clicks: 10, impressions: 328, ctr: "3.05%", position: 6.7 },
  { url: "/tienda/gota-antiestres/", clicks: 6, impressions: 29, ctr: "20.69%", position: 4.6 },
  { url: "/tienda/vuvuzela-colombia/", clicks: 7, impressions: 83, ctr: "8.43%", position: 10.1 },
  { url: "/blog/productos-baratos-quito-2025/", clicks: 3, impressions: 138, ctr: "2.17%", position: 8.5 },
];

const kronoTrend = [
  { label: "ENE", clicks: 0, partial: true },
  { label: "FEB", clicks: 3, partial: false },
  { label: "MAR", clicks: 3, partial: false },
  { label: "ABR", clicks: 5, partial: true },
];

const kronoPages = [
  { url: "/ (homepage)", clicks: 11, impressions: 354, ctr: "3.11%", position: 11.5 },
  { url: "/blog/mejores-productos-2025/", clicks: 0, impressions: 113, ctr: "0%", position: 5.2 },
  { url: "/blog/regalos-corporativos-fin-ano/", clicks: 0, impressions: 104, ctr: "0%", position: 13.4 },
  { url: "/productos/copa-vino-7oz/", clicks: 0, impressions: 23, ctr: "0%", position: 7.1 },
];

function BarChart({ data, maxOverride }: { data: typeof promoTrend; maxOverride?: number }) {
  const max = maxOverride ?? Math.max(...data.map((d) => d.clicks), 1);
  return (
    <div className="flex items-end gap-3 h-32">
      {data.map((bar, i) => {
        const pct = max > 0 ? (bar.clicks / max) * 100 : 0;
        const isLast = i === data.length - 1;
        return (
          <div key={bar.label} className="flex flex-col items-center gap-2 flex-1">
            <span className="font-mono text-[10px] text-gray-400">
              {bar.clicks}
            </span>
            <div className="w-full flex flex-col justify-end" style={{ height: "80px" }}>
              <div
                className={`w-full rounded-sm transition-all ${
                  isLast
                    ? "bg-primary"
                    : pct > 50
                    ? "bg-primary/70"
                    : "bg-primary/30"
                }`}
                style={{ height: `${Math.max(pct, 2)}%` }}
              />
            </div>
            <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">
              {bar.label}
              {bar.partial && <span className="text-primary/60">*</span>}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function MetricCard({
  value,
  label,
  icon,
  suffix = "",
}: {
  value: string;
  label: string;
  icon: string;
  suffix?: string;
}) {
  return (
    <div className="bg-surface p-6 rounded-xl border border-border-dim text-center relative overflow-hidden group hover:border-primary/30 transition-colors">
      <div className="absolute top-3 right-3 opacity-10 group-hover:opacity-20 transition-opacity">
        <span className="material-symbols-outlined text-primary text-4xl">{icon}</span>
      </div>
      <div className="text-4xl md:text-5xl font-black italic text-primary mb-1">
        {value}
        {suffix && <span className="text-2xl">{suffix}</span>}
      </div>
      <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

function KeywordsTable({
  rows,
}: {
  rows: { query: string; clicks: number; impressions: number; ctr: string; position: number }[];
}) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full font-mono text-xs border-collapse">
        <thead>
          <tr className="border-b border-border-dim">
            <th className="text-left text-gray-500 uppercase tracking-widest pb-3 pr-4">Query</th>
            <th className="text-right text-gray-500 uppercase tracking-widest pb-3 px-3">Clics</th>
            <th className="text-right text-gray-500 uppercase tracking-widest pb-3 px-3">Imp</th>
            <th className="text-right text-gray-500 uppercase tracking-widest pb-3 px-3">CTR</th>
            <th className="text-right text-gray-500 uppercase tracking-widest pb-3 pl-3">Pos</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border-dim hover:bg-white/5 transition-colors"
            >
              <td className="py-3 pr-4 text-gray-300">{row.query}</td>
              <td className="py-3 px-3 text-right text-white font-bold">{row.clicks}</td>
              <td className="py-3 px-3 text-right text-gray-400">{row.impressions}</td>
              <td className="py-3 px-3 text-right text-gray-400">{row.ctr}</td>
              <td className="py-3 pl-3 text-right">
                <span
                  className={`font-bold ${
                    row.position <= 10 ? "text-primary" : "text-gray-400"
                  }`}
                >
                  #{row.position}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PagesTable({
  rows,
}: {
  rows: { url: string; clicks: number; impressions: number; ctr: string; position: number }[];
}) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full font-mono text-xs border-collapse">
        <thead>
          <tr className="border-b border-border-dim">
            <th className="text-left text-gray-500 uppercase tracking-widest pb-3 pr-4">Página</th>
            <th className="text-right text-gray-500 uppercase tracking-widest pb-3 px-3">Clics</th>
            <th className="text-right text-gray-500 uppercase tracking-widest pb-3 px-3">Imp</th>
            <th className="text-right text-gray-500 uppercase tracking-widest pb-3 px-3">CTR</th>
            <th className="text-right text-gray-500 uppercase tracking-widest pb-3 pl-3">Pos</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border-dim hover:bg-white/5 transition-colors"
            >
              <td className="py-3 pr-4 text-gray-300 max-w-[220px] truncate">{row.url}</td>
              <td className="py-3 px-3 text-right text-white font-bold">{row.clicks}</td>
              <td className="py-3 px-3 text-right text-gray-400">{row.impressions}</td>
              <td className="py-3 px-3 text-right text-gray-400">{row.ctr}</td>
              <td className="py-3 pl-3 text-right">
                <span
                  className={`font-bold ${
                    row.position <= 10 ? "text-primary" : "text-gray-400"
                  }`}
                >
                  #{row.position}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CasosPage() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />

      {/* ── HERO ── */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="font-mono text-primary text-sm mb-4 tracking-[0.2em] flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            {"// casos_de_exito.gsc_verified"}
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase">
            DATOS REALES,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              RESULTADOS
            </span>{" "}
            VERIFICADOS
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10 border-l-2 border-primary/30 pl-6 max-w-2xl">
            Cada número en esta página proviene directamente de Google Search Console.
            <br />
            Sin inventar métricas. Sin estimaciones. Solo datos reales de clientes reales.
          </p>

          {/* aggregate stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { v: "207", l: "Clics orgánicos totales", icon: "ads_click" },
              { v: "3,658", l: "Impresiones en Google", icon: "visibility" },
              { v: "100+", l: "Páginas posicionadas", icon: "article" },
              { v: "2", l: "Clientes activos", icon: "language" },
            ].map((s) => (
              <div
                key={s.l}
                className="bg-surface border border-border-dim rounded-xl p-5 text-center"
              >
                <div className="text-3xl font-black italic text-primary mb-1">{s.v}</div>
                <div className="font-mono text-[9px] text-gray-500 uppercase tracking-widest leading-tight">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* decoration */}
        <div className="absolute -right-20 top-40 opacity-10 pointer-events-none hidden lg:block">
          <pre className="font-mono text-[10px] text-primary leading-none">
            {`GSC_VERIFIED: TRUE
CLICKS_TOTAL: 207
IMPRESSIONS: 3658
CTR_AVG: 5.6%
POS_AVG: 9.2
PAGES_RANKED: 100+`}
          </pre>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CASE STUDY 1 — PROMOGIMMICKS
      ══════════════════════════════════════ */}
      <section className="py-20 px-6 bg-primary/5 border-y border-primary/20">
        <div className="max-w-7xl mx-auto">

          {/* client header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-12">
            <div>
              <div className="font-mono text-primary text-xs uppercase tracking-widest mb-2">
                {"// caso_01"}
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                PromoGimmicks<span className="text-primary">.com</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="font-mono text-[10px] uppercase tracking-widest bg-primary/10 text-primary border border-primary/30 px-3 py-1 rounded">
                Productos Promocionales
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest bg-surface text-gray-400 border border-border-dim px-3 py-1 rounded">
                Ecuador · Colombia
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest bg-surface text-gray-400 border border-border-dim px-3 py-1 rounded">
                Ene–Abr 2026
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest bg-green-500/10 text-green-400 border border-green-500/30 px-3 py-1 rounded flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                RESULTADOS VERIFICADOS
              </span>
            </div>
          </div>

          {/* challenge + intervention */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-surface border border-border-dim rounded-xl p-7">
              <div className="font-mono text-primary text-[10px] uppercase tracking-widest mb-3">
                {"// contexto_y_desafio"}
              </div>
              <h3 className="text-lg font-black uppercase mb-3 tracking-tight">
                El Desafío
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                PromoGimmicks contaba con un catálogo extenso de productos promocionales
                para el mercado ecuatoriano y colombiano, pero su visibilidad orgánica era
                prácticamente nula. Las páginas de producto no estaban optimizadas, el
                sitio carecía de estructura SEO sólida y no había contenido orientado a
                capturar demanda de búsqueda.
              </p>
            </div>
            <div className="bg-surface border border-border-dim rounded-xl p-7">
              <div className="font-mono text-primary text-[10px] uppercase tracking-widest mb-3">
                {"// intervencion_aplicada"}
              </div>
              <h3 className="text-lg font-black uppercase mb-3 tracking-tight">
                Qué Hicimos
              </h3>
              <ul className="space-y-2">
                {[
                  { icon: "settings", text: "Auditoría técnica y corrección de errores SEO on-page" },
                  { icon: "inventory_2", text: "Optimización de 100+ páginas de producto (WooCommerce)" },
                  { icon: "search", text: "Investigación de keywords con intención comercial" },
                  { icon: "article", text: "Estrategia y publicación de contenido blog posicionable" },
                  { icon: "language", text: "Optimización de metadata, titles y estructura de URLs" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                      {item.icon}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <MetricCard value="196" label="Clics orgánicos" icon="ads_click" />
            <MetricCard value="3,127" label="Impresiones Google" icon="visibility" />
            <MetricCard value="6.3" label="CTR promedio" icon="trending_up" suffix="%" />
            <MetricCard value="100" label="Páginas rankeando" icon="article" suffix="+" />
          </div>

          {/* chart + device breakdown */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* trend chart */}
            <div className="md:col-span-2 bg-surface border border-border-dim rounded-xl p-7">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-mono text-primary text-[10px] uppercase tracking-widest mb-1">
                    {"// tendencia_mensual"}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-tight">
                    Clics Orgánicos por Mes
                  </div>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-green-400">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  +527% ene→mar
                </div>
              </div>
              <BarChart data={promoTrend} />
              <p className="font-mono text-[9px] text-gray-600 mt-3">
                * Meses parciales (ene: 6 días, abr: 25 días)
              </p>
            </div>

            {/* device breakdown */}
            <div className="bg-surface border border-border-dim rounded-xl p-7">
              <div className="font-mono text-primary text-[10px] uppercase tracking-widest mb-4">
                {"// dispositivos"}
              </div>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-mono text-xs text-gray-400 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">computer</span>Desktop
                    </span>
                    <span className="font-mono text-xs font-bold text-white">139 clics</span>
                  </div>
                  <div className="h-1.5 bg-border-dim rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "70.9%" }} />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="font-mono text-[9px] text-gray-600">1,751 impresiones</span>
                    <span className="font-mono text-[9px] text-primary">7.94% CTR</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-mono text-xs text-gray-400 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">smartphone</span>Móvil
                    </span>
                    <span className="font-mono text-xs font-bold text-white">57 clics</span>
                  </div>
                  <div className="h-1.5 bg-border-dim rounded-full overflow-hidden">
                    <div className="h-full bg-primary/50 rounded-full" style={{ width: "29.1%" }} />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="font-mono text-[9px] text-gray-600">1,346 impresiones</span>
                    <span className="font-mono text-[9px] text-primary">4.23% CTR</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-border-dim">
                  <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-2">
                    Posición promedio
                  </div>
                  <div className="text-3xl font-black italic text-primary">
                    #8.9
                  </div>
                  <div className="font-mono text-[9px] text-gray-600 mt-1">
                    en resultados de búsqueda
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* keywords + pages tables */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-surface border border-border-dim rounded-xl p-7">
              <div className="font-mono text-primary text-[10px] uppercase tracking-widest mb-4">
                {"// top_keywords"}
              </div>
              <KeywordsTable rows={promoKeywords} />
            </div>
            <div className="bg-surface border border-border-dim rounded-xl p-7">
              <div className="font-mono text-primary text-[10px] uppercase tracking-widest mb-4">
                {"// top_pages"}
              </div>
              <PagesTable rows={promoPages} />
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          CASE STUDY 2 — KRONOSOLOPROMOCIONALES
      ══════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* client header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-12">
            <div>
              <div className="font-mono text-primary text-xs uppercase tracking-widest mb-2">
                {"// caso_02"}
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                KronoSolo<span className="text-primary">Promocionales</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="font-mono text-[10px] uppercase tracking-widest bg-primary/10 text-primary border border-primary/30 px-3 py-1 rounded">
                Regalos Corporativos
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest bg-surface text-gray-400 border border-border-dim px-3 py-1 rounded">
                Ecuador
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest bg-surface text-gray-400 border border-border-dim px-3 py-1 rounded">
                Ene–Abr 2026
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 px-3 py-1 rounded flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                EN CRECIMIENTO
              </span>
            </div>
          </div>

          {/* callout */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-10 flex gap-4">
            <span className="material-symbols-outlined text-primary text-2xl shrink-0 mt-0.5">info</span>
            <p className="text-sm text-gray-400 leading-relaxed">
              Este caso documenta un sitio en <strong className="text-white">etapa temprana de SEO</strong>.
              La infraestructura fue construida desde cero — los resultados actuales representan los primeros
              meses de visibilidad orgánica. Los artículos de blog ya alcanzan posiciones top 5 en Google,
              lo que indica una base SEO sólida con alto potencial de crecimiento.
            </p>
          </div>

          {/* challenge + intervention */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-surface border border-border-dim rounded-xl p-7">
              <div className="font-mono text-primary text-[10px] uppercase tracking-widest mb-3">
                {"// contexto_y_desafio"}
              </div>
              <h3 className="text-lg font-black uppercase mb-3 tracking-tight">
                El Desafío
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                KronoSoloPromocionales arrancó sin presencia digital establecida. El sitio existía
                pero no generaba tráfico orgánico. Necesitaban una estrategia SEO de base que
                sentara los cimientos para escalar: arquitectura de contenido, keywords de alto
                potencial y páginas optimizadas para competir en búsquedas relacionadas con
                regalos corporativos en Ecuador.
              </p>
            </div>
            <div className="bg-surface border border-border-dim rounded-xl p-7">
              <div className="font-mono text-primary text-[10px] uppercase tracking-widest mb-3">
                {"// intervencion_aplicada"}
              </div>
              <h3 className="text-lg font-black uppercase mb-3 tracking-tight">
                Qué Hicimos
              </h3>
              <ul className="space-y-2">
                {[
                  { icon: "foundation", text: "Configuración SEO inicial completa (meta, schema, sitemap)" },
                  { icon: "search", text: "Investigación de keywords para regalos corporativos Ecuador" },
                  { icon: "article", text: "Creación de artículos de blog con intención de búsqueda" },
                  { icon: "architecture", text: "Arquitectura de contenido para escalar a largo plazo" },
                  { icon: "link", text: "Estructura de URLs y enlazado interno estratégico" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                      {item.icon}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <MetricCard value="11" label="Clics orgánicos" icon="ads_click" />
            <MetricCard value="531" label="Impresiones Google" icon="visibility" />
            <MetricCard value="#5" label="Mejor posición (blog)" icon="trending_up" />
            <MetricCard value="2" label="Blog posts top 15" icon="article" />
          </div>

          {/* chart + device breakdown */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="md:col-span-2 bg-surface border border-border-dim rounded-xl p-7">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-mono text-primary text-[10px] uppercase tracking-widest mb-1">
                    {"// tendencia_mensual"}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-tight">
                    Clics Orgánicos por Mes
                  </div>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-yellow-400">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  Crecimiento sostenido
                </div>
              </div>
              <BarChart data={kronoTrend} maxOverride={5} />
              <p className="font-mono text-[9px] text-gray-600 mt-3">
                * Meses parciales (ene: 6 días, abr: 25 días). Sitio en etapa inicial.
              </p>
            </div>

            <div className="bg-surface border border-border-dim rounded-xl p-7">
              <div className="font-mono text-primary text-[10px] uppercase tracking-widest mb-4">
                {"// dispositivos"}
              </div>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-mono text-xs text-gray-400 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">computer</span>Desktop
                    </span>
                    <span className="font-mono text-xs font-bold text-white">8 clics</span>
                  </div>
                  <div className="h-1.5 bg-border-dim rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "72.7%" }} />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="font-mono text-[9px] text-gray-600">464 impresiones</span>
                    <span className="font-mono text-[9px] text-primary">1.72% CTR</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-mono text-xs text-gray-400 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">smartphone</span>Móvil
                    </span>
                    <span className="font-mono text-xs font-bold text-white">3 clics</span>
                  </div>
                  <div className="h-1.5 bg-border-dim rounded-full overflow-hidden">
                    <div className="h-full bg-primary/50 rounded-full" style={{ width: "27.3%" }} />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="font-mono text-[9px] text-gray-600">50 impresiones</span>
                    <span className="font-mono text-[9px] text-primary">6% CTR</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-border-dim">
                  <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-2">
                    Blog top ranking
                  </div>
                  <div className="text-3xl font-black italic text-primary">
                    #5
                  </div>
                  <div className="font-mono text-[9px] text-gray-600 mt-1">
                    mejores productos promocionales 2025
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* pages table */}
          <div className="bg-surface border border-border-dim rounded-xl p-7 max-w-3xl">
            <div className="font-mono text-primary text-[10px] uppercase tracking-widest mb-4">
              {"// top_pages"}
            </div>
            <PagesTable rows={kronoPages} />
            <div className="mt-5 pt-5 border-t border-border-dim">
              <p className="font-mono text-[9px] text-gray-500 leading-relaxed">
                Las páginas de blog con 0 clics y alta visibilidad (pos #5, #13) representan oportunidades
                de conversión mediante mejora de CTR — títulos y meta descriptions más atractivos.
                La infraestructura está lista para escalar.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 bg-primary/5 border-t border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-mono text-primary text-xs uppercase tracking-widest mb-4">
            {"// siguiente_paso"}
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            ¿Tu negocio necesita
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              resultados como estos?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Auditamos tu sitio web de forma gratuita, identificamos las oportunidades SEO
            más rápidas y te presentamos un plan de acción con proyecciones reales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/593987098437?text=Hola%20vi%20los%20casos%20de%20%C3%A9xito%20y%20quiero%20una%20audit%C3%B3ria%20SEO%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-black tracking-wide text-lg transition-all flex items-center justify-center gap-3 group"
            >
              SOLICITAR AUDITORÍA GRATUITA
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 animate-[nudge_1.5s_ease-in-out_infinite]">
                arrow_forward
              </span>
            </a>
            <a
              href="/"
              className="bg-surface border border-border-dim text-gray-300 px-8 py-4 rounded-lg font-bold hover:bg-white/5 transition-colors flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined text-sm">home</span>
              VER SERVICIOS
            </a>
          </div>
          <div className="mt-10 inline-flex items-center gap-2 font-mono text-xs text-gray-600 border border-border-dim px-4 py-2 rounded-full">
            <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
            Datos verificados con Google Search Console · Sin compromisos
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
