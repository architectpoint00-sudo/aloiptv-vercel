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
    'Premium IPTV hizmeti. 150.000+ kanal, 4K UHD kalite, Anti-Freeze teknolojisi ile kesintisiz izleme deneyimi. 7 gun kosulsuz iade garantisi.',
  path: '/',
})

const homepagePackages = PRICING_PACKAGES.filter(
  (pkg) => !pkg.isFree && pkg.period !== '6 Ay'
)

export default function HomePage() {
  return (
    <>
      {/* ═══════════ HERO SECTION ═══════════ */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-red-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-blue-500/[0.02] rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Text */}
            <div>
              {/* Badge */}
              <span className="inline-flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-widest border border-red-500/20 bg-red-500/[0.08] px-5 py-2 rounded-full mb-8">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                Turkiye&apos;nin #1 IPTV Saglayicisi
              </span>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-7 tracking-tight">
                En Iyi{' '}
                <span className="text-gradient">IPTV Satn Al</span>
                <br className="hidden sm:block" />
                <span className="text-gradient-white"> Aloiptv ile Izle</span>
              </h1>

              {/* Description */}
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
                150.000+ canli kanal, 80.000+ film ve dizi, 4K Ultra HD kalite
                ve Anti-Freeze teknolojisi ile kesintisiz izleme deneyimi.
                7/24 Turkce destek ve 7 gun kosulsuz iade garantisi.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href={WHATSAPP_LINKS.buy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-xl shadow-red-500/25 hover:shadow-red-500/40 btn-shine text-base"
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
                  className="inline-flex items-center gap-2.5 bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 transition-all text-base"
                >
                  Ucretsiz Test Al
                </a>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-6">
                {STATS.map((stat, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <div className="text-white font-black text-xl sm:text-2xl">{stat.value}</div>
                    <div className="text-gray-600 text-xs mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — TV Mockup */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-lg animate-float">
                {/* TV Frame */}
                <div className="relative bg-gradient-to-b from-[#12121a] to-[#0a0a10] border border-white/[0.08] rounded-3xl p-5 shadow-2xl shadow-black/60">
                  {/* Screen */}
                  <div className="relative bg-gradient-to-br from-[#0c0c14] to-[#080810] rounded-2xl overflow-hidden aspect-video">
                    {/* CANLI badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-red-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg animate-pulse shadow-lg shadow-red-500/30">
                        CANLI
                      </span>
                    </div>

                    {/* Quality badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10">
                        4K UHD
                      </span>
                    </div>

                    {/* Channel logos grid */}
                    <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-3 p-6 pt-12">
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
                          className={`bg-gradient-to-br ${ch.color} rounded-xl flex items-center justify-center shadow-lg shadow-black/30`}
                        >
                          <span className="text-white font-black text-xs sm:text-sm tracking-wider">
                            {ch.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Scan line overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-white/[0.02] pointer-events-none" />
                  </div>

                  {/* TV stand */}
                  <div className="flex justify-center mt-4">
                    <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full" />
                  </div>
                </div>

                {/* Glow effects */}
                <div className="absolute -inset-8 bg-red-500/[0.04] rounded-[40px] blur-3xl -z-10" />
                <div className="absolute -inset-4 bg-blue-500/[0.02] rounded-3xl blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TRUST BADGES ═══════════ */}
      <section className="relative">
        <div className="section-divider" />
        <div className="bg-gradient-to-b from-white/[0.02] to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {TRUST_BADGES.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 justify-center lg:justify-start group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-red-500/20 transition-colors">
                    <span className="text-xl">{badge.icon}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{badge.title}</p>
                    <p className="text-gray-600 text-xs hidden sm:block mt-0.5">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="section-divider" />
      </section>

      {/* ═══════════ PLATFORMS & CHANNELS ═══════════ */}
      <section className="py-20 sm:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(239,68,68,0.04),transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-widest bg-red-500/[0.08] border border-red-500/15 px-5 py-2 rounded-full mb-5">
              Platformlar & Kanallar
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Tum Platformlar, <span className="text-gradient">Tek Abonelik</span>
            </h2>
          </div>

          {/* Platform marquee */}
          <div className="relative overflow-hidden mb-6">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050508] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050508] to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...PLATFORM_LOGOS, ...PLATFORM_LOGOS].map((name, i) => (
                <span
                  key={i}
                  className="inline-flex items-center mx-3 px-6 py-3 glass-card rounded-xl text-gray-300 text-sm font-semibold shrink-0"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Turkish channels marquee (reverse direction) */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050508] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050508] to-transparent z-10" />
            <div
              className="flex animate-marquee whitespace-nowrap"
              style={{ animationDirection: 'reverse', animationDuration: '35s' }}
            >
              {[...TURKISH_CHANNELS, ...TURKISH_CHANNELS].map((name, i) => (
                <span
                  key={i}
                  className="inline-flex items-center mx-3 px-5 py-2.5 bg-white/[0.02] border border-white/[0.04] rounded-lg text-gray-500 text-xs font-medium shrink-0"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ DEVICE COMPATIBILITY ═══════════ */}
      <section className="py-20 sm:py-24 relative">
        <div className="section-divider" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(59,130,246,0.03),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-500/[0.08] border border-blue-500/15 px-5 py-2 rounded-full mb-5">
              Cihaz Uyumlulugu
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Her Cihazda, <span className="text-gradient-white">Her Yerde</span>
            </h2>
          </div>

          {/* Device grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {DEVICES.map((device, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 sm:p-7 text-center group cursor-default"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.06] flex items-center justify-center group-hover:border-red-500/20 transition-all">
                  <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform inline-block">
                    {device.icon}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-sm mb-1.5">{device.name}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{device.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ EASY SETUP ═══════════ */}
      <section className="py-20 sm:py-24 relative">
        <div className="section-divider" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(239,68,68,0.04),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-widest bg-green-500/[0.08] border border-green-500/15 px-5 py-2 rounded-full mb-5">
              Kolay Kurulum
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              3 Basit Adimda <span className="text-gradient">Basla</span>
            </h2>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {SETUP_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative glass-card rounded-2xl p-7 sm:p-8 group"
              >
                {/* Step number */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-5 shadow-lg shadow-red-500/20 group-hover:shadow-red-500/30 transition-shadow">
                  <span className="text-white font-black text-lg">{step.step}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>

                {/* Connector line */}
                {step.step < 3 && (
                  <div className="hidden md:block absolute top-12 -right-4 lg:-right-5 w-8 lg:w-10">
                    <div className="h-px bg-gradient-to-r from-red-500/30 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURES ═══════════ */}
      <section className="py-20 sm:py-24 relative">
        <div className="section-divider" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.03),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-widest bg-purple-500/[0.08] border border-purple-500/15 px-5 py-2 rounded-full mb-5">
              Ozellikler
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight">
              4K Icerik Kutuphanesi.<br className="hidden sm:block" />
              <span className="text-gradient-white">Kesintisiz Performans.</span>
            </h2>
          </div>

          {/* Bullet highlights */}
          <div className="max-w-2xl mx-auto mb-14">
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { label: '150.000+ canli kanal — dunyanin her kosesinden', icon: '📺' },
                { label: '80.000+ film ve dizi arsivi — surekli guncelleniyor', icon: '🎬' },
                { label: 'Anti-Freeze teknolojisi — mac gunlerinde bile kesintisiz', icon: '❄️' },
                { label: '4K Ultra HD + HDR — kristal netliginde goruntu', icon: '📡' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 glass-card rounded-xl p-4">
                  <span className="text-lg shrink-0">{item.icon}</span>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {FEATURES.map((feature, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 sm:p-7 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.06] flex items-center justify-center mb-4 group-hover:border-red-500/20 transition-all">
                  <span className="text-2xl group-hover:scale-110 transition-transform inline-block">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WHY ALOIPTV ═══════════ */}
      <section className="py-20 sm:py-24 relative">
        <div className="section-divider" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.04),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            {/* Left — Text */}
            <div>
              <span className="inline-flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-widest bg-red-500/[0.08] border border-red-500/15 px-5 py-2 rounded-full mb-6">
                Neden AloIPTV?
              </span>
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

            {/* Right — Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {ABOUT_STATS.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-6 sm:p-7 text-center group cursor-default"
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
      <section className="py-20 sm:py-24 relative">
        <div className="section-divider" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(239,68,68,0.04),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-widest bg-orange-500/[0.08] border border-orange-500/15 px-5 py-2 rounded-full mb-5">
              Karsilastirma
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Piyasa vs <span className="text-gradient">Aloiptv</span> Kalitesi
            </h2>
          </div>

          <ComparisonTable rows={COMPARISON_TABLE} />
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="py-20 sm:py-24 relative">
        <div className="section-divider" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.03),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-widest bg-yellow-500/[0.08] border border-yellow-500/15 px-5 py-2 rounded-full mb-5">
              Musterilerimiz
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Kullanicilarimiz <span className="text-gradient-white">Ne Diyor?</span>
            </h2>
          </div>

          {/* Testimonial cards */}
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
      <section id="fiyatlar" className="py-20 sm:py-24 relative">
        <div className="section-divider" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.06),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-widest bg-red-500/[0.08] border border-red-500/15 px-5 py-2 rounded-full mb-5">
              Fiyatlandirma
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              <span className="text-gradient">Premium</span> Paketler
            </h2>
          </div>

          {/* Pricing cards */}
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

          {/* Refund note */}
          <p className="text-center text-gray-500 text-sm mt-10 flex items-center justify-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            7 Gun Kosulsuz Para Iadesi
          </p>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-20 sm:py-24 relative">
        <div className="section-divider" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.03),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-500/[0.08] border border-blue-500/15 px-5 py-2 rounded-full mb-5">
              Destek Merkezi
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Sikca Sorulan <span className="text-gradient-white">Sorular</span>
            </h2>
          </div>

          <FaqAccordion items={HOMEPAGE_FAQ} />
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <div className="section-divider" />
      <CtaSection />
    </>
  )
}
