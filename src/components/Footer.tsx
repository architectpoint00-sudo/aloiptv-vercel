import Link from 'next/link'
import { WHATSAPP_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-[#1e293b] bg-[#0f172a]">
      <div className="container-main py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-[#22c55e] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#111827]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span className="text-white font-bold text-xl tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
                Alo<span className="text-[#22c55e]">IPTV</span>
              </span>
            </div>
            <p className="text-[#64748b] text-[15px] leading-relaxed max-w-sm">
              Premium 4K IPTV hizmeti — 150.000+ canli kanal ve 80.000+ film-dizi arsivi.
              Anti-Freeze sunuculariyla %99.9 uptime garantisi.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h4 className="text-white text-sm font-semibold mb-5" style={{ fontFamily: "'Sora', sans-serif" }}>Sayfalar</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-[#64748b] text-[15px] hover:text-[#22c55e] transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/fiyatlar/" className="text-[#64748b] text-[15px] hover:text-[#22c55e] transition-colors">Fiyatlar</Link></li>
              <li><Link href="/kanallar/" className="text-[#64748b] text-[15px] hover:text-[#22c55e] transition-colors">Kanallar</Link></li>
              <li><Link href="/hakkimizda/" className="text-[#64748b] text-[15px] hover:text-[#22c55e] transition-colors">Hakkimizda</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            <h4 className="text-white text-sm font-semibold mb-5" style={{ fontFamily: "'Sora', sans-serif" }}>Destek</h4>
            <ul className="space-y-3">
              <li><Link href="/sss/" className="text-[#64748b] text-[15px] hover:text-[#22c55e] transition-colors">SSS</Link></li>
              <li><Link href="/iletisim/" className="text-[#64748b] text-[15px] hover:text-[#22c55e] transition-colors">Iletisim</Link></li>
              <li>
                <a href={WHATSAPP_LINKS.support} target="_blank" rel="noopener noreferrer" className="text-[#64748b] text-[15px] hover:text-[#22c55e] transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-2">
            <h4 className="text-white text-sm font-semibold mb-5" style={{ fontFamily: "'Sora', sans-serif" }}>Baslayin</h4>
            <a
              href={WHATSAPP_LINKS.test}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-xs px-5 py-2.5 w-full justify-center"
            >
              Ucretsiz Test
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-[#1e293b]">
          <p className="text-[#475569] text-xs text-center">
            &copy; {new Date().getFullYear()} AloIPTV. Tum haklari saklidir.
          </p>
        </div>
      </div>
    </footer>
  )
}
