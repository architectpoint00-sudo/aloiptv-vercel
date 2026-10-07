import type { FaqItem } from '@/lib/data'

interface FaqAccordionProps {
  items: FaqItem[]
  categoryTitle?: string
}

/**
 * Native <details> accordion. Every answer is rendered in the HTML (collapsed
 * by default except the first), so the visible content always matches the
 * FAQPage JSON-LD.
 */
export default function FaqAccordion({ items, categoryTitle }: FaqAccordionProps) {
  return (
    <div>
      {categoryTitle && (
        <h2 className="mb-6 text-xl font-bold text-white sm:text-2xl">{categoryTitle}</h2>
      )}

      <div className="flex flex-col gap-3">
        {items.map((item, index) => (
          <details
            key={item.question}
            open={index === 0}
            className="group overflow-hidden rounded-xl border border-white/10 bg-[#111827] transition-colors hover:border-white/20 open:border-purple-500/40"
          >
            <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left [&::-webkit-details-marker]:hidden">
              <h3 className="text-[15px] font-medium leading-snug text-white">{item.question}</h3>
              <svg
                className="h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180 group-open:text-purple-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-5">
              <p className="text-sm leading-relaxed text-gray-400">{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}
