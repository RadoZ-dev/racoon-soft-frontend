import Link from 'next/link'
import { formatDate, getBlogPosts, getWordPressPosts } from 'app/blog/utils'
import { stripHtmlTags } from 'lib/wordpress'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default async function Page() {
  const mdxPosts = getBlogPosts()
  
  let wordPressPosts = []
  try {
    wordPressPosts = await getWordPressPosts()
  } catch (error) {
    console.error('Error fetching WordPress posts on blog page:', error)
  }

  const allPosts = [...mdxPosts, ...wordPressPosts].sort((a, b) => {
    const dateA = new Date(a.metadata.publishedAt)
    const dateB = new Date(b.metadata.publishedAt)
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <section className="py-16 md:py-24" id="blog">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
        <div>
          {allPosts.map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full space-x-0">
                <p className="text-2xl mb-1">
                  {post.metadata.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}