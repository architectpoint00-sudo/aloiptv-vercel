import Link from 'next/link'
import { WHATSAPP_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-[#12233d] bg-[#030a14]">
      <div className="container-main py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/20">
                <span className="text-white font-black text-sm leading-none">A</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                ALO<span className="text-red-500">IPTV</span>
              </span>
            </div>
            <p className="text-[#64748b] text-sm leading-relaxed">
              AloIPTV Premium 4K yayincilik — 150.000+ canli kanal ve 80.000+ film-dizi arsivi,
              Anti-Freeze sunuculariyla %99.9 uptime garantisi.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-16 gap-y-8 md:justify-end">
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Sayfalar</h4>
              <ul className="space-y-2.5">
                <li><Link href="/" className="text-[#64748b] text-sm hover:text-white transition-colors">Ana Sayfa</Link></li>
                <li><Link href="/fiyatlar/" className="text-[#64748b] text-sm hover:text-white transition-colors">Fiyatlar</Link></li>
                <li><Link href="/kanallar/" className="text-[#64748b] text-sm hover:text-white transition-colors">Kanallar</Link></li>
                <li><Link href="/hakkimizda/" className="text-[#64748b] text-sm hover:text-white transition-colors">Hakkimizda</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Destek</h4>
              <ul className="space-y-2.5">
                <li><Link href="/sss/" className="text-[#64748b] text-sm hover:text-white transition-colors">SSS</Link></li>
                <li><Link href="/iletisim/" className="text-[#64748b] text-sm hover:text-white transition-colors">Iletisim</Link></li>
                <li>
                  <a href={WHATSAPP_LINKS.support} target="_blank" rel="noopener noreferrer" className="text-[#64748b] text-sm hover:text-white transition-colors">
                    WhatsApp Destek
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#12233d]">
          <p className="text-[#475569] text-xs text-center">
            &copy; {new Date().getFullYear()} AloIPTV. Tum haklari saklidir.
          </p>
        </div>
      </div>
    </footer>
  )
}
