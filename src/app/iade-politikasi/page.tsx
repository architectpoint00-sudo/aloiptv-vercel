import { buildMetadata } from '@/lib/seo'
import { REFUND_POLICY } from '@/lib/data'
import { WHATSAPP_LINKS } from '@/lib/constants'
import PolicyPage from '@/components/PolicyPage'

export const metadata = buildMetadata({
  title: 'İade Politikası',
  description:
    'AloIPTV iade politikası. 7 gün koşulsuz para iade garantisi ve iade süreci hakkında detaylı bilgi.',
  path: '/iade-politikasi/',
})

export default function IadePolitikasiPage() {
  return (
    <PolicyPage
      title="İade Politikası"
      breadcrumbLabel="İade Politikası"
      sections={REFUND_POLICY}
      ctaTitle="İade talebi veya sorularınız için bize ulaşın"
      ctaHref={WHATSAPP_LINKS.refund}
      ctaLabel="İade Talebi Oluştur"
      intro={
        <p>
          Satın alma tarihinden itibaren 7 gün içinde koşulsuz para iade garantisi sunuyoruz.
          Aşağıda iade koşullarını, sürecini ve sürelerini detaylı olarak bulabilirsiniz.
        </p>
      }
    />
  )
}
