import fs from 'fs'
import path from 'path'
import { fetchWordPressPosts } from 'lib/wordpress'
import { transformWordPressPost } from 'lib/wordpress-utils'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir) {
  // Check if directory exists
  if (!fs.existsSync(dir)) {
    return []
  }
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'))
}

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  const targetDate = new Date(date)

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  const daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = targetDate.toLocaleString('en-us', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  if (includeRelative) {
    if (yearsAgo > 0) {
      formattedDate += ` (${yearsAgo}y ago)`
    } else if (monthsAgo > 0) {
      formattedDate += ` (${monthsAgo}mo ago)`
    } else if (daysAgo > 0) {
      formattedDate += ` (${daysAgo}d ago)`
    } else {
      formattedDate += ' (Today)'
    }
  }

  return formattedDate
}

export async function getWordPressPosts() {
  try {
    const posts = await fetchWordPressPosts(1, 100)
    return posts.map(transformWordPressPost)
  } catch (error) {
    console.error('Error fetching WordPress posts:', error)
    return []
  }
}

export async function getAllBlogPosts() {
  const wpPosts = await getWordPressPosts()
  return wpPosts.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  })
}
