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
  title: `${SITE_NAME} — Premium IPTV Satn Al | 150K+ Kanal, 4K UHD`,
  description:
    'Premium IPTV hizmeti. 150.000+ kanal, 4K UHD kalite, Anti-Freeze teknolojisi ile kesintisiz izleme deneyimi. 7 gun koşulsuz iade garantisi.',
  path: '/',
})

const homepagePackages = PRICING_PACKAGES.filter(
  (pkg) => !pkg.isFree && pkg.period !== '6 Ay'
)

export default function HomePage() {
  return (
    <>
      {/* ═══════════ HERO SECTION ═══════════ */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.08),transparent_60%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div>
              {/* Badge */}
              <span className="inline-flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-widest border border-red-500/30 bg-red-500/10 px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                Turkiye&apos;nin #1 IPTV Saglayicisi
              </span>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                En Iyi{' '}
                <span className="text-red-500">IPTV Satn Al</span>
                {' '}&mdash; Aloiptv ile Izle
              </h1>

              {/* Description */}
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                150.000+ canli kanal, 80.000+ film ve dizi, 4K Ultra HD kalite
                ve Anti-Freeze teknolojisi ile kesintisiz izleme deneyimi.
                7/24 Turkce destek ve 7 gun koşulsuz iade garantisi.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href={WHATSAPP_LINKS.buy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-red-500/20"
                >
                  Premium Erişim
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href={WHATSAPP_LINKS.test}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/20 hover:border-white/40 transition-all"
                >
                  Ucretsiz Test Al
                </a>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-4">
                {STATS.map((stat, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <div className="text-white font-bold text-lg sm:text-xl">{stat.value}</div>
                    <div className="text-gray-500 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — TV Mockup */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                {/* TV Frame */}
                <div className="relative bg-[#111111] border-2 border-[#2a2a2a] rounded-2xl p-4 shadow-2xl shadow-black/50">
                  {/* Screen */}
                  <div className="relative bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-xl overflow-hidden aspect-video">
                    {/* CANLI badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md animate-pulse">
                        CANLI
                      </span>
                    </div>

                    {/* Channel logos grid */}
                    <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-3 p-6">
                      {[
                        { name: 'beIN', color: 'from-orange-500 to-red-600' },
                        { name: 'Sport', color: 'from-blue-500 to-blue-700' },
                        { name: 'Show', color: 'from-purple-500 to-purple-700' },
                        { name: 'Star', color: 'from-yellow-500 to-orange-500' },
                        { name: 'TRT', color: 'from-red-600 to-red-800' },
                        { name: 'ATV', color: 'from-blue-600 to-indigo-700' },
                      ].map((ch, i) => (
                        <div
                          key={i}
                          className={`bg-gradient-to-br ${ch.color} rounded-lg flex items-center justify-center shadow-lg`}
                        >
                          <span className="text-white font-bold text-xs sm:text-sm tracking-wide">
                            {ch.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Scan line overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-white/[0.02] pointer-events-none" />
                  </div>

                  {/* TV stand */}
                  <div className="flex justify-center mt-3">
                    <div className="w-20 h-1.5 bg-[#2a2a2a] rounded-full" />
                  </div>
                </div>

                {/* Glow */}
                <div className="absolute -inset-4 bg-red-500/5 rounded-3xl blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TRUST BADGES ═══════════ */}
      <section className="border-y border-[#1a1a1a] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_BADGES.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-3 justify-center lg:justify-start"
              >
                <span className="text-2xl shrink-0">{badge.icon}</span>
                <div>
                  <p className="text-white text-sm font-semibold">{badge.title}</p>
                  <p className="text-gray-500 text-xs hidden sm:block">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PLATFORMS & CHANNELS ═══════════ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block text-red-400 text-xs font-bold uppercase tracking-widest bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full mb-4">
              Platformlar & Kanallar
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Tum Platformlar, Tek Abonelik
            </h2>
          </div>

          {/* Platform marquee */}
          <div className="relative overflow-hidden mb-6">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...PLATFORM_LOGOS, ...PLATFORM_LOGOS].map((name, i) => (
                <span
                  key={i}
                  className="inline-flex items-center mx-4 px-5 py-2.5 bg-[#111111] border border-[#1a1a1a] rounded-lg text-gray-300 text-sm font-medium hover:border-red-500/20 transition-colors shrink-0"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Turkish channels marquee (reverse direction) */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
            <div
              className="flex animate-marquee whitespace-nowrap"
              style={{ animationDirection: 'reverse', animationDuration: '35s' }}
            >
              {[...TURKISH_CHANNELS, ...TURKISH_CHANNELS].map((name, i) => (
                <span
                  key={i}
                  className="inline-flex items-center mx-3 px-4 py-2 bg-white/[0.03] border border-[#1a1a1a] rounded-lg text-gray-400 text-xs font-medium shrink-0"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ DEVICE COMPATIBILITY ═══════════ */}
      <section className="py-16 sm:py-20 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block text-red-400 text-xs font-bold uppercase tracking-widest bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full mb-4">
              Cihaz Uyumlulugu
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Her Cihazda, Her Yerde
            </h2>
          </div>

          {/* Device grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {DEVICES.map((device, i) => (
              <div
                key={i}
                className="bg-[#111111] border border-[#1a1a1a] rounded-2xl p-5 text-center hover:border-red-500/20 transition-all duration-300 group"
              >
                <span className="text-3xl sm:text-4xl block mb-3 group-hover:scale-110 transition-transform">
                  {device.icon}
                </span>
                <h3 className="text-white font-semibold text-sm mb-1">{device.name}</h3>
                <p className="text-gray-500 text-xs">{device.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ EASY SETUP ═══════════ */}
      <section className="py-16 sm:py-20 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block text-red-400 text-xs font-bold uppercase tracking-widest bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full mb-4">
              Kolay Kurulum
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              3 Basit Adimda IPTV Satn Al ve Başla
            </h2>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {SETUP_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative bg-[#111111] border border-[#1a1a1a] rounded-2xl p-6 sm:p-8 hover:border-red-500/20 transition-all duration-300"
              >
                {/* Step number */}
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

                {/* Connector line (not on last item) */}
                {step.step < 3 && (
                  <div className="hidden md:block absolute top-10 -right-4 lg:-right-5 w-8 lg:w-10 h-px bg-gradient-to-r from-red-500/40 to-transparent z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURES ═══════════ */}
      <section className="py-16 sm:py-20 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block text-red-400 text-xs font-bold uppercase tracking-widest bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full mb-4">
              Ozellikler
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              4K Icerik Kutuphanesi. Kesintisiz Performans.
            </h2>
          </div>

          {/* Bullet highlights */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: '150.000+ canli kanal — dunyanin her koşesinden', icon: '📺' },
                { label: '80.000+ film ve dizi arsivi — surekli guncelleniyor', icon: '🎬' },
                { label: 'Anti-Freeze teknolojisi — mac gunlerinde bile kesintisiz', icon: '❄️' },
                { label: '4K Ultra HD + HDR — kristal netliginde goruntu', icon: '📡' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-lg shrink-0">{item.icon}</span>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {FEATURES.map((feature, i) => (
              <div
                key={i}
                className="bg-[#111111] border border-[#1a1a1a] rounded-2xl p-6 hover:border-red-500/20 transition-all duration-300 group"
              >
                <span className="text-2xl block mb-3 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </span>
                <h3 className="text-white font-semibold text-base mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WHY ALOIPTV ═══════════ */}
      <section className="py-16 sm:py-20 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — Text */}
            <div>
              <span className="inline-block text-red-400 text-xs font-bold uppercase tracking-widest bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full mb-4">
                Neden AloIPTV?
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Turkiye&apos;nin En Guvenilir IPTV Saglayicisi
              </h2>

              <div className="space-y-4">
                {ABOUT_SECTION.map((paragraph, i) => (
                  <p key={i} className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Right — Stats */}
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_STATS.map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#111111] border border-[#1a1a1a] rounded-2xl p-6 text-center hover:border-red-500/20 transition-all duration-300"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-red-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ COMPARISON TABLE ═══════════ */}
      <section className="py-16 sm:py-20 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block text-red-400 text-xs font-bold uppercase tracking-widest bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full mb-4">
              Karşilaştirma
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Piyasa vs Aloiptv Kalitesi
            </h2>
          </div>

          <ComparisonTable rows={COMPARISON_TABLE} />
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="py-16 sm:py-20 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Kullanicilarimiiz Ne Diyor?
            </h2>
          </div>

          {/* Testimonial cards */}
          <div className="grid md:grid-cols-3 gap-6">
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
      <section id="fiyatlar" className="py-16 sm:py-20 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block text-red-400 text-xs font-bold uppercase tracking-widest bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full mb-4">
              Fiyatlandirma
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Premium Paketler
            </h2>
          </div>

          {/* Pricing cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

          {/* Refund note */}
          <p className="text-center text-gray-500 text-sm mt-8 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            7 Gun Koşulsuz Para Iadesi
          </p>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-16 sm:py-20 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block text-red-400 text-xs font-bold uppercase tracking-widest bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full mb-4">
              Destek Merkezi
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Sikca Sorulan Sorular
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
