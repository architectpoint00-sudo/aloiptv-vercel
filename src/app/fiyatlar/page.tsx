import { buildMetadata } from '@/lib/seo'
import { PRICING_PACKAGES } from '@/lib/data'
import Breadcrumb from '@/components/Breadcrumb'
import PricingCard from '@/components/PricingCard'
import CtaSection from '@/components/CtaSection'

export const metadata = buildMetadata({
  title: 'Fiyatlar',
  description:
    'AloIPTV fiyatlari ve IPTV paketleri. Aylik, 3 aylik, 6 aylik, 12 aylik ve 24 aylik paket secenekleri. Ucretsiz test ile baslayin. 150.000+ kanal, 4K kalite.',
  path: '/fiyatlar/',
})

export default function FiyatlarPage() {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Fiyatlar' },
          ]}
        />

        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Size Uygun Paketi <span className="text-gradient">Secin</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Her butceye uygun planlar. Tum paketlerde 150.000+ kanal, 4K kalite
            ve 7/24 destek dahil.
          </p>
        </div>

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
            { icon: '🔒', title: 'Guvenli Odeme', description: 'SSL ile sifrelenmis' },
            { icon: '💳', title: 'Coklu Odeme', description: 'Kredi karti, havale, kripto' },
            { icon: '⚡', title: 'Aninda Aktivasyon', description: 'Dakikalar icinde' },
            { icon: '🔄', title: '7 Gun Iade', description: 'Kosulsuz para iadesi' },
          ].map((badge) => (
            <div key={badge.title} className="bg-[#111827] border border-[#1e293b] rounded-xl p-5 text-center">
              <span className="text-2xl block mb-3">{badge.icon}</span>
              <h3 className="text-white text-sm font-semibold mb-1">{badge.title}</h3>
              <p className="text-gray-500 text-xs">{badge.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </main>
  )
}
