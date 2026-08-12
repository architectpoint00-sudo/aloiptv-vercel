import Link from 'next/link'
import { WHATSAPP_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-lg font-bold">
                <span className="text-white">alo</span>
                <span className="text-red-500">iptv</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Premium IPTV hizmeti. 150.000+ kanal, 4K UHD kalite, Anti-Freeze teknolojisi ile kesintisiz izleme deneyimi.
            </p>
            <a
              href={WHATSAPP_LINKS.support}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fba59] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Destek
            </a>
          </div>

          {/* Sayfalar */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Sayfalar</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/fiyatlar/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Fiyatlar
                </Link>
              </li>
              <li>
                <Link href="/kanallar/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Kanallar
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Hakkmzda
                </Link>
              </li>
            </ul>
          </div>

          {/* Destek */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Destek</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/sss/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  SSS
                </Link>
              </li>
              <li>
                <Link href="/iletisim/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/blog/akilli-tvde-iptv-kurulumu/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Kurulum Rehberi
                </Link>
              </li>
              <li>
                <Link href="/gizlilik-politikasi/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Gizlilik Politikas
                </Link>
              </li>
            </ul>
          </div>

          {/* Uyelik */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Üyelik</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_LINKS.test}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Ücretsiz Test
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINKS.dealer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Bayilik Başvurusu
                </a>
              </li>
              <li>
                <Link href="/iade-politikasi/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  İade Politikas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-xs">
              &copy; 2019 &ndash; 2026 Aloiptv. Tüm haklar sakldr.
            </p>
            <div className="flex items-center gap-4 text-xs">
              <Link href="/gizlilik-politikasi/" className="text-gray-500 hover:text-gray-300 transition-colors">
                Gizlilik
              </Link>
              <Link href="/kullanim-sartlari/" className="text-gray-500 hover:text-gray-300 transition-colors">
                Şartlar
              </Link>
              <Link href="/iade-politikasi/" className="text-gray-500 hover:text-gray-300 transition-colors">
                İade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
