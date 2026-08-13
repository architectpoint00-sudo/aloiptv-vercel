import Link from 'next/link'
import { WHATSAPP_LINKS } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-7xl font-extrabold text-transparent sm:text-8xl">
        404
      </p>

      <h1 className="mt-6 text-2xl font-extrabold text-white sm:text-3xl">Sayfa Bulunamadı</h1>

      <p className="mt-4 max-w-md text-base text-gray-400">
        Aradığınız sayfa taşınmış veya silinmiş olabilir. Aşağıdaki bağlantılardan devam edebilirsiniz.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-transform duration-200 hover:scale-105"
        >
          Ana Sayfaya Dön
        </Link>
        <a
          href={WHATSAPP_LINKS.support}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
        >
          Destek Al
        </a>
      </div>

      <nav aria-label="Popüler sayfalar" className="mt-12">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {[
            { label: 'Fiyatlar', href: '/fiyatlar/' },
            { label: 'Kanallar', href: '/kanallar/' },
            { label: 'SSS', href: '/sss/' },
            { label: 'İletişim', href: '/iletisim/' },
          ].map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm text-gray-500 transition-colors hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
