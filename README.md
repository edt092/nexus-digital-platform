<div align="center">

# NexusDigital | Growth Engineering

**Landing page de alto rendimiento para una agencia de ingeniería de crecimiento digital.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## Descripción

NexusDigital es una landing page profesional orientada a la conversión, diseñada para una agencia de growth engineering que ofrece servicios de desarrollo web de alto rendimiento, SEO basado en datos y ecosistemas de automatización. El sitio está dirigido a mercados hispanohablantes (España, Ecuador y Colombia).

## Tech Stack

| Tecnología | Versión | Propósito |
|---|---|---|
| **Next.js** | 16.1.6 | Framework de React con SSR y optimización de rendimiento |
| **React** | 19.2.3 | Biblioteca de UI |
| **TypeScript** | 5.x | Tipado estático |
| **Tailwind CSS** | 4.x | Framework de estilos utility-first |
| **PostCSS** | - | Procesamiento de CSS |
| **ESLint** | 9.x | Linting y calidad de código |

**Recursos externos:**
- Google Fonts (Inter, Roboto Mono)
- Material Symbols Outlined (iconografía)

## Estructura del Proyecto

```
nexus-digital/
├── public/                     # Activos estáticos
│   ├── pillar-1-v2.png         # Imagen - Desarrollo de alto rendimiento
│   ├── pillar-2.png            # Imagen - SEO basado en datos
│   ├── pillar-3.png            # Imagen - Ecosistemas de crecimiento
│   └── seo.png                 # Captura de métricas SEO
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raíz (metadata, fuentes, idioma)
│   │   ├── page.tsx            # Página principal - orquesta componentes
│   │   ├── globals.css         # Estilos globales, tema y animaciones
│   │   └── favicon.ico         # Favicon del sitio
│   └── components/
│       ├── Navbar.tsx           # Barra de navegación fija con glass-morphism
│       ├── Hero.tsx             # Sección hero con propuesta de valor
│       ├── PainPoints.tsx       # Diagnóstico de puntos de dolor del cliente
│       ├── Pillars.tsx          # Los 3 pilares de servicio
│       ├── GrowthStack.tsx      # Métricas y resultados comprobables
│       ├── Manifesto.tsx        # Manifiesto con estética de terminal
│       ├── CTA.tsx              # Call-to-action de consultoría
│       ├── Footer.tsx           # Pie de página
│       └── WhatsAppButton.tsx   # Botón flotante de WhatsApp
├── next.config.ts              # Configuración de Next.js
├── tsconfig.json               # Configuración de TypeScript
├── postcss.config.mjs          # Configuración de PostCSS
├── eslint.config.mjs           # Configuración de ESLint
└── package.json                # Dependencias y scripts
```

## Componentes

| Componente | Descripción |
|---|---|
| `Navbar` | Navegación fija con efecto glass-morphism, enlaces internos y CTA principal hacia WhatsApp |
| `Hero` | Sección principal con headline, indicador de estado animado y dos CTAs |
| `PainPoints` | Tres tarjetas que identifican problemas comunes: sitios lentos, SEO inexistente y embudos rotos |
| `Pillars` | Tres pilares de servicio: desarrollo de alto rendimiento, SEO con datos y ecosistemas de automatización |
| `GrowthStack` | Sección de resultados con imagen de métricas reales y 4 KPIs destacados |
| `Manifesto` | Declaración de valores con diseño estilo terminal |
| `CTA` | Sección de conversión con oferta de consultoría gratuita y checklist SEO |
| `Footer` | Pie de página con enlaces legales e indicador de estado del sistema |
| `WhatsAppButton` | Botón flotante con animación de pulso que enlaza a WhatsApp |

## Instalación

### Prerrequisitos

- Node.js 18.x o superior
- npm, yarn o pnpm

### Configuración

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd nexus-digital

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Scripts Disponibles

| Script | Comando | Descripción |
|---|---|---|
| `dev` | `npm run dev` | Inicia el servidor de desarrollo con hot-reload |
| `build` | `npm run build` | Genera la build de producción optimizada |
| `start` | `npm run start` | Inicia el servidor de producción |
| `lint` | `npm run lint` | Ejecuta ESLint para verificar calidad de código |

## Tema y Estilos

### Paleta de Colores

| Variable | Valor | Uso |
|---|---|---|
| `--color-primary` | `#0072f5` | Color de acento principal |
| `--color-background-dark` | `#050608` | Fondo principal |
| `--color-surface` | `#111418` | Superficies y tarjetas |
| `--color-border-dim` | `#232931` | Bordes sutiles |
| `--color-background-light` | `#f5f7f8` | Fondo claro (alternativo) |

### Tipografía

- **Display:** Inter — fuente principal para títulos y texto
- **Monospace:** Roboto Mono — texto técnico y decorativo

### Animaciones Personalizadas

- `nudge` — Movimiento horizontal sutil en flechas de CTA
- `wa-pulse` — Efecto de pulso en el botón flotante de WhatsApp

## Despliegue

La aplicación está optimizada para desplegarse en [Vercel](https://vercel.com/):

```bash
# Build de producción
npm run build

# Iniciar en producción
npm run start
```

También es compatible con cualquier plataforma que soporte Next.js (AWS Amplify, Netlify, Docker, etc.).

## Licencia

Proyecto privado. Todos los derechos reservados.
