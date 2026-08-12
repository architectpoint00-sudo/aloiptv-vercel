'use client'

import { ANNOUNCEMENT_MESSAGES } from '@/lib/data'

export default function AnnouncementBar() {
  const messages = ANNOUNCEMENT_MESSAGES
  // Triple the messages for seamless loop
  const repeated = [...messages, ...messages, ...messages]

  return (
    <div className="bg-red-500 overflow-hidden relative">
      <div className="animate-ticker flex whitespace-nowrap">
        {repeated.map((msg, i) => (
          <span
            key={i}
            className="inline-block px-8 py-1.5 text-white text-xs font-medium"
          >
            {msg}
          </span>
        ))}
      </div>
    </div>
  )
}
