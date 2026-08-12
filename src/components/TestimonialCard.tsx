import type { Testimonial } from '@/lib/data'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="card flex flex-col">
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-red-400 text-sm">&#9733;</span>
        ))}
      </div>

      {/* Quote text */}
      <p className="text-[#94a3b8] text-sm leading-relaxed flex-1 mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#12233d]">
        <div className="w-9 h-9 rounded-full bg-[#0a1628] border border-[#1a2d4a] flex items-center justify-center">
          <span className="text-[#94a3b8] text-xs font-semibold">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{testimonial.name}</div>
          <div className="text-[#64748b] text-xs">{testimonial.membership} &middot; {testimonial.location}</div>
        </div>
      </div>
    </div>
  )
}
