'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NAV_LINKS, WHATSAPP_LINKS } from '@/lib/constants'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#111827]/90 backdrop-blur-xl border-b border-[#1e293b]/60">
      <div className="container-main">
        <div className="flex items-center justify-between h-[60px] sm:h-[68px] md:h-[76px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#22c55e] rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#111827]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <span className="text-white font-bold text-lg sm:text-xl tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
              Alo<span className="text-[#22c55e]">IPTV</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#94a3b8] text-[14px] font-medium px-4 py-2 rounded-lg hover:text-white hover:bg-white/[0.05] transition-all"
                style={{ fontFamily: "'Manrope', sans-serif" }}
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
              className="btn btn-outline text-[13px] px-5 py-2.5"
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
        <div className="lg:hidden border-t border-[#1e293b]/60 bg-[#111827]/98 backdrop-blur-xl">
          <div className="container-main py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-4 text-[#94a3b8] text-sm font-medium hover:text-white hover:bg-white/[0.05] rounded-lg transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1">
              <a
                href={WHATSAPP_LINKS.buy}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full text-sm py-3"
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
