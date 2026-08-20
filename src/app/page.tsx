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
  TRUST_BADGES,
} from '@/lib/data'
import Ticker from '@/components/Ticker'
import { PricingJsonLd } from '@/components/JsonLd'
import PricingCard from '@/components/PricingCard'
import TestimonialCard from '@/components/TestimonialCard'
import FaqAccordion from '@/components/FaqAccordion'

export default function HomePage() {
  return (
    <>
      <PricingJsonLd packages={PRICING_PACKAGES} />
      <Ticker />

      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px]" />
          <div className="absolute -top-32 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Her Maç. Her Kanal.{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Sıfır Kesinti.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
              4K Ultra HD kalite, Anti-Freeze teknolojisi ve 7/24 Türkçe destek ile
              premium IPTV deneyimini yaşayın.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={WHATSAPP_LINKS.buy}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-transform duration-200 hover:scale-105"
              >
                Hemen Başla
              </a>
              <a
                href={WHATSAPP_LINKS.test}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/5"
              >
                Ücretsiz Test
              </a>
            </div>

            {/* Trust row */}
            <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {TRUST_BADGES.map((badge) => (
                <li key={badge.title} className="flex items-center gap-2 text-sm text-gray-500">
                  <span aria-hidden="true">{badge.icon}</span>
                  <span>{badge.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════ CHANNEL GRID ═══════ */}
      <div style={{maxWidth:'1240px',margin:'0 auto',padding:'40px 24px 0'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'16px'}}>
          <div style={{background:'rgba(30,41,59,.7)',borderRadius:'12px',overflow:'hidden',border:'1px solid rgba(255,255,255,.06)'}}>
            <div style={{background:'linear-gradient(135deg,#1e3a5f,#0f172a)',padding:'24px 16px 16px',position:'relative'}}><span style={{position:'absolute',top:'8px',left:'8px',background:'#ef4444',color:'#fff',fontSize:'10px',fontWeight:700,padding:'2px 8px',borderRadius:'4px'}}>CANLI</span><div style={{textAlign:'center',fontSize:'28px'}}>⚽</div></div>
            <div style={{padding:'10px 12px'}}><div style={{color:'#e2e8f0',fontSize:'13px',fontWeight:600}}>beIN SPORTS 1</div><div style={{color:'#64748b',fontSize:'11px'}}>Super Lig Canli</div><div style={{marginTop:'6px',height:'3px',background:'#334155',borderRadius:'2px'}}><div style={{width:'65%',height:'100%',background:'#ef4444',borderRadius:'2px'}}></div></div></div>
          </div>
          <div style={{background:'rgba(30,41,59,.7)',borderRadius:'12px',overflow:'hidden',border:'1px solid rgba(255,255,255,.06)'}}>
            <div style={{background:'linear-gradient(135deg,#2d1a3e,#0f172a)',padding:'24px 16px 16px',position:'relative'}}><span style={{position:'absolute',top:'8px',left:'8px',background:'#ef4444',color:'#fff',fontSize:'10px',fontWeight:700,padding:'2px 8px',borderRadius:'4px'}}>CANLI</span><div style={{textAlign:'center',fontSize:'28px'}}>🏎️</div></div>
            <div style={{padding:'10px 12px'}}><div style={{color:'#e2e8f0',fontSize:'13px',fontWeight:600}}>S Sport</div><div style={{color:'#64748b',fontSize:'11px'}}>Formula 1 GP</div><div style={{marginTop:'6px',height:'3px',background:'#334155',borderRadius:'2px'}}><div style={{width:'40%',height:'100%',background:'#a855f7',borderRadius:'2px'}}></div></div></div>
          </div>
          <div style={{background:'rgba(30,41,59,.7)',borderRadius:'12px',overflow:'hidden',border:'1px solid rgba(255,255,255,.06)'}}>
            <div style={{background:'linear-gradient(135deg,#3b1a1a,#0f172a)',padding:'24px 16px 16px',position:'relative'}}><span style={{position:'absolute',top:'8px',left:'8px',background:'#ef4444',color:'#fff',fontSize:'10px',fontWeight:700,padding:'2px 8px',borderRadius:'4px'}}>CANLI</span><div style={{textAlign:'center',fontSize:'28px'}}>🏀</div></div>
            <div style={{padding:'10px 12px'}}><div style={{color:'#e2e8f0',fontSize:'13px',fontWeight:600}}>NBA TV</div><div style={{color:'#64748b',fontSize:'11px'}}>Lakers vs Celtics</div><div style={{marginTop:'6px',height:'3px',background:'#334155',borderRadius:'2px'}}><div style={{width:'80%',height:'100%',background:'#f97316',borderRadius:'2px'}}></div></div></div>
          </div>
          <div style={{background:'rgba(30,41,59,.7)',borderRadius:'12px',overflow:'hidden',border:'1px solid rgba(255,255,255,.06)'}}>
            <div style={{background:'linear-gradient(135deg,#1a1a2e,#0f172a)',padding:'24px 16px 16px',position:'relative'}}><span style={{position:'absolute',top:'8px',left:'8px',background:'linear-gradient(90deg,#3b82f6,#8b5cf6)',color:'#fff',fontSize:'10px',fontWeight:700,padding:'2px 8px',borderRadius:'4px'}}>4K HDR</span><div style={{textAlign:'center',fontSize:'28px'}}>🎬</div></div>
            <div style={{padding:'10px 12px'}}><div style={{color:'#e2e8f0',fontSize:'13px',fontWeight:600}}>Netflix Originals</div><div style={{color:'#64748b',fontSize:'11px'}}>200.000+ VOD</div><div style={{marginTop:'6px',height:'3px',background:'#334155',borderRadius:'2px'}}><div style={{width:'100%',height:'100%',background:'linear-gradient(90deg,#3b82f6,#8b5cf6)',borderRadius:'2px'}}></div></div></div>
          </div>
          <div style={{background:'rgba(30,41,59,.7)',borderRadius:'12px',overflow:'hidden',border:'1px solid rgba(255,255,255,.06)'}}>
            <div style={{background:'linear-gradient(135deg,#0c1e3f,#0f172a)',padding:'24px 16px 16px',position:'relative'}}><span style={{position:'absolute',top:'8px',left:'8px',background:'#e11d48',color:'#fff',fontSize:'10px',fontWeight:700,padding:'2px 8px',borderRadius:'4px'}}>4K</span><div style={{textAlign:'center',fontSize:'28px'}}>🎥</div></div>
            <div style={{padding:'10px 12px'}}><div style={{color:'#e2e8f0',fontSize:'13px',fontWeight:600}}>BluTV</div><div style={{color:'#64748b',fontSize:'11px'}}>Dizi & Film</div><div style={{marginTop:'6px',height:'3px',background:'#334155',borderRadius:'2px'}}><div style={{width:'90%',height:'100%',background:'#22c55e',borderRadius:'2px'}}></div></div></div>
          </div>
        </div>
      </div>

      {/* ═══════ STATS ═══════ */}
      <section aria-label="Rakamlarla AloIPTV" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-8 rounded-2xl border border-white/10 bg-[#111827] p-8 sm:grid-cols-4 sm:p-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1.5 block text-xs font-medium uppercase tracking-wider text-gray-500">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ═══════ FEATURES ═══════ */}
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 id="features-heading" className="text-3xl font-extrabold text-white sm:text-4xl">
            Neden AloIPTV?
          </h2>
          <p className="mt-4 text-base text-gray-400 sm:text-lg">
            Premium IPTV deneyimi için ihtiyacınız olan her şey.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <li
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-[#111827] p-6 transition-colors hover:border-white/20 sm:p-8"
            >
              <span className="text-3xl" aria-hidden="true">{feature.icon}</span>
              <h3 className="mt-5 text-lg font-bold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{feature.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section aria-labelledby="testimonials-heading" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 id="testimonials-heading" className="text-3xl font-extrabold text-white sm:text-4xl">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="mt-4 text-base text-gray-400 sm:text-lg">
            Binlerce memnun kullanıcıdan gerçek yorumlar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </section>

      {/* ═══════ PRICING ═══════ */}
      <section id="fiyatlar" aria-labelledby="pricing-heading" className="scroll-mt-24 bg-[#0d0d14] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 id="pricing-heading" className="text-3xl font-extrabold text-white sm:text-4xl">
              Size Uygun Paketi Seçin
            </h2>
            <p className="mt-4 text-base text-gray-400 sm:text-lg">
              Tüm paketlerde 150.000+ kanal, 4K UHD ve 7/24 destek dahildir.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRICING_PACKAGES.filter((p) => !p.isFree).map((pkg) => (
              <PricingCard key={pkg.name} pkg={pkg} />
            ))}
          </div>

          <p className="mt-10 text-center">
            <Link
              href="/fiyatlar/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
            >
              Tüm paketleri gör
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
              </svg>
            </Link>
          </p>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section aria-labelledby="steps-heading" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 id="steps-heading" className="text-3xl font-extrabold text-white sm:text-4xl">
            Nasıl Başlarsınız?
          </h2>
          <p className="mt-4 text-base text-gray-400 sm:text-lg">
            Üç basit adımda izlemeye başlayın.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {SETUP_STEPS.map((step) => (
            <li
              key={step.step}
              className="rounded-2xl border border-white/10 bg-[#111827] p-6 text-center transition-colors hover:border-white/20 sm:p-8"
            >
              <span
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-lg font-bold text-white"
                aria-hidden="true"
              >
                {step.step}
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ═══════ DEVICES ═══════ */}
      <section aria-labelledby="devices-heading" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 id="devices-heading" className="text-3xl font-extrabold text-white sm:text-4xl">
            Tüm Cihazlarınızda
          </h2>
          <p className="mt-4 text-base text-gray-400 sm:text-lg">
            Tek hesap, tüm cihazlarınızda. Ekstra donanım gerekmez.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {DEVICES.map((device) => (
            <li
              key={device.name}
              className="rounded-2xl border border-white/10 bg-[#111827] p-5 text-center transition-colors hover:border-white/20 sm:p-6"
            >
              <span className="text-3xl" aria-hidden="true">{device.icon}</span>
              <h3 className="mt-3 text-sm font-bold text-white">{device.name}</h3>
              <p className="mt-1 text-xs text-gray-500">{device.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section aria-labelledby="faq-heading" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 text-center">
            <h2 id="faq-heading" className="text-3xl font-extrabold text-white sm:text-4xl">
              Sıkça Sorulan Sorular
            </h2>
            <p className="mt-4 text-base text-gray-400 sm:text-lg">
              AloIPTV hakkında merak ettikleriniz.
            </p>
          </div>

          <FaqAccordion items={HOMEPAGE_FAQ} />

          <p className="mt-10 text-center">
            <Link
              href="/sss/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
            >
              Tüm soruları gör
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
              </svg>
            </Link>
          </p>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section aria-labelledby="cta-heading" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111827] via-[#0d0d14] to-[#111827] p-10 text-center sm:p-14 lg:p-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[120px]" />
          </div>

          <div className="relative">
            <h2 id="cta-heading" className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Hemen Başlayın
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-400 sm:text-lg">
              Binlerce memnun müşteriye katılın ve en sevdiğiniz kanalları izlemeye hemen başlayın.
            </p>
            <a
              href={WHATSAPP_LINKS.buy}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-transform duration-200 hover:scale-105"
            >
              WhatsApp ile Satın Al
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
