import { buildMetadata } from '@/lib/seo'
import { ABOUT_PAGE_DATA } from '@/lib/data'
import { WHATSAPP_LINKS } from '@/lib/constants'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = buildMetadata({
  title: 'Hakkımızda',
  description:
    'AloIPTV hakkında. 2019 yılından bu yana Türkiye\'nin en güvenilir premium IPTV hizmeti.',
  path: '/hakkimizda/',
})

export default function HakkimizdaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Hakkımızda' }]} />

      <header className="mb-14 text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          Premium IPTV&apos;de Güvenilir İsim
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
          2019&apos;dan beri Türkiye&apos;nin en güvenilir IPTV hizmetini sunuyoruz.
        </p>
      </header>

      {/* Story */}
      <section aria-labelledby="story">
        <h2 id="story" className="text-2xl font-extrabold text-white sm:text-3xl">Hikayemiz</h2>
        <div className="mt-6 space-y-4">
          {ABOUT_PAGE_DATA.hikayemiz.map((paragraph, index) => (
            <p key={index} className="text-sm leading-relaxed text-gray-400 sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Stats */}
      <dl className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {ABOUT_PAGE_DATA.stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-white/10 bg-[#111827] p-6 text-center">
            <dd className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
              {stat.value}
            </dd>
            <dt className="mt-1.5 text-sm font-medium text-gray-500">{stat.label}</dt>
          </div>
        ))}
      </dl>

      {/* Values */}
      <section aria-labelledby="values" className="mt-16">
        <h2 id="values" className="text-2xl font-extrabold text-white sm:text-3xl">Değerlerimiz</h2>
        <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {ABOUT_PAGE_DATA.values.map((value) => (
            <li
              key={value.title}
              className="rounded-2xl border border-white/10 bg-[#111827] p-6 transition-colors hover:border-white/20 sm:p-8"
            >
              <h3 className="text-lg font-bold text-white">{value.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-gray-400">{value.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Team */}
      <section aria-labelledby="team" className="mt-16">
        <h2 id="team" className="text-2xl font-extrabold text-white sm:text-3xl">Ekibimiz</h2>
        <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {ABOUT_PAGE_DATA.team.map((member) => {
            const initials = member.name.split(' ').map((n) => n[0]).join('')
            return (
              <li
                key={member.name}
                className="rounded-2xl border border-white/10 bg-[#111827] p-6 text-center transition-colors hover:border-white/20 sm:p-8"
              >
                <span
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-lg font-bold text-white"
                  aria-hidden="true"
                >
                  {initials}
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{member.name}</h3>
                <p className="mt-1.5 text-sm font-medium text-purple-400">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{member.description}</p>
              </li>
            )
          })}
        </ul>
      </section>

      {/* CTA */}
      <section className="relative mt-20 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111827] via-[#0d0d14] to-[#111827] p-10 text-center sm:p-14">
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]" />
        <div className="relative">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Bize Katılın</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-gray-400">
            Premium IPTV deneyimine şimdi başlayın.
          </p>
          <a
            href={WHATSAPP_LINKS.buy}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-transform duration-200 hover:scale-105"
          >
            Hemen Başla
          </a>
        </div>
      </section>
    </div>
  )
}
