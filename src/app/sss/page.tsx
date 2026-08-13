import { buildMetadata } from '@/lib/seo'
import { SSS_DATA } from '@/lib/data'
import { WHATSAPP_LINKS } from '@/lib/constants'
import Breadcrumb from '@/components/Breadcrumb'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata = buildMetadata({
  title: 'SSS',
  description:
    'Sikca sorulan sorular. IPTV nedir, nasil kurulur, hangi cihazlarda kullanilir, ucretler ve iade politikasi hakkinda tum sorularin yanitlari.',
  path: '/sss/',
})

export default function SSSPage() {
  return (
    <>
      <section className="pt-28 sm:pt-36 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Ana Sayfa', href: '/' },
              { label: 'SSS' },
            ]}
          />

          <div className="text-center mb-14">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">Sikca Sorulan Sorular</h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Tum sorularinizin yanitlari burada.
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-14 mb-20">
            {SSS_DATA.map((section) => (
              <FaqAccordion
                key={section.category}
                categoryTitle={section.category}
                items={section.items}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111827] via-[#0d0d14] to-[#111827] p-10 sm:p-14 text-center">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px]" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Baska Sorunuz mu Var?</h2>
              <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto">
                WhatsApp uzerinden 7/24 ulasabilirsiniz.
              </p>
              <a
                href={WHATSAPP_LINKS.support}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all hover:scale-105"
              >
                WhatsApp Destek
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
