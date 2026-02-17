import Image from "next/image";

const pillars = [
  {
    number: "01",
    tag: "engineering",
    title: "High-Performance Dev",
    description:
      "Web/Apps escalables con arquitectura de alto rendimiento. Código optimizado para conversión masiva.",
    image: "/pillar-1-v2.png",
    alt: "High performance code and technical architecture",
    extraClass: "",
  },
  {
    number: "02",
    tag: "visibility",
    title: "Data-Driven SEO",
    description:
      "Dominio de buscadores mediante ingeniería de datos. No adivinamos, procesamos para ganar posiciones.",
    image: "/pillar-2.png",
    alt: "Data visualization and digital marketing analytics",
    extraClass: "",
  },
  {
    number: "03",
    tag: "automation",
    title: "Growth Ecosystems",
    description:
      "Automatización de ventas y ecosistemas blindados que operan 24/7 sin fallos ni cuellos de botella.",
    image: "/pillar-3.png",
    alt: "Global network connectivity and automation",
    extraClass: "",
  },
];

export default function Pillars() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tighter">
            Nuestros 3 Pilares de Crecimiento
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className={`flex flex-col gap-6 ${pillar.extraClass}`}
            >
              <div className="aspect-video rounded-xl overflow-hidden border border-border-dim bg-surface group relative">
                <Image
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                  src={pillar.image}
                  alt={pillar.alt}
                  width={600}
                  height={338}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
              </div>
              <div>
                <div className="font-mono text-primary text-xs mb-2 uppercase">
                  {pillar.number} {"// "}{pillar.tag}
                </div>
                <h4 className="text-2xl font-black uppercase mb-3 italic">
                  {pillar.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
