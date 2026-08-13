import type { Testimonial } from '@/lib/data'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827] p-6 sm:p-8 flex flex-col hover:border-white/20 transition-all">
      {/* Stars */}
      <div className="flex gap-0.5 mb-5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-base">&#9733;</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-7">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3.5 pt-5 border-t border-white/10">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
          <span className="text-white text-xs font-bold">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{testimonial.name}</div>
          <div className="text-gray-500 text-xs mt-0.5">{testimonial.membership} &middot; {testimonial.location}</div>
        </div>
      </div>
    </div>
  )
}
