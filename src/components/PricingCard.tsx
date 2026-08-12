import { WHATSAPP_LINKS } from '@/lib/constants'
import type { PricingPackage } from '@/lib/data'

interface PricingCardProps {
  pkg: PricingPackage
}

export default function PricingCard({ pkg }: PricingCardProps) {
  const isPopular = pkg.badge === 'En Populer' || pkg.badge === 'En Popüler'

  return (
    <div className={`relative bg-[#0d0d0d] border rounded-xl p-6 flex flex-col ${isPopular ? 'pricing-highlight border-red-500' : 'border-[#1a1a1a]'}`}>
      {pkg.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-red-500 text-white text-[10px] font-bold tracking-wide uppercase px-3 py-1 rounded-full">
            {pkg.badge}
          </span>
        </div>
      )}

      <div className="mb-5">
        <h3 className="text-white font-semibold text-base mb-1">{pkg.name}</h3>
        {pkg.discount && (
          <span className="text-red-400 text-xs font-medium">{pkg.discount}</span>
        )}
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          {pkg.price === 0 ? (
            <span className="text-white text-4xl font-black">Ucretsiz</span>
          ) : (
            <>
              <span className="text-white text-4xl font-black">{pkg.price}</span>
              <span className="text-[#666] text-sm font-medium">TL</span>
            </>
          )}
        </div>
        {pkg.originalPrice && (
          <div className="text-[#555] text-sm line-through mt-1">{pkg.originalPrice} TL</div>
        )}
        <div className="text-[#555] text-xs mt-1">{pkg.period} &middot; {pkg.devices}</div>
      </div>

      <ul className="space-y-2.5 mb-6 flex-1">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[#888]">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={pkg.isFree ? WHATSAPP_LINKS.test : WHATSAPP_LINKS.buy}
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center font-semibold text-sm py-3 rounded-lg transition-colors ${
          isPopular
            ? 'bg-red-500 text-white hover:bg-red-600'
            : 'bg-white/5 border border-[#2a2a2a] text-white hover:bg-white/10'
        }`}
      >
        {pkg.isFree ? 'Ucretsiz Dene' : 'Satin Al'}
      </a>
    </div>
  )
}
