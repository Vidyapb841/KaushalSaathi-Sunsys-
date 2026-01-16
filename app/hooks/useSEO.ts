'use client'

import { useEffect } from 'react'

export function useSEO(config: {
  title?: string
  description?: string
  image?: string
  noindex?: boolean
}) {
  useEffect(() => {
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
      if (name.startsWith('og:') || name.startsWith('twitter:')) {
        meta.setAttribute('property', name)
      } else {
        meta.setAttribute('name', name)
      }
    }
    
    if (config.title) {
      document.title = `${config.title} | Kaushal Sathi`
    }
    
    if (config.description) {
      updateMetaTag('description', config.description)
      updateMetaTag('og:description', config.description)
      updateMetaTag('twitter:description', config.description)
    }
    
    if (config.image) {
      updateMetaTag('og:image', config.image)
      updateMetaTag('twitter:image', config.image)
    }
    
    if (config.noindex) {
      updateMetaTag('robots', 'noindex, nofollow')
    }
    
    updateMetaTag('og:title', document.title)
    updateMetaTag('twitter:title', document.title)
    updateMetaTag('og:url', window.location.href)
    updateMetaTag('og:type', 'website')
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:site', '@kaushal_sathi')
    
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('href', window.location.href)
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonical)
    }
  }, [config])
}