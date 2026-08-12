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
        <h3 className="text-white font-semibold text-lg mb-6">{categoryTitle}</h3>
      )}
      <div className="flex flex-col gap-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={index}
              style={{
                background: isOpen ? '#162d4d' : '#0f1d32',
                border: isOpen ? '2px solid rgba(239, 68, 68, 0.35)' : '2px solid #1e3554',
                borderRadius: '14px',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
                boxShadow: isOpen ? '0 8px 24px rgba(0,0,0,0.2)' : 'none',
              }}
            >
              <button
                className="w-full flex items-center justify-between text-left gap-4"
                style={{ padding: '20px 24px' }}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-white font-medium" style={{ fontSize: '15px', lineHeight: '1.5' }}>{item.question}</span>
                <svg
                  className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                  style={{ width: '18px', height: '18px', color: '#ef4444' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              {isOpen && (
                <div style={{ padding: '0 24px 20px 24px', marginTop: '-4px' }}>
                  <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{item.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
