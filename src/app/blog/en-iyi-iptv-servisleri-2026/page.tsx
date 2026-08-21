import { buildMetadata } from '@/lib/seo'
import { BLOG_POSTS } from '@/lib/data'
import BlogArticle from '@/components/BlogArticle'

const post = BLOG_POSTS[3]

export const metadata = buildMetadata({
  title: post.title,
  description: post.excerpt,
  path: '/blog/en-iyi-iptv-servisleri-2026/',
})

export default function EnIyiIptvServisleri2026Page() {
  return <BlogArticle post={post} />
}
