import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { BlogPostingJsonLd } from '@/components/JsonLd'
import { WHATSAPP_LINKS } from '@/lib/constants'
import type { BlogPost } from '@/lib/data'

/**
 * Entries in post.content are a flat mix of section headings and body
 * paragraphs. Headings are short and never end in sentence punctuation,
 * so we promote those to <h2> and render the rest as <p>.
 */
function isHeading(text: string) {
  return text.length < 80 && !/[.!:;]$/.test(text.trim())
}

export default function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <BlogPostingJsonLd post={post} />
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Blog', href: '/blog/' },
          { label: post.title },
        ]}
      />

      <article>
        <header>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Blog
            </span>
            <time dateTime={post.date}>{post.date}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {post.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-gray-400">{post.excerpt}</p>
        </header>

        <div className="mt-10 space-y-5 border-t border-white/10 pt-10">
          {post.content.map((block, i) =>
            isHeading(block) ? (
              <h2 key={i} className="pt-5 text-xl font-bold text-white sm:text-2xl">
                {block}
              </h2>
            ) : (
              <p key={i} className="text-sm leading-relaxed text-gray-400 sm:text-base">
                {block}
              </p>
            )
          )}
        </div>
      </article>

      {/* CTA */}
      <section className="relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111827] via-[#0d0d14] to-[#111827] p-10 text-center sm:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]"
        />
        <div className="relative">
          <h2 className="text-xl font-bold text-white sm:text-2xl">AloIPTV&apos;yi Ücretsiz Deneyin</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-gray-400">
            24 saatlik ücretsiz test hesabı ile 150.000+ kanalı keşfedin.
          </p>
          <a
            href={WHATSAPP_LINKS.test}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-transform duration-200 hover:scale-105"
          >
            Ücretsiz Test Al
          </a>
        </div>
      </section>

      <p className="mt-10 text-center">
        <Link
          href="/blog/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m15 19-7-7 7-7" />
          </svg>
          Tüm yazılara dön
        </Link>
      </p>
    </div>
  )
}
