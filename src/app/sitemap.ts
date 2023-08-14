import { MetadataRoute } from 'next'

const domain = 'https://serppreview.xyz'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${domain}`,
      lastModified: new Date()
    },
    {
      url: `${domain}/seo-emojis`,
      lastModified: new Date()
    },
    {
      url: `${domain}/privacy-policy`,
      lastModified: new Date()
    },
    {
      url: `${domain}/terms-and-conditions`,
      lastModified: new Date()
    }
  ]
}
