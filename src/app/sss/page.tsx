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
      <section className="pt-8 pb-20 sm:pt-12 sm:pb-28">
        <div className="container-main max-w-3xl">
          <Breadcrumb
            items={[
              { label: 'Ana Sayfa', href: '/' },
              { label: 'SSS' },
            ]}
          />

          <div className="text-center mb-14">
            <span className="section-tag">Sikca Sorulan Sorular</span>
            <h1 className="heading-lg mb-4">Merak Ettiginiz Her Sey</h1>
            <p className="text-[#94a3b8] text-sm sm:text-base max-w-2xl mx-auto">
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
            <div className="relative overflow-hidden bg-gradient-to-r from-[#0f1d32] via-[#111f38] to-[#0f1d32] border border-[#1a2d4a] rounded-2xl p-8 sm:p-12">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-red-500/[0.04] rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="heading-md mb-4">Baska Sorunuz mu Var?</h2>
                <p className="text-[#94a3b8] text-sm mb-8 max-w-lg mx-auto">
                  WhatsApp uzerinden 7/24 ulasabilirsiniz.
                </p>
                <a
                  href={WHATSAPP_LINKS.support}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  WhatsApp Destek
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
