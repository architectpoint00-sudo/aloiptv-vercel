import { buildMetadata } from '@/lib/seo'
import { TERMS_OF_USE } from '@/lib/data'
import { WHATSAPP_LINKS } from '@/lib/constants'
import PolicyPage from '@/components/PolicyPage'

export const metadata = buildMetadata({
  title: 'Kullanım Şartları',
  description:
    'AloIPTV kullanım şartları ve koşulları. Hizmet kullanımı, ödeme, iade ve hesap yönetimi hakkında detaylı bilgi.',
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
