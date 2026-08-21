import { buildMetadata } from '@/lib/seo'
import { BLOG_POSTS } from '@/lib/data'
import BlogArticle from '@/components/BlogArticle'

const post = BLOG_POSTS[4]

export const metadata = buildMetadata({
  title: post.title,
  description: post.excerpt,
  path: '/blog/iptv-4k-ultra-hd-rehberi/',
})

export default function Iptv4kUltraHdRehberiPage() {
  return <BlogArticle post={post} />
}
