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

export default function PricingCard({
  name,
  price,
  originalPrice,
  period,
  discount,
  badge,
  features,
  devices,
  isFree,
}: PricingCardProps) {
  const isPopular = badge === 'En Popüler'
  const ctaLink = isFree ? WHATSAPP_LINKS.test : WHATSAPP_LINKS.buy

  return (
    <div
      className={`relative rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        isPopular
          ? 'bg-[#111827] border-2 border-red-500/50 shadow-lg shadow-red-500/10'
          : 'bg-[#111827] border border-[#1e293b]'
      }`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span
            className={`inline-block px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
              isPopular
                ? 'bg-red-500 text-white'
                : 'bg-[#1e293b] text-gray-300 border border-[#334155]'
            }`}
          >
            {badge}
          </span>
        </div>
      )}

      <div className="p-6 sm:p-7 flex flex-col flex-1">
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
        <div className="h-px bg-[#1e293b] mb-6" />

        {/* Features */}
        <ul className="space-y-3.5 mb-8 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <svg
                className="w-5 h-5 text-green-400 shrink-0 mt-0.5"
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
          <li className="flex items-start gap-3 text-sm">
            <svg
              className="w-5 h-5 text-green-400 shrink-0 mt-0.5"
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
            <span className="text-gray-300">{devices} Cihaz Destegi</span>
          </li>
        </ul>

        {/* CTA */}
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`block text-center font-bold py-3.5 px-6 rounded-full transition-all duration-300 ${
            isPopular
              ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg shadow-red-500/25'
              : isFree
              ? 'bg-[#25D366] hover:bg-[#1fba59] text-white'
              : 'bg-[#1e293b] hover:bg-red-500 text-white border border-[#334155] hover:border-red-500'
          }`}
        >
          {isFree ? 'Hemen Dene' : 'Satin Al'}
        </a>
      </div>
    </div>
  )
}
