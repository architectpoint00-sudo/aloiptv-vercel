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
      {/* ───── HERO ───── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                <span className="text-red-400 text-xs font-semibold tracking-wide">AloIPTV — Guvenilir &amp; Kesintisiz IPTV</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Premium IPTV<br />
                <span className="text-gradient">Deneyiminin</span> Adresi
              </h1>

              <p className="text-[#888] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                150.000+ canli kanal, 80.000+ film ve dizi arsivi. 4K Ultra HD kalite,
                Anti-Freeze teknolojisi ile kesintisiz izleme keyfi. Tum cihazlarinizda.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/fiyatlar/" className="btn-primary text-base px-8 py-3.5">
                  Fiyatlari Gor
                </Link>
                <Link href="/kanallar/" className="btn-outline text-base px-8 py-3.5">
                  Kanallari Incele
                </Link>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-white text-2xl font-black">{stat.value}</div>
                    <div className="text-[#555] text-xs font-medium mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — visual */}
            <div className="relative hidden lg:block">
              <div className="relative bg-gradient-to-br from-[#0d0d0d] to-[#111] border border-[#1a1a1a] rounded-2xl p-8 aspect-[4/3] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl" />
                <div className="text-center relative z-10">
                  <div className="text-6xl mb-4">📺</div>
                  <div className="text-white font-bold text-xl mb-1">150.000+ Kanal</div>
                  <div className="text-[#666] text-sm">4K UHD Kalite</div>
                </div>
                {/* Floating stats */}
                <div className="absolute bottom-6 left-6 bg-[#111]/90 backdrop-blur border border-[#1a1a1a] rounded-xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 text-lg">⚡</span>
                    <div>
                      <div className="text-white text-xs font-semibold">0.4s gecikme</div>
                      <div className="text-[#555] text-[10px]">tum ekranlarda</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── FEATURES ───── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label">Ozellikler</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Premium Canli TV Deneyimini Kesfet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="card p-6">
                <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── PRICING ───── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label">Fiyatlandirma</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Size Uygun Paketi Secin
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRICING_PACKAGES.filter(p => !p.isFree).slice(0, 6).map((pkg) => (
              <PricingCard key={pkg.name} pkg={pkg} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/fiyatlar/" className="text-red-400 text-sm font-medium hover:text-red-300 transition-colors">
              Tum paketleri gor &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ───── SETUP STEPS ───── */}
      <section className="py-20 sm:py-28 border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="section-label">Kurulum</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              3 Kolay Adimda Baslayin
            </h2>
            <p className="text-[#666] text-base max-w-2xl">
              Teknisyen yok, donanim yok, sozlesme yok. Asagidaki adimlari takip edin ve izlemeye baslayin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SETUP_STEPS.map((step) => (
              <div key={step.step} className="card p-6">
                <div className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-red-400 font-bold text-sm">{step.step}</span>
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── TRIAL CTA ───── */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0d0d0d] to-[#111] border border-[#1a1a1a] rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Kararsiz misiniz? 24 saat ucretsiz deneyin.</h3>
              <p className="text-[#666] text-sm">Satin almadan once tum kanallari test edin.</p>
            </div>
            <a
              href={WHATSAPP_LINKS.test}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap px-8 py-3.5"
            >
              Ucretsiz Test Al
            </a>
          </div>
        </div>
      </section>

      {/* ───── WHY CHOOSE ───── */}
      <section className="py-20 sm:py-28 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="section-label">Neden AloIPTV?</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Ilk Yayinindan Itibaren Farki Hissedin
            </h2>
            <p className="text-[#666] text-base max-w-2xl">
              AloIPTV, genis kanal secenekleri, yuksek goruntu kalitesi, genis cihaz destegi ve
              ozel musteri hizmetleri ile IPTV deneyimini en ust seviyeye tasiyor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📺', title: 'Canli TV & Spor', desc: '150.000+ canli kanal. Super Lig, Premier League, Champions League, NBA, UFC ve daha fazlasi.' },
              { icon: '🎬', title: 'Film & Dizi Arsivi', desc: '80.000+ film ve dizi. Netflix, Disney+, HBO Max icerikleri tek abonelikte.' },
              { icon: '❄️', title: 'Anti-Freeze Sunucu', desc: 'Gelismis anti-freeze teknolojisi ile donma ve kesinti sorunu yok. Mac gunlerinde bile stabil.' },
              { icon: '📡', title: '4K UHD Kalite', desc: 'Desteklenen kanallarda 4K Ultra HD + HDR. Kristal netliginde goruntu kalitesi.' },
              { icon: '👶', title: 'Aile Profilleri', desc: 'Cocuk profilleri ve ebeveyn PIN kilidi ile aileniz guvenle ayni hesabi paylasir.' },
              { icon: '🔗', title: 'Coklu Cihaz', desc: 'Tek abonelikle birden fazla cihazda izleyin. Herkes favorisini izlesin.' },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CHANNEL CATEGORIES ───── */}
      <section className="py-20 sm:py-28 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label">Kanal Kategorileri</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Tek Abonelik, Tum Kategoriler
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHANNEL_CATEGORIES.map((cat) => (
              <div key={cat.name} className="card p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold">{cat.name}</h3>
                  <span className="text-[#333] text-lg">📡</span>
                </div>
                <p className="text-[#666] text-sm leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/kanallar/" className="text-red-400 text-sm font-medium hover:text-red-300 transition-colors">
              Tum kanallari gor &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ───── DEVICES ───── */}
      <section className="py-20 sm:py-28 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="section-label">Cihaz Destegi</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Sahip Oldugunuz Her Cihazda Calisir
            </h2>
            <p className="text-[#666] text-base max-w-2xl">
              Tek hesap, M3U veya Xtream Codes destekleyen tum oynaticilarda. Ekstra donanim gerekmez.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {DEVICES.map((device) => (
              <div key={device.name} className="card p-5 text-center">
                <span className="text-2xl block mb-2">{device.icon}</span>
                <h3 className="text-white text-sm font-semibold">{device.name}</h3>
                <p className="text-[#555] text-xs mt-1">{device.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS ───── */}
      <section className="py-20 sm:py-28 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="section-label">Yorumlar</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              10.000+ Ailenin Tercihi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="py-20 sm:py-28 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="section-label">Sikca Sorulan Sorular</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Satin Almadan Once Yanitlar
            </h2>
            <p className="text-[#666] text-sm">
              Daha fazla detay icin{' '}
              <Link href="/sss/" className="text-red-400 hover:text-red-300">SSS sayfamizi</Link> ziyaret edin.
            </p>
          </div>

          <FaqAccordion items={HOMEPAGE_FAQ} />

          <div className="text-center mt-10">
            <Link href="/fiyatlar/" className="btn-primary px-8 py-3.5">
              Planini Sec
            </Link>
          </div>
        </div>
      </section>

      {/* ───── FINAL CTA ───── */}
      <section className="py-20 sm:py-28 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Premium IPTV&apos;ye Gecmeye Hazir misiniz?
          </h2>
          <p className="text-[#666] text-base mb-8 max-w-lg mx-auto">
            7 gun koşulsuz iade garantisi. Risksiz deneyin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_LINKS.buy}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-10 py-4"
            >
              Hemen Basla
            </a>
            <a
              href={WHATSAPP_LINKS.test}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-base px-10 py-4"
            >
              Ucretsiz Test
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
