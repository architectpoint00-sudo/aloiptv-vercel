import Link from 'next/link'
import { WHATSAPP_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-5">
              <span className="text-white font-extrabold text-xl tracking-tight">
                Alo<span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">IPTV</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              Turkiye&apos;nin en guvenilir IPTV saglayicisi. 150.000+ kanal, 4K kalite ve 7/24 WhatsApp destegi.
            </p>
            <a
              href={WHATSAPP_LINKS.support}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1fba59] px-5 py-2.5 text-white text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Destek
            </a>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-5">Sayfalar</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-500 text-sm hover:text-white transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/fiyatlar/" className="text-gray-500 text-sm hover:text-white transition-colors">Fiyatlar</Link></li>
              <li><Link href="/kanallar/" className="text-gray-500 text-sm hover:text-white transition-colors">Kanallar</Link></li>
              <li><Link href="/hakkimizda/" className="text-gray-500 text-sm hover:text-white transition-colors">Hakkimizda</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-5">Destek</h4>
            <ul className="space-y-3">
              <li><Link href="/sss/" className="text-gray-500 text-sm hover:text-white transition-colors">SSS</Link></li>
              <li><Link href="/iletisim/" className="text-gray-500 text-sm hover:text-white transition-colors">Iletisim</Link></li>
              <li><a href={WHATSAPP_LINKS.support} target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-white transition-colors">Kurulum Rehberi</a></li>
            </ul>
          </div>

          {/* Subscription */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-5">Abonelik</h4>
            <ul className="space-y-3">
              <li><a href={WHATSAPP_LINKS.test} target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-white transition-colors">Ucretsiz Test</a></li>
              <li><a href={WHATSAPP_LINKS.dealer} target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-white transition-colors">Bayilik Programi</a></li>
              <li><a href={WHATSAPP_LINKS.refund} target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-white transition-colors">Iade Politikasi</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} AloIPTV. Tum haklari saklidir.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/gizlilik-politikasi/" className="text-gray-600 text-xs hover:text-white transition-colors">Gizlilik Politikasi</Link>
            <Link href="/kullanim-sartlari/" className="text-gray-600 text-xs hover:text-white transition-colors">Kullanim Sartlari</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
