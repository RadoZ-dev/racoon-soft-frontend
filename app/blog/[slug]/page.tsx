import { notFound } from 'next/navigation'
import { formatDate } from 'app/blog/utils'
import { fetchWordPressPost, stripHtmlTags } from 'lib/wordpress'
import { baseUrl } from 'app/sitemap'

type Params = { slug: string }

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const wpPost = await fetchWordPressPost(slug)
  if (!wpPost) return

  const title = stripHtmlTags(wpPost.title.rendered)
  const description = stripHtmlTags(wpPost.excerpt.rendered)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: wpPost.date,
      url: `${baseUrl}/blog/${wpPost.slug}`,
    },
  }
}

export default async function Blog({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const wpPost = await fetchWordPressPost(slug)
  if (!wpPost) notFound()

  return (
    <section className="py-16 md:py-24" id="post">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: stripHtmlTags(wpPost.title.rendered),
            datePublished: wpPost.date,
            dateModified: wpPost.modified,
            description: stripHtmlTags(wpPost.excerpt.rendered),
            url: `${baseUrl}/blog/${wpPost.slug}`,
          }),
        }}
      />
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <h1 className="title font-semibold text-2xl tracking-tighter">
          {stripHtmlTags(wpPost.title.rendered)}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(wpPost.date)}
          </p>
        </div>
        <article className="prose prose-neutral dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300">
          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: wpPost.content.rendered }}
          />
        </article>
      </div>
    </section>
  )
}