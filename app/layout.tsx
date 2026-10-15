import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ramonariver.com'),
  title: {
    default: 'Ramón Díaz a River | El único que puede devolverle la alegría',
    template: '%s | Ramón Díaz a River',
  },
  description: 'Ramón Díaz a River: el único que puede devolverle la alegría a River Plate. Que vuelva el Tricampeón en 2026.',
  keywords: ['Ramón Díaz', 'Ramón Díaz River', 'Ramón a River', 'DT de River', 'River Plate 2026', 'Tricampeón de River'],
  authors: [{ name: 'Ramón a River' }],
  creator: 'Ramón a River',
  publisher: 'Ramón a River',
  generator: 'v0.app',
  alternates: { canonical: 'https://www.ramonariver.com' },
  openGraph: {
    title: 'Ramón Díaz a River | El único que puede devolverle la alegría',
    description: 'Ramón Díaz a River: el único que puede devolverle la alegría a River Plate. Que vuelva el Tricampeón en 2026.',
    type: 'website',
    url: 'https://www.ramonariver.com',
    siteName: 'Ramón a River',
    locale: 'es_AR',
    images: [{ url: '/images/ramon-profile.jpg', width: 1200, height: 630, alt: 'Ramón Díaz, ídolo y campeón de River Plate' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramón Díaz a River | El único que puede devolverle la alegría',
    description: 'Ramón Díaz a River: que vuelva el Tricampeón en 2026.',
    images: ['/images/ramon-profile.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#E4002B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_inter.variable} ${_playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
