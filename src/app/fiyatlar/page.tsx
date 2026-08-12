import { buildMetadata } from '@/lib/seo'
import { PRICING_PACKAGES } from '@/lib/data'
import { WHATSAPP_LINKS } from '@/lib/constants'
import Breadcrumb from '@/components/Breadcrumb'
import PricingCard from '@/components/PricingCard'
import CtaSection from '@/components/CtaSection'

export const metadata = buildMetadata({
  title: 'Fiyatlar',
  description:
    'AloIPTV fiyatları ve IPTV paketleri. Aylık, 3 aylık, 6 aylık, 12 aylık ve 24 aylık paket seçenekleri. Ücretsiz test ile başlayın. 150.000+ kanal, 4K kalite.',
  path: '/fiyatlar/',
})

export default function FiyatlarPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Fiyatlar' },
          ]}
        />

        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-red-400 text-xs font-bold uppercase tracking-widest bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full mb-6">
            Fiyatlandirma
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Size Uygun Paketi Secin
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Her butceye uygun planlar. Tum paketlerde 150.000+ kanal, 4K kalite
            ve 7/24 destek dahil. Ucretsiz test ile baslayabilirsiniz.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRICING_PACKAGES.map((pkg) => (
            <PricingCard
              key={pkg.name}
              name={pkg.name}
              price={pkg.price}
              originalPrice={pkg.originalPrice}
              period={pkg.period}
              discount={pkg.discount}
              badge={pkg.badge}
              features={pkg.features}
              devices={parseInt(pkg.devices)}
              isFree={pkg.isFree}
            />
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: (
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              title: 'Guvenli Odeme',
              description: 'SSL ile sifrelenmis odeme altyapisi',
            },
            {
              icon: (
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              ),
              title: 'Coklu Odeme',
              description: 'Kredi karti, havale, kripto',
            },
            {
              icon: (
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: 'Aninda Aktivasyon',
              description: 'Odeme sonrasi dakikalar icinde',
            },
            {
              icon: (
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              ),
              title: '7 Gun Iade',
              description: 'Kosulsuz para iade garantisi',
            },
          ].map((badge) => (
            <div
              key={badge.title}
              className="text-center p-4 rounded-xl bg-[#111111] border border-[#1a1a1a]"
            >
              <div className="flex justify-center mb-3">{badge.icon}</div>
              <h3 className="text-white text-sm font-semibold mb-1">
                {badge.title}
              </h3>
              <p className="text-gray-500 text-xs">{badge.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </main>
  )
}
