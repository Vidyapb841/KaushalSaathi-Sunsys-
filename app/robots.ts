import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/dashboard/', '/private/'],
    },
    sitemap: 'https://kaushal-sathi-sunsys-q9rr.vercel.app/sitemap.xml',
    host: 'https://kaushal-sathi-sunsys-q9rr.vercel.app',
  }
}
// have to change the sitemap URL and host URL when deploying to production