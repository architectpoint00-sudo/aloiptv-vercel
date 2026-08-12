'use client'

import { ANNOUNCEMENT_MESSAGES } from '@/lib/data'

export default function AnnouncementBar() {
  const messages = ANNOUNCEMENT_MESSAGES
  const repeated = [...messages, ...messages, ...messages]

  return (
    <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-red-600 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px]" />
      <div className="relative animate-ticker flex whitespace-nowrap">
        {repeated.map((msg, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-8 py-1.5 text-white text-xs font-semibold tracking-wide"
          >
            <span className="w-1 h-1 bg-white/60 rounded-full" />
            {msg}
          </span>
        ))}
      </div>
    </div>
  )
}
