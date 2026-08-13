import Breadcrumb from '@/components/Breadcrumb'

interface PolicySection {
  title: string
  content: string[]
}

interface PolicyPageProps {
  title: string
  breadcrumbLabel: string
  intro?: React.ReactNode
  sections: PolicySection[]
  ctaTitle: string
  ctaHref: string
  ctaLabel: string
}

export default function PolicyPage({
  title,
  breadcrumbLabel,
  intro,
  sections,
  ctaTitle,
  ctaHref,
  ctaLabel,
}: PolicyPageProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: breadcrumbLabel }]} />

      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h1>

      {intro && <div className="mt-6 text-sm leading-relaxed text-gray-400 sm:text-base">{intro}</div>}

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-bold text-white">{section.title}</h2>
            <div className="mt-4 space-y-4">
              {section.content.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-gray-400">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111827] via-[#0d0d14] to-[#111827] p-10 text-center sm:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]"
        />
        <div className="relative">
          <h2 className="text-xl font-bold text-white sm:text-2xl">{ctaTitle}</h2>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-transform duration-200 hover:scale-105"
          >
            {ctaLabel}
          </a>
        </div>
      </section>
    </div>
  )
}
