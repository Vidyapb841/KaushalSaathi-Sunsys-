'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  author?: string
}

export default function SEO({
  title = 'Kaushal Sathi - Empowering Skills Development',
  description = 'Kaushal Sathi is a comprehensive platform for skill development, training, and career advancement.',
  image = 'https://kaushal-sathi-sunsys-q9rr.vercel.app/images/seo-default.jpg',
  type = 'website',
  publishedTime,
  author = 'Kaushal Sathi Team'
}: SEOProps) {
  const pathname = usePathname()
  const siteUrl = 'https://kaushal-sathi-sunsys-q9rr.vercel.app'
  const currentUrl = `${siteUrl}${pathname}`
  const siteName = 'Kaushal Sathi'
  const fullTitle = `${title} | ${siteName}`
  
  useEffect(() => {
    document.title = fullTitle
    
    const metaTags = [
      { name: 'description', content: description },
      { name: 'og:title', content: fullTitle },
      { name: 'og:description', content: description },
      { name: 'og:image', content: image },
      { name: 'og:url', content: currentUrl },
      { name: 'og:type', content: type },
      { name: 'og:site_name', content: siteName },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:site', content: '@kaushal_sathi' },
      { name: 'twitter:creator', content: '@kaushal_sathi' }
    ]
    
    metaTags.forEach(tag => {
      const meta = document.querySelector(`meta[name="${tag.name}"]`) || document.createElement('meta')
      meta.setAttribute('name', tag.name)
      meta.setAttribute('content', tag.content)
      if (!document.querySelector(`meta[name="${tag.name}"]`)) {
        document.head.appendChild(meta)
      }
    })
    
    const linkCanonical = document.querySelector('link[rel="canonical"]') || document.createElement('link')
    linkCanonical.setAttribute('rel', 'canonical')
    linkCanonical.setAttribute('href', currentUrl)
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(linkCanonical)
    }
    
    if (type === 'article' && publishedTime) {
      const metaPublished = document.querySelector('meta[property="article:published_time"]') || document.createElement('meta')
      metaPublished.setAttribute('property', 'article:published_time')
      metaPublished.setAttribute('content', publishedTime)
      if (!document.querySelector('meta[property="article:published_time"]')) {
        document.head.appendChild(metaPublished)
      }
    }
    
    if (author) {
      const metaAuthor = document.querySelector('meta[name="author"]') || document.createElement('meta')
      metaAuthor.setAttribute('name', 'author')
      metaAuthor.setAttribute('content', author)
      if (!document.querySelector('meta[name="author"]')) {
        document.head.appendChild(metaAuthor)
      }
    }
    
    return () => {
      document.title = 'Kaushal Sathi - Empowering Skills Development'
    }
  }, [title, description, image, type, publishedTime, author, currentUrl, fullTitle])
  
  return null
}