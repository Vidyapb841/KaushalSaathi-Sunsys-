import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kaushal Saathi - Empowering Skills Development in India',
  description: 'Kaushal Saathi is a comprehensive skill development platform offering vocational training, career guidance, and employment opportunities. Join thousands of learners in their journey to professional excellence.',
  keywords: 'skill development India, vocational training, career guidance, online courses, employment opportunities, skill India, Kaushal Saathi, digital learning',
  
  openGraph: {
    title: 'Kaushal Saathi - Empowering Skills Development',
    description: 'Join India\'s premier skill development platform for vocational training and career growth',
    url: 'https://kaushal-saathi-sunsys.vercel.app',
    siteName: 'Kaushal Saathi',
    images: [
      {
        url: 'https://kaushal-saathi-sunsys.vercel.app/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kaushal Saathi - Skill Development Platform',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Kaushal Saathi - Empowering Skills Development',
    description: 'India\'s leading platform for skill development and vocational training',
    images: ['https://kaushal-saathi-sunsys.vercel.app/images/twitter-image.jpg'],
    creator: '@kaushalsaathi',
    site: '@kaushalsaathi',
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
    google: 'O7vSJ_pXJMgEUe6C14dLRnjNRtWcvyWmzLHeG2_DIUU',
    other: {
      'msvalidate.01': '05BFF742C1BB3DBBBFCAE4A2078E8B3F',
    },
  },
  
  authors: [{ name: 'Kaushal Saathi Team' }],
  creator: 'Kaushal Saathi',
  publisher: 'Kaushal Saathi',
  category: 'Education',
  
  alternates: {
    canonical: 'https://kaushal-saathi-sunsys.vercel.app',
  },
  
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  
  themeColor: '#2563eb',
  
  appleWebApp: {
    capable: true,
    title: 'Kaushal Saathi',
    statusBarStyle: 'default',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" prefix="og: https://ogp.me/ns#">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Verification Tags */}
        <meta name="google-site-verification" content="O7vSJ_pXJMgEUe6C14dLRnjNRtWcvyWmzLHeG2_DIUU" />
        <meta name="msvalidate.01" content="05BFF742C1BB3DBBBFCAE4A2078E8B3F" />
        
        {/* Bing Verification */}
        <meta name="msvalidate.01" content="05BFF742C1BB3DBBBFCAE4A2078E8B3F" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="rating" content="General" />
        <meta name="copyright" content="Kaushal Saathi" />
        <meta name="reply-to" content="contact@kaushalsaathi.com" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        
        {/* Facebook Domain Verification (if needed) */}
        {/* <meta name="facebook-domain-verification" content="your-facebook-verification-code" /> */}
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "@id": "https://kaushal-saathi-sunsys.vercel.app/#organization",
              "name": "Kaushal Saathi",
              "alternateName": "Kaushal Saathi Skill Development Platform",
              "description": "India's leading platform for skill development, vocational training, and career advancement",
              "url": "https://kaushal-saathi-sunsys.vercel.app",
              "logo": "https://kaushal-saathi-sunsys.vercel.app/logo.png",
              "image": "https://kaushal-saathi-sunsys.vercel.app/images/og-image.jpg",
              "foundingDate": "2023",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Kaushal Saathi Team"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "telephone": "+91-XXXXXXXXXX",
                "email": "saathikaushal@gmail.com",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://facebook.com/kaushalsaathi",
                // "https://twitter.com/kaushalsaathi",
                "https://linkedin.com/company/kaushalsaathi",
                "https://instagram.com/kaushalsaathi",
                "https://youtube.com/@kaushalsaathi"
              ],
              "knowsAbout": [
                "Skill Development",
                "Vocational Training",
                "Career Counseling",
                "Job Placement",
                "Digital Literacy"
              ]
            })
          }}
        />
        
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://kaushal-saathi-sunsys.vercel.app/#website",
              "name": "Kaushal Saathi",
              "alternateName": "Skill Development Platform",
              "url": "https://kaushal-saathi-sunsys.vercel.app",
              "description": "Comprehensive skill development and career advancement platform",
              "publisher": {
                "@id": "https://kaushal-saathi-sunsys.vercel.app/#organization"
              },
              "inLanguage": "en-IN",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://kaushal-saathi-sunsys.vercel.app/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "@id": "https://kaushal-saathi-sunsys.vercel.app/#localbusiness",
              "name": "Kaushal Saathi",
              "image": "https://kaushal-saathi-sunsys.vercel.app/logo.png",
              "url": "https://kaushal-saathi-sunsys.vercel.app",
              "telephone": "+91-XXXXXXXXXX",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Skill Development Center",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.6139",
                "longitude": "77.2090"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/kaushalsaathi",
                // "https://twitter.com/kaushalsaathi",
                "https://www.linkedin.com/company/kaushalsaathi/"
              ],
              "priceRange": "₹₹",
              "currenciesAccepted": "INR"
            })
          }}
        />
        
        {/* Breadcrumb Schema for Home */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://kaushal-saathi-sunsys.vercel.app"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}