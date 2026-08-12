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
    <main>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 sm:pt-12 sm:pb-28">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Hakkimizda' },
          ]}
        />

        <div className="text-center mb-16">
          <p className="section-label">Hakkimizda</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Premium IPTV&apos;de Guvenilir Isim
          </h1>
          <p className="text-[#666] text-base max-w-2xl mx-auto">
            2019&apos;dan beri Turkiye&apos;nin en guvenilir IPTV hizmetini sunuyoruz.
          </p>
        </div>

        {/* Hikayemiz */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-white mb-6">Hikayemiz</h2>
          <div className="space-y-4">
            {ABOUT_PAGE_DATA.hikayemiz.map((paragraph, index) => (
              <p key={index} className="text-[#666] text-sm leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {ABOUT_PAGE_DATA.stats.map((stat) => (
            <div key={stat.label} className="card p-5 text-center">
              <div className="text-white text-2xl font-black">{stat.value}</div>
              <div className="text-[#555] text-xs font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Degerlerimiz */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-white mb-6">Degerlerimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ABOUT_PAGE_DATA.values.map((value) => (
              <div key={value.title} className="card p-6">
                <h3 className="text-white font-semibold text-base mb-2">{value.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ekibimiz */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-white mb-6">Ekibimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {ABOUT_PAGE_DATA.team.map((member) => {
              const initials = member.name
                .split(' ')
                .map((n) => n[0])
                .join('')
              return (
                <div key={member.name} className="card p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-400 font-bold text-lg">{initials}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-1">{member.name}</h3>
                  <p className="text-red-400 text-xs font-medium mb-3">{member.role}</p>
                  <p className="text-[#666] text-sm leading-relaxed">{member.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-white mb-4">Bize Katilin</h2>
            <p className="text-[#666] text-sm mb-8 max-w-lg mx-auto">
              Premium IPTV deneyimini simdi baslayin.
            </p>
            <a
              href={WHATSAPP_LINKS.buy}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3.5"
            >
              Hemen Basla
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
