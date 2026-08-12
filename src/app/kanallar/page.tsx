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
      <section className="pt-10 sm:pt-16 lg:pt-20 pb-20 sm:pb-28 lg:pb-32">
        <div className="container-main">
          <Breadcrumb
            items={[
              { label: 'Ana Sayfa', href: '/' },
              { label: 'Kanallar' },
            ]}
          />

          <div className="text-center mb-14 sm:mb-16 lg:mb-20">
            <span className="section-tag">Kanal Listesi</span>
            <h1 className="heading-lg mb-4 sm:mb-5">150.000+ Canli Kanal</h1>
            <p className="text-[#94a3b8] text-sm sm:text-base max-w-2xl mx-auto">
              Spor, sinema, dizi, canli TV ve daha fazlasi. Tek abonelikle erisin.
            </p>
          </div>

          {/* Channel Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-20 sm:mb-24 lg:mb-28">
            {CHANNEL_CATEGORIES.map((category) => (
              <div key={category.name} className="card">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-white font-semibold text-sm sm:text-[15px]">{category.name}</h3>
                  <span className="text-lg opacity-60">{category.icon}</span>
                </div>
                <p className="text-[#94a3b8] text-xs sm:text-sm leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>

          {/* Channel Lists */}
          <div className="mb-20 sm:mb-24 lg:mb-28">
            <div className="mb-10 sm:mb-12">
              <span className="section-tag">Detayli Liste</span>
              <h2 className="heading-md">Kanal Listeleri</h2>
            </div>
            <div className="space-y-5 sm:space-y-6">
              {CHANNEL_LISTS.map((group) => (
                <div key={group.title} className="card">
                  <h3 className="text-white font-semibold text-sm sm:text-[15px] mb-4 sm:mb-5">{group.title}</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {group.channels.map((channel) => (
                      <span
                        key={channel}
                        className="inline-block bg-[#0a1628] text-[#94a3b8] text-xs px-3 py-1.5 rounded-lg border border-[#12233d] hover:border-red-500/20 hover:text-white transition-colors"
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
