import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://madebyforma.nl'

  // Get project slugs from MDX files
  const projectsDirectory = path.join(process.cwd(), 'projects')
  const projectFiles = fs.existsSync(projectsDirectory) ? fs.readdirSync(projectsDirectory) : []
  
  const projectUrls = projectFiles
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      url: `${baseUrl}/projects/${file.replace('.mdx', '')}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...projectUrls,
  ]
}
