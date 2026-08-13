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
      <section className="pt-28 sm:pt-36 lg:pt-44 pb-24 sm:pb-32 lg:pb-40">
        <div className="container-main max-w-3xl">
          <Breadcrumb
            items={[
              { label: 'Ana Sayfa', href: '/' },
              { label: 'SSS' },
            ]}
          />

          <div className="text-center mb-16 sm:mb-20">
            <span className="section-tag">Sikca Sorulan Sorular</span>
            <h1 className="heading-lg mb-4 sm:mb-5">Merak Ettiginiz Her Sey</h1>
            <p className="text-[#94a3b8] text-base sm:text-lg max-w-2xl mx-auto">
              Tum sorularinizin yanitlari burada.
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-14 sm:space-y-18 mb-20 sm:mb-28">
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
            <div className="cta-card text-center">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#22c55e]/[0.04] rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="heading-md mb-4 sm:mb-5">Baska Sorunuz mu Var?</h2>
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
