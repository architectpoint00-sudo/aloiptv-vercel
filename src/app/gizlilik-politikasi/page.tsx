import { buildMetadata } from '@/lib/seo'
import { PRIVACY_POLICY } from '@/lib/data'
import { WHATSAPP_LINKS } from '@/lib/constants'
import PolicyPage from '@/components/PolicyPage'

export const metadata = buildMetadata({
  title: 'Gizlilik Politikası',
  description:
    'AloIPTV gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında detaylı bilgi.',
  path: '/gizlilik-politikasi/',
})

export default function GizlilikPolitikasiPage() {
  return (
    <PolicyPage
      title="Gizlilik Politikası"
      breadcrumbLabel="Gizlilik Politikası"
      sections={PRIVACY_POLICY}
      ctaTitle="Gizlilik hakkında sorunuz mu var?"
      ctaHref={WHATSAPP_LINKS.default}
      ctaLabel="WhatsApp ile Sor"
      intro={
        <p>
          AloIPTV olarak kullanıcılarımızın gizliliğine büyük önem veriyoruz. Bu gizlilik
          politikası, web sitemizi ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda
          kişisel bilgilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında sizi
          bilgilendirmek amacıyla hazırlanmıştır.
        </p>
      }
    />
  )
}
