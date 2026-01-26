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
            className="flex justify-start font-bold items-center px-4 py-3 border-b last:border-b-0"
          >
            <div className="text-sm text-left whitespace-pre-line">
              {it.title}
            </div>
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


export default function CoursePage({
  title = "Interior Design Certification Program – 2026",
  subtitle =
    "Become a professional Interior Designer with a structured 6-month industry-focused curriculum.",
  rating = "4.8",
  learners = "400+ learners enrolled",
  level = "Beginner to Professional",
  description =
    "A comprehensive 6-month Interior Design program covering design fundamentals, drawing techniques, furniture design, AutoCAD, communication skills, and real-world interior projects.",

  syllabus = [
    { title: "Month 1: Basics of Design Graphics & Technical Drawing" },
    { title: "Month 2: Freehand Drawing & Geometric Construction" },
    { title: "Month 3: English Communication & Soft Skills for Designers" },
    { title: "Month 4: Furniture Design & Furniture Drafting" },
    { title: "Month 5: Advanced Designing & AutoCAD (2D)" },
    { title: "Month 6: Interior Design Project Work & Seminar / Thesis" },
  ],

  features = [
    "Design Principles & Graphics",
    "Freehand & Perspective Drawing",
    "Furniture Design & Drafting",
    "AutoCAD 2D",
    "Color Theory & Rendering",
    "Interior Design Project Work",
  ],

  instructor = {
    name: "Anita Rao",
    title: "Senior Interior Designer",
    bio: "12+ years of experience in residential and commercial interior design, AutoCAD drafting, and project execution.",
    photo: "/logos/profile.png",
  },

  faqs = [
    {
      q: "Is this Interior Design course free?",
      a: "Yes. This Interior Design program is completely free and includes practical training and project work.",
    },
    {
      q: "Who can join this Interior Design course?",
      a: "Beginners, students, and working professionals interested in Interior Design can enroll.",
    },
    {
      q: "Do I need prior design experience?",
      a: "No prior experience is required. The course starts from basic design concepts.",
    },
    {
      q: "What software will I learn?",
      a: "You will learn AutoCAD 2D along with design drawing and drafting techniques.",
    },
    {
      q: "Will I work on real interior projects?",
      a: "Yes. You will complete Interior Design Project Work as part of the curriculum.",
    },
    {
      q: "Is this course job-oriented?",
      a: "Yes. The program is designed to make you industry-ready for Interior Design roles.",
    },
    {
      q: "Will I get a certificate?",
      a: "Yes. A verified completion certificate will be awarded after successful completion.",
    },
    {
      q: "Are live classes included?",
      a: "Yes. Live instructor-led sessions along with recordings are included.",
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

            <aside className="bg-white rounded-md shadow-md p-5 text-gray-800">
              <div className="w-full h-36 rounded-md overflow-hidden bg-gray-100 mb-4 flex items-center justify-center">
                <img
                  src="/logos/interior.PNG"
                  alt="Interior Design"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="text-sm">
                <div className="text-green-700 font-bold text-lg">
                  Live Classes
                </div>
                <div className="mt-1">Instructor-Led Program</div>
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
                  ✔
                </div>
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10 w-full" ref={modulesRef}>
          <SyllabusList items={syllabus} />
        </div>

        {/* CERTIFICATE */}
        <div className="bg-white rounded-md shadow mb-4 p-5">
          <h4 className="font-semibold text-2xl mb-1">
            Get a completion Certificate
          </h4>

          <p className="text-md font-semibold text-gray-600 mb-10">
            Showcase your skills on LinkedIn and impress recruiters.
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
  A comprehensive, industry-aligned Interior Designing program designed to take you from beginner to job-ready professional in just 6 months. This hands-on course builds strong foundational skills in interior design principles, space planning, color theory, furniture design, lighting concepts, and material selection, along with essential technical and business skills required for professional interior designers.
  <br /><br />
  You will learn how to transform empty spaces into functional, aesthetically pleasing interiors by working on real-world residential and commercial design projects. The curriculum emphasizes practical learning through live workshops, guided projects, and real-world assignments covering 2D layouts, 3D visualization, modular kitchen design, bedroom and living room planning, and client presentation techniques.
  <br /><br />
  By the end of the program, you will have built a professional interior design portfolio, gained the confidence to take up client projects, and developed the skills required to manage budgets, source materials, coordinate with vendors, and execute interior projects from concept to completion. This course is ideal for students, freshers, homemakers, and professionals who want to build a future-proof career in interior designing or start their own interior consultancy business.
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

        <Footer />
      </section>
    </main>
  );
}
