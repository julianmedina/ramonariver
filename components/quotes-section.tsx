"use client"

import { useEffect, useRef, useState } from "react"

const quotes = [
  {
    text: "Ramon es River y River es Ramon. No existe otro tecnico que entienda como el lo que significa esta camiseta.",
    author: "Hincha del Monumental",
  },
  {
    text: "Con Ramon en el banco, River juega a otra cosa. Es pasion pura, es ataque, es no rendirse nunca. Eso es River.",
    author: "La voz del pueblo",
  },
  {
    text: "Ya lo pedimos una vez y volvio. Ya demostramos que la voluntad del hincha es mas fuerte que cualquier dirigencia.",
    author: "Gallina de corazon",
  },
]

export function QuotesSection() {
  return (
    <section className="py-24 md:py-36 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            La voz del hincha
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Lo que dice <span className="text-primary italic">el pueblo</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <QuoteCard key={index} quote={quote} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function QuoteCard({
  quote,
  index,
}: {
  quote: (typeof quotes)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative p-8 md:p-10 bg-secondary border border-border transition-all duration-700 hover:border-primary/40 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <span className="font-serif text-6xl text-primary/30 absolute top-4 left-6 leading-none">
        {'"'}
      </span>
      <blockquote className="relative z-10">
        <p className="text-foreground leading-relaxed text-base md:text-lg mb-6 pt-8">
          {quote.text}
        </p>
        <footer className="text-primary text-sm font-medium tracking-wide uppercase">
          {"- "}{quote.author}
        </footer>
      </blockquote>
    </div>
  )
}
