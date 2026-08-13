'use client'

import { useState } from 'react'
import type { FaqItem } from '@/lib/data'

interface FaqAccordionProps {
  items: FaqItem[]
  categoryTitle?: string
}

export default function FaqAccordion({ items, categoryTitle }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div>
      {categoryTitle && (
        <h3 className="text-white font-bold text-xl sm:text-2xl mb-6" style={{ fontFamily: "'Sora', sans-serif" }}>{categoryTitle}</h3>
      )}
      <div className="flex flex-col gap-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={index}
              style={{
                background: isOpen ? '#253347' : '#1e293b',
                border: isOpen ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid #334155',
                borderRadius: '14px',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
              }}
            >
              <button
                className="w-full flex items-center justify-between text-left gap-4"
                style={{ padding: '22px 26px' }}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-white font-medium" style={{ fontSize: '16px', lineHeight: '1.5', fontFamily: "'Manrope', sans-serif" }}>{item.question}</span>
                <svg
                  className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  style={{ width: '16px', height: '16px', color: '#22c55e' }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              {isOpen && (
                <div style={{ padding: '0 26px 22px 26px', marginTop: '-4px' }}>
                  <p className="text-[15px] leading-relaxed" style={{ color: '#94a3b8', fontFamily: "'Manrope', sans-serif" }}>{item.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
