zzimport { SITE_NAME, SITE_URL, SITE_DESCRIPTION, WHATSAPP_NUMBER } from '@/lib/constants'
import type { FaqItem, PricingPackage, BlogPost } from '@/lib/data'

function Script({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/** Organization + WebSite — rendered once, site-wide. */
export function OrganizationJsonLd() {
  return (
    <>
      <Script
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: SITE_NAME,
          url: SITE_URL,
          description: SITE_DESCRIPTION,
          logo: `${SITE_URL}/og-image-aloiptv.png`,
          foundingDate: '2019',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: WHATSAPP_NUMBER,
            contactType: 'customer service',
            availableLanguage: ['Turkish', 'English'],
          },
        }}
      />
      <Script
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: SITE_URL,
          name: SITE_NAME,
          description: SITE_DESCRIPTION,
          publisher: { '@id': `${SITE_URL}/#organization` },
        }}
      />
    </>
  )
}

/** FAQPage — helps surface rich results for question queries. */
export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  return (
    <Script
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      }}
    />
  )
}

/** Product with an offer catalogue for the subscription packages. */
export function PricingJsonLd({ packages }: { packages: PricingPackage[] }) {
  const paid = packages.filter((p) => !p.isFree)

  return (
    <Script
      data={{
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: `${SITE_NAME} Premium IPTV Aboneliği`,
        description: SITE_DESCRIPTION,
        brand: { '@type': 'Brand', name: SITE_NAME },
        image: `${SITE_URL}/og-image-aloiptv.png`,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '1850',
          bestRating: '5',
          worstRating: '1',
        },
        offers: paid.map((pkg) => ({
          '@type': 'Offer',
          name: pkg.name,
          price: pkg.price,
          priceCurrency: 'TRY',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/fiyatlar/`,
        })),
      }}
    />
  )
}


const TR_MONTHS: Record<string, string> = {
  Ocak: '01', Subat: '02', Mart: '03', Nisan: '04',
  Mayis: '05', Haziran: '06', Temmuz: '07', Agustos: '08',
  Eylul: '09', Ekim: '10', Kasim: '11', Aralik: '12',
}

function toISODate(tr: string): string {
  const [day, month, year] = tr.split(' ')
  const normalized = month.replace(/\u015f/g, 's').replace(/\u0131/g, 'i').replace(/\u00fc/g, 'u').replace(/\u011f/g, 'g').replace(/\u00e7/g, 'c')
  const mm = TR_MONTHS[normalized] || '01'
  return `${year}-${mm}-${day.padStart(2, '0')}`
}

/** BlogPosting for article pages. */
export function BlogPostingJsonLd({ post }: { post: BlogPost }) {
  return (
    <Script
      data={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: toISODate(post.date),
        dateModified: toISODate(post.date),
        inLanguage: 'tr-TR',
        url: `${SITE_URL}/blog/${post.slug}/`,
        mainEntityOfPage: `${SITE_URL}/blog/${post.slug}/`,
        image: `${SITE_URL}/og-image-aloiptv.png`,
        inLanguage: 'tr-TR',
        author: { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
      }}
    />
  )
}

/** BreadcrumbList — mirrors the visual breadcrumb for search engines. */
export function BreadcrumbJsonLd({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <Script
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.label,
          ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
        })),
      }}
    />
  )
}
