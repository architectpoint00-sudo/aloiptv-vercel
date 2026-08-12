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
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                isOpen
                  ? 'bg-[#111827] border border-red-500/30'
                  : 'bg-[#111827] border border-[#1e293b] hover:border-[#334155]'
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
                      ? 'bg-red-500 text-white rotate-45'
                      : 'bg-[#1e293b] text-gray-400 group-hover:text-white'
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
                <div className="px-5 sm:px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-[#1e293b] pt-4">
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
