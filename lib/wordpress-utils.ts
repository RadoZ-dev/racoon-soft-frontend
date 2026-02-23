import { WordPressPost } from './wordpress'
import { stripHtmlTags, getWordPressImageUrl } from './wordpress'

export interface BlogPost {
  metadata: {
    title: string
    publishedAt: string
    summary: string
    image?: string
  }
  slug: string
  content: string
  source: 'mdx' | 'wordpress'
}

export function transformWordPressPost(post: WordPressPost): BlogPost {
  const imageUrl = getWordPressImageUrl(post)

  return {
    metadata: {
      title: stripHtmlTags(post.title.rendered),
      publishedAt: post.date,
      summary: stripHtmlTags(post.excerpt.rendered).substring(0, 160),
      image: imageUrl,
    },
    slug: post.slug,
    content: post.content.rendered,
    source: 'wordpress',
  }
}
