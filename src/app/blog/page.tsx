import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { BLOG_POSTS } from '@/lib/data'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = buildMetadata({
  title: 'Blog',
  description:
    'AloIPTV blog. IPTV kurulum rehberleri, cihaz karşılaştırmaları ve premium IPTV hakkında bilmeniz gereken her şey.',
  path: '/blog/',
})

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Blog' }]} />

      <header className="mb-14 text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">Blog</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
          IPTV kurulum rehberleri, karşılaştırmalar ve ipuçları.
        </p>
      </header>

      <ul className="space-y-5">
        {BLOG_POSTS.map((post) => (
          <li key={post.slug}>
            <article className="rounded-2xl border border-white/10 bg-[#111827] p-6 transition-colors hover:border-white/20 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                <time dateTime={post.date}>{post.date}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readTime}</span>
              </div>

              <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                <Link
                  href={`/blog/${post.slug}/`}
                  className="transition-colors hover:text-purple-400"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">{post.excerpt}</p>

              <Link
                href={`/blog/${post.slug}/`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
              >
                Yazıyı oku
                <span className="sr-only">: {post.title}</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                </svg>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
