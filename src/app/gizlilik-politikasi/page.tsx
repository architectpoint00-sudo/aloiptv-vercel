import { buildMetadata } from '@/lib/seo'
import { PRIVACY_POLICY } from '@/lib/data'
import { WHATSAPP_LINKS } from '@/lib/constants'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = buildMetadata({
  title: 'Gizlilik Politikasi',
  description:
    'AloIPTV gizlilik politikasi. Kisisel verilerinizin nasil toplandigi, kullanildigi ve korundugu hakkinda detayli bilgi.',
  path: '/gizlilik-politikasi/',
})

export default function GizlilikPolitikasiPage() {
  return (
    <section className="bg-[#0a0a0f] min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Gizlilik Politikasi' },
          ]}
        />

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          AloIPTV Gizlilik Politikasi
        </h1>

        <p className="text-gray-300 leading-relaxed mb-8">
          AloIPTV olarak kullanicilarimizin gizliligine buyuk onem veriyoruz. Bu
          gizlilik politikasi, web sitemizi ziyaret ettiginizde veya
          hizmetlerimizi kullandiginizda kisisel bilgilerinizin nasil
          toplandigi, kullanildigi ve korundugu hakkinda sizi bilgilendirmek
          amaciyla hazirlanmistir. Herhangi bir sorunuz varsa{' '}
          <a
            href={WHATSAPP_LINKS.default}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-300 underline transition-colors"
          >
            WhatsApp uzerinden
          </a>{' '}
          bizimle iletisime gecebilirsiniz.
        </p>

        <div className="space-y-10">
          {PRIVACY_POLICY.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold text-white mb-4">
                {section.title}
              </h2>
              {section.content.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-gray-300 leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
