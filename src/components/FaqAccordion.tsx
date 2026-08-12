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
        <h3 className="text-white font-semibold text-lg mb-4">{categoryTitle}</h3>
      )}
      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div key={index} className="faq-item" data-open={isOpen}>
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-white text-sm font-medium pr-4">{item.question}</span>
                <svg
                  className={`w-4 h-4 text-red-400 shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              {isOpen && (
                <div className="px-5 pb-5">
                  <p className="text-[#666] text-sm leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
