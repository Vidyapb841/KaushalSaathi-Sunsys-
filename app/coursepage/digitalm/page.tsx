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

// ---------------- SYLLABUS LIST ------------------
function SyllabusList({ items }) {
  const [showAll, setShowAll] = useState(false);

  const listStyle = showAll ? {} : { maxHeight: "14rem" };
  const visibleItems = showAll ? items : items.slice(0, 4);

  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden">
      <div className="p-4 border-b" style={{ background: COLORS.highlight }}>
        <strong>Syllabus Overview</strong>
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

// ---------------- PAGE ------------------
export default function CoursePage() {
  const modulesRef = useRef(null);

  const handleExplore = () => {
    modulesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // -----------------------------------------------
  // DIGITAL MARKETING CONTENT
  // -----------------------------------------------

  const syllabus = [
    { title: "Module 1: Digital Marketing Foundations (6 hours)" },
    { title: "Module 2: Website Strategy & CRO (10 hours)" },
    { title: "Module 3: SEO 2025 (24 hours)" },
    { title: "Module 4: SEM & PPC (20 hours)" },
    { title: "Module 5: Social Media Marketing (26 hours)" },
    { title: "Module 6: Content Marketing & Copywriting (14 hours)" },
    { title: "Module 7: Email & WhatsApp Automation (12 hours)" },
    { title: "Module 8: Influencer & Community Marketing (8 hours)" },
    { title: "Module 9: Analytics & Attribution (14 hours)" },
    { title: "Module 10: Performance Marketing Strategy (14 hours)" },
    { title: "Module 11: E-Commerce & D2C Marketing (12 hours)" },
    { title: "Module 12: AI in Digital Marketing (10 hours)" },
    { title: "Module 13: Brand & Creative Strategy (10 hours)" },
    { title: "Module 14: Affiliate & Partnership Marketing (6 hours)" },
    { title: "Module 15: Career & Portfolio Development (4 hours)" },
  ];

  const features = [
    "SEO & SEM Mastery",
    "Social Media Strategy",
    "Content Marketing",
    "AI Tools for Marketing",
    "WhatsApp Automation",
    "Analytics & Attribution",
    "CRO & Landing Page Optimization",
    "Performance Marketing Skills",
  ];

  const faqs = [
    {
      q: "Is this course free?",
      a: "Yes, this digital marketing course is 100% free.",
    },
    {
      q: "Do I get a certificate?",
      a: "Yes, a certificate is provided after completion.",
    },
    {
      q: "Do I need prior knowledge?",
      a: "No, this course starts from the basics.",
    },
  ];

  const instructor = {
    name: "Sarah Thompson",
    title: "Digital Marketing Strategist",
    bio: "12+ years of experience in SEO, PPC, and performance marketing across global brands.",
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
              <nav className="text-sm mb-3 text-slate-200">
                Home &gt; SkillUp &gt; Digital Marketing
              </nav>

              <h1
                className="text-3xl md:text-4xl font-extrabold leading-tight"
                style={{ color: COLORS.highlight }}
              >
                Digital Marketing Curriculum 2025
              </h1>

              <p className="mt-3 text-lg text-slate-200 max-w-3xl">
                Become job-ready with a complete 24-week industry-standard
                digital marketing training.
              </p>

              <div className="mt-5 text-sm text-slate-100 max-w-3xl">
                <p className="mb-3">
                  Covers SEO, SEM, SMM, Content, Email automation, AI tools,
                  analytics, and branding.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Chip>Beginner to Professional</Chip>
                  <Chip>180 Hours</Chip>
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
                  src="/logos/course-banner.jpg"
                  alt="Course Hero"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-sm">
                <div className="text-green-700 font-bold text-lg">FREE</div>
                <div className="mt-1">Self-Paced · 24 Weeks</div>
              </div>

              <ul className="text-sm mt-3">
                <li className="flex justify-between py-1">
                  <span>Completion Certificate</span>
                  <span>Included</span>
                </li>
                <li className="flex justify-between py-1">
                  <span>Access</span>
                  <span>180 Days</span>
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
            Showcase your digital marketing expertise and boost your LinkedIn
            profile.
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
            A complete industry-ready digital marketing curriculum covering SEO,
            PPC, content, AI tools, branding, D2C, funnels, CRO, analytics, and
            full-funnel marketing frameworks.
          </p>
        </div>

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
            Start learning digital marketing today — it's completely free.
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
