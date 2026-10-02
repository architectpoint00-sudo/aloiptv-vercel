import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { BlogPostingJsonLd } from '@/components/JsonLd'
import { WHATSAPP_LINKS } from '@/lib/constants'
import { BLOG_POSTS } from '@/lib/data'
import type { BlogPost } from '@/lib/data'

/**
 * Entries in post.content are a flat mix of section headings and body
 * paragraphs. Headings are short and never end in sentence punctuation,
 * so we promote those to <h2> and render the rest as <p>.
 */
function isHeading(text: string) {
  return text.length < 80 && !/[.!:;]$/.test(text.trim())
}

/** Pick up to 3 related posts that are NOT the current one. */
function getRelatedPosts(current: BlogPost): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== current.slug).slice(0, 3)
}

export default function BlogArticle({ post }: { post: BlogPost }) {
  const related = getRelatedPosts(post)

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
            <time dateTime={post.isoDate}>{post.date}</time>
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

        {/* Contextual pricing CTA — internal link to /fiyatlar/ */}
        <aside className="mt-10 rounded-xl border border-blue-500/20 bg-blue-500/5 p-6">
          <p className="text-sm leading-relaxed text-gray-300">
            AloIPTV paketleri hakkinda detayli bilgi ve guncel fiyatlar icin{' '}
            <Link href="/fiyatlar/" className="font-semibold text-purple-400 underline underline-offset-2 hover:text-purple-300">
              IPTV fiyatlari sayfamizi
            </Link>{' '}
            ziyaret edin. 24 saatlik ucretsiz test hesabi ile tum kanallari deneyebilirsiniz.
          </p>
        </aside>
      </article>

      {/* CTA */}
      <section className="relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111827] via-[#0d0d14] to-[#111827] p-10 text-center sm:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]"
        />
        <div className="relative">
          <h2 className="text-xl font-bold text-white sm:text-2xl">AloIPTV&apos;yi Ucretsiz Deneyin</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-gray-400">
            24 saatlik ucretsiz test hesabi ile 150.000+ kanali kesfedin.
          </p>
          <a
            href={WHATSAPP_LINKS.test}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-transform duration-200 hover:scale-105"
          >
            Ucretsiz Test Al
          </a>
        </div>
      </section>

      {/* Related posts — cross-links between blog articles */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-5 text-lg font-bold text-white">Ilgili Yazilar</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}/`}
                className="rounded-xl border border-white/10 bg-[#111827] p-5 transition-colors hover:border-purple-500/30"
              >
                <h3 className="text-sm font-semibold leading-snug text-white">{r.title}</h3>
                <p className="mt-2 line-clamp-2 text-xs text-gray-500">{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8">
        <h2 className="mb-4 text-lg font-bold text-white">Kesfetmeye Devam Edin</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/fiyatlar/" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition hover:border-red-500/30 hover:text-white">
            IPTV Paketleri ve Fiyatlar
          </Link>
          <Link href="/kanallar/" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition hover:border-red-500/30 hover:text-white">
            150.000+ Kanal Listesi
          </Link>
          <Link href="/sss/" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition hover:border-red-500/30 hover:text-white">
            Sikca Sorulan Sorular
          </Link>
          <Link href="/iletisim/" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition hover:border-red-500/30 hover:text-white">
            Bize Ulasin
          </Link>
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
          Tum yazilara don
        </Link>
      </p>
    </div>
  )
}
