import { buildMetadata } from '@/lib/seo'
import { CHANNEL_CATEGORIES, CHANNEL_LISTS } from '@/lib/data'
import { WHATSAPP_LINKS } from '@/lib/constants'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = buildMetadata({
  title: 'Kanallar',
  description:
    'AloIPTV kanal listesi. 150.000+ canli TV kanali: spor, sinema, dizi, haber, belgesel, cocuk, uluslararasi kanallar.',
  path: '/kanallar/',
})

export default function KanallarPage() {
  return (
    <>
      <section className="pt-28 sm:pt-36 lg:pt-44 pb-24 sm:pb-32 lg:pb-40">
        <div className="container-main">
          <Breadcrumb
            items={[
              { label: 'Ana Sayfa', href: '/' },
              { label: 'Kanallar' },
            ]}
          />

          <div className="text-center mb-16 sm:mb-20">
            <span className="section-tag">Kanal Listesi</span>
            <h1 className="heading-lg mb-4 sm:mb-5">150.000+ Canli Kanal</h1>
            <p className="text-[#94a3b8] text-base sm:text-lg max-w-2xl mx-auto">
              Spor, sinema, dizi, canli TV ve daha fazlasi. Tek abonelikle erisin.
            </p>
          </div>

          {/* Channel Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-20 sm:mb-28">
            {CHANNEL_CATEGORIES.map((category) => (
              <div key={category.name} className="card">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'Sora', sans-serif" }}>{category.name}</h3>
                  <span className="text-2xl opacity-60">{category.icon}</span>
                </div>
                <p className="text-[#94a3b8] text-[15px] leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>

          {/* Channel Lists */}
          <div className="mb-20 sm:mb-28">
            <div className="text-center mb-12 sm:mb-16">
              <span className="section-tag">Detayli Liste</span>
              <h2 className="heading-md">Kanal Listeleri</h2>
            </div>
            <div className="space-y-5">
              {CHANNEL_LISTS.map((group) => (
                <div key={group.title} className="card">
                  <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.channels.map((channel) => (
                      <span
                        key={channel}
                        className="inline-block bg-[#111827] text-[#94a3b8] text-sm px-4 py-2 rounded-lg border border-[#334155] hover:border-[#22c55e]/30 hover:text-white transition-colors"
                      >
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="cta-card max-w-3xl mx-auto text-center">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#22c55e]/[0.04] rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="heading-md mb-4 sm:mb-5">Tum Kanallari Kesfedin</h2>
                <p className="text-[#94a3b8] text-sm mb-8 max-w-lg mx-auto">
                  150.000+ kanalin tamami icin ucretsiz 24 saatlik test hesabi alin.
                </p>
                <a
                  href={WHATSAPP_LINKS.test}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  Ucretsiz Test Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
