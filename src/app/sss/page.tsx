import { buildMetadata } from '@/lib/seo'
import { SSS_DATA } from '@/lib/data'
import { WHATSAPP_LINKS } from '@/lib/constants'
import Breadcrumb from '@/components/Breadcrumb'
import FaqAccordion from '@/components/FaqAccordion'
import { FaqJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'SSS',
  description:
    'Sıkça sorulan sorular. IPTV nedir, nasıl kurulur, hangi cihazlarda kullanılır, ücretler ve iade politikası hakkında tüm soruların yanıtları.',
  path: '/sss/',
})

export default function SSSPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <FaqJsonLd items={SSS_DATA.flatMap((s) => s.items)} />
      <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'SSS' }]} />

      <header className="mb-14 text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          Sıkça Sorulan Sorular
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
          Tüm sorularınızın yanıtları burada.
        </p>
      </header>

      <div className="space-y-14">
        {SSS_DATA.map((section) => (
          <FaqAccordion key={section.category} categoryTitle={section.category} items={section.items} />
        ))}
      </div>

      {/* CTA */}
      <section className="relative mt-20 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111827] via-[#0d0d14] to-[#111827] p-10 text-center sm:p-14">
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]" />
        <div className="relative">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Başka Sorunuz mu Var?</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-gray-400">
            WhatsApp üzerinden 7/24 ulaşabilirsiniz.
          </p>
          <a
            href={WHATSAPP_LINKS.support}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-transform duration-200 hover:scale-105"
          >
            WhatsApp Destek
          </a>
        </div>
      </section>
    </div>
  )
}
