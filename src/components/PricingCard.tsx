import { WHATSAPP_LINKS } from '@/lib/constants'
import type { PricingPackage } from '@/lib/data'

interface PricingCardProps {
  pkg: PricingPackage
}

export default function PricingCard({ pkg }: PricingCardProps) {
  const isPopular = pkg.badge === 'En Populer' || pkg.badge === 'En Popüler'
  const hasMaxSave = pkg.badge === 'Maksimum Tasarruf'
  const hasBadge = isPopular || hasMaxSave

  return (
    <div
      className={`relative rounded-2xl border p-6 sm:p-8 flex flex-col transition-all ${
        isPopular
          ? 'border-purple-500/50 bg-[#111827] shadow-lg shadow-purple-600/10'
          : 'border-white/10 bg-[#111827] hover:border-white/20'
      }`}
    >
      {hasBadge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-[10px] font-bold tracking-wide uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
            {pkg.badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-white font-bold text-lg sm:text-xl mb-2">{pkg.name}</h3>
        {pkg.discount && (
          <span className="inline-block text-purple-400 text-xs font-semibold bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
            {pkg.discount}
          </span>
        )}
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1.5">
          {pkg.price === 0 ? (
            <span className="text-white text-4xl sm:text-5xl font-extrabold">Ucretsiz</span>
          ) : (
            <>
              <span className="text-white text-4xl sm:text-5xl font-extrabold">{pkg.price}</span>
              <span className="text-gray-500 text-sm font-medium">TL</span>
            </>
          )}
        </div>
        {pkg.originalPrice && (
          <div className="text-gray-600 text-sm line-through mt-1">{pkg.originalPrice} TL</div>
        )}
        <div className="text-gray-500 text-xs mt-1.5">{pkg.period} &middot; {pkg.devices}</div>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <svg className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-400">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={pkg.isFree ? WHATSAPP_LINKS.test : WHATSAPP_LINKS.buy}
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center font-semibold text-sm py-3.5 rounded-full transition-all ${
          isPopular
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-[1.02]'
            : 'bg-transparent border border-white/20 text-white hover:border-white/40 hover:bg-white/5'
        }`}
      >
        {pkg.isFree ? 'Ucretsiz Dene' : 'Satin Al'}
      </a>
    </div>
  )
}
