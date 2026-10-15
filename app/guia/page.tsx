import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { longTailPages } from '@/lib/long-tail-pages'

export const metadata: Metadata = {
  title: 'Guía de Ramón Díaz y River Plate',
  description: 'Toda la información sobre Ramón Díaz, sus títulos como jugador y DT de River, sus cinco etapas y el pedido por su regreso en 2026.',
  alternates: { canonical: 'https://www.ramonariver.com/guia' },
}

export default function GuideIndex() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-36">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-primary">Información y memoria riverplatense</p>
        <h1 className="max-w-4xl font-serif text-5xl font-bold leading-tight md:text-8xl">La guía de <span className="text-primary">Ramón Díaz</span> y River</h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">Títulos, historia, estadísticas y las razones por las que los hinchas piden que vuelva el Tricampeón en 2026.</p>
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {longTailPages.map((page) => (
            <Link key={page.slug} href={`/guia/${page.slug}`} className="group border border-border p-6 transition-colors hover:border-primary">
              <h2 className="font-serif text-2xl font-bold transition-colors group-hover:text-primary">{page.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{page.description}</p>
              <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-widest text-primary">Leer más</span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
