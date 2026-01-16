'use client'

interface SchemaProps {
  type: 'organization' | 'course' | 'website' | 'breadcrumb' | 'faq'
  data?: any
}

export default function SchemaMarkup({ type, data }: SchemaProps) {
  const baseUrl = 'https://kaushal-sathi-sunsys-q9rr.vercel.app'
  
  const getSchema = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Kaushal Sathi",
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "description": "Skill development and career advancement platform",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"]
          },
          "sameAs": [
            "https://facebook.com/kaushalsathi",
            "https://twitter.com/kaushal_sathi",
            "https://linkedin.com/company/kaushalsathi",
            "https://instagram.com/kaushalsathi"
          ]
        }
      
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Kaushal Sathi",
          "url": baseUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${baseUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        }
      
      case 'course':
        return {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": data?.name || "Skill Development Course",
          "description": data?.description || "Professional skill development course",
          "provider": {
            "@type": "Organization",
            "name": "Kaushal Sathi",
            "sameAs": baseUrl
          },
          "url": data?.url || `${baseUrl}/courses`,
          "image": data?.image || `${baseUrl}/images/course-default.jpg`,
          "offers": {
            "@type": "Offer",
            "price": data?.price || "0",
            "priceCurrency": data?.currency || "INR"
          }
        }
      
      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data?.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `${baseUrl}${item.path}`
          })) || []
        }
      
      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data?.map((q: any) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          })) || []
        }
      
      default:
        return {}
    }
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchema())
      }}
    />
  )
}