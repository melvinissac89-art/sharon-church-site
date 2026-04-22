import fs from "fs"
import path from "path"
import matter from "gray-matter"

const basePath = path.join(process.cwd(), "src/content")

export function getCollection(type: string): any[] {
  const dir = path.join(basePath, type)

  if (!fs.existsSync(dir)) return []

  return fs.readdirSync(dir).map((file) => {
    const filePath = path.join(dir, file)
    const raw = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(raw)

    return {
      ...data,
      content,
      slug: file.replace(".md", "")
    }
  })
}

export function getItem(type: string, slug: string): any {
  const filePath = path.join(basePath, type, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  
  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)
  
  return {
    ...data,
    content,
    slug
  }
}
