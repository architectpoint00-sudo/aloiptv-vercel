import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from './constants'

interface SeoParams {
  title: string
  description?: string
  path?: string
  noindex?: boolean
}

export function buildMetadata({ title, description, path = '/', noindex }: SeoParams): Metadata {
  const fullTitle = path === '/' ? title : `${title} — ${SITE_NAME}`
  const desc = description || SITE_DESCRIPTION
  const url = `${SITE_URL}${path}`

  return {
    title: { absolute: fullTitle },
    description: desc,
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: SITE_NAME,
      locale: 'tr_TR',
      type: 'website',
      images: [{ url: `${SITE_URL}/og-image-aloiptv.png`, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: [`${SITE_URL}/og-image-aloiptv.png`],
    },
    alternates: { canonical: url },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  }
}
