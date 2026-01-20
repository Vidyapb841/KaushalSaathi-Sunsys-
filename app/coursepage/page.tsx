// KaushalSaathi-Sunsys-\app\coursepage\page.tsx
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

function SyllabusList({ items }) {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden">
      <div className="p-4 border-b" style={{ background: COLORS.highlight }}>
        <strong>Syllabus Overview</strong>
      </div>
      <ul className="max-h-56 overflow-auto">
        {items.map((it, i) => (
          <li
            key={i}
            className="flex justify-center font-bold items-center px-4 py-3 border-b last:border-b-0"
          >
            <div className="text-sm">{it.title}</div>
            <div className="text-xs text-gray-600">{it.time}</div>
          </li>
        ))}
      </ul>

      <div className="p-3 text-center">
        <button
          className="text-sm underline"
          style={{ color: COLORS.secondary }}
        >
          View More
        </button>
      </div>
    </div>
  );
}

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
              <span
                className="ml-4 text-xl"
                style={{ color: COLORS.secondary }}
              >
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

export default function CoursePage({
  title = "Full Stack Development",
  subtitle = "Become job-ready with complete hands-on training.",
  rating = "4.8",
  learners = "12,000+ learners",
  level = "Beginner to Advanced",
  description = "Learn front-end, back-end, APIs, databases and deployment in one course.",
  features = [
    "Frontend Development",
    "Backend APIs",
    "Database Management",
    "Deployment Skills",
    "Debugging & Best Practices",
  ],
  syllabus = [
    { title: "Module 1: HTML & CSS", time: "1 hr" },
    { title: "Module 2: JavaScript Basics", time: "1.2 hrs" },
    { title: "Module 3: React Fundamentals", time: "1 hr" },
    { title: "Module 4: Backend API", time: "40 mins" },
  ],
  instructor = {
    name: "John Doe",
    title: "Senior Software Engineer",
    bio: "10+ years of experience in full-stack development.",
    photo: "/logos/profile.png",
  },
  faqs = [
    { q: "Is the course free?", a: "Yes, this is 100% free to learn." },
    { q: "Do I get a certificate?", a: "Yes, after completing the course." },
  ],
  heroImage = "/logos/course-banner.jpg",
}) {
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
            {/* Left */}
            <div className="lg:col-span-2">
              <nav className="text-sm mb-3 text-slate-200">
                Home &gt; SkillUp &gt; Course Page
              </nav>

              <h1
                className="text-3xl md:text-4xl font-extrabold leading-tight"
                style={{ color: COLORS.highlight }}
              >
                {title}
              </h1>

              <p className="mt-3 text-lg text-slate-200 max-w-3xl">
                {subtitle}
              </p>

              <div className="mt-5 text-sm text-slate-100 max-w-3xl">
                <p className="mb-3">{description}</p>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-white/10 px-2 py-1 rounded">
                      {rating} ★
                    </span>
                    <span>{learners}</span>
                  </div>

                  <Chip>{level}</Chip>
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

            {/* Right Card */}
            <aside className="bg-white rounded-md shadow-md p-5 text-gray-800">
              <div className="w-full h-36 rounded-md overflow-hidden bg-gray-100 mb-4">
                <img
                  src={heroImage}
                  alt="Course Hero"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-sm">
                <div className="text-green-700 font-bold text-lg"></div>
                <div className="mt-1">Self-Paced · 4 Hours</div>
              </div>

              <div className="mt-3">
                <ul className="text-sm">
                  <li className="flex justify-between py-1">
                    <span>Completion Certificate</span>
                    <span>Included</span>
                  </li>
                  <li className="flex justify-between py-1">
                    <span>Access</span>
                    <span>90 Days</span>
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

        {/* Syllabus */}
        <div className="mb-10 w-full" ref={modulesRef}>
          <div className="text-center">
            <SyllabusList items={syllabus} />
          </div>
        </div>

        {/* Certificate */}
        <div className="bg-white rounded-md shadow mb-4 p-5">
          <h4 className="font-semibold text-2xl mb-1">
            Get A Completion Certificate
          </h4>
          <p className="text-md font-semibold text-gray-600 mb-10">
            Share your certificate on LinkedIn and showcase your skills.
          </p>

          <div className="mb-6 flex justify-center">
            <img
              src="/logos/certificate-sample.jpg"
              alt="Certificate Example"
              className="w-150 h-auto rounded-md border shadow"
            />
          </div>
        </div>

        {/* About */}
        <div className="bg-white rounded-md shadow p-6 mb-10">
          <h4 className="font-semibold mb-3">About the Course</h4>

          <p className="text-sm text-gray-700">
            This course covers front-end, back-end, databases and deployment —
            everything needed to build modern web applications.
          </p>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-md shadow p-6 mb-10">
          <h4 className="font-semibold mb-4">FAQs</h4>
          <FAQAccordion faqs={faqs} />
        </div>

        {/* Instructor */}
        <div className="bg-white rounded-md shadow p-6 flex gap-4 mb-10">
          <img
            src={instructor.photo}
            className="w-20 h-20 rounded-full object-cover"
          />

          <div>
            <h5 className="font-semibold">{instructor.name}</h5>
            <div className="text-sm text-gray-600 mb-2">
              {instructor.title}
            </div>
            <p className="text-sm text-gray-700">{instructor.bio}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-md shadow p-6 text-center">
          <h4 className="font-semibold mb-2">Ready to begin?</h4>
          <p className="text-sm text-gray-600 mb-4">
            Start learning today — it's completely free.
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
