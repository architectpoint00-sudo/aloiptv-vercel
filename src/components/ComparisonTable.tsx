import type { ComparisonRow } from '@/lib/data'

interface ComparisonTableProps {
  rows: ComparisonRow[]
}

export default function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent p-[1px]">
      <div className="rounded-2xl overflow-hidden bg-[#0a0a10]">
        {/* Table Header */}
        <div className="grid grid-cols-3 bg-gradient-to-r from-white/[0.03] via-white/[0.06] to-white/[0.03]">
          <div className="px-4 sm:px-6 py-5">
            <span className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Ozellik
            </span>
          </div>
          <div className="px-4 sm:px-6 py-5 text-center">
            <span className="text-gradient text-xs sm:text-sm font-bold uppercase tracking-wider">
              AloIPTV
            </span>
          </div>
          <div className="px-4 sm:px-6 py-5 text-center">
            <span className="text-gray-600 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Digerleri
            </span>
          </div>
        </div>

        {/* Table Body */}
        {rows.map((row, index) => (
          <div
            key={index}
            className={`grid grid-cols-3 border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors ${
              index % 2 === 0 ? '' : 'bg-white/[0.01]'
            }`}
          >
            {/* Feature */}
            <div className="px-4 sm:px-6 py-4 flex items-center">
              <span className="text-white text-xs sm:text-sm font-medium">{row.feature}</span>
            </div>

            {/* AloIPTV Value */}
            <div className="px-4 sm:px-6 py-4 flex items-center justify-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 hidden sm:flex">
                <svg
                  className="w-3 h-3 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-green-400">
                {row.aloiptv}
              </span>
            </div>

            {/* Others Value */}
            <div className="px-4 sm:px-6 py-4 flex items-center justify-center gap-2">
              <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 hidden sm:flex">
                <svg
                  className="w-3 h-3 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm text-gray-500">
                {row.others}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
