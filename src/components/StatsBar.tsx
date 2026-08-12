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
    <div className="bg-[#111111] border border-[#1a1a1a] rounded-2xl p-6 sm:p-8">
      <div className={`grid gap-6 sm:gap-8 grid-cols-2 lg:grid-cols-${stats.length}`}>
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 ${
                stat.highlight ? 'text-red-500' : 'text-white'
              }`}
            >
              {stat.value}
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
