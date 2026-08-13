import { buildMetadata } from '@/lib/seo'
import { CHANNEL_CATEGORIES, CHANNEL_LISTS } from '@/lib/data'
import { WHATSAPP_LINKS } from '@/lib/constants'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = buildMetadata({
  title: 'Kanallar',
  description:
    'AloIPTV kanal listesi. 150.000+ canlı TV kanalı: spor, sinema, dizi, haber, belgesel, çocuk, uluslararası kanallar.',
  path: '/kanallar/',
})

export default function KanallarPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Kanallar' }]} />

      <header className="mx-auto mb-14 max-w-2xl text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            150.000+
          </span>{' '}
          Canlı Kanal
        </h1>
        <p className="mt-4 text-base text-gray-400 sm:text-lg">
          Spor, sinema, dizi, canlı TV ve daha fazlası. Tek abonelikle erişin.
        </p>
      </header>

      {/* Categories */}
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CHANNEL_CATEGORIES.map((category) => (
          <li
            key={category.name}
            className="rounded-2xl border border-white/10 bg-[#111827] p-6 transition-colors hover:border-white/20 sm:p-8"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-bold text-white">{category.name}</h2>
              <span className="text-2xl opacity-60" aria-hidden="true">{category.icon}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">{category.description}</p>
          </li>
        ))}
      </ul>

      {/* Channel lists */}
      <section aria-labelledby="channel-lists" className="mt-20">
        <h2 id="channel-lists" className="mb-14 text-center text-3xl font-extrabold text-white sm:text-4xl">
          Kanal Listeleri
        </h2>

        <div className="space-y-5">
          {CHANNEL_LISTS.map((group) => (
            <div key={group.title} className="rounded-2xl border border-white/10 bg-[#111827] p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.channels.map((channel) => (
                  <li
                    key={channel}
                    className="rounded-lg border border-white/10 bg-[#0a0a0a] px-4 py-2 text-sm text-gray-400 transition-colors hover:border-purple-500/30 hover:text-white"
                  >
                    {channel}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto mt-20 max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111827] via-[#0d0d14] to-[#111827] p-10 text-center sm:p-14">
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]" />
        <div className="relative">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Tüm Kanalları Keşfedin</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-gray-400">
            150.000+ kanalın tamamı için ücretsiz 24 saatlik test hesabı alın.
          </p>
          <a
            href={WHATSAPP_LINKS.test}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-transform duration-200 hover:scale-105"
          >
            Ücretsiz Test Al
          </a>
        </div>
      </section>
    </div>
  )
}
