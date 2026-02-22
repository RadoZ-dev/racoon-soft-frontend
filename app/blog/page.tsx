import Link from 'next/link'
import { formatDate, getWordPressPosts } from 'app/blog/utils'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default async function Page() {
  const posts = await getWordPressPosts()

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
        <div>
          {posts.map((post) => (
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