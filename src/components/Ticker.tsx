import { ANNOUNCEMENT_MESSAGES } from '@/lib/data'

export default function Ticker() {
  // Rendered twice so the -50% translate loops seamlessly
  const sequence = [...ANNOUNCEMENT_MESSAGES, ...ANNOUNCEMENT_MESSAGES]

  return (
    <div
      className="overflow-hidden border-b border-white/10 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 py-2"
      role="region"
      aria-label="Duyurular"
    >
      <div className="ticker-track">
        {sequence.map((msg, i) => (
          <span
            key={i}
            className="px-8 text-sm font-medium text-white"
            aria-hidden={i >= ANNOUNCEMENT_MESSAGES.length}
          >
            {msg}
          </span>
        ))}
      </div>
    </div>
  )
}
