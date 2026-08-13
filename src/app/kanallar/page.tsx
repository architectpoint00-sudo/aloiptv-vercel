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
      <section className="pt-28 sm:pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Ana Sayfa', href: '/' },
              { label: 'Kanallar' },
            ]}
          />

          <div className="text-center mb-14">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">150.000+</span> Canli Kanal
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Spor, sinema, dizi, canli TV ve daha fazlasi. Tek abonelikle erisin.
            </p>
          </div>

          {/* Channel Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {CHANNEL_CATEGORIES.map((category) => (
              <div key={category.name} className="rounded-2xl border border-white/10 bg-[#111827] p-6 sm:p-8 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold text-lg">{category.name}</h3>
                  <span className="text-2xl opacity-60">{category.icon}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>

          {/* Channel Lists */}
          <div className="mb-20">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Kanal Listeleri</h2>
            </div>
            <div className="space-y-5">
              {CHANNEL_LISTS.map((group) => (
                <div key={group.title} className="rounded-2xl border border-white/10 bg-[#111827] p-6 sm:p-8">
                  <h3 className="text-white font-bold text-lg mb-4">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.channels.map((channel) => (
                      <span
                        key={channel}
                        className="inline-block bg-[#0a0a0a] text-gray-400 text-sm px-4 py-2 rounded-lg border border-white/10 hover:border-purple-500/30 hover:text-white transition-colors"
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
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111827] via-[#0d0d14] to-[#111827] p-10 sm:p-14 text-center max-w-3xl mx-auto">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px]" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Tum Kanallari Kesfedin</h2>
              <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto">
                150.000+ kanalin tamami icin ucretsiz 24 saatlik test hesabi alin.
              </p>
              <a
                href={WHATSAPP_LINKS.test}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all hover:scale-105"
              >
                Ucretsiz Test Al
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
