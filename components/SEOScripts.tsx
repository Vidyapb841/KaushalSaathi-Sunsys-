'use client'

import { useEffect } from 'react'

interface SEOScriptProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  jsonLd?: any
  noindex?: boolean
}

export default function SEOScript({
  title,
  description,
  canonical,
  ogImage = '/images/og-default.jpg',
  ogType = 'website',
  jsonLd,
  noindex = false
}: SEOScriptProps) {
  useEffect(() => {
    // Update meta tags
    if (title) {
      document.title = `${title} | Kaushal Saathi`
      
      // Update Open Graph title
      updateMetaTag('og:title', title)
      updateMetaTag('twitter:title', title)
    }
    
    if (description) {
      updateMetaTag('description', description)
      updateMetaTag('og:description', description)
      updateMetaTag('twitter:description', description)
    }
    
    if (ogImage) {
      updateMetaTag('og:image', ogImage)
      updateMetaTag('twitter:image', ogImage)
    }
    
    updateMetaTag('og:type', ogType)
    
    // Update canonical URL
    if (canonical) {
      updateCanonical(canonical)
    }
    
    // Handle noindex
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow')
    } else {
      updateMetaTag('robots', 'index, follow')
    }
    
    // Update JSON-LD if provided
    if (jsonLd) {
      const scriptId = 'json-ld-script'
      let script = document.getElementById(scriptId) as HTMLScriptElement
      
      if (!script) {
        script = document.createElement('script')
        script.id = scriptId
        script.type = 'application/ld+json'
        document.head.appendChild(script)
      }
      
      script.textContent = JSON.stringify(jsonLd)
    }
  }, [title, description, canonical, ogImage, ogType, jsonLd, noindex])

  const updateMetaTag = (name: string, content: string) => {
    const selector = name.startsWith('og:') || name.startsWith('twitter:') 
      ? `meta[property="${name}"]` 
      : `meta[name="${name}"]`
    
    let meta = document.querySelector(selector)
    if (!meta) {
      meta = document.createElement('meta')
      if (name.startsWith('og:') || name.startsWith('twitter:')) {
        meta.setAttribute('property', name)
      } else {
        meta.setAttribute('name', name)
      }
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', content)
  }

  const updateCanonical = (url: string) => {
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', url)
  }

  return null
}