import Link from 'next/link'
import { WHATSAPP_LINKS } from '@/lib/constants'
import {
  ANNOUNCEMENT_MESSAGES,
  STATS,
  FEATURES,
  PRICING_PACKAGES,
  SETUP_STEPS,
  TESTIMONIALS,
  HOMEPAGE_FAQ,
  DEVICES,
} from '@/lib/data'
import PricingCard from '@/components/PricingCard'
import TestimonialCard from '@/components/TestimonialCard'
import FaqAccordion from '@/components/FaqAccordion'

export default function HomePage() {
  const tickerText = ANNOUNCEMENT_MESSAGES.join('     ★     ')
  const tickerRepeat = `${tickerText}     ★     ${tickerText}     ★     `

  return (
    <>
      {/* ═══════ ANNOUNCEMENT TICKER ═══════ */}
      <div className="overflow-hidden border-b border-white/10 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 py-2 text-white">
        <div className="ticker-animate whitespace-nowrap">
          <span className="text-sm font-medium">{tickerRepeat}</span>
        </div>
      </div>

      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] opacity-20" />
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] opacity-20" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36 pb-20">
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Kesintisiz IPTV Deneyimi,{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">150.000+ Kanal</span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              4K Ultra HD kalite, Anti-Freeze teknolojisi ve 7/24 Turkce destek ile
              premium IPTV deneyimini yaşayın.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={WHATSAPP_LINKS.buy}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all hover:scale-105"
              >
                Hemen Basla
              </a>
              <a
                href={WHATSAPP_LINKS.test}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/5 transition-all"
              >
                Ucretsiz Test
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ STATS BAR ═══════ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-white/10 bg-[#111827] p-8 sm:p-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">{stat.value}</div>
                <div className="text-gray-500 text-xs font-medium uppercase tracking-wider mt-1.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FEATURES ═══════ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Neden AloIPTV?</h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Premium IPTV deneyimi icin ihtiyacınız olan her sey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-white/10 bg-[#111827] p-6 sm:p-8 hover:border-white/20 transition-all">
              <span className="text-3xl block mb-5">{feature.icon}</span>
              <h3 className="text-white font-bold text-lg mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Musterilerimiz Ne Diyor?</h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Binlerce memnun kullanicidan gercek yorumlar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </section>

      {/* ═══════ PRICING ═══════ */}
      <section className="scroll-mt-24 bg-[#0d0d14] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Size Uygun Paketi Secin</h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Tum paketlerde 150.000+ kanal, 4K UHD ve 7/24 destek dahildir.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRICING_PACKAGES.filter(p => !p.isFree).slice(0, 6).map((pkg) => (
              <PricingCard key={pkg.name} pkg={pkg} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/fiyatlar/" className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors inline-flex items-center gap-1.5">
              Tum paketleri gor
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Nasil Baslarsiniz?</h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Uc basit adimda izlemeye baslayin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {SETUP_STEPS.map((step) => (
            <div key={step.step} className="rounded-2xl border border-white/10 bg-[#111827] p-6 sm:p-8 text-center hover:border-white/20 transition-all">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-5">
                <span className="text-white font-bold text-lg">{step.step}</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ DEVICES ═══════ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Tum Cihazlarinizda</h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Tek hesap, tum cihazlarinizda. Ekstra donanim gerekmez.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {DEVICES.map((device) => (
            <div key={device.name} className="rounded-2xl border border-white/10 bg-[#111827] p-5 sm:p-6 text-center hover:border-white/20 transition-all">
              <span className="text-3xl block mb-3">{device.icon}</span>
              <h3 className="text-white text-sm font-bold mb-1">{device.name}</h3>
              <p className="text-gray-500 text-xs">{device.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Sikca Sorulan Sorular</h2>
            <p className="text-gray-400 text-base sm:text-lg">
              AloIPTV hakkinda merak ettikleriniz.
            </p>
          </div>

          <FaqAccordion items={HOMEPAGE_FAQ} />

          <div className="text-center mt-10">
            <Link href="/sss/" className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors inline-flex items-center gap-1.5">
              Tum sorulari gor
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111827] via-[#0d0d14] to-[#111827] p-10 sm:p-14 lg:p-20 text-center">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">Hemen Baslayin</h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-8">
              Binlerce memnun musteriye katilin ve en sevdiginiz kanallari izlemeye hemen baslayin.
            </p>
            <a
              href={WHATSAPP_LINKS.buy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all hover:scale-105"
            >
              WhatsApp ile Satin Al
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
