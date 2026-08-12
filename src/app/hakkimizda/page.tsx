import { buildMetadata } from '@/lib/seo'
import { ABOUT_PAGE_DATA } from '@/lib/data'
import Breadcrumb from '@/components/Breadcrumb'
import StatsBar from '@/components/StatsBar'
import CtaSection from '@/components/CtaSection'

export const metadata = buildMetadata({
  title: 'Hakkimizda',
  description:
    'AloIPTV hakkinda. 2019 yilindan bu yana Turkiye nin en guvenilir premium IPTV hizmeti. 7.500+ aktif kullanici, 150.000+ kanal, %99.9 uptime garantisi.',
  path: '/hakkimizda/',
})

const VALUE_ICONS = [
  <svg key="trust" className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  <svg key="perf" className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg key="support" className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>,
  <svg key="transparent" className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>,
]

export default function HakkimizdaPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Hakkimizda' },
          ]}
        />

        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-red-400 text-xs font-bold uppercase tracking-widest bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full mb-6">
            Hakkimizda
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Premium IPTV&apos;de Guvenilir Isim
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            2019&apos;dan beri Turkiye&apos;nin en guvenilir IPTV hizmetini
            sunuyoruz. 7.500+ aktif kullanici, 150.000+ kanal ve %99.9 uptime
            garantisi ile sektörün lider markasiyiz.
          </p>
        </div>

        {/* Hikayemiz */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Hikayemiz
          </h2>
          <div className="space-y-5">
            {ABOUT_PAGE_DATA.hikayemiz.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-400 text-sm sm:text-base leading-relaxed"
              >
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">
            Degerlerimiz
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ABOUT_PAGE_DATA.values.map((value, index) => (
              <div
                key={value.title}
                className="bg-[#111111] border border-[#1a1a1a] rounded-2xl p-6 hover:border-red-500/20 transition-all duration-300"
              >
                <div className="mb-4">{VALUE_ICONS[index]}</div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ekibimiz */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">
            Ekibimiz
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {ABOUT_PAGE_DATA.team.map((member) => {
              const initials = member.name
                .split(' ')
                .map((n) => n[0])
                .join('')
              return (
                <div
                  key={member.name}
                  className="bg-[#111111] border border-[#1a1a1a] rounded-2xl p-6 text-center hover:border-red-500/20 transition-all duration-300"
                >
                  {/* Initials Avatar */}
                  <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-400 font-bold text-xl">
                      {initials}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-red-400 text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </main>
  )
}
