"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDownRight } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => setIsVisible(true), [])

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-background">
      <div className="absolute inset-0">
        <Image
          src="/images/ramon-diaz.jpg"
          alt="Ramon Diaz dirigiendo a River Plate"
          fill
          className="object-cover object-top grayscale-[10%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      </div>
      <div className="absolute right-6 top-28 hidden md:block font-mono text-[10px] tracking-[0.35em] text-foreground/50 [writing-mode:vertical-rl]">
        RIVER PLATE · 1995 — 2014
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 pt-40 md:pb-24">
        <div className="max-w-3xl text-left">
          <p className={`text-primary font-medium tracking-[0.3em] uppercase text-xs md:text-sm mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Campaña popular · No oficial
          </p>
          <h1 className={`font-serif text-7xl sm:text-8xl md:text-9xl font-bold text-foreground leading-[0.82] tracking-tight transition-all duration-1000 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            RAMON
            <span className="block text-primary italic mt-3">a River</span>
          </h1>
          <div className={`mt-8 md:mt-10 flex flex-col md:flex-row md:items-end gap-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-foreground/75 text-lg md:text-xl max-w-md leading-relaxed text-balance">
              El único que puede devolverle la alegría a River. Que vuelva el Tricampeón.
            </p>
            <a href="#historia" className="group inline-flex items-center gap-3 text-primary text-sm font-semibold tracking-widest uppercase whitespace-nowrap">
              Conocé la historia
              <ArrowDownRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>
          </div>
        </div>
        <div className="mt-20 flex items-center gap-4 text-[10px] font-mono tracking-[0.25em] text-foreground/45 uppercase">
          <span className="h-px w-12 bg-primary" />
          Una idea que nació en la tribuna
        </div>
      </div>
    </section>
  )
}
