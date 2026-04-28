const projects = [
  {
    id: "pawart",
    featured: true,
    title: "PawArtStudio",
    gif: "/gif-pawart.gif",
    categories: ["AI · E-Commerce", "3D", "Pagos"],
    description:
      "Tienda de camisetas con arte generado por IA a partir de fotos de mascotas. Vista previa 3D del producto, pagos integrados multi-país (Wompi Colombia + PayPhone Ecuador) y notificaciones automáticas por Telegram al confirmar cada pedido.",
    stack: ["Next.js 15", "Gemini AI", "React Three Fiber", "Wompi", "Tailwind CSS"],
    github: null,
    demo: "#",
  },
  {
    id: "promogimmicks",
    title: "PromoGimmicks",
    gif: "/gif-promogimmicks.gif",
    categories: ["E-Commerce", "Landing Page"],
    description:
      "Catálogo digital de más de 1,000 productos promocionales personalizables para Colombia y Ecuador. Tienda estática con formulario de contacto y despliegue en Netlify.",
    stack: ["Next.js 14", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/edt092/promogimmicks",
    demo: "#",
  },
  {
    id: "ksp",
    title: "KS Promocionales",
    gif: "/gif-ksp.gif",
    categories: ["E-Commerce", "Editor Visual"],
    description:
      "Tienda de productos promocionales con editor visual de logos interactivo sobre canvas. Los clientes diseñan su producto en tiempo real y cotizan directo por WhatsApp.",
    stack: ["Next.js 14", "React-Konva", "Framer Motion", "Tailwind"],
    github: null,
    demo: "#",
  },
  {
    id: "elfogon",
    title: "El Fogón Gourmet",
    gif: "/gif-elfogon.gif",
    categories: ["Restaurant", "Landing Page"],
    description:
      "Landing page de alta conversión para restaurante gourmet en Bucaramanga. Menú interactivo, reseñas de clientes, mapa de ubicación y CTA directo a WhatsApp.",
    stack: ["Next.js 16", "React 19", "Framer Motion", "Tailwind"],
    github: null,
    demo: "#",
  },
  {
    id: "parasoles",
    title: "Parasoles y Domos San Andrés",
    gif: "/gif-parasoles.gif",
    categories: ["Corporate", "SEO"],
    description:
      "Plataforma corporativa para empresa de parasoles y domos industriales en Bucaramanga. SEO local optimizado, conversión directa por WhatsApp y arquitectura modular con Next.js 15.",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind v4"],
    github: null,
    demo: "#",
  },
  {
    id: "frases",
    title: "FrasesRandom",
    gif: "/gif-frases.gif",
    categories: ["React App", "Vite"],
    description:
      "App web para descubrir frases inspiradoras aleatorias. Integra ZenQuotes API, favoritos en localStorage, compartir en Twitter/WhatsApp y modo oscuro. Fallback local ante fallos de API.",
    stack: ["React 19", "Vite 7", "CSS puro"],
    github: "https://github.com/edt092",
    demo: "#",
  },
];

function StackPill({ label }: { label: string }) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-widest text-primary/80 border border-primary/20 bg-primary/5 px-2 py-0.5 rounded">
      {label}
    </span>
  );
}

function CategoryPill({ label }: { label: string }) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400 border border-border-dim bg-surface px-2 py-0.5 rounded">
      {label}
    </span>
  );
}

function FeaturedProject({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="rounded-xl overflow-hidden border border-border-dim bg-surface group hover:border-primary/40 transition-colors duration-300 mb-6">
      <div className="grid md:grid-cols-2">
        <div className="relative overflow-hidden min-h-[260px] aspect-video md:aspect-auto">
          <img
            src={project.gif}
            alt={`${project.title} demo`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-background-dark/90 border border-primary/30 text-primary font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded">
            <span className="material-symbols-outlined" style={{ fontSize: 12 }}>
              star
            </span>
            // destacado
          </div>
        </div>

        <div className="p-8 flex flex-col justify-center">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.categories.map((c) => (
              <CategoryPill key={c} label={c} />
            ))}
          </div>
          <h3 className="text-2xl font-black mb-3">{project.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((s) => (
              <StackPill key={s} label={s} />
            ))}
          </div>
          <div className="flex items-center gap-4">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener"
                className="text-gray-500 hover:text-white transition-colors inline-flex items-center gap-1.5 text-sm font-mono"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                  code
                </span>
                GitHub
              </a>
            ) : (
              <span className="text-gray-600 text-sm font-mono inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                  lock
                </span>
                GitHub próximamente
              </span>
            )}
            {project.demo !== "#" && (
              <a
                href={project.demo}
                className="text-primary hover:brightness-125 transition-all inline-flex items-center gap-1.5 text-sm font-bold"
              >
                Demo
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
                  open_in_new
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="rounded-xl overflow-hidden border border-border-dim bg-surface group hover:border-primary/40 transition-colors duration-300 flex flex-col">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={project.gif}
          alt={`${project.title} demo`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.categories.map((c) => (
            <CategoryPill key={c} label={c} />
          ))}
        </div>
        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((s) => (
            <StackPill key={s} label={s} />
          ))}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-border-dim">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener"
              className="text-gray-500 hover:text-white transition-colors inline-flex items-center gap-1.5 text-sm font-mono"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                code
              </span>
              GitHub
            </a>
          ) : (
            <span className="text-gray-600 text-sm font-mono inline-flex items-center gap-1.5">
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                schedule
              </span>
              Repo privado
            </span>
          )}
          <a
            href={project.demo}
            className="text-primary hover:brightness-125 transition-all text-sm font-bold inline-flex items-center gap-1"
          >
            Ver proyecto
            <span className="material-symbols-outlined" style={{ fontSize: 15 }}>
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;
  const gridProjects = rest.slice(0, 4);
  const miniProject = rest[4];

  return (
    <section className="py-24 px-6" id="proyectos">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="font-mono text-primary text-xs mb-2 uppercase tracking-widest">
              {"// trabajos_seleccionados"}
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              Proyectos Reales
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl">
              Productos en producción entregados a clientes. Código limpio, rendimiento medible.
            </p>
          </div>
          <a
            href="https://github.com/edt092"
            target="_blank"
            rel="noopener"
            className="hidden md:flex items-center gap-2 text-primary text-sm font-bold hover:brightness-125 transition-all group"
          >
            Ver GitHub
            <span
              className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
              style={{ fontSize: 18 }}
            >
              arrow_forward
            </span>
          </a>
        </div>

        <FeaturedProject project={featured} />

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {gridProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {miniProject && (
          <div className="max-w-lg mx-auto">
            <ProjectCard project={miniProject} />
          </div>
        )}
      </div>
    </section>
  );
}
