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
          <span className="bg-red-500 text-white text-[10px] font-bold tracking-wide uppercase px-4 py-1.5 rounded-full shadow-lg shadow-red-500/20">
            {pkg.badge}
          </span>
        </div>
      )}

      <div className="mb-7 sm:mb-8">
        <h3 className="text-white font-semibold text-xl sm:text-2xl mb-2">{pkg.name}</h3>
        {pkg.discount && (
          <span className="text-red-400 text-sm font-medium">{pkg.discount}</span>
        )}
      </div>

      <div className="mb-7 sm:mb-8">
        <div className="flex items-baseline gap-1.5">
          {pkg.price === 0 ? (
            <span className="text-white text-4xl sm:text-5xl font-black">Ucretsiz</span>
          ) : (
            <>
              <span className="text-white text-4xl sm:text-5xl font-black">{pkg.price}</span>
              <span className="text-[#64748b] text-sm font-medium">TL</span>
            </>
          )}
        </div>
        {pkg.originalPrice && (
          <div className="text-[#475569] text-sm line-through mt-1.5">{pkg.originalPrice} TL</div>
        )}
        <div className="text-[#64748b] text-xs mt-1.5">{pkg.period} &middot; {pkg.devices}</div>
      </div>

      <ul className="space-y-3 mb-7 sm:mb-8 flex-1">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-base">
            <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[#94a3b8]">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={pkg.isFree ? WHATSAPP_LINKS.test : WHATSAPP_LINKS.buy}
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center font-semibold text-base py-4 rounded-xl transition-all ${
          isPopular
            ? 'btn btn-primary w-full'
            : 'bg-white/[0.03] border border-[#1a2d4a] text-white hover:bg-white/[0.06] hover:border-[#2a4270]'
        }`}
      >
        {pkg.isFree ? 'Ucretsiz Dene' : 'Satin Al'}
      </a>
    </div>
  )
}
