import { buildMetadata } from '@/lib/seo'
import { ABOUT_PAGE_DATA } from '@/lib/data'
import Breadcrumb from '@/components/Breadcrumb'
import { WHATSAPP_LINKS } from '@/lib/constants'

export const metadata = buildMetadata({
  title: 'Hakkimizda',
  description:
    'AloIPTV hakkinda. 2019 yilindan bu yana Turkiye nin en guvenilir premium IPTV hizmeti.',
  path: '/hakkimizda/',
})

export default function HakkimizdaPage() {
  return (
    <>
      <section className="pt-28 sm:pt-36 lg:pt-44 pb-24 sm:pb-32 lg:pb-40">
        <div className="container-main max-w-4xl">
          <Breadcrumb
            items={[
              { label: 'Ana Sayfa', href: '/' },
              { label: 'Hakkimizda' },
            ]}
          />

          <div className="text-center mb-16 sm:mb-20">
            <span className="section-tag">Hakkimizda</span>
            <h1 className="heading-lg mb-4 sm:mb-5">Premium IPTV&apos;de Guvenilir Isim</h1>
            <p className="text-[#94a3b8] text-base sm:text-lg max-w-2xl mx-auto">
              2019&apos;dan beri Turkiye&apos;nin en guvenilir IPTV hizmetini sunuyoruz.
            </p>
          </div>

          {/* Hikayemiz */}
          <div className="mb-16 sm:mb-24">
            <h2 className="heading-md mb-6">Hikayemiz</h2>
            <div className="space-y-4">
              {ABOUT_PAGE_DATA.hikayemiz.map((paragraph, index) => (
                <p key={index} className="text-[#94a3b8] text-[15px] sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mb-16 sm:mb-24">
            {ABOUT_PAGE_DATA.stats.map((stat) => (
              <div key={stat.label} className="card text-center py-7">
                <div className="text-[#22c55e] text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "'Sora', sans-serif" }}>{stat.value}</div>
                <div className="text-[#64748b] text-sm font-medium mt-1.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Degerlerimiz */}
          <div className="mb-16 sm:mb-24">
            <h2 className="heading-md mb-6">Degerlerimiz</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {ABOUT_PAGE_DATA.values.map((value) => (
                <div key={value.title} className="card">
                  <h3 className="text-white font-bold text-lg mb-2.5" style={{ fontFamily: "'Sora', sans-serif" }}>{value.title}</h3>
                  <p className="text-[#94a3b8] text-[15px] leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ekibimiz */}
          <div className="mb-16 sm:mb-24">
            <h2 className="heading-md mb-6">Ekibimiz</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {ABOUT_PAGE_DATA.team.map((member) => {
                const initials = member.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                return (
                  <div key={member.name} className="card text-center py-8">
                    <div className="w-14 h-14 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center mx-auto mb-5">
                      <span className="text-[#22c55e] font-bold text-lg" style={{ fontFamily: "'Sora', sans-serif" }}>{initials}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1.5" style={{ fontFamily: "'Sora', sans-serif" }}>{member.name}</h3>
                    <p className="text-[#22c55e] text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-[#94a3b8] text-[15px] leading-relaxed">{member.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="cta-card text-center">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#22c55e]/[0.04] rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="heading-md mb-4 sm:mb-5">Bize Katilin</h2>
                <p className="text-[#94a3b8] text-sm mb-8 max-w-lg mx-auto">
                  Premium IPTV deneyimini simdi baslayin.
                </p>
                <a
                  href={WHATSAPP_LINKS.buy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  Hemen Basla
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
