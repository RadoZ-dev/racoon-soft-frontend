'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { fetchWordPressPosts, WordPressPost, stripHtmlTags } from 'lib/wordpress'
import { formatDate } from 'app/blog/utils'

export function WordPressBlogPosts() {
  const [posts, setPosts] = useState<WordPressPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const wordPressPosts = await fetchWordPressPosts(1, 100)
        setPosts(wordPressPosts)
        setError(null)
      } catch (err) {
        console.error('Error loading WordPress posts:', err)
        setError('Failed to load posts')
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  if (loading) {
    return <div className="text-neutral-600 dark:text-neutral-400">Loading posts...</div>
  }

  if (error) {
    return <div className="text-red-600">Error: {error}</div>
  }

  if (posts.length === 0) {
    return <div className="text-neutral-600 dark:text-neutral-400">No posts found</div>
  }

  return (
    <div>
      {posts
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.date, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {stripHtmlTags(post.title.rendered)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}