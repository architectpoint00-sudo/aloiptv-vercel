'use client'

import { useState } from 'react'
import type { FaqItem } from '@/lib/data'

interface FaqAccordionProps {
  items: FaqItem[]
  categoryTitle?: string
}

export default function FaqAccordion({ items, categoryTitle }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div>
      {categoryTitle && (
        <h3 className="text-white font-bold text-xl sm:text-2xl mb-6">{categoryTitle}</h3>
      )}
      <div className="flex flex-col gap-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={index}
              style={{
                background: '#111827',
                border: isOpen ? '1px solid rgba(139, 92, 246, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
              }}
            >
              <button
                className="w-full flex items-center justify-between text-left gap-4"
                style={{ padding: '20px 24px' }}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span style={{ color: '#ffffff', fontWeight: 500, fontSize: '15px', lineHeight: '1.5' }}>{item.question}</span>
                <svg
                  className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  style={{ width: '16px', height: '16px', color: isOpen ? '#a78bfa' : '#6b7280' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <div style={{ padding: '0 24px 20px 24px', marginTop: '-4px' }}>
                  <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.7' }}>{item.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
