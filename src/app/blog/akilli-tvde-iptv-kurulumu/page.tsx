import { buildMetadata } from '@/lib/seo'
import { BLOG_POSTS } from '@/lib/data'
import BlogArticle from '@/components/BlogArticle'

const post = BLOG_POSTS[0]

export const metadata = buildMetadata({
  title: post.title,
  description: post.excerpt,
  path: '/blog/akilli-tvde-iptv-kurulumu/',
})

export default function AkilliTvIptvKurulumPage() {
  return <BlogArticle post={post} />
}
