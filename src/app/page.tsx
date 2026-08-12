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
  CHANNEL_CATEGORIES,
} from '@/lib/data'
import PricingCard from '@/components/PricingCard'
import TestimonialCard from '@/components/TestimonialCard'
import FaqAccordion from '@/components/FaqAccordion'

export default function HomePage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden pt-12 sm:pt-20 lg:pt-28 pb-20 sm:pb-28 lg:pb-36">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[600px] bg-red-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-red-500/[0.08] border border-red-500/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 mb-8 sm:mb-10">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-red-400 text-[10px] sm:text-xs font-semibold tracking-wide">AloIPTV &mdash; Guvenilir &amp; Kesintisiz IPTV</span>
              </div>

              <h1 className="heading-xl mb-6 sm:mb-8">
                Premium IPTV ile Canli TV, Spor, Film{' '}
                <span className="text-gradient">&amp; Dizi Keyfi</span>
              </h1>

              <p className="text-[#94a3b8] text-sm sm:text-base lg:text-lg leading-relaxed mb-10 sm:mb-12 max-w-[520px]">
                150.000+ canli kanal ve 80.000+ film-dizi arsivi. 4K Ultra HD kalite,
                Anti-Freeze teknolojisi ile kesintisiz izleme deneyimi. Tum cihazlarinizda.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mb-14 sm:mb-16">
                <Link href="/fiyatlar/" className="btn btn-primary btn-lg">Fiyatlari Gor</Link>
                <Link href="/kanallar/" className="btn btn-outline btn-lg">Kanallari Incele</Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-white text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">{stat.value}</div>
                    <div className="text-[#64748b] text-[10px] sm:text-xs font-medium uppercase tracking-wider mt-1.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual — desktop only */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-gradient-to-br from-[#0f1d32] to-[#0a1628] border border-[#1a2d4a] rounded-2xl overflow-hidden">
                  <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1a2d4a]/60">
                    <div className="w-3 h-3 rounded-full bg-red-500/40" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                    <div className="w-3 h-3 rounded-full bg-green-500/40" />
                    <span className="text-[#475569] text-[11px] ml-2">AloIPTV Player</span>
                  </div>
                  <div className="p-8">
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {['Super Lig', 'Premier Lig', 'La Liga'].map((league) => (
                        <div key={league} className="bg-[#0a1628] border border-[#1a2d4a]/60 rounded-lg p-3 text-center">
                          <div className="text-xs text-[#64748b] mb-1">CANLI</div>
                          <div className="text-white text-xs font-semibold">{league}</div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-[#0a1628]/60 border border-[#1a2d4a]/40 rounded-xl aspect-video flex items-center justify-center mb-6">
                      <div className="text-center">
                        <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-red-400 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                        <div className="text-[#64748b] text-xs">4K Ultra HD</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-[#64748b] text-xs">150.000+ kanal aktif</span>
                      </div>
                      <span className="text-[#64748b] text-xs">%99.9 uptime</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#0f1d32]/95 backdrop-blur-lg border border-[#1a2d4a] rounded-xl px-5 py-3.5 shadow-2xl shadow-black/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                      <span className="text-red-400 text-sm">⚡</span>
                    </div>
                    <div>
                      <div className="text-white text-xs font-semibold">Anti-Freeze Aktif</div>
                      <div className="text-[#64748b] text-[10px]">0.4s gecikme suresi</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FEATURES ═══════ */}
      <section className="section-alt py-20 sm:py-28 lg:py-32">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <span className="section-tag">Ozellikler</span>
            <h2 className="heading-lg mb-4 sm:mb-5">Premium Canli TV Deneyimi</h2>
            <p className="text-[#94a3b8] text-sm sm:text-base">
              AloIPTV ile canli spor, film, dizi ve daha fazlasina tek bir yerden erisin.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="card">
                <div className="card-icon"><span>{feature.icon}</span></div>
                <h3 className="text-white font-semibold text-sm sm:text-[15px] mb-2.5">{feature.title}</h3>
                <p className="text-[#94a3b8] text-xs sm:text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PRICING ═══════ */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <span className="section-tag">Fiyatlandirma</span>
            <h2 className="heading-lg mb-4 sm:mb-5">Size Uygun Paketi Secin</h2>
            <p className="text-[#94a3b8] text-sm sm:text-base">
              Tum paketlerde 150.000+ kanal, 4K UHD ve 7/24 destek dahildir.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
            {PRICING_PACKAGES.filter(p => !p.isFree).slice(0, 6).map((pkg) => (
              <div key={pkg.name} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <PricingCard pkg={pkg} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link href="/fiyatlar/" className="text-red-400 text-sm font-medium hover:text-red-300 transition-colors inline-flex items-center gap-1.5">
              Tum paketleri gor
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SETUP STEPS ═══════ */}
      <section className="section-alt section-border py-20 sm:py-28 lg:py-32">
        <div className="container-main">
          <div className="max-w-2xl mb-14 sm:mb-16">
            <span className="section-tag">Kurulum</span>
            <h2 className="heading-lg mb-4 sm:mb-5">3 Kolay Adimda Baslayin</h2>
            <p className="text-[#94a3b8] text-sm sm:text-base">
              Teknisyen yok, donanim yok, sozlesme yok. Adimlari takip edin ve izlemeye baslayin.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {SETUP_STEPS.map((step) => (
              <div key={step.step} className="card">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-red-500/[0.08] border border-red-500/20 flex items-center justify-center mb-5">
                  <span className="text-red-400 font-bold text-sm">{step.step}</span>
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base mb-2.5">{step.title}</h3>
                <p className="text-[#94a3b8] text-xs sm:text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TRIAL CTA ═══════ */}
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="container-main">
          <div className="relative overflow-hidden bg-gradient-to-r from-[#0f1d32] via-[#111f38] to-[#0f1d32] border border-[#1a2d4a] rounded-xl sm:rounded-2xl px-7 sm:px-10 lg:px-14 py-8 sm:py-10 lg:py-12">
            <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] h-[150px] sm:h-[200px] bg-red-500/[0.04] rounded-full blur-[80px] pointer-events-none" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
              <div>
                <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2">Kararsiz misiniz? 24 saat ucretsiz deneyin.</h3>
                <p className="text-[#94a3b8] text-sm">Satin almadan once tum kanallari test edin — hicbir baglantilik yok.</p>
              </div>
              <a href={WHATSAPP_LINKS.test} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg shrink-0 w-full sm:w-auto">
                Ucretsiz Test Al
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE ═══════ */}
      <section className="section-border py-20 sm:py-28 lg:py-32">
        <div className="container-main">
          <div className="max-w-2xl mb-14 sm:mb-16">
            <span className="section-tag">Neden AloIPTV?</span>
            <h2 className="heading-lg mb-4 sm:mb-5">Ilk Yayinindan Itibaren Farki Hissedin</h2>
            <p className="text-[#94a3b8] text-sm sm:text-base">
              Genis kanal secenekleri, yuksek goruntu kalitesi, genis cihaz destegi ve
              ozel musteri hizmetleri ile IPTV deneyimini en ust seviyeye tasiyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              { icon: '📺', title: 'Canli TV & Spor', desc: '150.000+ canli kanal. Super Lig, Premier League, Champions League, NBA, UFC ve daha fazlasi.' },
              { icon: '🎬', title: 'Film & Dizi Arsivi', desc: '80.000+ film ve dizi. Netflix, Disney+, HBO Max icerikleri tek abonelikte.' },
              { icon: '❄️', title: 'Anti-Freeze Sunucu', desc: 'Gelismis anti-freeze teknolojisi ile donma ve kesinti sorunu yok. Mac gunlerinde bile stabil.' },
              { icon: '📡', title: '4K UHD Kalite', desc: 'Desteklenen kanallarda 4K Ultra HD + HDR. Kristal netliginde goruntu kalitesi.' },
              { icon: '👶', title: 'Aile Profilleri', desc: 'Cocuk profilleri ve ebeveyn PIN kilidi ile aileniz guvenle ayni hesabi paylasir.' },
              { icon: '🔗', title: 'Coklu Cihaz Baglantisi', desc: 'Tek abonelikle birden fazla cihazda izleyin. Herkes kendi favorisini izlesin.' },
            ].map((item) => (
              <div key={item.title} className="card">
                <div className="card-icon"><span>{item.icon}</span></div>
                <h3 className="text-white font-semibold text-sm sm:text-[15px] mb-2.5">{item.title}</h3>
                <p className="text-[#94a3b8] text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CHANNEL CATEGORIES ═══════ */}
      <section className="section-alt section-border py-20 sm:py-28 lg:py-32">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <span className="section-tag">Kanal Kategorileri</span>
            <h2 className="heading-lg mb-4 sm:mb-5">Tek Abonelik, Tum Kategoriler</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {CHANNEL_CATEGORIES.map((cat) => (
              <div key={cat.name} className="card">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-semibold text-sm sm:text-[15px]">{cat.name}</h3>
                  <span className="text-lg opacity-60">{cat.icon}</span>
                </div>
                <p className="text-[#94a3b8] text-xs sm:text-sm leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link href="/kanallar/" className="text-red-400 text-sm font-medium hover:text-red-300 transition-colors inline-flex items-center gap-1.5">
              Tum kanallari incele
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ DEVICES ═══════ */}
      <section className="section-border py-20 sm:py-28 lg:py-32">
        <div className="container-main">
          <div className="max-w-2xl mb-14 sm:mb-16">
            <span className="section-tag">Cihaz Uyumlulugu</span>
            <h2 className="heading-lg mb-4 sm:mb-5">Tum Cihazlarinizda Calisir</h2>
            <p className="text-[#94a3b8] text-sm sm:text-base">
              Tek hesap, M3U veya Xtream Codes destekleyen tum oynaticilarda. Ekstra donanim gerekmez.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {DEVICES.map((device) => (
              <div key={device.name} className="card text-center py-6 sm:py-8">
                <span className="text-2xl sm:text-3xl block mb-3 sm:mb-4">{device.icon}</span>
                <h3 className="text-white text-xs sm:text-sm font-semibold mb-1">{device.name}</h3>
                <p className="text-[#64748b] text-[10px] sm:text-xs">{device.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="section-alt section-border py-20 sm:py-28 lg:py-32">
        <div className="container-main">
          <div className="max-w-2xl mb-14 sm:mb-16">
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
      <section className="section-border py-20 sm:py-28 lg:py-32">
        <div className="container-main max-w-3xl">
          <div className="mb-14 sm:mb-16">
            <span className="section-tag">Sikca Sorulan Sorular</span>
            <h2 className="heading-lg mb-4 sm:mb-5">Satin Almadan Once Yanitlar</h2>
            <p className="text-[#94a3b8] text-sm">
              Daha fazla detay icin{' '}
              <Link href="/sss/" className="text-red-400 hover:text-red-300 underline underline-offset-2">SSS sayfamizi</Link>{' '}
              ziyaret edin.
            </p>
          </div>

          <FaqAccordion items={HOMEPAGE_FAQ} />

          <div className="text-center mt-12 sm:mt-14">
            <Link href="/fiyatlar/" className="btn btn-primary btn-lg">Planini Sec</Link>
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="section-alt section-border py-20 sm:py-28 lg:py-32">
        <div className="container-main text-center max-w-2xl">
          <h2 className="heading-lg mb-5 sm:mb-6">
            Premium IPTV&apos;ye Gecmeye Hazir misiniz?
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base mb-10 sm:mb-12 max-w-md mx-auto">
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
