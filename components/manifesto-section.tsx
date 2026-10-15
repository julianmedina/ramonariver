"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function ManifestoSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="manifiesto" className="py-24 md:py-36 bg-secondary relative overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/ramon-diaz.jpg"
                alt="Ramon Diaz dirigiendo a River Plate"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-primary/20" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary" />
          </div>

          {/* Text */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6">
              Manifiesto
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8 text-balance">
              Solo hay un hombre que puede devolvernos la
              <span className="text-primary italic"> alegria</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                River Plate no es solo un club. Es un sentimiento que nos corre por las venas.
                Y cuando ese sentimiento necesita un lider, solo hay un nombre que resuena en
                cada rincon del Monumental.
              </p>
              <p>
                Hace muchos anos pedimos por Ramon para la Seleccion Argentina. No pudimos.
                El futbol le cerro las puertas al hombre que mas lo merecia. Pero no nos
                rendimos.
              </p>
              <p>
                Luego pedimos por la vuelta de Ramon a River. Y se dio. Volvio, y con el
                volvieron los titulos, la garra, la pasion. El Monumental se lleno de alegria
                otra vez.
              </p>
              <p className="text-foreground font-semibold text-lg md:text-xl">
                Hoy estamos de vuelta. Porque River necesita a Ramon. Porque nosotros
                necesitamos a Ramon. Porque la historia se repite, y esta vez no vamos a
                parar hasta que se de.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
