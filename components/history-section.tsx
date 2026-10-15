"use client"

import { useEffect, useRef, useState } from "react"

interface TimelineItem {
  year: string
  title: string
  description: string
}

const timeline: TimelineItem[] = [
  {
    year: "1978–1982",
    title: "Primer ciclo: el pibe de River",
    description:
      "Surgido de las divisiones inferiores, Ramón deslumbró como delantero y conquistó cuatro títulos: Torneo Metropolitano 1979, Torneo Nacional 1979, Torneo Metropolitano 1980 y Torneo Nacional 1981.",
  },
  {
    year: "1991–1993",
    title: "Segundo ciclo: goleador campeón",
    description:
      "Ramón regresó bajo la dirección técnica de Daniel Passarella, fue el máximo goleador del Torneo Apertura 1991 con 14 tantos y volvió a levantar una copa con River.",
  },
  {
    year: "1995–2000",
    title: "Tercer ciclo: la primera gran era",
    description:
      "Su etapa más gloriosa como entrenador: Copa Libertadores 1996, Torneo Apertura 1996, Torneo Clausura 1997, Torneo Apertura 1997, Supercopa Sudamericana 1997 y Torneo Apertura 1999. El tricampeón.",
  },
  {
    year: "2001–2002",
    title: "Cuarto ciclo: campeón otra vez",
    description:
      "Ramón volvió a mediados de 2001 y armó un equipo vistoso que se consagró campeón del Torneo Clausura 2002, confirmando su lugar entre los técnicos más ganadores de la historia de River.",
  },
  {
    year: "2012–2014",
    title: "Quinto ciclo: devolverle la alegría",
    description:
      "Asumió a fines de 2012, devolvió a River el protagonismo y conquistó el Torneo Final 2014 y la Copa Campeonato 2014. Cinco etapas, catorce títulos y una misma historia: siempre campeón.",
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
            5 etapas
            <br />
            <span className="text-primary italic">Siempre campeón</span>
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
