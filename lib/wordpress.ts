import https from 'https'

const WORDPRESS_API = process.env.WORDPRESS_API_URL || 'http://localhost/wp-json/wp/v2'

// Helper function to fetch from WordPress with support for self-signed certs
async function wordPressFetch(url: string) {
  return new Promise((resolve, reject) => {
    const isHttps = url.startsWith('https')
    
    if (!isHttps) {
      // Use regular fetch for HTTP
      fetch(url, {
        headers: { 'Content-Type': 'application/json' },
        next: { revalidate: 3600 },
      })
        .then((res) => res.json())
        .then(resolve)
        .catch(reject)
      return
    }

    // Use https module for HTTPS with self-signed cert support
    https.get(url, { rejectUnauthorized: false }, (res) => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        try {
          resolve(JSON.parse(data))
        } catch (e) {
          reject(e)
        }
      })
    }).on('error', reject)
  })
}

export interface WordPressPost {
  id: number
  slug: string
  title: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  content: {
    rendered: string
  }
  date: string
  modified: string
  featured_media: number
  categories: number[]
  tags: number[]
  _embedded?: {
    'wp:featured_media'?: Array<{
      source_url: string
      alt_text: string
    }>
  }
}

export interface WordPressCategory {
  id: number
  name: string
  slug: string
}

export interface WordPressTag {
  id: number
  name: string
  slug: string
}

export async function fetchWordPressPosts(
  page = 1,
  perPage = 10,
  searchTerm?: string
) {
  try {
    let url = `${WORDPRESS_API}/posts?page=${page}&per_page=${perPage}&_embed`

    if (searchTerm) {
      url += `&search=${encodeURIComponent(searchTerm)}`
    }

    const posts: WordPressPost[] = await wordPressFetch(url)
    return posts
  } catch (error) {
    console.error('Failed to fetch WordPress posts:', error instanceof Error ? error.message : error)
    return []
  }
}

export async function fetchWordPressPost(slug: string) {
  try {
    const url = `${WORDPRESS_API}/posts?slug=${slug}&_embed`
    const posts: WordPressPost[] = await wordPressFetch(url)
    return posts[0] || null
  } catch (error) {
    console.error('Failed to fetch WordPress post:', error instanceof Error ? error.message : error)
    return null
  }
}

export async function fetchWordPressCategories() {
  try {
    const categories: WordPressCategory[] = await wordPressFetch(`${WORDPRESS_API}/categories`)
    return categories
  } catch (error) {
    console.error('Failed to fetch WordPress categories:', error instanceof Error ? error.message : error)
    return []
  }
}

export async function fetchWordPressTags() {
  try {
    const tags: WordPressTag[] = await wordPressFetch(`${WORDPRESS_API}/tags`)
    return tags
  } catch (error) {
    console.error('Failed to fetch WordPress tags:', error instanceof Error ? error.message : error)
    return []
  }
}

export function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim()
}

export function getWordPressImageUrl(post: WordPressPost): string | null {
  if (post._embedded?.['wp:featured_media']?.[0]) {
    return post._embedded['wp:featured_media'][0].source_url
  }
  return null
}