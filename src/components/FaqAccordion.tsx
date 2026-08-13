'use client'

import { useState, useId } from 'react'
import type { FaqItem } from '@/lib/data'

interface FaqAccordionProps {
  items: FaqItem[]
  categoryTitle?: string
}

export default function FaqAccordion({ items, categoryTitle }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <div>
      {categoryTitle && (
        <h3 className="mb-6 text-xl font-bold text-white sm:text-2xl">{categoryTitle}</h3>
      )}

      <div className="flex flex-col gap-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index
          const btnId = `${baseId}-btn-${index}`
          const panelId = `${baseId}-panel-${index}`

          return (
            <div
              key={index}
              className={`overflow-hidden rounded-xl border bg-[#111827] transition-colors ${
                isOpen ? 'border-purple-500/40' : 'border-white/10 hover:border-white/20'
              }`}
            >
              <h4>
                <button
                  type="button"
                  id={btnId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[15px] font-medium leading-snug text-white">
                    {item.question}
                  </span>
                  <svg
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-purple-400' : 'text-gray-500'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                  </svg>
                </button>
              </h4>

              {isOpen && (
                <div id={panelId} role="region" aria-labelledby={btnId} className="px-6 pb-5">
                  <p className="text-sm leading-relaxed text-gray-400">{item.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
