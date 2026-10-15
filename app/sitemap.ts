import type { MetadataRoute } from 'next'
import { longTailSlugs } from '@/lib/long-tail-pages'

const siteUrl = 'https://www.ramonariver.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: siteUrl, priority: 1, changeFrequency: 'weekly' as const },
    ...longTailSlugs.map((slug) => ({ url: `${siteUrl}/guia/${slug}`, priority: 0.8, changeFrequency: 'monthly' as const })),
  ]
  return pages.map((page) => ({ ...page, lastModified: new Date() }))
}
