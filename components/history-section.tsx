"use client"

import { useEffect, useRef, useState } from "react"

interface TimelineItem {
  year: string
  title: string
  description: string
}

const timeline: TimelineItem[] = [
  {
    year: "2008",
    title: "El pedido por la Seleccion",
    description:
      "El pueblo hincha pidio a Ramon Diaz como tecnico de la Seleccion Argentina. La pasion, la garra, el estilo ofensivo que siempre caracterizo a Ramon lo hacian el candidato ideal. Pero no pudo ser. El futbol argentino le dio la espalda a uno de sus mas grandes.",
  },
  {
    year: "2012",
    title: "La vuelta que pedimos",
    description:
      "River necesitaba un lider. Pedimos por Ramon y se dio. Volvio al Monumental con la banda roja en el corazon y demostro que la historia se escribe con goles, con titulos, con pasion. Nos devolvio la alegria cuando mas la necesitabamos.",
  },
  {
    year: "1996–1997",
    title: "La primera gran era",
    description:
      "Ramón lideró a River a la Copa Libertadores 1996, el Torneo Apertura 1996, el Torneo Clausura 1997, el Torneo Apertura 1997 y la Supercopa Sudamericana 1997. Una etapa inolvidable para la historia del club.",
  },
  {
    year: "1979–1991",
    title: "Cinco títulos como jugador",
    description:
      "Surgido de las divisiones inferiores, Ramón se consagró en sus dos ciclos en River: Torneo Metropolitano 1979, Torneo Nacional 1979, Torneo Metropolitano 1980, Torneo Nacional 1981 y Torneo Apertura 1991, donde además fue el máximo goleador.",
  },
  {
    year: "1999–2002",
    title: "El campeón que siempre vuelve",
    description:
      "En su segunda etapa, Ramón volvió a hacer campeón a River con el Torneo Apertura 1999 y el Torneo Clausura 2002, confirmando su lugar entre los técnicos más ganadores del club.",
  },
  {
    year: "2014",
    title: "La última alegría",
    description:
      "En su tercera etapa, Ramón conquistó el Torneo Final 2014 y la Copa Campeonato 2014. River volvió a celebrar y el pueblo volvió a creer.",
  },
  {
    year: "2026",
    title: "Estamos de vuelta",
    description:
      "River necesita a Ramon otra vez. El hincha lo pide, el corazon lo exige. No hay otro tecnico que entienda lo que significa vestir la banda roja. Es momento de que Ramon vuelva a casa.",
  },
]

export function HistorySection() {
  return (
    <section id="historia" className="relative py-24 md:py-36 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Una historia de pasion
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight text-balance">
            Siempre pedimos
            <br />
            <span className="text-primary italic">por Ramon</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="flex flex-col gap-20">
            {timeline.map((item, index) => (
              <TimelineCard key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 md:-translate-x-1.5 top-2 md:top-1/2 md:-translate-y-1.5 z-10" />

      {/* Year side */}
      <div
        className={`flex-1 pl-12 md:pl-0 ${isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}
      >
        <span
          className={`font-serif text-5xl md:text-7xl font-bold text-primary/20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {item.year}
        </span>
      </div>

      {/* Content side */}
      <div
        className={`flex-1 pl-12 md:pl-0 ${isEven ? "md:pl-16" : "md:pr-16 md:text-right"} transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
          {item.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          {item.description}
        </p>
      </div>
    </div>
  )
}
