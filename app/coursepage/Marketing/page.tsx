"use client";
export const dynamic = 'force-dynamic';
import React, { useState, useRef, useEffect, Suspense } from "react";
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer";
import Link from "next/link";


const COLORS = {
  primary: "#001A6E",
  secondary: "#074799",
  accent: "#009990",
  highlight: "#E1FFBB",
};

function Chip({ children }) {
  return (
    <span
      className="text-sm px-3 py-1 rounded-full border"
      style={{ borderColor: COLORS.secondary }}
    >
      {children}
    </span>
  );
}

function SyllabusList({ items }) {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? items : items.slice(0, 4);

  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden">
      <div className="p-4 border-b" style={{ background: COLORS.highlight }}>
        <strong>Syllabus Overview</strong>
      </div>

      <ul className="max-h-56 overflow-auto">
        {visibleItems.map((it, i) => (
          <li
            key={i}
            className="flex justify-between items-center px-4 py-3 border-b last:border-b-0"
          >
            <div className="text-sm font-semibold">{it.title}</div>
            <div className="text-xs text-gray-600">{it.time}</div>
          </li>
        ))}
      </ul>

      <div className="p-3 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm underline"
          style={{ color: COLORS.secondary }}
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
}
// ---------------- FAQ ------------------
function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {faqs.map((f, i) => {
        const open = openIndex === i;

        return (
          <div key={i} className="border rounded-md">
            <button
              className="w-full text-left px-4 py-3 flex justify-between items-center"
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <span className="font-medium">{f.q}</span>
              <span
                className="ml-4 text-xl font-bold"
                style={{ color: COLORS.secondary }}
              >
                {open ? "−" : "+"}
              </span>
            </button>

            {open && (
              <div className="px-4 pb-4 text-sm text-gray-700">
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}


export default function CoursePage() {
  const modulesRef = useRef(null);

  const handleExplore = () => {
    modulesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#001A6E]/95 to-[#074799]/85 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* LEFT */}
            <div className="lg:col-span-2">
<div className="mb-3">
  <Link
    href="/home"
    className="inline-flex items-center gap-2 text-sm text-slate-200 hover:text-[#E1FFBB] transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 9.75L12 4l9 5.75M4.5 10.5V20h15v-9.5"
      />
    </svg>
    <span>Home</span>
  </Link>
</div>


              <h1
                className="text-3xl md:text-4xl font-extrabold leading-tight"
                style={{ color: COLORS.highlight }}
              >
                Marketing & Branding Professional Course 2026
              </h1>

              <p className="mt-3 text-lg text-slate-200 max-w-3xl">
               Learn Brand Management from beginner to advanced level — including brand strategy,
                digital marketing, communication planning, growth frameworks, and portfolio building.

              </p>

              <div className="mt-5 text-sm text-slate-100 max-w-3xl">
                <div className="flex flex-wrap gap-3">
                  <Chip>Beginner to Advanced</Chip>
                  <Chip>4.9 ★ Rating</Chip>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={handleExplore}
                  className="bg-[#009990] hover:bg-[#007f6f] text-white px-5 py-3 rounded-md font-medium mr-4"
                >
                  Explore Course
                </button>

                <button className="bg-white/20 hover:bg-white/30 text-white px-5 py-3 rounded-md font-medium">
                  Watch Intro Video
                </button>
              </div>
            </div>

            {/* RIGHT CARD */}
            <aside className="bg-white rounded-md shadow-md p-5 text-gray-800">
  <div className="w-full h-36 rounded-md overflow-hidden bg-gray-100 mb-4 flex items-center justify-center">
    <img
      src="/logos/M&B.jpeg"
      alt="Course Hero"
      className="max-w-full max-h-full object-contain"
    />
  </div>

              <div className="text-sm">
                <div className="text-green-700 font-bold text-lg">Live classes</div>
                <div className="mt-1">Instructor-Led Program</div>
              </div>

              <div className="mt-3">
                <ul className="text-sm">
                  <li className="flex justify-between py-1">
                    <span>Completion Certificate</span>
                    <span>Included</span>
                  </li>
                  </ul>
                 </div> 

              <button className="w-full mt-4 bg-[#001A6E] hover:bg-[#073c8f] text-white py-2 rounded-md font-semibold">
                Enroll Now
              </button>
            </aside>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        {/* Skills */}
        <div className="bg-white shadow rounded-md p-6 mb-8">
          <h2
            className="text-xl font-semibold mb-3"
            style={{ color: COLORS.secondary }}
          >
            Skills you will learn
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
                "Marketing Fundamentals",
                "Brand Strategy & Positioning",
                "Brand Identity & Storytelling",
                "Digital Marketing",
                "Communication Strategy",
                "Performance Marketing",
                "Sales & Growth Frameworks",
                "Analytics & Reporting",]
.map((skill, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: COLORS.accent }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24">
                    <path
                      fill="#fff"
                      d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                    />
                  </svg>
                </div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Syllabus */}
<div className="mb-10 w-full" ref={modulesRef}>
  <SyllabusList
    items={[
      { title: "Module 1: Marketing Fundamentals & Business Basics" },
      { title: "Module 2: Digital Marketing Foundations" },
      { title: "Module 3: Branding & Communication Strategy" },
      { title: "Module 4: Performance Marketing & Tools" },
      { title: "Module 5: Sales, Growth & Real Projects" },
      { title: "Module 6: Portfolio Building & Career Readiness" },
    ]}
  />
</div>

{/* CERTIFICATE */}
        <div className="bg-white rounded-md shadow mb-4 p-5">
          <h4 className="font-semibold text-2xl mb-1">
            Get a Completion Certificate
          </h4>
          <p className="text-md font-semibold text-gray-600 mb-10">
            Showcase your Brand Management expertise and boost your LinkedIn
            profile.
          </p>

          <div className="mb-6 flex justify-center">
            <img
              src="/logos/certificate.jpg"
              alt="Certificate Example"
              className="w-150 h-auto rounded-md border shadow"
            />
          </div>
        </div>
        {/* ABOUT */}
        <div className="bg-white rounded-md shadow p-6 mb-10">
          <h4 className="font-semibold mb-3">About the Course</h4>

<p className="text-sm text-gray-700 leading-relaxed">
  A comprehensive, industry-aligned Brand Management program designed to take you from beginner to job-ready professional. This course covers the complete branding lifecycle—from marketing fundamentals and business basics to digital marketing, brand positioning, and communication strategy.
  <br /><br />
  You will learn how to build, grow, and manage powerful brands by understanding consumer behavior, brand identity, storytelling, performance marketing, and growth frameworks. The curriculum emphasizes hands-on learning through real-world projects, case studies, campaign planning, and tool-based execution across digital platforms.
  <br /><br />
  By the end of the course, you will have built a professional brand portfolio, gained a strong understanding of branding strategy, marketing execution, and growth tactics, and developed the confidence to apply for brand manager roles, marketing strategist roles, growth marketer roles, or brand consulting positions. This course is ideal for students, freshers, entrepreneurs, and professionals who want to build a future-proof career in brand management and marketing.
</p>



        </div>

 {/* ⭐⭐ VIDEO SECTION WITH REF ⭐⭐ */}
        <section id="videos" className="py-16 px-6 bg-white">

          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#001A6E] mb-8 text-center">
              Watch to Know More
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Video 1 */}
              <div className="rounded-xl shadow-lg overflow-hidden bg-gray-100">
                <iframe
                  className="w-full h-56"
                  src="https://www.youtube.com/embed/dummy_link_1"
                  title="Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="p-4 text-center font-semibold text-gray-800">
                  Introduction to the Program
                </div>
              </div>

              {/* Video 2 */}
              <div className="rounded-xl shadow-lg overflow-hidden bg-gray-100">
                <iframe
                  className="w-full h-56"
                  src="https://www.youtube.com/embed/dummy_link_2"
                  title="Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="p-4 text-center font-semibold text-gray-800">
                  What You Will Learn
                </div>
              </div>

              {/* Video 3 */}
              <div className="rounded-xl shadow-lg overflow-hidden bg-gray-100">
                <iframe
                  className="w-full h-56"
                  src="https://www.youtube.com/embed/dummy_link_3"
                  title="Video 3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="p-4 text-center font-semibold text-gray-800">
                  Why Choose This Course?
                </div>
              </div>

              {/* Video 4 */}
              <div className="rounded-xl shadow-lg overflow-hidden bg-gray-100">
                <iframe
                  className="w-full h-56"
                  src="https://www.youtube.com/embed/dummy_link_4"
                  title="Video 4"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="p-4 text-center font-semibold text-gray-800">
                  Career Opportunities
                </div>
              </div>
            </div>
          </div>
        </section>


{/* FAQ */}
<div className="bg-white rounded-md shadow p-6 mb-10">
  <h4 className="font-semibold mb-4">FAQs</h4>
  <FAQAccordion
    faqs={[
      {
        q: "Is this course beginner-friendly?",
        a: "Yes, no prior marketing or business experience is required. The course starts from the fundamentals."
      },
      {
        q: "Do I need any marketing or business background?",
        a: "No, this course is designed for complete beginners and gradually builds advanced branding and marketing skills."
      },
      {
        q: "Will I work on real-world brand projects?",
        a: "Yes, you will work on real-world brand strategy projects, campaigns, and case studies to build your portfolio."
      },
      {
        q: "What tools will I learn?",
        a: "You will learn tools like Google Analytics (GA4), Meta Ads, Google Ads, Canva, and basic CRM and marketing automation tools."
      },
      {
        q: "Will I get a certificate after completion?",
        a: "Yes, you will receive an industry-recognized completion certificate after finishing the course."
      },
      {
        q: "Is this course suitable for working professionals?",
        a: "Yes, the course offers flexible schedules and learning options suitable for students and working professionals."
      },
      {
        q: "Will this help me get a brand management or marketing job?",
        a: "Yes, the course includes portfolio building, interview preparation, and career guidance to help you get hired."
      },
      {
        q: "What career roles can I apply for after this course?",
        a: "You can apply for roles such as Brand Manager, Marketing Executive, Growth Marketer, Digital Marketing Strategist, and Brand Consultant."
      }
    ]}
  />
</div>


        {/* Instructor */}
        <div className="bg-white rounded-md shadow p-6 flex gap-4 mb-10">
          <img
            src="/logos/profile.png"
            className="w-20 h-20 rounded-full object-cover"
          />

          <div>
            <h5 className="font-semibold">Abhishek Kumar Shaw</h5>
            <div className="text-sm text-gray-600 mb-2">
              Brand Management Mentor
            </div>
            <p className="text-sm text-gray-700">
              7+ years of Brand Management experience, expert in Figma, User Research,
              Prototyping, and Design Systems.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-md shadow p-6 text-center">
          <h4 className="font-semibold mb-2">Ready to start designing?</h4>
          <p className="text-sm text-gray-600 mb-4">
            Learn Brand Management and build stunning portfolio case studies.
          </p>
          <button className="bg-[#009990] hover:bg-[#007f6f] text-white px-6 py-2 rounded-md">
            Start Learning
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
