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
      <section className="pt-28 sm:pt-36 lg:pt-44 pb-28 sm:pb-36 lg:pb-44">
        <div className="container-main">
          <Breadcrumb
            items={[
              { label: 'Ana Sayfa', href: '/' },
              { label: 'Kanallar' },
            ]}
          />

          <div className="text-center mb-20 sm:mb-24 lg:mb-28">
            <span className="section-tag">Kanal Listesi</span>
            <h1 className="heading-lg mb-4 sm:mb-5">150.000+ Canli Kanal</h1>
            <p className="text-[#94a3b8] text-base sm:text-lg max-w-2xl mx-auto">
              Spor, sinema, dizi, canli TV ve daha fazlasi. Tek abonelikle erisin.
            </p>
          </div>

          {/* Channel Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24 sm:mb-32 lg:mb-36">
            {CHANNEL_CATEGORIES.map((category) => (
              <div key={category.name} className="card">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-white font-semibold text-lg sm:text-xl">{category.name}</h3>
                  <span className="text-2xl opacity-60">{category.icon}</span>
                </div>
                <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>

          {/* Channel Lists */}
          <div className="mb-24 sm:mb-32 lg:mb-36">
            <div className="mb-14 sm:mb-16 lg:mb-20">
              <span className="section-tag">Detayli Liste</span>
              <h2 className="heading-md">Kanal Listeleri</h2>
            </div>
            <div className="space-y-5 sm:space-y-6">
              {CHANNEL_LISTS.map((group) => (
                <div key={group.title} className="card">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-5">{group.title}</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {group.channels.map((channel) => (
                      <span
                        key={channel}
                        className="inline-block bg-[#0a1628] text-[#94a3b8] text-sm px-4 py-2 rounded-lg border border-[#12233d] hover:border-red-500/20 hover:text-white transition-colors"
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
            <div className="relative overflow-hidden bg-gradient-to-r from-[#0f1d32] via-[#111f38] to-[#0f1d32] border border-[#1a2d4a] rounded-xl sm:rounded-2xl p-8 sm:p-10 lg:p-14 max-w-3xl mx-auto">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-red-500/[0.04] rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="heading-md mb-4 sm:mb-5">Tum Kanallari Kesfedin</h2>
                <p className="text-[#94a3b8] text-sm mb-8 sm:mb-10 max-w-lg mx-auto">
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
