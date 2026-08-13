import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { BLOG_POSTS } from '@/lib/data'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: { path: string; priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' }[] = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/fiyatlar/', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/kanallar/', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/hakkimizda/', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/sss/', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/iletisim/', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/blog/', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/gizlilik-politikasi/', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/kullanim-sartlari/', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/iade-politikasi/', priority: 0.4, changeFrequency: 'yearly' },
  ]

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ]
}
