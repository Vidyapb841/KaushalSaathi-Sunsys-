// C:\Koushalsaathi(sunsys)1\app\layout.tsx

import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: 'Kaushal Sathi - Empowering Skills Development',
  description: 'Kaushal Sathi is a comprehensive platform for skill development, training, and career advancement. Join thousands of learners in their journey to professional excellence.',
  keywords: 'skill development, online training, career advancement, professional courses, vocational training, India skills, learning platform',
  generator: "v0.app",

  openGraph: {
    title: 'Kaushal Sathi - Empowering Skills Development',
    description: 'Join thousands of learners in their journey to professional excellence',
    url: 'https://kaushal-sathi-sunsys-q9rr.vercel.app',
    siteName: 'Kaushal Sathi',
    images: [
      {
        url: 'https://kaushal-sathi-sunsys-q9rr.vercel.app/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kaushal Sathi Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Kaushal Sathi - Empowering Skills Development',
    description: 'Join thousands of learners in their journey to professional excellence',
    images: ['https://kaushal-sathi-sunsys-q9rr.vercel.app/images/twitter-image.png'],
    creator: '@kaushal_sathi',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: 'google-site-verification=ABCDEFGHIJKLMNOPQRSTUVWXYZ123456',
    yandex: 'yandex-verification=9876543210abcde',
    yahoo: 'yahoo-site-verification=verification12345',
  },
  
  authors: [{ name: 'Kaushal Sathi Team' }],
  creator: 'Kaushal Sathi',
  publisher: 'Kaushal Sathi',
  category: 'Education',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Kaushal Sathi",
              "alternateName": "KaushalSathi",
              "description": "Comprehensive platform for skill development and career advancement in India",
              "url": "https://kaushal-sathi-sunsys-q9rr.vercel.app",
              "logo": "https://kaushal-sathi-sunsys-q9rr.vercel.app/logo.png",
              "foundingDate": "2023",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Kaushal Sathi Team"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "email": "support@kaushalsathi.com",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://facebook.com/kaushalsathi",
                "https://twitter.com/kaushal_sathi",
                "https://linkedin.com/company/kaushalsathi",
                "https://instagram.com/kaushalsathi"
              ],
              "offers": {
                "@type": "Offer",
                "category": "Skill Development Courses"
              }
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Kaushal Sathi",
              "alternateName": "Skill Development Platform",
              "url": "https://kaushal-sathi-sunsys-q9rr.vercel.app",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://kaushal-sathi-sunsys-q9rr.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}

// Google Search Console:
// Go to https://search.google.com/search-console

// Add your site: kaushal-sathi-sunsys-q9rr.vercel.app

// Choose HTML tag verification method

// Copy the code (looks like: google-site-verification=XXXXXX)

// Replace in layout.tsx: google: 'google-site-verification=XXXXXX'

// Bing Webmaster Tools:
// Go to https://www.bing.com/webmasters

// Add your site

// Get verification code

// Add to layout.tsx as: bing: 'XXXXX'

// Yandex Webmaster:
// Go to https://webmaster.yandex.com

// Add your site

// Get verification code

// Add to layout.tsx