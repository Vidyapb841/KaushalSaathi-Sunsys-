// app/page.tsx
import { redirect } from "next/navigation";
import SEO from '@/components/SEO'
import SchemaMarkup from '@/components/SchemaMarkup'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const faqData = [
    {
      question: "What is Kaushal Sathi?",
      answer: "Kaushal Sathi is a comprehensive platform for skill development and career advancement in India."
    },
    {
      question: "Are the courses free?",
      answer: "We offer both free and paid courses to cater to different learning needs."
    },
    {
      question: "Do you provide certificates?",
      answer: "Yes, we provide certificates upon successful completion of our courses."
    }
  ]
  
  const breadcrumbData = [
    { name: "Home", path: "/" },
    { name: "Skill Development", path: "/courses" }
  ]
  
  useEffect(() => {
    // Redirect to /home after 5 seconds
    setTimeout(() => {
      redirect("/home");
    }, 5000);
  }, []);
  // Immediately redirect to /home
  // redirect("/home");
  
  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Kaushal Sathi - Your gateway to professional skill development and career growth. Explore courses, training programs, and career opportunities."
        image="https://kaushal-sathi-sunsys-q9rr.vercel.app/images/home-og.jpg"
      />
      
      <SchemaMarkup type="website" />
      <SchemaMarkup type="organization" />
      <SchemaMarkup type="faq" data={faqData} />
      <SchemaMarkup type="breadcrumb" data={breadcrumbData} />
      
      <main>
        {/* Your existing home page content */}
      </main>
    </>
  )
}