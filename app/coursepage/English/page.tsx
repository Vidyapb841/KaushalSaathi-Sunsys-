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
  // English SYLLABUS DATA
  // -----------------------------------------------

  const syllabus = [
    { title: "Month 1: English Foundations" },
    { title: "Month 2: Grammar & Vocabulary" },
    { title: "Month 3: Pronunciation & Fluency" },
    { title: "Month 4: Professional Communication" },
    { title: "Month 5: Interview & Preparation Skills" },
    { title: "Month 6: Advanced Speaking & Personality" },
  ];

const features = [
  "English fundamentals: alphabets, sounds, sentence structure & daily-use vocabulary",
  "Grammar mastery including tenses, articles, prepositions & common error correction",
  "Pronunciation training with phonetics, stress, intonation & neutral accent practice",
  "Fluency development through guided speaking, listening exercises & real-life conversations",
  "Professional communication skills for workplace meetings, calls, emails & office etiquette",
  "Interview readiness with HR questions, group discussions & confident answer framing",
  "Public speaking, presentations & persuasive communication techniques",
  "Advanced speaking skills with extempore, debates, storytelling, body language & confidence building"
];


const faqs = [
  {
    q: "Is this English Speaking course really free?",
    a: "Yes. This course is completely free and includes structured learning, practice sessions, and guided speaking activities."
  },
  {
    q: "Who can enroll in this English Speaking course?",
    a: "Anyone can enroll. This course is suitable for beginners, students, job seekers, and working professionals who want to improve their spoken English."
  },
  {
    q: "Do I need prior knowledge of English?",
    a: "No prior fluency is required. The course starts from the basics and gradually builds confidence, grammar, and speaking skills."
  },
  {
    q: "What will I learn in this 6-month program?",
    a: "You will learn grammar, vocabulary, pronunciation, fluency, professional communication, interview skills, public speaking, and confidence building."
  },
  {
    q: "Will this course help with interviews and job communication?",
    a: "Yes. The course includes interview preparation, HR questions, group discussions, presentations, and workplace communication skills."
  },
  {
    q: "Will I get a certificate after completing the course?",
    a: "Yes. You will receive a verified completion certificate after successfully finishing the program."
  },
  {
    q: "Are there speaking practice sessions?",
    a: "Yes. The course focuses heavily on speaking practice through conversations, role-plays, presentations, and interactive activities."
  },
  {
    q: "How will this course improve my confidence?",
    a: "Through continuous speaking practice, body language training, pronunciation correction, and real-life communication scenarios, your confidence will improve naturally."
  }
];

  const instructor = {
    name: "Sarah Thompson",
    title: "ENGLISH COMMUNICATION EXPERT",
    bio: "12+ years of experience global brands.",
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
               SPOKEN ENGLISH & COMMUNICATION SKILLS 2026
              </h1>

              <p className="mt-3 text-lg text-slate-200 max-w-3xl">
                Become job-ready with a complete 6-month industry-focused English Speaking Certification program.
              </p>

              <div className="mt-5 text-sm text-slate-100 max-w-3xl">
                <p className="mb-3">
                 Covers spoken English foundations, grammar & vocabulary, pronunciation & fluency, professional workplace communication, 
                 interview preparation, public speaking, and confidence & personality development.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Chip>Beginner to Professional</Chip>
                  <Chip>4.8 ★ Rating</Chip>
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
      src="/logos/16.png"
      alt="Course Hero"
      className="max-w-full max-h-full object-contain"
    />
  </div>
              <div className="text-sm">
                <div className="text-green-700 font-bold text-lg">Live Classes</div>
                <div className="mt-1">Instructer-Led Program</div>
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
            Showcase your English communication expertise and boost your LinkedIn
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
    A 6-month, industry-focused English Speaking Certification program designed to build fluency, confidence, and career-ready communication skills. The course covers spoken English fundamentals, pronunciation, grammar, vocabulary, public speaking, interview preparation, and professional communication through interactive sessions and real-life practice.
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

