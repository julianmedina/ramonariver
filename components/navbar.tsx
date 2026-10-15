"use client"

import { useState, useEffect } from "react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-serif font-bold text-sm">R</span>
          </div>
          <span className="font-serif font-bold text-foreground text-lg tracking-tight">
            RamonAriver
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#historia"
            className="text-muted-foreground text-sm tracking-wide uppercase hover:text-foreground transition-colors"
          >
            Historia
          </a>
          <a
            href="#manifiesto"
            className="text-muted-foreground text-sm tracking-wide uppercase hover:text-foreground transition-colors"
          >
            Manifiesto
          </a>
          <a
            href="/guia"
            className="text-muted-foreground text-sm tracking-wide uppercase hover:text-foreground transition-colors"
          >
            Guía de Ramón
          </a>
          <div className="hidden lg:flex items-center gap-4 border-l border-border/60 pl-5">
            <a
              href="https://instagram.com/ramonariver_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-xs tracking-wider uppercase hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://x.com/ramonariver_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-xs tracking-wider uppercase hover:text-foreground transition-colors"
            >
              @ramonariver_
            </a>
            <a
              href="https://x.com/ramonseleccion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-xs tracking-wider uppercase hover:text-foreground transition-colors"
            >
              @ramonseleccion
            </a>
          </div>
          <a
            href="https://x.com/intent/tweet?text=Ramon%20a%20River%20%F0%9F%94%B4%E2%9A%AA%20El%20pueblo%20pide%20por%20Ramon%20Diaz%20%23RamonAriver%20%23RamonVolve&url=https://ramonariver.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            Sumate
          </a>
        </div>
      </div>
    </nav>
  )
}
