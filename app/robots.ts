import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://madebyforma.nl'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/_next/static/', '/admin', '/api', '/private', '/404', '/500'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
