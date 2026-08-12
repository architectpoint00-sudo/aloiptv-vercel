import type { ComparisonRow } from '@/lib/data'

interface ComparisonTableProps {
  rows: ComparisonRow[]
}

export default function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className="bg-[#111111] border border-[#1a1a1a] rounded-2xl overflow-hidden">
      {/* Table Header */}
      <div className="grid grid-cols-3 bg-white/5 border-b border-[#1a1a1a]">
        <div className="px-4 sm:px-6 py-4">
          <span className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            Özellik
          </span>
        </div>
        <div className="px-4 sm:px-6 py-4 text-center">
          <span className="text-red-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
            AloIPTV
          </span>
        </div>
        <div className="px-4 sm:px-6 py-4 text-center">
          <span className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            Diğerleri
          </span>
        </div>
      </div>

      {/* Table Body */}
      {rows.map((row, index) => (
        <div
          key={index}
          className={`grid grid-cols-3 border-b border-[#1a1a1a] last:border-b-0 hover:bg-white/[0.02] transition-colors ${
            index % 2 === 0 ? '' : 'bg-white/[0.01]'
          }`}
        >
          {/* Feature */}
          <div className="px-4 sm:px-6 py-3.5 flex items-center">
            <span className="text-white text-xs sm:text-sm font-medium">{row.feature}</span>
          </div>

          {/* AloIPTV Value - always positive */}
          <div className="px-4 sm:px-6 py-3.5 flex items-center justify-center gap-2">
            <svg
              className="w-4 h-4 text-green-400 shrink-0 hidden sm:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs sm:text-sm font-medium text-green-400">
              {row.aloiptv}
            </span>
          </div>

          {/* Others Value - always negative */}
          <div className="px-4 sm:px-6 py-3.5 flex items-center justify-center gap-2">
            <svg
              className="w-4 h-4 text-red-400 shrink-0 hidden sm:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="text-xs sm:text-sm text-gray-500">
              {row.others}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
