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
    <main>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 sm:pt-12 sm:pb-28">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Kanallar' },
          ]}
        />

        <div className="text-center mb-16">
          <p className="section-label">Kanal Listesi</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            150.000+ Canli Kanal
          </h1>
          <p className="text-[#666] text-base max-w-2xl mx-auto">
            Spor, sinema, dizi, canli TV ve daha fazlasi. Tek abonelikle erisin.
          </p>
        </div>

        {/* Channel Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {CHANNEL_CATEGORIES.map((category) => (
            <div key={category.name} className="card p-6">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-white font-semibold">{category.name}</h3>
                </div>
                <span className="text-xl">{category.icon}</span>
              </div>
              <p className="text-[#666] text-sm leading-relaxed">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Channel Lists */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">Kanal Listeleri</h2>
          <div className="space-y-6">
            {CHANNEL_LISTS.map((group) => (
              <div key={group.title} className="card p-6">
                <h3 className="text-white font-semibold mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.channels.map((channel) => (
                    <span
                      key={channel}
                      className="inline-block bg-[#111] text-[#888] text-xs px-3 py-1.5 rounded-lg border border-[#1a1a1a] hover:border-red-500/20 hover:text-white transition-colors"
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
          <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Tum Kanallari Kesfedin</h2>
            <p className="text-[#666] text-sm mb-8 max-w-lg mx-auto">
              150.000+ kanalin tamami icin ucretsiz 24 saatlik test hesabi alin.
            </p>
            <a
              href={WHATSAPP_LINKS.test}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3.5"
            >
              Ucretsiz Test Al
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
