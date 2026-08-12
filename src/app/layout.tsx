import type { Metadata } from 'next'
import './globals.css'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Premium IPTV Satin Al | 150K+ Kanal, 4K UHD`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
