import type { Testimonial } from '@/lib/data'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="card flex flex-col">
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-[#22c55e] text-sm">&#9733;</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-[#94a3b8] text-[15px] leading-relaxed flex-1 mb-7">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3.5 pt-5 border-t border-[#334155]">
        <div className="w-11 h-11 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center">
          <span className="text-[#22c55e] text-sm font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <div className="text-white font-semibold text-[15px]" style={{ fontFamily: "'Sora', sans-serif" }}>{testimonial.name}</div>
          <div className="text-[#64748b] text-xs mt-0.5">{testimonial.membership} &middot; {testimonial.location}</div>
        </div>
      </div>
    </div>
  )
}
