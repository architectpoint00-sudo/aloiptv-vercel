import { buildMetadata } from '@/lib/seo'
import { ABOUT_PAGE_DATA } from '@/lib/data'
import Breadcrumb from '@/components/Breadcrumb'
import StatsBar from '@/components/StatsBar'
import CtaSection from '@/components/CtaSection'

export const metadata = buildMetadata({
  title: 'Hakkimizda',
  description:
    'AloIPTV hakkinda. 2019 yilindan bu yana Turkiye nin en guvenilir premium IPTV hizmeti.',
  path: '/hakkimizda/',
})

export default function HakkimizdaPage() {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Hakkimizda' },
          ]}
        />

        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Premium IPTV&apos;de <span className="text-gradient">Guvenilir</span> Isim
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            2019&apos;dan beri Turkiye&apos;nin en guvenilir IPTV hizmetini sunuyoruz.
          </p>
        </div>

        {/* Hikayemiz */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Hikayemiz</h2>
          <div className="space-y-5">
            {ABOUT_PAGE_DATA.hikayemiz.map((paragraph, index) => (
              <p key={index} className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
          <StatsBar stats={ABOUT_PAGE_DATA.stats} />
        </div>

        {/* Degerlerimiz */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">Degerlerimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ABOUT_PAGE_DATA.values.map((value) => (
              <div key={value.title} className="bg-[#111827] border border-[#1e293b] border-t-[3px] border-t-red-500 rounded-2xl p-6">
                <h3 className="text-white font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ekibimiz */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">Ekibimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {ABOUT_PAGE_DATA.team.map((member) => {
              const initials = member.name
                .split(' ')
                .map((n) => n[0])
                .join('')
              return (
                <div key={member.name} className="bg-[#111827] border border-[#1e293b] rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-400 font-bold text-xl">{initials}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-red-400 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  )
}
