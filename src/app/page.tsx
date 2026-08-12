import { buildMetadata } from '@/lib/seo'
import { WHATSAPP_LINKS, SITE_NAME } from '@/lib/constants'
import {
  TRUST_BADGES,
  STATS,
  PLATFORM_LOGOS,
  TURKISH_CHANNELS,
  DEVICES,
  SETUP_STEPS,
  FEATURES,
  ABOUT_SECTION,
  ABOUT_STATS,
  COMPARISON_TABLE,
  TESTIMONIALS,
  PRICING_PACKAGES,
  HOMEPAGE_FAQ,
} from '@/lib/data'
import ComparisonTable from '@/components/ComparisonTable'
import TestimonialCard from '@/components/TestimonialCard'
import PricingCard from '@/components/PricingCard'
import FaqAccordion from '@/components/FaqAccordion'
import CtaSection from '@/components/CtaSection'

export const metadata = buildMetadata({
  title: `${SITE_NAME} — Premium IPTV Satin Al | 150K+ Kanal, 4K UHD`,
  description:
    'Premium IPTV hizmeti. 150.000+ kanal, 4K UHD kalite, Anti-Freeze teknolojisi ile kesintisiz izleme deneyimi. 7 gun kosulsuz iade garantisi.',
  path: '/',
})

const homepagePackages = PRICING_PACKAGES.filter(
  (pkg) => !pkg.isFree && pkg.period !== '6 Ay'
)

export default function HomePage() {
  return (
    <>
      {/* ═══════════ HERO — CENTERED ═══════════ */}
      <section className="relative overflow-hidden">
        {/* Subtle glow behind hero */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-red-500/[0.06] rounded-full blur-[150px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 text-center">
          {/* Badge pill */}
          <span className="inline-flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-widest border border-red-500/20 bg-red-500/10 px-5 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Turkiye&apos;nin #1 IPTV Saglayicisi
          </span>

          {/* Heading — centered, gradient on key phrase */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-7 tracking-tight">
            Premium IPTV ile{' '}
            <br className="hidden sm:block" />
            <span className="text-gradient">150.000+ Kanal</span>
            {' '}Izleyin
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            4K Ultra HD kalite, Anti-Freeze teknolojisi ile kesintisiz izleme
            deneyimi. 80.000+ film ve dizi arsivi. 7/24 Turkce destek ve
            7 gun kosulsuz iade garantisi.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <a
              href={WHATSAPP_LINKS.buy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-red-500/25 text-base"
            >
              Premium Erisim
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={WHATSAPP_LINKS.test}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-white font-semibold px-8 py-4 rounded-full border border-[#334155] hover:border-white/30 hover:bg-white/[0.04] transition-all text-base"
            >
              Ucretsiz Test Al
            </a>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {STATS.map((stat, i) => (
              <div key={i} className="bg-[#111827] border border-[#1e293b] rounded-xl px-4 py-5 text-center">
                <div className="text-gradient text-xl sm:text-2xl font-black">{stat.value}</div>
                <div className="text-gray-500 text-xs mt-1 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TRUST BADGES ═══════════ */}
      <section className="border-y border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {TRUST_BADGES.map((badge, i) => (
              <div key={i} className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-12 h-12 rounded-xl bg-[#111827] border border-[#1e293b] flex items-center justify-center shrink-0">
                  <span className="text-xl">{badge.icon}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{badge.title}</p>
                  <p className="text-gray-500 text-xs hidden sm:block mt-0.5">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PLATFORMS & CHANNELS ═══════════ */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Tum Platformlar, <span className="text-gradient">Tek Abonelik</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Dunyanin en populer platform ve kanallarina tek abonelikle erisim.
            </p>
          </div>

          {/* Platform marquee */}
          <div className="relative overflow-hidden mb-6">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0e1a] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0e1a] to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...PLATFORM_LOGOS, ...PLATFORM_LOGOS].map((name, i) => (
                <span
                  key={i}
                  className="inline-flex items-center mx-3 px-6 py-3 bg-[#111827] border border-[#1e293b] rounded-xl text-gray-300 text-sm font-semibold shrink-0"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Turkish channels marquee (reverse) */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0e1a] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0e1a] to-transparent z-10" />
            <div
              className="flex animate-marquee whitespace-nowrap"
              style={{ animationDirection: 'reverse', animationDuration: '35s' }}
            >
              {[...TURKISH_CHANNELS, ...TURKISH_CHANNELS].map((name, i) => (
                <span
                  key={i}
                  className="inline-flex items-center mx-3 px-5 py-2.5 bg-[#111827]/60 border border-[#1e293b] rounded-lg text-gray-500 text-xs font-medium shrink-0"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ DEVICE COMPATIBILITY ═══════════ */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Her Cihazda, <span className="text-gradient">Her Yerde</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Smart TV, telefon, tablet veya bilgisayar — tum cihazlarinizda izleyin.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {DEVICES.map((device, i) => (
              <div
                key={i}
                className="bg-[#111827] border border-[#1e293b] rounded-2xl p-6 sm:p-7 text-center hover:border-red-500/30 transition-colors"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#0d1224] border border-[#1e293b] flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl">{device.icon}</span>
                </div>
                <h3 className="text-white font-semibold text-sm mb-1.5">{device.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{device.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ EASY SETUP — numbered circles ═══════════ */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Nasil <span className="text-gradient">Calisir?</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              3 basit adimda izlemeye baslayin.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {SETUP_STEPS.map((step) => (
              <div key={step.step} className="text-center">
                {/* Numbered circle */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/20">
                  <span className="text-white font-black text-2xl">{step.step}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURES — cards with top border accent ═══════════ */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              Neden <span className="text-gradient">AloIPTV?</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Rakiplerden farki ortaya koyan ozellikler.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {FEATURES.map((feature, i) => (
              <div
                key={i}
                className="bg-[#111827] border border-[#1e293b] border-t-[3px] border-t-red-500 rounded-2xl p-6 sm:p-7 hover:border-red-500/30 transition-colors"
              >
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-white font-bold text-base mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WHY ALOIPTV ═══════════ */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            {/* Left — Text */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight leading-tight">
                Turkiye&apos;nin En Guvenilir{' '}
                <span className="text-gradient">IPTV Saglayicisi</span>
              </h2>
              <div className="space-y-5">
                {ABOUT_SECTION.map((paragraph, i) => (
                  <p key={i} className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Right — Stats grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {ABOUT_STATS.map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#111827] border border-[#1e293b] rounded-2xl p-6 sm:p-7 text-center"
                >
                  <div className="text-3xl sm:text-4xl font-black text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ COMPARISON TABLE ═══════════ */}
      <section className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Piyasa vs <span className="text-gradient">AloIPTV</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Fark nerede? Kendiniz karsilastirin.
            </p>
          </div>
          <ComparisonTable rows={COMPARISON_TABLE} />
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Kullanicilarimiz <span className="text-gradient">Ne Diyor?</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Binlerce mutlu musterimizden birkacindan gorusler.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard
                key={i}
                quote={t.text}
                name={t.name}
                location={t.location}
                membership={t.membership}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PRICING ═══════════ */}
      <section id="fiyatlar" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Size Uygun <span className="text-gradient">Plani</span> Secin
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Tum paketler tam icerik erisimi saglar. Gizli ucret yok.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {homepagePackages.map((pkg, i) => (
              <PricingCard
                key={i}
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

          <p className="text-center text-gray-500 text-sm mt-10 flex items-center justify-center gap-2.5">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            7 Gun Kosulsuz Para Iadesi
          </p>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Sikca Sorulan <span className="text-gradient">Sorular</span>
            </h2>
          </div>
          <FaqAccordion items={HOMEPAGE_FAQ} />
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <CtaSection />
    </>
  )
}
