"use client";
export const dynamic = 'force-dynamic';
import React, { useState, useRef, useEffect, Suspense } from "react";
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer";

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
  const visibleItems = showAll ? items : items.slice(0, 4);

  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden">
      <div className="p-4 border-b" style={{ background: COLORS.highlight }}>
        <strong>FrontEnd Development Course Syllabus Overview</strong>
      </div>

      <ul className="overflow-auto max-h-56">
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
function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-2">
      {faqs.map((f, i) => {
        const open = openIndex === i;
        return (
          <div key={i} className="border rounded">
            <button
              className="w-full text-left px-4 py-3 flex justify-between items-center"
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <span className="font-medium">{f.q}</span>
              <span className="ml-4 text-xl" style={{ color: COLORS.secondary }}>
                {open ? "−" : "+"}
              </span>
            </button>

            {open && (
              <div className="px-4 pb-4 text-sm text-gray-700">{f.a}</div>
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

  // ---------------- Front END  SYLLABUS ------------------
  const syllabus = [
    { title: "Module 1:HTML Mastery" },
    { title: "Module 2:CSS Core Styling" },
    { title: "Module 3:Advanced CSS + UI" },
    { title: "Module 4:JavaScript Foundations" },
    { title: "Module 5:Modern JavaScript" },
    { title: "Module 6:Version Control" },
    { title: "Module 7:HTML Mastery - Round 2" },
    { title: "Module 8:CSS Core Styling - Round 2" },
    { title: "Module 9: Advanced CSS + UI - Round 2" },
    { title: "Module 10:JavaScript Foundations - Round 2" },
    { title: "Module 11:Modern JavaScript - Round 2" },
    { title: "Module 12:Version Control - Round 2" },
    { title: "Module 13:HTML Mastery - Round 3" },
    { title: "Module 14:CSS Core Styling - Round 3" },
    { title: "Module 15:Advanced CSS + UI - Round 3" },
    { title: "Module 16:JavaScript Foundations - Round 3" },
    { title: "Module 17:Version Control - Round 2" },
    { title: "Module 18:Modern JavaScript - Round 3" },
    { title: "Module 19:Version Control - Round 3" },
  ];

const features = [
  "HTML5, CSS3 & Modern JavaScript Fundamentals",
  "Responsive Web Design (Flexbox, Grid & Media Queries)",
  "Advanced JavaScript & DOM Manipulation",
  "Modern UI Development with React",
  "State Management & Component-Based Architecture",
  "API Integration & Asynchronous Programming",
  "Performance Optimization & Web Accessibility",
  "Project-Based Learning, Git & Career Readiness",
];


const faqs = [
  {
    q: "Is this Front-End Development course free?",
    a: "Yes, this Front-End Development Course 2026 is completely free.",
  },
  {
    q: "Are modern frameworks like React included in this course?",
    a: "Yes, the course covers React and modern front-end development practices.",
  },
  {
    q: "Is this course beginner-friendly?",
    a: "Yes, it starts from HTML, CSS, and JavaScript basics and progresses to advanced front-end concepts.",
  },
  {
    q: "Will this course help in getting front-end developer jobs or internships?",
    a: "Yes, the course is designed to make you job-ready with hands-on projects and real-world skills.",
  },
  {
    q: "Do I get a certificate?",
    a: "Yes, you will receive a completion certificate after successfully finishing the course.",
  },
];


  const instructor = {
    name: "Alex Morgan",
    title: "Front End Development Expert",
    bio: "12+ years of experience in SEO, AI search, and enterprise growth strategies.",
    photo: "/logos/profile.png",
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#001A6E]/95 to-[#074799]/85 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <nav className="text-sm mb-3 text-slate-200">
                Home &gt; Course &gt; FrontEnd Development
              </nav>

              <h1
                className="text-3xl md:text-4xl font-extrabold leading-tight"
                style={{ color: COLORS.highlight }}
              >
                Certified FrontEnd Developer Curriculum 2026
              </h1>

              <p className="mt-3 text-lg text-slate-200 max-w-3xl">
                AI-Integrated • Industry-Aligned • Career-Ready FrontEnd Development Training
              </p>

              <div className="mt-5 text-sm text-slate-100 max-w-3xl">
                <p className="mb-3">
                 Master modern front-end development including HTML, CSS, JavaScript, React, responsive design, 
                 performance optimization, and real-world project implementation.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Chip>Beginner to Advanced</Chip>
                  <Chip>Self Paced</Chip>
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

            <aside className="bg-white rounded-md shadow-md p-5 text-gray-800">
              <div className="w-full h-36 rounded-md overflow-hidden bg-gray-100 mb-4 flex items-center justify-center">
                <img
                  src="/logos/course1.png"
                  alt="SEO Course"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="text-sm">
                <div className="text-green-700 font-bold text-lg">
                  Instructor-Led
                </div>
                <div className="mt-1">Live + Hands-On Training</div>
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
                  ✓
                </div>
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div ref={modulesRef} className="mb-10">
          <SyllabusList items={syllabus} />
        </div>

        

        <div className="bg-white rounded-md shadow p-6 mb-10">
          <h4 className="font-semibold mb-4">FAQs</h4>
          <FAQAccordion faqs={faqs} />
        </div>

        <div className="bg-white rounded-md shadow p-6 flex gap-4 mb-10">
          <img
            src={instructor.photo}
            className="w-20 h-20 rounded-full object-cover"
            alt=""
          />
          <div>
            <h5 className="font-semibold">{instructor.name}</h5>
            <div className="text-sm text-gray-600 mb-2">
              {instructor.title}
            </div>
            <p className="text-sm text-gray-700">{instructor.bio}</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
