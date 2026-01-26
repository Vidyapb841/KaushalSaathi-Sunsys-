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

// ---------------- SYLLABUS LIST ------------------
function SyllabusList({ items }) {
  const [showAll, setShowAll] = useState(false);

  const listStyle = showAll ? {} : { maxHeight: "14rem" };
  const visibleItems = showAll ? items : items.slice(0, 4);

  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden">
      <div className="p-4 border-b" style={{ background: COLORS.highlight }}>
        <strong>SEO Course Syllabus Overview</strong>
      </div>

      <ul className="overflow-auto" style={{ ...listStyle }}>
        {visibleItems.map((it, i) => (
          <li
            key={i}
            className="flex items-center px-4 py-3 border-b last:border-b-0 font-bold"
          >
            <div className="text-sm text-left w-full">{it.title}</div>
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


// ---------------- PAGE ------------------
export default function CoursePage() {
  const modulesRef = useRef(null);

  const handleExplore = () => {
    modulesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // -----------------------------------------------
  // SEO SYLLABUS DATA
  // -----------------------------------------------

  const syllabus = [
    { title: "Month 1: SEO Foundations" },
    { title: "Month 2: Keyword Research & Content Strategy" },
    { title: "Month 3: On-Page SEO & EEAT" },
    { title: "Month 4: Technical SEO (24 Hours)" },
    { title: "Month 5: Content SEO, AI Integration & Links" },
    { title: "Month 6: Local, E-Commerce, Analytics & Future SEO" },
    { title: "Capstone Project: Full SEO Audit & Implementation" },

  ];

  const features = [
    "Search Engine & AI Search Optimization (SEO + GEO)",
    "Advanced Keyword Research & Topic Clustering",
    "EEAT & Helpful Content Optimization",
    "Technical SEO & Core Web Vitals",
    "AI-Integrated Content Workflows",
    "Link Building & Digital PR",
    "Local & E-Commerce SEO",
    "Analytics, Reporting & Career Readiness",
  ];

const faqs = [
  {
    q: "Is this SEO course really free?",
    a: "Yes. This SEO Course Curriculum 2026 is completely free and includes live sessions, hands-on practice, and real-world SEO concepts."
  },
  {
    q: "Is AI included in this SEO course?",
    a: "Yes. The course integrates AI tools, SGE (Search Generative Experience), and Generative SEO strategies throughout the curriculum."
  },
  {
    q: "Is this course beginner-friendly?",
    a: "Yes. The course starts from SEO foundations and progresses to advanced topics like AI search optimization and technical SEO."
  },
  {
    q: "Will this course help in getting SEO jobs or freelancing?",
    a: "Yes. The course is designed to make you career-ready with real SEO projects, client pitching skills, and both freelancing and in-house career paths."
  },
  {
    q: "Do I get a certificate after completion?",
    a: "Yes. You will receive a verified completion certificate after successfully finishing the course and capstone project."
  },
  {
    q: "What tools will I learn in this course?",
    a: "You will learn GA4, Search Console, keyword research tools, AI-assisted workflows, schema markup, automation tools, and more."
  },
  {
    q: "Will there be live classes or recordings?",
    a: "Yes. The program includes instructor-led live sessions along with recordings for revision and self-paced learning."
  },
  {
    q: "What projects will I work on?",
    a: "You will complete a comprehensive capstone project including full website SEO audit, content strategy, technical fixes, and AI-powered deployment."
  }
];


  const instructor = {
    name: "Alex Morgan",
    title: "SEO & AI Search Strategist",
    bio: "12+ years of experience in SEO, AI search optimization, and enterprise growth strategies with leading global brands.",
    photo: "/logos/profile.png",
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
                  className="inline-flex items-center gap-2 text-sm text-slate-200 hover:text-[#E1FFBB]"
                >    <svg
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
                SEO Course Curriculum 2026
              </h1>

              <p className="mt-3 text-lg text-slate-200 max-w-3xl">
                AI-Integrated • Industry-Aligned • Career-Ready SEO Training
              </p>

              <div className="mt-5 text-sm text-slate-100 max-w-3xl">
                <p className="mb-3">
                 Master modern SEO including AI search, SGE, technical SEO, content strategy, 
                 analytics, and real-world implementation with comprehensive 80-hour training.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Chip>Beginner to Advanced</Chip>
                  <Chip>80 Hours Training</Chip>
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
      src="/logos/seo.PNG"
      alt="SEO Course"
      className="max-w-full max-h-full object-contain"
    />
  </div>
              <div className="text-sm">
                <div className="text-green-700 font-bold text-lg">Instructor-Led</div>
                <div className="mt-1">Live + Hands-On Training</div>
              </div>

              <ul className="text-sm mt-3">
                <li className="flex justify-between py-1">
                  <span>Completion Certificate</span>
                  <span>Included</span>
                </li>
              
              </ul>

              <button className="w-full mt-4 bg-[#001A6E] hover:bg-[#073c8f] text-white py-2 rounded-md font-semibold">
                Enroll Now
              </button>
            </aside>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        {/* SKILLS */}
        <div className="bg-white shadow rounded-md p-6 mb-8">
          <h2
            className="text-xl font-semibold mb-3"
            style={{ color: COLORS.secondary }}
          >
            Skills you will learn
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((f, i) => (
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
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SYLLABUS */}
        <div className="mb-10 w-full" ref={modulesRef}>
          <SyllabusList items={syllabus} />
        </div>

        {/* CERTIFICATE */}
        <div className="bg-white rounded-md shadow mb-4 p-5">
          <h4 className="font-semibold text-2xl mb-1">
            Get a Completion Certificate
          </h4>
          <p className="text-md font-semibold text-gray-600 mb-10">
            Showcase your SEO expertise and boost your LinkedIn
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
  A comprehensive, industry-aligned SEO program designed to take you from beginner to job-ready SEO professional. This course covers the complete modern SEO stack—including search engine optimization fundamentals, AI search integration, keyword research, technical SEO, on-page and off-page SEO, content strategy, analytics, and full-funnel SEO implementation using industry-standard tools and frameworks.
  <br /><br />
  You will learn how to plan, execute, and scale data-driven SEO strategies for real websites and businesses. The curriculum emphasizes hands-on learning through instructor-led sessions, practical assignments, real-world case studies, and AI-assisted workflows covering site audits, keyword clustering, content optimization, link building, Core Web Vitals, schema markup, and local SEO.
  <br /><br />
  By the end of the program, you will have built a complete SEO portfolio, executed real SEO campaigns, and gained practical experience with tools like Google Search Console, Google Analytics (GA4), Ahrefs, SEMrush, Screaming Frog, and AI SEO platforms. You will also complete a live capstone project that demonstrates your ability to rank websites, drive organic traffic, and optimize performance—preparing you to apply for SEO specialist roles, digital marketing roles, growth marketing roles, or freelance SEO opportunities.
</p>

        </div>

         {/* VIDEO SECTION */}
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
          <FAQAccordion faqs={faqs} />
        </div>

        {/* INSTRUCTOR */}
        <div className="bg-white rounded-md shadow p-6 flex gap-4 mb-10">
          <img
            src={instructor.photo}
            className="w-20 h-20 rounded-full object-cover"
            alt=""
          />

          <div>
            <h5 className="font-semibold">{instructor.name}</h5>
            <div className="text-sm text-gray-600 mb-2">{instructor.title}</div>
            <p className="text-sm text-gray-700">{instructor.bio}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-md shadow p-6 text-center">
          <h4 className="font-semibold mb-2">Ready to begin?</h4>
          <p className="text-sm text-gray-600 mb-4">
            Start learning SEO today — it's completely free.
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