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
  red: 'bg-red-500 text-white',
  green: 'bg-green-500 text-white',
  yellow: 'bg-yellow-500 text-black',
  purple: 'bg-purple-500 text-white',
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
      className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        isPopular
          ? 'bg-[#111111] border-2 border-red-500 shadow-lg shadow-red-500/10'
          : 'bg-[#111111] border border-[#1a1a1a] hover:border-red-500/20'
      }`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span
            className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
              BADGE_STYLES[badgeColor] || BADGE_STYLES.red
            }`}
          >
            {badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="text-center pt-2 mb-6">
        <h3 className="text-white font-semibold text-lg mb-3">{name}</h3>

        {/* Price */}
        <div className="flex items-baseline justify-center gap-2">
          {originalPrice && (
            <span className="text-gray-500 line-through text-lg">
              {originalPrice.toLocaleString('tr-TR')} TL
            </span>
          )}
        </div>
        <div className="flex items-baseline justify-center gap-1 mt-1">
          <span className="text-4xl font-bold text-white">
            {isFree ? 'Ücretsiz' : `${price.toLocaleString('tr-TR')} TL`}
          </span>
        </div>
        <p className="text-gray-400 text-sm mt-1">{period}</p>
        {discount && (
          <span className="inline-block mt-2 text-red-400 text-xs font-semibold bg-red-500/10 px-3 py-1 rounded-full">
            {discount}
          </span>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-6 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <svg
              className="w-4 h-4 text-green-400 shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
        <li className="flex items-start gap-2.5 text-sm">
          <svg
            className="w-4 h-4 text-green-400 shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-gray-300">{devices} Cihaz Desteği</span>
        </li>
      </ul>

      {/* CTA */}
      <a
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center font-semibold py-3 px-6 rounded-xl transition-all ${
          isPopular
            ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/20'
            : isFree
            ? 'bg-green-500 hover:bg-green-600 text-white'
            : 'bg-white/5 hover:bg-red-500 text-white border border-white/10 hover:border-red-500'
        }`}
      >
        {isFree ? 'Hemen Dene' : 'Satn Al'}
      </a>

      {/* SSL Note */}
      {!isFree && (
        <p className="text-center text-gray-500 text-xs mt-3 flex items-center justify-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          SSL Güvenli Ödeme
        </p>
      )}
    </div>
  )
}
