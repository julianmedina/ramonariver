export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-xs">R</span>
            </div>
            <span className="font-serif font-bold text-foreground text-sm tracking-tight">
              RamonAriver.com
            </span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            Hecho con el corazon por hinchas de River Plate.
            <span className="text-primary mx-1">{'♥'}</span>
            No es un sitio oficial del Club Atletico River Plate.
          </p>

          <div className="flex flex-col items-center gap-3 text-xs tracking-wider uppercase">
            <span className="text-muted-foreground">Seguinos en</span>
            <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/ramonariver_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram de Ramon a River"
            >
              Instagram
            </a>
            <a
              href="https://x.com/ramonariver_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="X de Ramon a River"
            >
              X / @ramonariver_
            </a>
            <a
              href="https://x.com/ramonseleccion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="X de Ramon Seleccion"
            >
              @ramonseleccion
            </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
