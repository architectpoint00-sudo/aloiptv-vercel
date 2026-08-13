'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, WHATSAPP_LINKS } from '@/lib/constants'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-purple-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Icerige gec
      </a>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0 text-xl font-extrabold tracking-tight text-white">
          Alo
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            IPTV
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Ana menu" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <a
          href={WHATSAPP_LINKS.buy}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-transform duration-200 hover:scale-105 lg:inline-block"
        >
          Satın Al
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Menuyu kapat' : 'Menuyu ac'}
          className="-mr-2 rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-white/10 bg-[#0a0a0a] lg:hidden">
          <nav aria-label="Mobil menu" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                        isActive ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <a
              href={WHATSAPP_LINKS.buy}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Satın Al
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
