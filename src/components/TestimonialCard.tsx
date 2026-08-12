interface TestimonialCardProps {
  quote: string
  name: string
  location: string
  membership: string
}

const AVATAR_COLORS = [
  'from-red-500 to-orange-500',
  'from-blue-500 to-cyan-500',
  'from-green-500 to-emerald-500',
  'from-purple-500 to-violet-500',
  'from-yellow-500 to-amber-500',
  'from-pink-500 to-rose-500',
  'from-indigo-500 to-blue-500',
  'from-teal-500 to-cyan-500',
]

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

function getAvatarColor(name: string): string {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length]
}

export default function TestimonialCard({
  quote,
  name,
  location,
  membership,
}: TestimonialCardProps) {
  const initials = getInitials(name)
  const avatarGradient = getAvatarColor(name)

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col transition-all duration-500 hover:-translate-y-1 group">
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400 drop-shadow-[0_0_3px_rgba(250,204,21,0.3)]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <div className="relative mb-6 flex-1">
        <svg className="absolute -top-2 -left-1 w-8 h-8 text-red-500/10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
        </svg>
        <blockquote className="text-gray-300 text-sm leading-relaxed pl-2">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-5 border-t border-white/[0.04]">
        <div
          className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatarGradient} flex items-center justify-center shrink-0 shadow-lg`}
        >
          <span className="text-white text-xs font-bold">{initials}</span>
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
