import Link from 'next/link'
import { WHATSAPP_LINKS } from '@/lib/constants'
import {
  STATS,
  FEATURES,
  PRICING_PACKAGES,
  SETUP_STEPS,
  TESTIMONIALS,
  HOMEPAGE_FAQ,
  DEVICES,
  COMPARISON_TABLE,
} from '@/lib/data'
import PricingCard from '@/components/PricingCard'
import TestimonialCard from '@/components/TestimonialCard'
import FaqAccordion from '@/components/FaqAccordion'

export default function HomePage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden pt-32 sm:pt-40 lg:pt-48 pb-24 sm:pb-32 lg:pb-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[600px] bg-[#22c55e]/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="section-tag mb-8 sm:mb-10">AloIPTV — Premium IPTV</span>

              <h1 className="heading-xl mb-8 sm:mb-10">
                Premium IPTV ile Canli TV, Spor, Film{' '}
                <span className="text-gradient">&amp; Dizi Keyfi</span>
              </h1>

              <p className="text-[#94a3b8] text-base sm:text-lg lg:text-[19px] leading-relaxed mb-10 sm:mb-12 max-w-[520px]">
                150.000+ canli kanal ve 80.000+ film-dizi arsivi. 4K Ultra HD kalite,
                Anti-Freeze teknolojisi ile kesintisiz izleme deneyimi.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mb-16 sm:mb-20">
                <Link href="/fiyatlar/" className="btn btn-primary btn-lg">Fiyatlari Gor</Link>
                <Link href="/kanallar/" className="btn btn-outline btn-lg">Kanallari Incele</Link>
              </div>
            </div>

            {/* Hero visual — player mockup */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-[#1e293b] border border-[#334155] rounded-2xl overflow-hidden">
                  <div className="flex items-center gap-2 px-5 py-3 border-b border-[#334155]/60">
                    <div className="w-3 h-3 rounded-full bg-[#ef4444]/50" />
                    <div className="w-3 h-3 rounded-full bg-[#eab308]/50" />
                    <div className="w-3 h-3 rounded-full bg-[#22c55e]/50" />
                    <span className="text-[#475569] text-[11px] ml-2">AloIPTV Player</span>
                  </div>
                  <div className="p-8">
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {['Super Lig', 'Premier Lig', 'La Liga'].map((league) => (
                        <div key={league} className="bg-[#111827] border border-[#334155]/60 rounded-lg p-3 text-center">
                          <div className="text-xs text-[#22c55e] mb-1 font-semibold">CANLI</div>
                          <div className="text-white text-xs font-semibold">{league}</div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-[#111827]/80 border border-[#334155]/40 rounded-xl aspect-video flex items-center justify-center mb-6">
                      <div className="text-center">
                        <div className="w-14 h-14 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-[#22c55e] ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                        <div className="text-[#64748b] text-xs">4K Ultra HD</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#22c55e] rounded-full" />
                        <span className="text-[#64748b] text-xs">150.000+ kanal aktif</span>
                      </div>
                      <span className="text-[#64748b] text-xs">%99.9 uptime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ STATS BAR ═══════ */}
      <section className="py-12 sm:py-16 border-y border-[#1e293b]">
        <div className="container-main">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[#22c55e] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>{stat.value}</div>
                <div className="text-[#64748b] text-[11px] sm:text-xs font-medium uppercase tracking-wider mt-1.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FEATURES ═══════ */}
      <section className="py-24 sm:py-32 lg:py-40">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="section-tag">Ozellikler</span>
            <h2 className="heading-lg mb-4 sm:mb-5">Premium Canli TV Deneyimi</h2>
            <p className="text-[#94a3b8] text-base sm:text-lg">
              AloIPTV ile canli spor, film, dizi ve daha fazlasina tek bir yerden erisin.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="card">
                <div className="card-icon"><span>{feature.icon}</span></div>
                <h3 className="text-white font-bold text-lg mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>{feature.title}</h3>
                <p className="text-[#94a3b8] text-[15px] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ COMPARISON ═══════ */}
      <section className="py-24 sm:py-32 lg:py-40 bg-[#0f172a]">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="section-tag">Karsilastirma</span>
            <h2 className="heading-lg mb-4 sm:mb-5">AloIPTV vs Diger IPTV</h2>
            <p className="text-[#94a3b8] text-base sm:text-lg">
              Neden binlerce kullanici AloIPTV&apos;yi tercih ediyor?
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#334155]">
                  <th className="text-left text-[#64748b] text-sm font-medium py-4 px-4">Ozellik</th>
                  <th className="text-left text-[#22c55e] text-sm font-bold py-4 px-4" style={{ fontFamily: "'Sora', sans-serif" }}>AloIPTV</th>
                  <th className="text-left text-[#64748b] text-sm font-medium py-4 px-4">Diger IPTV</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE.map((row) => (
                  <tr key={row.feature} className="border-b border-[#1e293b]">
                    <td className="text-white text-[15px] font-medium py-4 px-4">{row.feature}</td>
                    <td className="text-[#22c55e] text-[15px] py-4 px-4 font-medium">{row.aloiptv}</td>
                    <td className="text-[#64748b] text-[15px] py-4 px-4">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════ PRICING ═══════ */}
      <section className="py-24 sm:py-32 lg:py-40">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="section-tag">Fiyatlandirma</span>
            <h2 className="heading-lg mb-4 sm:mb-5">Size Uygun Paketi Secin</h2>
            <p className="text-[#94a3b8] text-base sm:text-lg">
              Tum paketlerde 150.000+ kanal, 4K UHD ve 7/24 destek dahildir.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {PRICING_PACKAGES.filter(p => !p.isFree).slice(0, 6).map((pkg) => (
              <PricingCard key={pkg.name} pkg={pkg} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/fiyatlar/" className="text-[#22c55e] text-sm font-medium hover:text-[#4ade80] transition-colors inline-flex items-center gap-1.5">
              Tum paketleri gor
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SETUP STEPS ═══════ */}
      <section className="py-24 sm:py-32 lg:py-40 bg-[#0f172a]">
        <div className="container-main">
          <div className="max-w-2xl mb-16 sm:mb-20">
            <span className="section-tag">Kurulum</span>
            <h2 className="heading-lg mb-4 sm:mb-5">3 Kolay Adimda Baslayin</h2>
            <p className="text-[#94a3b8] text-base sm:text-lg">
              Teknisyen yok, donanim yok, sozlesme yok.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {SETUP_STEPS.map((step) => (
              <div key={step.step} className="card">
                <div className="w-12 h-12 rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center mb-5">
                  <span className="text-[#22c55e] font-bold text-sm" style={{ fontFamily: "'Sora', sans-serif" }}>{step.step}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>{step.title}</h3>
                <p className="text-[#94a3b8] text-[15px] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TRIAL CTA ═══════ */}
      <section className="py-14 sm:py-18">
        <div className="container-main">
          <div className="cta-card">
            <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-[#22c55e]/[0.04] rounded-full blur-[80px] pointer-events-none" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
              <div>
                <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Kararsiz misiniz? 24 saat ucretsiz deneyin.</h3>
                <p className="text-[#94a3b8] text-sm">Satin almadan once tum kanallari test edin — hicbir baglantilik yok.</p>
              </div>
              <a href={WHATSAPP_LINKS.test} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg shrink-0 w-full sm:w-auto">
                Ucretsiz Test Al
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ DEVICES ═══════ */}
      <section className="py-24 sm:py-32 lg:py-40">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="section-tag">Cihaz Uyumlulugu</span>
            <h2 className="heading-lg mb-4 sm:mb-5">Tum Cihazlarinizda Calisir</h2>
            <p className="text-[#94a3b8] text-base sm:text-lg">
              Tek hesap, tum cihazlarinizda. Ekstra donanim gerekmez.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {DEVICES.map((device) => (
              <div key={device.name} className="card text-center py-8 sm:py-10">
                <span className="text-3xl sm:text-4xl block mb-4">{device.icon}</span>
                <h3 className="text-white text-sm sm:text-base font-bold mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>{device.name}</h3>
                <p className="text-[#64748b] text-xs sm:text-sm">{device.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="py-24 sm:py-32 lg:py-40 bg-[#0f172a]">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="section-tag">Yorumlar</span>
            <h2 className="heading-lg">10.000+ Ailenin Tercihi</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="py-24 sm:py-32 lg:py-40">
        <div className="container-main max-w-3xl">
          <div className="text-center mb-16 sm:mb-20">
            <span className="section-tag">SSS</span>
            <h2 className="heading-lg mb-4 sm:mb-5">Satin Almadan Once Yanitlar</h2>
            <p className="text-[#94a3b8] text-sm">
              Daha fazla detay icin{' '}
              <Link href="/sss/" className="text-[#22c55e] hover:text-[#4ade80] underline underline-offset-2">SSS sayfamizi</Link>{' '}
              ziyaret edin.
            </p>
          </div>

          <FaqAccordion items={HOMEPAGE_FAQ} />

          <div className="text-center mt-12">
            <Link href="/fiyatlar/" className="btn btn-primary btn-lg">Planini Sec</Link>
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="py-24 sm:py-32 lg:py-40 bg-[#0f172a]">
        <div className="container-main text-center max-w-2xl">
          <h2 className="heading-lg mb-5 sm:mb-6">
            Premium IPTV&apos;ye Gecmeye Hazir misiniz?
          </h2>
          <p className="text-[#94a3b8] text-base sm:text-lg mb-10 max-w-md mx-auto">
            7 gun kosulsuz iade garantisi. Risksiz deneyin.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <a href={WHATSAPP_LINKS.buy} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Hemen Basla</a>
            <a href={WHATSAPP_LINKS.test} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">Ucretsiz Test</a>
          </div>
        </div>
      </section>
    </>
  )
}
