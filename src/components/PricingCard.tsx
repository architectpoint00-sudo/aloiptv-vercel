import { WHATSAPP_LINKS } from '@/lib/constants'
import type { PricingPackage } from '@/lib/data'

interface PricingCardProps {
  pkg: PricingPackage
}

export default function PricingCard({ pkg }: PricingCardProps) {
  const isPopular = pkg.badge === 'En Populer' || pkg.badge === 'En Popüler'

  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-[#111827] p-6 transition-colors sm:p-8 ${
        isPopular
          ? 'border-purple-500/50 shadow-lg shadow-purple-600/10'
          : 'border-white/10 hover:border-white/20'
      }`}
    >
      {pkg.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white">
          {pkg.badge}
        </span>
      )}

      <h3 className="text-lg font-bold text-white sm:text-xl">{pkg.name}</h3>

      {pkg.discount && (
        <span className="mt-2 self-start rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400">
          {pkg.discount}
        </span>
      )}

      <div className="mt-6">
        <p className="flex items-baseline gap-1.5">
          {pkg.price === 0 ? (
            <span className="text-4xl font-extrabold text-white">Ücretsiz</span>
          ) : (
            <>
              <span className="text-4xl font-extrabold text-white sm:text-5xl">{pkg.price}</span>
              <span className="text-sm font-medium text-gray-500">TL</span>
            </>
          )}
        </p>
        {pkg.originalPrice && (
          <p className="mt-1 text-sm text-gray-600">
            <span className="line-through">{pkg.originalPrice} TL</span>
            <span className="sr-only"> yerine</span>
          </p>
        )}
        <p className="mt-1.5 text-xs text-gray-500">
          {pkg.period} &middot; {pkg.devices}
        </p>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
            </svg>
            <span className="text-gray-400">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={pkg.isFree ? WHATSAPP_LINKS.test : WHATSAPP_LINKS.buy}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 block rounded-full py-3.5 text-center text-sm font-semibold transition-all ${
          isPopular
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-600/25 hover:scale-[1.02]'
            : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5'
        }`}
      >
        {pkg.isFree ? 'Ücretsiz Dene' : 'Satın Al'}
        <span className="sr-only"> — {pkg.name}</span>
      </a>
    </div>
  )
}
