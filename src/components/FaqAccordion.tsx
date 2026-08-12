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
      <div className="space-y-3.5">
        {items.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-200 ${
                isOpen
                  ? 'bg-[#132440] border-2 border-red-500/30 shadow-lg shadow-red-500/[0.04]'
                  : 'bg-[#0f1d32] border-2 border-[#1a2d4a]/80 hover:border-[#243a5c]'
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 sm:px-7 py-5 sm:py-6 text-left gap-4"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-white text-sm sm:text-[15px] font-medium leading-snug">{item.question}</span>
                <svg
                  className={`w-4 h-4 text-red-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              {isOpen && (
                <div className="px-6 sm:px-7 pb-5 sm:pb-6 -mt-1">
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
