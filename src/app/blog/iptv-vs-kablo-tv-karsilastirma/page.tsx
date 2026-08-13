import { buildMetadata } from '@/lib/seo'
import { BLOG_POSTS } from '@/lib/data'
import BlogArticle from '@/components/BlogArticle'

const post = BLOG_POSTS[1]

export const metadata = buildMetadata({
  title: post.title,
  description: post.excerpt,
  path: '/blog/iptv-vs-kablo-tv-karsilastirma/',
})

export default function IptvVsKabloTvPage() {
  return <BlogArticle post={post} />
}
