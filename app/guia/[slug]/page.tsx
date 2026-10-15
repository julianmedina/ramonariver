import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { getLongTailPage, longTailSlugs } from '@/lib/long-tail-pages'

const siteUrl = 'https://www.ramonariver.com'

export function generateStaticParams() {
  return longTailSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = getLongTailPage(slug)
  if (!page) return {}
  return {
    title: `${page.title} | Ramón Díaz a River`,
    description: page.description,
    alternates: { canonical: `${siteUrl}/guia/${page.slug}` },
    openGraph: {
      title: `${page.title} | Ramón Díaz a River`,
      description: page.description,
      url: `${siteUrl}/guia/${page.slug}`,
      siteName: 'Ramón a River',
      locale: 'es_AR',
      type: 'article',
      images: [{ url: `${siteUrl}/images/ramon-profile.jpg`, width: 1200, height: 630, alt: 'Ramón Díaz, ídolo y campeón de River Plate' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${page.title} | Ramón Díaz a River`,
      description: page.description,
      images: [`${siteUrl}/images/ramon-profile.jpg`],
    },
  }
}

export default async function LongTailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getLongTailPage(slug)
  if (!page) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.title,
    description: page.description,
    inLanguage: 'es-AR',
    author: { '@type': 'Organization', name: 'Ramón a River', url: siteUrl },
    publisher: { '@type': 'Organization', name: 'Ramón a River', url: siteUrl },
    image: `${siteUrl}/images/ramon-profile.jpg`,
    mainEntityOfPage: `${siteUrl}/guia/${page.slug}`,
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <article className="mx-auto max-w-4xl px-6 pb-24 pt-36">
        <nav aria-label="Migas de pan" className="mb-10 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-primary">Inicio</Link>
          <span className="mx-2">/</span>
          <span>Guía Ramón Díaz</span>
        </nav>
        <header className="border-b border-border pb-12">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-primary">Ramón Díaz · River Plate</p>
          <h1 className="font-serif text-4xl font-bold leading-tight md:text-7xl">{page.title}</h1>
          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-muted-foreground">{page.intro}</p>
        </header>
        <div className="mt-12 space-y-12">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-3xl font-bold md:text-4xl">{section.heading}</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">{section.body}</p>
            </section>
          ))}
        </div>
        <aside className="mt-16 border-l-4 border-primary bg-secondary p-6">
          <p className="font-serif text-2xl font-bold">El único que puede devolverle la alegría a River es Ramón Díaz.</p>
          <p className="mt-2 text-muted-foreground">Que vuelva el Tricampeón. 2026.</p>
        </aside>
        <div className="mt-16 flex flex-wrap gap-4 border-t border-border pt-8">
          <Link href="/" className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Volver a Ramón a River</Link>
          <a href="https://www.instagram.com/ramonariver_/" target="_blank" rel="noreferrer" className="rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">Seguir en Instagram</a>
          <a href="https://x.com/ramonariver_" target="_blank" rel="noreferrer" className="rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">Seguir en X</a>
        </div>
      </article>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  )
}
