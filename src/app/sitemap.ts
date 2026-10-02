import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { BLOG_POSTS } from '@/lib/data'

export const dynamic = 'force-static'

/** Most recent blog post date determines the "site last updated" signal. */
const latestBlogDate = BLOG_POSTS.reduce((latest, p) =>
  p.isoDate > latest ? p.isoDate : latest, '2026-01-01')

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly'; lastmod: string }[] = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly', lastmod: latestBlogDate },
    { path: '/fiyatlar/', priority: 0.9, changeFrequency: 'weekly', lastmod: '2026-08-21' },
    { path: '/kanallar/', priority: 0.8, changeFrequency: 'weekly', lastmod: '2026-08-21' },
    { path: '/hakkimizda/', priority: 0.6, changeFrequency: 'monthly', lastmod: '2026-08-21' },
    { path: '/sss/', priority: 0.7, changeFrequency: 'monthly', lastmod: '2026-08-21' },
    { path: '/iletisim/', priority: 0.6, changeFrequency: 'monthly', lastmod: '2026-08-21' },
    { path: '/blog/', priority: 0.6, changeFrequency: 'weekly', lastmod: latestBlogDate },
    { path: '/gizlilik-politikasi/', priority: 0.3, changeFrequency: 'yearly', lastmod: '2026-08-21' },
    { path: '/kullanim-sartlari/', priority: 0.3, changeFrequency: 'yearly', lastmod: '2026-08-21' },
    { path: '/iade-politikasi/', priority: 0.4, changeFrequency: 'yearly', lastmod: '2026-08-21' },
  ]

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: route.lastmod,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}/`,
      lastModified: post.isoDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ]
}
