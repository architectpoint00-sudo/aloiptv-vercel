import { buildMetadata } from '@/lib/seo'
import { PRICING_PACKAGES, HOMEPAGE_FAQ } from '@/lib/data'
import { WHATSAPP_LINKS } from '@/lib/constants'
import PricingCard from '@/components/PricingCard'
import FaqAccordion from '@/components/FaqAccordion'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = buildMetadata({
  title: 'Fiyatlar',
  description:
    'AloIPTV fiyatlari. 1, 3, 6, 12 ve 24 aylik IPTV paketleri. 150.000+ kanal, 4K UHD, Anti-Freeze.',
  path: '/fiyatlar/',
})

export default function FiyatlarPage() {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 sm:pt-12 sm:pb-28">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Fiyatlar' },
          ]}
        />

        <div className="text-center mb-16">
          <p className="section-label">Fiyatlandirma</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Size Uygun Paketi Secin
          </h1>
          <p className="text-[#666] text-base max-w-2xl mx-auto">
            Tum paketlerde 150.000+ kanal, 4K UHD kalite ve 7/24 destek dahildir.
            7 gun koşulsuz iade garantisi.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {PRICING_PACKAGES.map((pkg) => (
            <PricingCard key={pkg.name} pkg={pkg} />
          ))}
        </div>

        {/* Trial CTA */}
        <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 mb-20">
          <div>
            <h3 className="text-white font-bold text-xl mb-1">Kararsiz misiniz? 24 saat ucretsiz deneyin.</h3>
            <p className="text-[#666] text-sm">Satin almadan once tum kanallari test edin.</p>
          </div>
          <a
            href={WHATSAPP_LINKS.test}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whitespace-nowrap px-8 py-3.5"
          >
            Ucretsiz Test Al
          </a>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Sikca Sorulan Sorular</h2>
          <FaqAccordion items={HOMEPAGE_FAQ} />
        </div>
      </section>
    </main>
  )
}
