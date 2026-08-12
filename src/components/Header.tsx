'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NAV_LINKS, WHATSAPP_LINKS } from '@/lib/constants'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#050e19]/90 backdrop-blur-xl border-b border-[#1a2d4a]/50">
      <div className="container-main">
        <div className="flex items-center justify-between h-[56px] sm:h-[64px] md:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/20">
              <span className="text-white font-black text-xs sm:text-sm leading-none">A</span>
            </div>
            <span className="text-white font-bold text-lg sm:text-xl tracking-tight">
              ALO<span className="text-red-500">IPTV</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#94a3b8] text-[13px] font-medium px-4 py-2 rounded-lg hover:text-white hover:bg-white/[0.04] transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href={WHATSAPP_LINKS.buy}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-[13px] px-6 py-2.5"
            >
              Satin Al
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#1a2d4a]/50 bg-[#050e19]/98 backdrop-blur-xl">
          <div className="container-main py-3 sm:py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2.5 sm:py-3 px-4 text-[#94a3b8] text-sm font-medium hover:text-white hover:bg-white/[0.04] rounded-lg transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 sm:pt-3 pb-1">
              <a
                href={WHATSAPP_LINKS.buy}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full text-sm py-2.5 sm:py-3"
              >
                Satin Al
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
