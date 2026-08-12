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
      <section className="pt-8 pb-20 sm:pt-12 sm:pb-28">
        <div className="container-main max-w-4xl">
          <Breadcrumb
            items={[
              { label: 'Ana Sayfa', href: '/' },
              { label: 'Hakkimizda' },
            ]}
          />

          <div className="text-center mb-14">
            <span className="section-tag">Hakkimizda</span>
            <h1 className="heading-lg mb-4">Premium IPTV&apos;de Guvenilir Isim</h1>
            <p className="text-[#94a3b8] text-sm sm:text-base max-w-2xl mx-auto">
              2019&apos;dan beri Turkiye&apos;nin en guvenilir IPTV hizmetini sunuyoruz.
            </p>
          </div>

          {/* Hikayemiz */}
          <div className="mb-16">
            <h2 className="heading-md mb-6">Hikayemiz</h2>
            <div className="space-y-4">
              {ABOUT_PAGE_DATA.hikayemiz.map((paragraph, index) => (
                <p key={index} className="text-[#94a3b8] text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {ABOUT_PAGE_DATA.stats.map((stat) => (
              <div key={stat.label} className="card text-center py-6">
                <div className="text-white text-2xl font-extrabold">{stat.value}</div>
                <div className="text-[#64748b] text-xs font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Degerlerimiz */}
          <div className="mb-16">
            <h2 className="heading-md mb-6">Degerlerimiz</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ABOUT_PAGE_DATA.values.map((value) => (
                <div key={value.title} className="card">
                  <h3 className="text-white font-semibold text-[15px] mb-2">{value.title}</h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ekibimiz */}
          <div className="mb-16">
            <h2 className="heading-md mb-6">Ekibimiz</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {ABOUT_PAGE_DATA.team.map((member) => {
                const initials = member.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                return (
                  <div key={member.name} className="card text-center py-6">
                    <div className="w-14 h-14 rounded-full bg-red-500/[0.08] border border-red-500/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-red-400 font-bold text-lg">{initials}</span>
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">{member.name}</h3>
                    <p className="text-red-400 text-xs font-medium mb-3">{member.role}</p>
                    <p className="text-[#94a3b8] text-sm leading-relaxed">{member.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="relative overflow-hidden bg-gradient-to-r from-[#0f1d32] via-[#111f38] to-[#0f1d32] border border-[#1a2d4a] rounded-2xl p-8 sm:p-12">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-red-500/[0.04] rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="heading-md mb-4">Bize Katilin</h2>
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
