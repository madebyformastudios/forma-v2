import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { webdesign } from '@/content/diensten/webdesign'
import { maatwerkSoftware } from '@/content/diensten/maatwerk-software'
import { seo } from '@/content/diensten/seo'
import { middelburg } from '@/content/plaatsen/middelburg'
import { vlissingen } from '@/content/plaatsen/vlissingen'
import { goes } from '@/content/plaatsen/goes'
import { zeeland } from '@/content/plaatsen/zeeland'
import { contact } from '@/content/contact'

const HOME_LAST_MODIFIED = '2026-09-24'
const PRIVACY_LAST_MODIFIED = '2026-09-19'

export default function sitemap(): MetadataRoute.Sitemap {
  const services = [webdesign, maatwerkSoftware, seo]
  const places = [middelburg, vlissingen, goes, zeeland]

  return [
    {
      url: SITE_URL,
      lastModified: HOME_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...services.map((page) => ({
      url: `${SITE_URL}${page.path}`,
      lastModified: page.lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...places.map((page) => ({
      url: `${SITE_URL}${page.path}`,
      lastModified: page.lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}${contact.path}`,
      lastModified: contact.lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: PRIVACY_LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
