import { WHATSAPP_LINKS } from '@/lib/constants'

interface PricingCardProps {
  name: string
  price: number
  originalPrice?: number
  period: string
  discount?: string
  badge?: string
  badgeColor?: string
  features: string[]
  devices: number
  isFree?: boolean
}

const BADGE_STYLES: Record<string, string> = {
  red: 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25',
  green: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25',
  yellow: 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg shadow-yellow-500/25',
  purple: 'bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-lg shadow-purple-500/25',
}

export default function PricingCard({
  name,
  price,
  originalPrice,
  period,
  discount,
  badge,
  badgeColor = 'red',
  features,
  devices,
  isFree,
}: PricingCardProps) {
  const isPopular = badge === 'En Popüler'
  const ctaLink = isFree ? WHATSAPP_LINKS.test : WHATSAPP_LINKS.buy

  return (
    <div
      className={`relative rounded-2xl p-[1px] flex flex-col transition-all duration-500 hover:-translate-y-2 group ${
        isPopular
          ? 'bg-gradient-to-b from-red-500/60 via-red-500/20 to-red-500/60'
          : 'bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-white/[0.08]'
      }`}
    >
      <div className={`relative rounded-2xl p-6 sm:p-7 flex flex-col flex-1 ${
        isPopular
          ? 'bg-gradient-to-b from-[#12101a] to-[#0a0a10]'
          : 'bg-gradient-to-b from-[#0f0f15] to-[#0a0a10]'
      }`}>
        {/* Popular glow */}
        {isPopular && (
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-red-500/10 to-transparent blur-xl -z-10" />
        )}

        {/* Badge */}
        {badge && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span
              className={`inline-block px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                BADGE_STYLES[badgeColor] || BADGE_STYLES.red
              }`}
            >
              {badge}
            </span>
          </div>
        )}

        {/* Header */}
        <div className="text-center pt-3 mb-6">
          <h3 className="text-white font-semibold text-lg mb-4">{name}</h3>

          {/* Price */}
          <div className="flex items-baseline justify-center gap-2">
            {originalPrice && (
              <span className="text-gray-600 line-through text-lg">
                {originalPrice.toLocaleString('tr-TR')} TL
              </span>
            )}
          </div>
          <div className="flex items-baseline justify-center gap-1 mt-1">
            <span className={`text-4xl font-black ${isPopular ? 'text-gradient' : 'text-white'}`}>
              {isFree ? 'Ucretsiz' : `${price.toLocaleString('tr-TR')} TL`}
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-1.5">{period}</p>
          {discount && (
            <span className="inline-block mt-3 text-red-400 text-xs font-bold bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full">
              {discount}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Features */}
        <ul className="space-y-3.5 mb-8 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                <svg
                  className="w-3 h-3 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
          <li className="flex items-start gap-3 text-sm">
            <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
              <svg
                className="w-3 h-3 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-gray-300">{devices} Cihaz Destegi</span>
          </li>
        </ul>

        {/* CTA */}
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`block text-center font-bold py-3.5 px-6 rounded-xl transition-all duration-300 ${
            isPopular
              ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg shadow-red-500/25 hover:shadow-red-500/40 btn-shine'
              : isFree
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg shadow-green-500/20'
              : 'bg-white/[0.06] hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 text-white border border-white/10 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/20'
          }`}
        >
          {isFree ? 'Hemen Dene' : 'Satn Al'}
        </a>

        {/* SSL Note */}
        {!isFree && (
          <p className="text-center text-gray-600 text-xs mt-4 flex items-center justify-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            SSL Guvenli Odeme
          </p>
        )}
      </div>
    </div>
  )
}
