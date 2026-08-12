import type { Testimonial } from '@/lib/data'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="card p-6 flex flex-col">
      {/* Quote icon */}
      <div className="text-red-500/40 text-3xl font-serif mb-4">&ldquo;&rdquo;</div>

      {/* Quote text */}
      <p className="text-[#888] text-sm leading-relaxed italic flex-1 mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div>
        <div className="text-white font-semibold text-sm">{testimonial.name}</div>
        <div className="text-[#555] text-xs">{testimonial.membership} &middot; {testimonial.location}</div>
        <div className="flex gap-0.5 mt-2">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <span key={i} className="text-red-400 text-sm">&#9733;</span>
          ))}
        </div>
      </div>
    </div>
  )
}
