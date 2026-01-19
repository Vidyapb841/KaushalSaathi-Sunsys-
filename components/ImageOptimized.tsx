'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ImageOptimizedProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
}

export default function ImageOptimized({
  src,
  alt,
  width = 1200,
  height = 630,
  className = '',
  priority = false,
  quality = 85
}: ImageOptimizedProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Handle local images
  const isExternal = src.startsWith('http')
  const imageSrc = isExternal ? src : `/images/${src}`

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        className={`
          transition-opacity duration-300
          ${isLoading ? 'opacity-0' : 'opacity-100'}
        `}
        onLoad={() => setIsLoading(false)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  )
}