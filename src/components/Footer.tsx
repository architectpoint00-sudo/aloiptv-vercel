import Link from 'next/link'
import { WHATSAPP_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand */}
          <div className="max-w-md">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">A</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                ALO<span className="text-red-500">IPTV</span>
              </span>
            </div>
            <p className="text-[#666] text-sm leading-relaxed">
              AloIPTV Premium 4K yayincilik — 150.000+ canli kanal ve 80.000+ film-dizi arsivi,
              Anti-Freeze sunuculariyla %99.9 uptime garantisi.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-16 gap-y-8 md:justify-end">
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Sayfalar</h4>
              <ul className="space-y-2.5">
                <li><Link href="/" className="text-[#666] text-sm hover:text-white transition-colors">Ana Sayfa</Link></li>
                <li><Link href="/fiyatlar/" className="text-[#666] text-sm hover:text-white transition-colors">Fiyatlar</Link></li>
                <li><Link href="/kanallar/" className="text-[#666] text-sm hover:text-white transition-colors">Kanallar</Link></li>
                <li><Link href="/hakkimizda/" className="text-[#666] text-sm hover:text-white transition-colors">Hakkimizda</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Destek</h4>
              <ul className="space-y-2.5">
                <li><Link href="/sss/" className="text-[#666] text-sm hover:text-white transition-colors">SSS</Link></li>
                <li><Link href="/iletisim/" className="text-[#666] text-sm hover:text-white transition-colors">Iletisim</Link></li>
                <li>
                  <a href={WHATSAPP_LINKS.support} target="_blank" rel="noopener noreferrer" className="text-[#666] text-sm hover:text-white transition-colors">
                    WhatsApp Destek
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#1a1a1a]">
          <p className="text-[#444] text-xs text-center">
            &copy; {new Date().getFullYear()} AloIPTV. Tum haklari saklidir.
          </p>
        </div>
      </div>
    </footer>
  )
}
