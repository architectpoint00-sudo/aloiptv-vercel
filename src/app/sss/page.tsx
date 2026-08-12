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
    <main>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 sm:pt-12 sm:pb-28">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'SSS' },
          ]}
        />

        <div className="text-center mb-16">
          <p className="section-label">Sikca Sorulan Sorular</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Merak Ettiginiz Her Sey
          </h1>
          <p className="text-[#666] text-base max-w-2xl mx-auto">
            Tum sorularinizin yanitlari burada.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-10 mb-20">
          {SSS_DATA.map((section) => (
            <FaqAccordion
              key={section.category}
              categoryTitle={section.category}
              items={section.items}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-white mb-4">Baska Sorunuz mu Var?</h2>
            <p className="text-[#666] text-sm mb-8 max-w-lg mx-auto">
              WhatsApp uzerinden 7/24 ulasabilirsiniz.
            </p>
            <a
              href={WHATSAPP_LINKS.support}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3.5"
            >
              WhatsApp Destek
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
