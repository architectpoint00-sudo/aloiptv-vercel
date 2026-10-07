import { buildMetadata } from '@/lib/seo'
import { TERMS_OF_USE } from '@/lib/data'
import { WHATSAPP_LINKS } from '@/lib/constants'
import PolicyPage from '@/components/PolicyPage'

export const metadata = buildMetadata({
  title: 'Kullanım Şartları ve Hesap Koşulları',
  description:
    'AloIPTV kullanım şartları: hesap kurulumu, hizmet kullanımı, cihaz limiti, ödeme ve abonelik, içerik sorumluluk reddi, hesap askıya alma ve fesih koşulları.',
  path: '/kullanim-sartlari/',
})

export default function KullanimSartlariPage() {
  return (
    <PolicyPage
      title="Kullanım Şartları"
      breadcrumbLabel="Kullanım Şartları"
      sections={TERMS_OF_USE}
      ctaTitle="Kullanım şartları hakkında sorularınız için bize ulaşın"
      ctaHref={WHATSAPP_LINKS.support}
      ctaLabel="WhatsApp Destek"
      intro={
        <p>
          AloIPTV hizmetlerini kullanarak bu şartları kabul etmiş sayılırsınız. Lütfen
          hizmetlerimizi kullanmadan önce aşağıdaki koşulları dikkatlice okuyunuz.
        </p>
      }
    />
  )
}
