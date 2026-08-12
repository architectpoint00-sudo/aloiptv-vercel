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
      <section className="pt-8 pb-20 sm:pt-12 sm:pb-28">
        <div className="container-main">
          <Breadcrumb
            items={[
              { label: 'Ana Sayfa', href: '/' },
              { label: 'Kanallar' },
            ]}
          />

          <div className="text-center mb-14">
            <span className="section-tag">Kanal Listesi</span>
            <h1 className="heading-lg mb-4">150.000+ Canli Kanal</h1>
            <p className="text-[#94a3b8] text-sm sm:text-base max-w-2xl mx-auto">
              Spor, sinema, dizi, canli TV ve daha fazlasi. Tek abonelikle erisin.
            </p>
          </div>

          {/* Channel Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {CHANNEL_CATEGORIES.map((category) => (
              <div key={category.name} className="card">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold text-[15px]">{category.name}</h3>
                  <span className="text-lg opacity-60">{category.icon}</span>
                </div>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>

          {/* Channel Lists */}
          <div className="mb-20">
            <span className="section-tag">Detayli Liste</span>
            <h2 className="heading-md mb-8">Kanal Listeleri</h2>
            <div className="space-y-5">
              {CHANNEL_LISTS.map((group) => (
                <div key={group.title} className="card">
                  <h3 className="text-white font-semibold text-[15px] mb-4">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
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
            <div className="relative overflow-hidden bg-gradient-to-r from-[#0f1d32] via-[#111f38] to-[#0f1d32] border border-[#1a2d4a] rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-red-500/[0.04] rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="heading-md mb-4">Tum Kanallari Kesfedin</h2>
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
