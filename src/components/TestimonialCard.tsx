import type { Testimonial } from '@/lib/data'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const initials = testimonial.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <figure className="flex flex-col rounded-2xl border border-white/10 bg-[#111827] p-6 transition-colors hover:border-white/20 sm:p-8">
      <div className="flex gap-0.5" role="img" aria-label={`${testimonial.rating} üzerinden 5 yıldız`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.17a1 1 0 0 0 .95.69h4.39c.97 0 1.37 1.24.59 1.81l-3.55 2.58a1 1 0 0 0-.36 1.12l1.35 4.17c.3.92-.75 1.69-1.54 1.12l-3.54-2.58a1 1 0 0 0-1.18 0l-3.54 2.58c-.79.57-1.84-.2-1.54-1.12l1.35-4.17a1 1 0 0 0-.36-1.12L2.76 9.6c-.78-.57-.38-1.81.59-1.81h4.39a1 1 0 0 0 .95-.69l1.36-4.17Z" />
          </svg>
        ))}
      </div>

      <blockquote className="mt-5 flex-1">
        <p className="text-sm leading-relaxed text-gray-400">&ldquo;{testimonial.text}&rdquo;</p>
      </blockquote>

      <figcaption className="mt-7 flex items-center gap-3.5 border-t border-white/10 pt-5">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
          aria-hidden="true"
        >
          <span className="text-xs font-bold text-white">{initials}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{testimonial.name}</p>
          <p className="mt-0.5 text-xs text-gray-500">
            {testimonial.membership} &middot; {testimonial.location}
          </p>
        </div>
      </figcaption>
    </figure>
  )
}
