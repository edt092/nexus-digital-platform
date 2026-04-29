<div align="center">

# NexusDigital | Growth Engineering

**Landing page de alto rendimiento para una agencia de ingeniería de crecimiento digital.**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## Descripción

NexusDigital es una plataforma web multiruta orientada a la conversión, diseñada para una agencia de growth engineering que ofrece servicios de desarrollo web de alto rendimiento, SEO basado en datos y ecosistemas de automatización. El sitio está dirigido a mercados hispanohablantes (España, Ecuador y Colombia).

---

## Tech Stack

| Tecnología | Versión | Propósito |
|---|---|---|
| **Next.js** | 16.1.6 | Framework de React con SSR, App Router y optimización de rendimiento |
| **React** | 19.2.3 | Biblioteca de UI |
| **TypeScript** | 5.x | Tipado estático |
| **Tailwind CSS** | 4.x | Framework de estilos utility-first |
| **PostCSS** | — | Procesamiento de CSS |
| **ESLint** | 9.x | Linting y calidad de código |

**Recursos externos:**
- Google Fonts (Inter, Roboto Mono)
- Material Symbols Outlined (iconografía)

---

## Rutas del sitio

| Ruta | Archivo | Descripción |
|---|---|---|
| `/` | `src/app/page.tsx` | Landing page principal — orquesta todos los componentes de la home |
| `/casos` | `src/app/casos/page.tsx` | Casos de éxito SEO con datos reales de Google Search Console |
| `/digital-assets/paw-art-studio` | `src/app/digital-assets/paw-art-studio/page.tsx` | Marketplace listing para la venta del proyecto PawArtStudio |
| `/sitemap.xml` | `src/app/sitemap.ts` | Sitemap XML generado dinámicamente por Next.js |
| `/robots.txt` | `src/app/robots.ts` | Reglas de crawling para motores de búsqueda |

---

## Flujo de la web

### 1. Layout raíz — `src/app/layout.tsx`

Envuelve todas las rutas. Configura:
- Fuentes Google (Inter + Roboto Mono) vía `next/font`
- `<html lang="es" className="dark">`
- Material Symbols Outlined (CDN)
- `OrganizationSchema` — JSON-LD de tipo `Organization + WebSite + WebPage` inyectado en `<body>` para todas las páginas

---

### 2. Home — `/`

Orden de renderizado de componentes:

```
ServicesSchema          → JSON-LD: servicios de la agencia (schema.org/Service)
BreadcrumbSchema        → JSON-LD: breadcrumb de la home
Navbar                  → Barra de navegación fija
Hero                    → Sección principal con headline y CTAs
PainPoints              → Diagnóstico de problemas del cliente
Pillars                 → Los 3 pilares de servicio
GrowthStack             → Métricas y resultados comprobados
Projects                → Portfolio de proyectos reales
Manifesto               → Declaración de valores estilo terminal
CTA                     → Call-to-action de consultoría gratuita
Footer                  → Pie de página
WhatsAppButton          → Botón flotante con enlace a WhatsApp
```

#### Navbar (`src/components/Navbar.tsx`)
- Logo `>_` con enlace implícito a home
- Navegación por anclas internas: `#soluciones`, `#manifiesto`, `#resultados`
- Enlace a la ruta `/casos` (Next.js `<Link>`)
- Enlace a `/digital-assets/paw-art-studio` con icono de tienda
- CTA externo: WhatsApp (`wa.me/593987098437`) — abre solicitud de auditoría gratuita

#### Hero (`src/components/Hero.tsx`)
- Headline con propuesta de valor
- Indicador de estado animado (pulse verde)
- Dos CTAs: auditoría gratuita (WhatsApp) + scroll a servicios

#### PainPoints (`src/components/PainPoints.tsx`)
- Tres tarjetas que identifican los problemas más comunes del cliente objetivo:
  1. Sitios lentos
  2. SEO inexistente
  3. Embudos de ventas rotos

#### Pillars (`src/components/Pillars.tsx`) — `id="soluciones"`
- Tres pilares de servicio con imágenes:
  1. Desarrollo de alto rendimiento (`pillar-1-v2.png`)
  2. SEO basado en datos (`pillar-2.png`)
  3. Ecosistemas de automatización (`pillar-3.png`)

#### GrowthStack (`src/components/GrowthStack.tsx`) — `id="resultados"`
- Imagen de métricas reales (`seo.png`)
- 4 KPIs destacados con resultados verificables

#### Projects (`src/components/Projects.tsx`) — `id="proyectos"`
- **Proyecto destacado** (full-width, layout 2 columnas): PawArtStudio — tienda de camisetas con arte IA, pagos Wompi/PayPhone y notificaciones Telegram
- **Grid de 4 proyectos**: PromoGimmicks, KS Promocionales, El Fogón Gourmet, Parasoles y Domos San Andrés
- **1 proyecto suelto** (centrado): FrasesRandom
- Cada tarjeta muestra GIF demo, stack tecnológico, categorías y enlace a GitHub/demo

#### Manifesto (`src/components/Manifesto.tsx`) — `id="manifiesto"`
- Declaración de valores con diseño estilo terminal (Roboto Mono)
- Animaciones de escritura / código comentado

#### CTA (`src/components/CTA.tsx`)
- Oferta de consultoría gratuita
- Checklist SEO como gancho de valor
- CTA principal: WhatsApp con mensaje preescrito

#### Footer (`src/components/Footer.tsx`)
- Enlace a términos legales y privacidad
- Indicador de estado del sistema (pulse verde)

#### WhatsAppButton (`src/components/WhatsAppButton.tsx`)
- Botón flotante (posición fija, esquina inferior derecha)
- Animación `wa-pulse` continua

---

### 3. Casos de éxito — `/casos`

Página autocontenida. Incluye `Navbar`, `Footer` y `WhatsAppButton`.

**Estructura:**

```
Hero de la página
  └─ Estadísticas agregadas (207 clics, 3,658 impresiones, 100+ páginas, 2 clientes)

Caso 01 — PromoGimmicks.com (fondo azul sutil)
  ├─ Contexto y desafío
  ├─ Intervención (auditoría técnica, 100+ páginas WooCommerce, keywords, blog, metadata)
  ├─ MetricCards: 196 clics · 3,127 impresiones · 6.3% CTR · 100+ páginas rankeando
  ├─ Gráfico de barras: tendencia mensual (ENE→ABR 2026, +527% ene→mar)
  ├─ Desglose por dispositivo: Desktop 70.9% · Móvil 29.1% · Pos. promedio #8.9
  ├─ Tabla top keywords (GSC verificado)
  └─ Tabla top páginas (GSC verificado)

Caso 02 — KronoSoloPromocionales (fondo neutro)
  ├─ Callout: sitio en etapa temprana de SEO
  ├─ Contexto y desafío
  ├─ Intervención (SEO de base, schema, sitemap, blog, arquitectura de contenido)
  ├─ MetricCards: 11 clics · 531 impresiones · #5 mejor posición (blog) · 2 posts top 15
  ├─ Gráfico de barras: crecimiento sostenido (ENE→ABR 2026)
  ├─ Desglose por dispositivo: Desktop 72.7% · Móvil 27.3% · Blog top #5
  └─ Tabla top páginas (GSC verificado)

CTA final
  └─ Solicitar auditoría SEO gratuita (WhatsApp)
```

Todos los datos provienen de Google Search Console (periodo Enero–Abril 2026).

---

### 4. Digital Assets — `/digital-assets/paw-art-studio`

Página de marketplace para la venta del proyecto **PawArtStudio**. No usa el `Navbar` global — tiene su propio header sticky con glass-morphism.

**Estructura:**

```
Breadcrumb banner (NexusDigital / Digital Assets / PawArtStudio)

Header sticky propio
  └─ Logo PawArtStudio · Nav interna (#oportunidad, #funciones, #incluye, #precios) · CTA "Comprar Ahora"

Hero
  ├─ Badge "Listado en NexusDigital · Digital Assets"
  ├─ Headline: "Lanza tu negocio de IA en 24h"
  ├─ Descripción: venta de camisetas con Google Gemini + Wompi/PayPhone
  ├─ CTAs: "Comprar Negocio por $300" · "Ver Demo en Vivo"
  ├─ Social proof: +40 emprendedores ya operando
  └─ Visual mockup con simulación de rendering Gemini

Métricas de oportunidad (#oportunidad)
  └─ +45% YoY crecimiento mascotas · 60–75% margen neto · #1 Tendencia IA Latam

Features Grid (#funciones)
  ├─ Arte Real con Google Gemini
  ├─ Mockups 3D Interactivos (React Three Fiber)
  ├─ Pagos Locales (Wompi CO + PayPhone EC)
  └─ Notificaciones Telegram

Flujo automatizado
  └─ Foto del cliente → Arte IA → Preview 3D → Orden lista para producción

Deliverables (#incluye)
  ├─ Código fuente completo (Next.js 15 + Prisma ORM)
  ├─ Documentación técnica
  ├─ Guía de despliegue (Netlify/Vercel en <10 min)
  └─ Soporte de lanzamiento vía Telegram

Precios (#precios)
  ├─ Plan DIY — $300 USD: código + docs (sin instalación)
  └─ Plan Full Concierge — $450 USD (más popular): todo lo anterior + setup completo + 1 mes soporte VIP

Footer propio
  └─ Legal · Contacto · Enlace de regreso a NexusDigital
```

---

## Estructura del proyecto

```
nexus-digital/
├── public/
│   ├── pillar-1-v2.png          # Imagen — Desarrollo de alto rendimiento
│   ├── pillar-2.png             # Imagen — SEO basado en datos
│   ├── pillar-3.png             # Imagen — Ecosistemas de crecimiento
│   ├── seo.png                  # Captura de métricas SEO reales
│   ├── gif-pawart.gif           # Demo animado — PawArtStudio
│   ├── gif-promogimmicks.gif    # Demo animado — PromoGimmicks
│   ├── gif-ksp.gif              # Demo animado — KS Promocionales
│   ├── gif-elfogon.gif          # Demo animado — El Fogón Gourmet
│   ├── gif-parasoles.gif        # Demo animado — Parasoles y Domos
│   └── gif-frases.gif           # Demo animado — FrasesRandom
├── src/
│   ├── app/
│   │   ├── layout.tsx                          # Layout raíz (metadata, fuentes, OrganizationSchema)
│   │   ├── page.tsx                            # Home — orquesta componentes
│   │   ├── globals.css                         # Estilos globales, tema y animaciones
│   │   ├── favicon.ico
│   │   ├── robots.ts                           # robots.txt generado por Next.js
│   │   ├── sitemap.ts                          # sitemap.xml generado por Next.js
│   │   ├── casos/
│   │   │   └── page.tsx                        # Página de casos de éxito SEO
│   │   └── digital-assets/
│   │       └── paw-art-studio/
│   │           └── page.tsx                    # Listing marketplace PawArtStudio
│   └── components/
│       ├── Navbar.tsx                          # Navbar fija con glass-morphism
│       ├── Hero.tsx                            # Sección hero
│       ├── PainPoints.tsx                      # Pain points del cliente
│       ├── Pillars.tsx                         # 3 pilares de servicio
│       ├── GrowthStack.tsx                     # Métricas y resultados
│       ├── Projects.tsx                        # Portfolio de proyectos reales
│       ├── Manifesto.tsx                       # Manifiesto estilo terminal
│       ├── CTA.tsx                             # Call-to-action principal
│       ├── Footer.tsx                          # Pie de página
│       ├── WhatsAppButton.tsx                  # Botón flotante de WhatsApp
│       └── schema/
│           ├── OrganizationSchema.tsx          # JSON-LD: Org + WebSite + WebPage
│           ├── ServicesSchema.tsx              # JSON-LD: servicios de la agencia
│           └── BreadcrumbSchema.tsx            # JSON-LD: breadcrumb por ruta
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
└── package.json
```

---

## SEO técnico

| Elemento | Implementación |
|---|---|
| Schema `Organization` | `OrganizationSchema.tsx` — presente en todas las páginas vía layout raíz |
| Schema `Service` | `ServicesSchema.tsx` — home únicamente |
| Schema `BreadcrumbList` | `BreadcrumbSchema.tsx` — home y páginas internas |
| Sitemap XML | `src/app/sitemap.ts` — generado por Next.js, 3 URLs indexadas |
| robots.txt | `src/app/robots.ts` — allow all, apunta al sitemap |
| Metadata por ruta | `export const metadata` en cada `page.tsx` con `title` y `description` únicos |
| Fuentes web | `next/font/google` — cargadas con display swap, sin layout shift |

---

## Tema y estilos

### Paleta de colores

| Variable | Valor | Uso |
|---|---|---|
| `--color-primary` | `#0072f5` | Acento principal |
| `--color-background-dark` | `#050608` | Fondo principal |
| `--color-surface` | `#111418` | Superficies y tarjetas |
| `--color-border-dim` | `#232931` | Bordes sutiles |
| `--color-background-light` | `#f5f7f8` | Fondo claro (alternativo) |

### Tipografía

- **Display:** Inter — títulos y texto general
- **Monospace:** Roboto Mono — etiquetas técnicas, tablas de datos, efecto terminal

### Animaciones personalizadas

| Nombre | Efecto | Uso |
|---|---|---|
| `nudge` | Movimiento horizontal sutil | Flechas en CTAs |
| `wa-pulse` | Pulso radial | Botón flotante de WhatsApp |

---

## Instalación

### Prerrequisitos

- Node.js 18.x o superior
- npm, yarn o pnpm

### Configuración

```bash
git clone <url-del-repositorio>
cd nexus-digital
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

---

## Scripts disponibles

| Script | Comando | Descripción |
|---|---|---|
| `dev` | `npm run dev` | Servidor de desarrollo con hot-reload |
| `build` | `npm run build` | Build de producción optimizada |
| `start` | `npm run start` | Servidor de producción |
| `lint` | `npm run lint` | Verificación de calidad de código |

---

## Despliegue

Optimizado para Vercel. Compatible con AWS Amplify, Netlify y Docker.

```bash
npm run build
npm run start
```

---

## Licencia

Proyecto privado. Todos los derechos reservados.
