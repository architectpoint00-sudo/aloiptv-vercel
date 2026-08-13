import { buildMetadata } from '@/lib/seo'
import { WHATSAPP_LINKS } from '@/lib/constants'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = buildMetadata({
  title: 'İletişim',
  description:
    'AloIPTV iletişim. WhatsApp üzerinden 7/24 destek alın. Ortalama yanıt süremiz 3 dakikadır.',
  path: '/iletisim/',
})

const INFO_CARDS = [
  { title: 'Çalışma Saatleri', value: '7/24 Kesintisiz Destek', icon: '🕐' },
  { title: 'Yanıt Süresi', value: 'Ortalama 3 dakika', icon: '⚡' },
  { title: 'Dil', value: 'Türkçe + İngilizce', icon: '🌍' },
]

export default function IletisimPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'İletişim' }]} />

      <header className="mb-14 text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          Bizimle İletişime Geçin
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
          WhatsApp üzerinden 7/24 destek alın. Ortalama yanıt süremiz 3 dakikadır.
        </p>
      </header>

      {/* Contact channels */}
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <li>
          <a
            href={WHATSAPP_LINKS.support}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full rounded-2xl border border-white/10 bg-[#111827] p-6 transition-colors hover:border-[#25D366]/40 sm:p-8"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#25D366]/20 bg-[#25D366]/10">
              <svg className="h-6 w-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            <h2 className="mt-5 text-xl font-bold text-white">WhatsApp</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              En hızlı iletişim yolu. Satış, teknik destek ve genel sorularınız için 7/24 ulaşabilirsiniz.
            </p>
            <p className="mt-4 text-sm font-medium text-[#25D366] group-hover:underline">
              +1 (718) 586-4134
            </p>
          </a>
        </li>

        <li>
          <a
            href={WHATSAPP_LINKS.default}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full rounded-2xl border border-white/10 bg-[#111827] p-6 transition-colors hover:border-blue-500/40 sm:p-8"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
              <svg className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </span>
            <h2 className="mt-5 text-xl font-bold text-white">Telegram</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Telegram üzerinden de bize ulaşabilirsiniz.
            </p>
            <p className="mt-4 text-sm font-medium text-blue-400 group-hover:underline">@aloiptv</p>
          </a>
        </li>
      </ul>

      {/* Info */}
      <dl className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {INFO_CARDS.map((info) => (
          <div key={info.title} className="rounded-2xl border border-white/10 bg-[#111827] p-6 text-center">
            <span className="text-3xl" aria-hidden="true">{info.icon}</span>
            <dt className="mt-3 text-base font-bold text-white">{info.title}</dt>
            <dd className="mt-1 text-sm text-gray-500">{info.value}</dd>
          </div>
        ))}
      </dl>

      {/* Dealer CTA */}
      <section className="relative mt-20 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111827] via-[#0d0d14] to-[#111827] p-10 text-center sm:p-14">
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]" />
        <div className="relative">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Bayilik Başvurusu</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-400">
            IPTV bayilik programımız ile kendi müşterilerinize hizmet verin.
          </p>
          <a
            href={WHATSAPP_LINKS.dealer}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-transform duration-200 hover:scale-105"
          >
            Bayilik Bilgisi Al
          </a>
        </div>
      </section>
    </div>
  )
}
