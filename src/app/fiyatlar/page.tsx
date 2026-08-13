import { buildMetadata } from '@/lib/seo'
import { PRICING_PACKAGES, HOMEPAGE_FAQ } from '@/lib/data'
import { WHATSAPP_LINKS } from '@/lib/constants'
import PricingCard from '@/components/PricingCard'
import FaqAccordion from '@/components/FaqAccordion'
import Breadcrumb from '@/components/Breadcrumb'
import { FaqJsonLd, PricingJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Fiyatlar',
  description:
    'AloIPTV fiyatları. 1, 3, 6, 12 ve 24 aylık IPTV paketleri. 150.000+ kanal, 4K UHD, Anti-Freeze.',
  path: '/fiyatlar/',
})

export default function FiyatlarPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <PricingJsonLd packages={PRICING_PACKAGES} />
      <FaqJsonLd items={HOMEPAGE_FAQ} />
      <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Fiyatlar' }]} />

      <header className="mx-auto mb-14 max-w-2xl text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          Size Uygun Paketi Seçin
        </h1>
        <p className="mt-4 text-base text-gray-400 sm:text-lg">
          Tüm paketlerde 150.000+ kanal, 4K UHD kalite ve 7/24 destek dahildir.
          7 gün koşulsuz iade garantisi.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PRICING_PACKAGES.map((pkg) => (
          <PricingCard key={pkg.name} pkg={pkg} />
        ))}
      </div>

      {/* Trial CTA */}
      <section className="relative mt-20 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111827] via-[#0d0d14] to-[#111827] p-8 sm:p-12">
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]" />
        <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-bold text-white sm:text-xl lg:text-2xl">
              Kararsız mısınız? 24 saat ücretsiz deneyin.
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Satın almadan önce tüm kanalları test edin.
            </p>
          </div>
          <a
            href={WHATSAPP_LINKS.test}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-transform duration-200 hover:scale-105 sm:w-auto"
          >
            Ücretsiz Test Al
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="pricing-faq" className="mx-auto mt-20 max-w-3xl">
        <h2 id="pricing-faq" className="mb-14 text-center text-3xl font-extrabold text-white sm:text-4xl">
          Sıkça Sorulan Sorular
        </h2>
        <FaqAccordion items={HOMEPAGE_FAQ} />
      </section>
    </div>
  )
}
