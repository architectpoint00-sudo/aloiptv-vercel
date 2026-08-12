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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Kanallar' },
          ]}
        />

        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            <span className="text-gradient">150.000+</span> Canli Kanal
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Spor, sinema, dizi, canli TV ve daha fazlasi. Tek abonelikle erisin.
          </p>
        </div>

        {/* Channel Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 sm:mb-20">
          {CHANNEL_CATEGORIES.map((category) => (
            <div
              key={category.name}
              className="bg-[#111827] border border-[#1e293b] border-t-[3px] border-t-red-500 rounded-2xl p-6"
            >
              <span className="text-4xl mb-4 block">{category.icon}</span>
              <h3 className="text-white font-semibold text-lg mb-2">{category.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Channel Lists */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Kanal Listeleri
          </h2>

          <div className="space-y-8">
            {CHANNEL_LISTS.map((group) => (
              <div key={group.title} className="bg-[#111827] border border-[#1e293b] rounded-2xl p-6">
                <h3 className="text-white font-semibold text-lg mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.channels.map((channel) => (
                    <span
                      key={channel}
                      className="inline-block bg-[#0d1224] text-gray-300 text-xs px-3 py-1.5 rounded-full border border-[#1e293b] hover:border-red-500/30 hover:text-white transition-colors"
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
        <div className="text-center py-12 sm:py-16">
          <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Tum Kanallari Kesfedin
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-lg mx-auto">
              150.000+ kanalin tamami icin ucretsiz 24 saatlik test hesabi alin.
            </p>
            <a
              href={WHATSAPP_LINKS.test}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1fba59] text-white font-semibold text-base px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-500/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Ucretsiz Test Al
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
