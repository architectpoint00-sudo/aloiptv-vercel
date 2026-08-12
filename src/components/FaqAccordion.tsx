'use client'

import { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
  categoryTitle?: string
}

export default function FaqAccordion({ items, categoryTitle }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      {categoryTitle && (
        <h3 className="text-xl font-bold text-white mb-5">{categoryTitle}</h3>
      )}
      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={index}
              className={`rounded-xl transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-gradient-to-b from-[#0f0f18] to-[#0a0a10] border border-red-500/20 shadow-lg shadow-red-500/5'
                  : 'glass-card'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left group"
              >
                <span className={`font-medium text-sm sm:text-base pr-4 transition-colors ${
                  isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'
                }`}>
                  {item.question}
                </span>
                <span
                  className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    isOpen
                      ? 'bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25 rotate-45'
                      : 'bg-white/[0.06] text-gray-500 group-hover:text-white'
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 sm:px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/[0.04] pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
