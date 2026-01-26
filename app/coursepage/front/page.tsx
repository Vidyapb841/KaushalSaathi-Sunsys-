"use client";
export const dynamic = "force-dynamic";

import React, { useState, useRef } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";

const COLORS = {
  primary: "#001A6E",
  secondary: "#074799",
  accent: "#009990",
  highlight: "#E1FFBB",
};

function Chip({ children }: any) {
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
function SyllabusList({ items }: any) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, 4);

  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden">
      <div className="p-4 border-b" style={{ background: COLORS.highlight }}>
        <strong>Front-End Development Course Syllabus Overview</strong>
      </div>

      <ul className="overflow-auto max-h-56">
        {visibleItems.map((it: any, i: number) => (
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
function FAQAccordion({ faqs }: any) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {faqs.map((f: any, i: number) => {
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
  const modulesRef = useRef<HTMLDivElement | null>(null);
  const videosRef = useRef<HTMLDivElement | null>(null);

  const handleExplore = () => {
    modulesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWatchVideo = () => {
    videosRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const syllabus = [
    { title: "Module 1: HTML Mastery" },
    { title: "Module 2: CSS Core Styling" },
    { title: "Module 3: Advanced CSS + UI" },
    { title: "Module 4: JavaScript Foundations" },
    { title: "Module 5: Modern JavaScript" },
    { title: "Module 6: Version Control" },
    { title: "Module 7: HTML Mastery - Round 2" },
    { title: "Module 8: CSS Core Styling - Round 2" },
    { title: "Module 9: Advanced CSS + UI - Round 2" },
    { title: "Module 10: JavaScript Foundations - Round 2" },
    { title: "Module 11: Modern JavaScript - Round 2" },
    { title: "Module 12: Version Control - Round 2" },
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
      q: "Are modern frameworks like React included?",
      a: "Yes, React and modern UI development are covered.",
    },
    {
      q: "Is this course beginner-friendly?",
      a: "Yes, it starts from HTML, CSS, and JavaScript basics.",
    },
    {
      q: "Will I get a certificate?",
      a: "Yes, you will receive a completion certificate.",
    },
  ];

  const instructor = {
    name: "Alex Morgan",
    title: "Front-End Development Expert",
    bio: "12+ years of experience in UI engineering and product design.",
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
                Certified Front-End Developer Curriculum 2026
              </h1>

              <p className="mt-3 text-lg text-slate-200 max-w-3xl">
                AI-Integrated • Industry-Aligned • Career-Ready Training
              </p>

              <div className="mt-5 text-sm text-slate-100 max-w-3xl">
                <p className="mb-3">
                  Master HTML, CSS, JavaScript, React, and responsive UI
                  development with hands-on projects.
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

                <button
                  onClick={handleWatchVideo}
                  className="bg-white/20 hover:bg-white/30 text-white px-5 py-3 rounded-md font-medium"
                >
                  Watch Intro Video
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <aside className="bg-white rounded-md shadow-md p-5 text-gray-800">
              <div className="w-full h-36 rounded-md overflow-hidden bg-gray-100 mb-4 flex items-center justify-center">
                <img
                  src="/logos/course1.png"
                  alt="Front-End Course"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="text-sm">
                <div className="text-green-700 font-bold text-lg">
                  Instructor-Led
                </div>
                <div className="mt-1">
                  Live + Hands-On Training
                </div>
              </div>

              <ul className="text-sm mt-3">
                <li className="flex justify-between py-1">
                  <span>Completion Certificate</span>
                  <span>Included</span>
                </li>
                <li className="flex justify-between py-1">
                  <span>Level</span>
                  <span>Beginner to Advanced</span>
                </li>
                <li className="flex justify-between py-1">
                  <span>Mode</span>
                  <span>Self Paced</span>
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
                  ✓
                </div>
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SYLLABUS */}
        <div ref={modulesRef} className="mb-10">
          <SyllabusList items={syllabus} />
        </div>

        {/* CERTIFICATE */}
        <div className="bg-white rounded-md shadow mb-10 p-5">
          <h4 className="font-semibold text-2xl mb-1">
            Get a Completion Certificate
          </h4>
          <p className="text-md font-semibold text-gray-600 mb-10">
            Showcase your Front-End development expertise and boost your
            LinkedIn profile.
          </p>

          <div className="flex justify-center">
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
    A comprehensive, industry-aligned Front-End Development program designed to make you job-ready. This course covers HTML5, CSS3, JavaScript (ES6+), React, responsive design, UI frameworks, accessibility, and performance optimization. You will build real-world projects, work with Git and APIs, and develop a professional portfolio to prepare for front-end developer roles and internships.
  </p>
</div>

        {/* VIDEO SECTION */}
        <section ref={videosRef} id="videos" className="py-16 px-6 bg-white mb-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#001A6E] mb-8 text-center">
              Watch to Know More
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Introduction to the Program", link: "https://www.youtube.com/embed/dummy_link_1" },
                { title: "What You Will Learn", link: "https://www.youtube.com/embed/dummy_link_2" },
                { title: "Why Choose This Course?", link: "https://www.youtube.com/embed/dummy_link_3" },
              ].map((vid, i) => (
                <div
                  key={i}
                  className="rounded-xl shadow-lg overflow-hidden bg-gray-100"
                >
                  <iframe
                    className="w-full h-56"
                    src={vid.link}
                    title={vid.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="p-4 text-center font-semibold text-gray-800">
                    {vid.title}
                  </div>
                </div>
              ))}
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
            <div className="text-sm text-gray-600 mb-2">
              {instructor.title}
            </div>
            <p className="text-sm text-gray-700">
              {instructor.bio}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-md shadow p-6 text-center">
          <h4 className="font-semibold mb-2">Ready to begin?</h4>
          <p className="text-sm text-gray-600 mb-4">
            Start learning Front-End Development today — it's completely free.
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
