interface StatItem {
  value: string
  label: string
  highlight?: boolean
}

interface StatsBarProps {
  stats: StatItem[]
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-6 sm:p-8">
      <div className={`grid gap-6 sm:gap-8 grid-cols-2 lg:grid-cols-${stats.length}`}>
        {stats.map((stat, index) => (
          <div key={index} className="text-center relative">
            {index > 0 && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-8 bg-[#1e293b] hidden lg:block" />
            )}
            <div
              className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-1.5 ${
                stat.highlight ? 'text-gradient' : 'text-white'
              }`}
            >
              {stat.value}
            </div>
            <div className="text-gray-500 text-xs sm:text-sm font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
