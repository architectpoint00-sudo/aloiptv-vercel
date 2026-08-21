import { buildMetadata } from '@/lib/seo'
import { BLOG_POSTS } from '@/lib/data'
import BlogArticle from '@/components/BlogArticle'

const post = BLOG_POSTS[5]

export const metadata = buildMetadata({
  title: post.title,
  description: post.excerpt,
  path: '/blog/samsung-lg-tv-iptv-kurulumu-2026/',
})

export default function SamsungLgTvIptvKurulumu2026Page() {
  return <BlogArticle post={post} />
}
