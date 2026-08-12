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
    <>
      <section className="pt-28 sm:pt-36 lg:pt-44 pb-28 sm:pb-36 lg:pb-44">
        <div className="container-main">
          <Breadcrumb
            items={[
              { label: 'Ana Sayfa', href: '/' },
              { label: 'Fiyatlar' },
            ]}
          />

          <div className="text-center mb-20 sm:mb-24 lg:mb-28">
            <span className="section-tag">Fiyatlandirma</span>
            <h1 className="heading-lg mb-4 sm:mb-5">Size Uygun Paketi Secin</h1>
            <p className="text-[#94a3b8] text-base sm:text-lg max-w-2xl mx-auto">
              Tum paketlerde 150.000+ kanal, 4K UHD kalite ve 7/24 destek dahildir.
              7 gun kosulsuz iade garantisi.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24 sm:mb-32 lg:mb-36">
            {PRICING_PACKAGES.map((pkg) => (
              <PricingCard key={pkg.name} pkg={pkg} />
            ))}
          </div>

          {/* Trial CTA */}
          <div className="relative overflow-hidden bg-gradient-to-r from-[#0f1d32] via-[#111f38] to-[#0f1d32] border border-[#1a2d4a] rounded-xl sm:rounded-2xl px-7 sm:px-10 lg:px-14 py-8 sm:py-10 lg:py-12 mb-24 sm:mb-32 lg:mb-36">
            <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-red-500/[0.04] rounded-full blur-[80px] pointer-events-none" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
              <div>
                <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2">Kararsiz misiniz? 24 saat ucretsiz deneyin.</h3>
                <p className="text-[#94a3b8] text-sm">Satin almadan once tum kanallari test edin.</p>
              </div>
              <a
                href={WHATSAPP_LINKS.test}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg shrink-0 w-full sm:w-auto"
              >
                Ucretsiz Test Al
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <div className="mb-14 sm:mb-16 lg:mb-20">
              <span className="section-tag">SSS</span>
              <h2 className="heading-md">Sikca Sorulan Sorular</h2>
            </div>
            <FaqAccordion items={HOMEPAGE_FAQ} />
          </div>
        </div>
      </section>
    </>
  )
}
