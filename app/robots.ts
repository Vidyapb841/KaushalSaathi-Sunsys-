import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/dashboard/',
          '/private/',
          '/_next/',
          '/static/',
          '/test/',
          '/temp/',
        ],
      }
    ],
    sitemap: "https://kaushal-saathi-sunsys.vercel.app/sitemap.xml",
    host: "https://kaushal-saathi-sunsys.vercel.app",

  };
}
