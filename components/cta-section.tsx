"use client"

import { useEffect, useRef, useState } from "react"

export function CtaSection() {
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
    <section className="relative py-32 md:py-44 bg-primary overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 40px)",
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.9] tracking-tight">
            RAMON
            <br />
            <span className="italic">VOLVÉ</span>
          </h2>
          <p className="mt-8 text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            El Monumental te espera. El pueblo de River te necesita.
            Es hora de volver a casa.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://x.com/intent/tweet?text=Ramon%20a%20River%20%F0%9F%94%B4%E2%9A%AA%20El%20pueblo%20pide%20por%20Ramon%20Diaz%20%23RamonAriver%20%23RamonVolve&url=https://ramonariver.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Sumate al pedido
            </a>
            <a
              href="#historia"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground/50 text-primary-foreground px-8 py-4 text-sm font-bold tracking-widest uppercase hover:border-primary-foreground transition-colors"
            >
              Leer la historia
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
