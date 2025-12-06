"use client";
import React, { useState, useRef } from "react";
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
            className="flex justify-start font-bold items-center px-4 py-3 border-b last:border-b-0"
          >
            <div className="text-sm text-left whitespace-pre-line">{it.title}</div>
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
  title = "Full Stack Development – 6 Months (Day-by-Day Plan)",
  subtitle = "Become a job-ready Full Stack Developer with a complete 6-month structured day-wise roadmap.",
  rating = "4.9",
  learners = "25,000+ learners",
  level = "Beginner to Advanced",
  description =
    "A complete 6-month Full Stack Development roadmap including HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, SQL, DevOps basics, and deployment.",
  
  // ⭐ UPDATED FULL 6-MONTH SYLLABUS
  syllabus = [
    {
      title: `Month 1 – HTML, CSS, Responsive Web Design (Days 1–30)
Day 1: HTML Basics: Tags, Elements
Day 2: HTML Forms & Validation
Day 3: Semantic HTML
Day 4: CSS Basics & Selectors
Day 5: Flexbox Deep Dive
Day 6: Grid Layout
Day 7: Responsive Design
Day 8: Media Queries
Day 9: CSS Animations
Day 10: Bootstrap / Tailwind CSS
Day 11: Landing Page Project
Day 12: Portfolio Layout`,
    },
    {
      title: `Month 2 – JavaScript & Frontend Logic (Days 31–60)
Day 13: JS Basics: Variables, Data Types
Day 14: Functions & Scope
Day 15: DOM Manipulation
Day 16: Events & Event Handling
Day 17: Async JS: Callbacks
Day 18: Promises & Async/Await
Day 19: Fetch API
Day 20: ES6+ Concepts
Day 21: Modules & Bundlers
Day 22: LocalStorage & Sessions
Day 23: Mini Project: To-Do App
Day 24: JS Interview Questions`,
    },
    {
      title: `Month 3 – React.js & Modern Frontend (Days 61–90)
Day 25: React Basics & JSX
Day 26: Components, Props, State
Day 27: React Hooks
Day 28: Context API
Day 29: React Router
Day 30: Forms & Validation
Day 31: API Integration
Day 32: State Management (Redux/Zustand)
Day 33: Performance Optimization
Day 34: React + Tailwind UI
Day 35: Mini Project: Dashboard App
Day 36: Major Project: Full Frontend App`,
    },
    {
      title: `Month 4 – Backend (Node.js + Express + Databases) (Days 91–120)
Day 37: Node.js Introduction
Day 38: NPM & Modules
Day 39: Express.js Basics
Day 40: Routing & Middleware
Day 41: REST API Development
Day 42: MongoDB CRUD Operations
Day 43: Mongoose Models & Schemas
Day 44: Authentication (JWT)
Day 45: Role-Based Access
Day 46: SQL Basics (MySQL/PostgreSQL)
Day 47: File Uploads & Pagination
Day 48: Backend API Project`,
    },
    {
      title: `Month 5 – Full Stack Integration & DevOps Basics (Days 121–150)
Day 49: Frontend ↔ Backend Integration
Day 50: State Lifting & Data Flow
Day 51: Full Stack Architecture
Day 52: Using Cloudinary / AWS S3
Day 53: Payment Gateway Integration
Day 54: CI/CD Basics
Day 55: GitHub Actions Pipelines
Day 56: Docker Basics for Developers
Day 57: Deployment on Render / Railway
Day 58: Deployment on AWS / Vercel
Day 59: Full Stack Project Phase 1
Day 60: Testing (Jest, Postman)`,
    },
    {
      title: `Month 6 – Major Project, System Design & Interview Prep (Days 151–180)
Day 61: System Design Basics
Day 62: API Rate Limiting, Caching
Day 63: Scalable Backend Patterns
Day 64: Microservices Basics
Day 65: Security Best Practices
Day 66: Logging & Monitoring
Day 67: Optimization Techniques
Day 68: Resume Building
Day 69: GitHub Portfolio Setup
Day 70: Interview Q&A
Day 71: Major Full Stack Capstone Project
Day 72: Final Evaluation`,
    },
  ],

  features = [
    "HTML, CSS, JS, React",
    "Node.js, Express.js",
    "MongoDB & SQL",
    "API Development",
    "DevOps Basics & Deployment",
    "Full Stack Projects",
  ],

  instructor = {
    name: "Sarah Mitchell",
    title: "Full Stack Architect",
    bio: "10+ years of experience in MERN Stack, scalable systems, and cloud deployment.",
    photo: "/logos/profile.png",
  },

  faqs = [
    { q: "Is this course free?", a: "Yes, this Full Stack course is 100% free." },
    {
      q: "Do I get a certificate?",
      a: "Yes, you will receive a verified completion certificate.",
    },
    {
      q: "Do I need prior coding experience?",
      a: "No. This roadmap starts from zero and goes to advanced level.",
    },
  ],

  heroImage = "/logos/4.png",
}) {
  const modulesRef = useRef(null);

  const handleExplore = () => {
    modulesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#001A6E]/95 to-[#074799]/85 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* LEFT */}
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

            {/* RIGHT CARD */}
            <aside className="bg-white rounded-md shadow-md p-5 text-gray-800">
              <div className="w-full h-36 rounded-md overflow-hidden bg-gray-100 mb-4">
                <img
                  src={heroImage}
                  alt="Course Hero"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-sm">
                <div className="text-green-700 font-bold text-lg">FREE</div>
                <div className="mt-1">Self-Paced · 6 Months</div>
              </div>

              <div className="mt-3">
                <ul className="text-sm">
                  <li className="flex justify-between py-1">
                    <span>Completion Certificate</span>
                    <span>Included</span>
                  </li>

                  <li className="flex justify-between py-1">
                    <span>Access</span>
                    <span>180 Days</span>
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
          <div className="text-center">
            <SyllabusList items={syllabus} />
          </div>
        </div>

        {/* CERTIFICATE */}
        <div className="bg-white rounded-md shadow mb-4 p-5">
          <h4 className="font-semibold text-2xl mb-1">
            Earn a Full Stack Development Certificate
          </h4>

          <p className="text-md font-semibold text-gray-600 mb-10">
            Showcase your skills on LinkedIn and impress recruiters.
          </p>

          <div className="mb-6 flex justify-center">
            <img
              src="/logos/certificate-sample.jpg"
              alt="Certificate Example"
              className="w-150 h-auto rounded-md border shadow"
            />
          </div>
        </div>

        {/* ABOUT */}
        <div className="bg-white rounded-md shadow p-6 mb-10">
          <h4 className="font-semibold mb-3">About the Course</h4>

          <p className="text-sm text-gray-700">
            This 6-month Full Stack roadmap covers everything from frontend
            fundamentals to backend systems, databases, DevOps basics,
            cloud deployment, and interview preparation with projects.
          </p>
        </div>

        {/* FAQS */}
        <div className="bg-white rounded-md shadow p-6 mb-10">
          <h4 className="font-semibold mb-4">FAQs</h4>
          <FAQAccordion faqs={faqs} />
        </div>

        {/* INSTRUCTOR */}
        <div className="bg-white rounded-md shadow p-6 flex gap-4 mb-10">
          <img
            src={instructor.photo}
            className="w-20 h-20 rounded-full object-cover"
          />

          <div>
            <h5 className="font-semibold">{instructor.name}</h5>
            <div className="text-sm text-gray-600 mb-2">{instructor.title}</div>
            <p className="text-sm text-gray-700">{instructor.bio}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-md shadow p-6 text-center">
          <h4 className="font-semibold mb-2">Ready to start learning?</h4>
          <p className="text-sm text-gray-600 mb-4">
            Begin your Full Stack Development journey today — it’s absolutely free.
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
