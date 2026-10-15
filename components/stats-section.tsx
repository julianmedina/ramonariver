"use client"

import { useEffect, useRef, useState } from "react"
import { Trophy, Heart, Star, Users } from "lucide-react"

const stats = [
  { icon: Trophy, value: "8", label: "Títulos como DT de River", suffix: "" },
  { icon: Heart, value: "100", label: "Hincha de corazon", suffix: "%" },
  { icon: Star, value: "1", label: "Idolo eterno", suffix: "" },
  { icon: Users, value: "90", label: "Millones lo piden", suffix: "M" },
]

export function StatsSection() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Diagonal red accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[number]
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

  const Icon = stat.icon

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
      <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
        {stat.value}
        <span className="text-primary">{stat.suffix}</span>
      </div>
      <p className="text-muted-foreground text-sm md:text-base mt-2 tracking-wide uppercase">
        {stat.label}
      </p>
    </div>
  )
}
