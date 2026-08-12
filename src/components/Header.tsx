'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NAV_LINKS, WHATSAPP_LINKS } from '@/lib/constants'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#1a1a1a] bg-[#050505]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">A</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              ALO<span className="text-red-500">IPTV</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#888] text-sm font-medium hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={WHATSAPP_LINKS.buy}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg transition-colors"
            >
              Satin Al
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#1a1a1a] bg-[#050505]">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2.5 px-3 text-[#888] text-sm font-medium hover:text-white hover:bg-[#111] rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_LINKS.buy}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-center text-sm font-semibold text-white bg-red-500 hover:bg-red-600 px-5 py-3 rounded-lg transition-colors"
            >
              Satin Al
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
