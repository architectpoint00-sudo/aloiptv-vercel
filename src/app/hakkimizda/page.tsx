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
      <section className="pt-28 sm:pt-36 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Ana Sayfa', href: '/' },
              { label: 'Hakkimizda' },
            ]}
          />

          <div className="text-center mb-14">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">Premium IPTV&apos;de Guvenilir Isim</h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              2019&apos;dan beri Turkiye&apos;nin en guvenilir IPTV hizmetini sunuyoruz.
            </p>
          </div>

          {/* Hikayemiz */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">Hikayemiz</h2>
            <div className="space-y-4">
              {ABOUT_PAGE_DATA.hikayemiz.map((paragraph, index) => (
                <p key={index} className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {ABOUT_PAGE_DATA.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-[#111827] p-6 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-3xl sm:text-4xl font-extrabold">{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium mt-1.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Degerlerimiz */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">Degerlerimiz</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {ABOUT_PAGE_DATA.values.map((value) => (
                <div key={value.title} className="rounded-2xl border border-white/10 bg-[#111827] p-6 sm:p-8 hover:border-white/20 transition-all">
                  <h3 className="text-white font-bold text-lg mb-2.5">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ekibimiz */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">Ekibimiz</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {ABOUT_PAGE_DATA.team.map((member) => {
                const initials = member.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                return (
                  <div key={member.name} className="rounded-2xl border border-white/10 bg-[#111827] p-6 sm:p-8 text-center hover:border-white/20 transition-all">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-5">
                      <span className="text-white font-bold text-lg">{initials}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1.5">{member.name}</h3>
                    <p className="text-purple-400 text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111827] via-[#0d0d14] to-[#111827] p-10 sm:p-14 text-center">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px]" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Bize Katilin</h2>
              <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto">
                Premium IPTV deneyimini simdi baslayin.
              </p>
              <a
                href={WHATSAPP_LINKS.buy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all hover:scale-105"
              >
                Hemen Basla
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
