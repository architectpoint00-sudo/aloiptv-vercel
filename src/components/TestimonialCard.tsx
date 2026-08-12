interface TestimonialCardProps {
  quote: string
  name: string
  location: string
  membership: string
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export default function TestimonialCard({
  quote,
  name,
  location,
  membership,
}: TestimonialCardProps) {
  const initials = getInitials(name)

  return (
    <div className="bg-[#111827] border border-[#1e293b] border-t-[3px] border-t-red-500 rounded-2xl p-6 sm:p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30">
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-5 border-t border-[#1e293b]">
        <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
          <span className="text-red-400 text-xs font-bold">{initials}</span>
        </div>
        <div>
          <p className="text-white text-sm font-semibold">{name}</p>
          <p className="text-gray-500 text-xs mt-0.5">
            {location} &middot; {membership}
          </p>
        </div>
      </div>
    </div>
  )
}
