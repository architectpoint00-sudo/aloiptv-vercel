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
      <section className="pt-28 sm:pt-36 lg:pt-44 pb-24 sm:pb-32 lg:pb-40">
        <div className="container-main">
          <Breadcrumb
            items={[
              { label: 'Ana Sayfa', href: '/' },
              { label: 'Fiyatlar' },
            ]}
          />

          <div className="text-center mb-16 sm:mb-20">
            <span className="section-tag">Fiyatlandirma</span>
            <h1 className="heading-lg mb-4 sm:mb-5">Size Uygun Paketi Secin</h1>
            <p className="text-[#94a3b8] text-base sm:text-lg max-w-2xl mx-auto">
              Tum paketlerde 150.000+ kanal, 4K UHD kalite ve 7/24 destek dahildir.
              7 gun kosulsuz iade garantisi.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-20 sm:mb-28">
            {PRICING_PACKAGES.map((pkg) => (
              <PricingCard key={pkg.name} pkg={pkg} />
            ))}
          </div>

          {/* Trial CTA */}
          <div className="cta-card mb-20 sm:mb-28">
            <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-[#22c55e]/[0.04] rounded-full blur-[80px] pointer-events-none" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
              <div>
                <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Kararsiz misiniz? 24 saat ucretsiz deneyin.</h3>
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
            <div className="text-center mb-12 sm:mb-16">
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
