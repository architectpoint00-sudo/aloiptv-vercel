import { WHATSAPP_LINKS } from '@/lib/constants'
import type { PricingPackage } from '@/lib/data'

interface PricingCardProps {
  pkg: PricingPackage
}

export default function PricingCard({ pkg }: PricingCardProps) {
  const isPopular = pkg.badge === 'En Populer' || pkg.badge === 'En Popüler'

  return (
    <div className={`relative card flex flex-col ${isPopular ? 'pricing-popular' : ''}`}>
      {pkg.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-[#22c55e] text-[#111827] text-[10px] font-bold tracking-wide uppercase px-4 py-1.5 rounded-full" style={{ fontFamily: "'Sora', sans-serif" }}>
            {pkg.badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-white font-bold text-lg sm:text-xl mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>{pkg.name}</h3>
        {pkg.discount && (
          <span className="inline-block text-[#22c55e] text-xs font-semibold bg-[#22c55e]/10 border border-[#22c55e]/20 px-3 py-1 rounded-full">
            {pkg.discount}
          </span>
        )}
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1.5">
          {pkg.price === 0 ? (
            <span className="text-white text-4xl sm:text-5xl font-extrabold" style={{ fontFamily: "'Sora', sans-serif" }}>Ucretsiz</span>
          ) : (
            <>
              <span className="text-white text-4xl sm:text-5xl font-extrabold" style={{ fontFamily: "'Sora', sans-serif" }}>{pkg.price}</span>
              <span className="text-[#64748b] text-sm font-medium">TL</span>
            </>
          )}
        </div>
        {pkg.originalPrice && (
          <div className="text-[#475569] text-sm line-through mt-1">{pkg.originalPrice} TL</div>
        )}
        <div className="text-[#64748b] text-xs mt-1.5">{pkg.period} &middot; {pkg.devices}</div>
      </div>

      <ul className="space-y-3 mb-7 flex-1">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-[15px]">
            <svg className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[#94a3b8]">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={pkg.isFree ? WHATSAPP_LINKS.test : WHATSAPP_LINKS.buy}
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center font-semibold text-sm py-3.5 rounded-xl transition-all ${
          isPopular
            ? 'bg-[#22c55e] text-[#111827] hover:bg-[#16a34a]'
            : 'bg-transparent border border-[#334155] text-white hover:border-[#22c55e]/50 hover:text-[#22c55e]'
        }`}
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        {pkg.isFree ? 'Ucretsiz Dene' : 'Satin Al'}
      </a>
    </div>
  )
}
