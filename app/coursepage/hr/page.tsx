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
  // HR SYLLABUS DATA
  // -----------------------------------------------

  const syllabus = [
    { title: "Module A: Talent Acquisition & Hiring - Job requirement understanding" },
    { title: "Module A: Talent Acquisition & Hiring - Job description drafting" },
    { title: "Module A: Talent Acquisition & Hiring - Job posting on portals & social platforms" },
    { title: "Module A: Talent Acquisition & Hiring - Resume sourcing & screening" },
    { title: "Module A: Talent Acquisition & Hiring - Interview scheduling & coordination" },
    { title: "Module B: Screening, Selection & HR Operations - Shortlisting frameworks" },
    { title: "Module B: Screening, Selection & HR Operations - Interview evaluation support" },
    { title: "Module B: Screening, Selection & HR Operations - Offer coordination" },
    { title: "Module B: Screening, Selection & HR Operations - Joining & onboarding process" },
    { title: "Module B: Screening, Selection & HR Operations - HR documentation & compliance basics" },
    { title: "Module C: Employer Branding & Company Image Building - HR role in brand perception" },
    { title: "Module C: Employer Branding & Company Image Building - LinkedIn & social media hiring presence" },
    { title: "Module C: Employer Branding & Company Image Building - Candidate experience management" },
    { title: "Module C: Employer Branding & Company Image Building - Professional communication standards" },
    { title: "Module D: Corporate HR Execution - Stakeholder coordination" },
    { title: "Module D: Corporate HR Execution - Internal HR reporting" },
    { title: "Module D: Corporate HR Execution - HR MIS basics" },
    { title: "Module D: Corporate HR Execution - Confidentiality & ethics" },
    { title: "Module E: Practical & Live Exposure - Live HR tasks" },
    { title: "Module E: Practical & Live Exposure - Real job postings" },
    { title: "Module E: Practical & Live Exposure - Actual candidate handling" },
    { title: "Module E: Practical & Live Exposure - Performance-based evaluation" },
  ];

  const features = [
    "Talent Acquisition & end-to-end hiring process",
    "Job posting, resume screening & interview coordination",
    "Shortlisting, selection & onboarding workflows",
    "HR documentation & compliance management",
    "Employer branding & social media presence",
    "Candidate experience & professional communication",
    "Corporate HR execution & stakeholder coordination",
    "HR MIS, reporting & practical live exposure",
  ];

const faqs = [
  {
    q: "Is this HR course really free?",
    a: "Yes. This course is completely free and includes live sessions, hands-on practice, and real-world HR concepts."
  },
  {
    q: "Who can enroll in this course?",
    a: "Anyone can enroll. The course is designed for beginners, students, and professionals who want to build strong HR skills."
  },
  {
    q: "Do I need prior HR experience?",
    a: "No prior HR experience is required. Basic computer knowledge is enough. HR fundamentals are covered from scratch."
  },
  {
    q: "Which HR domains will I learn?",
    a: "You will learn Talent Acquisition, Screening & Selection, Employer Branding, Corporate HR Execution, and get practical live exposure."
  },
  {
    q: "Will I get a certificate after completion?",
    a: "Yes. A verified completion certificate will be provided after successfully finishing the course."
  },
  {
    q: "Is this course job-oriented?",
    a: "Yes. The curriculum is designed to make you job-ready with industry-standard HR tools, workflows, and real-world use cases."
  },
  {
    q: "Will there be live classes or recordings?",
    a: "Yes. The program includes live instructor-led sessions along with recordings for revision."
  },
  {
    q: "What kind of projects will I work on?",
    a: "You will work on real HR tasks such as job postings, resume screening, interview coordination, onboarding processes, and actual candidate handling."
  }
];


  const instructor = {
    name: "Sarah Thompson",
    title: "HR & Talent Acquisition Specialist",
    bio: "12+ years of experience in corporate HR and talent management with global brands.",
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
                Home &gt; Course &gt; HR Management
              </nav>

              <h1
                className="text-3xl md:text-4xl font-extrabold leading-tight"
                style={{ color: COLORS.highlight }}
              >
                HR Management Certification Course 2026
              </h1>

              <p className="mt-3 text-lg text-slate-200 max-w-3xl">
                Become job-ready with a complete industry-standard
                HR Management training program.
              </p>

              <div className="mt-5 text-sm text-slate-100 max-w-3xl">
                <p className="mb-3">
                 Covers talent acquisition, recruitment workflows, 
                 HR operations, employer branding, corporate HR execution, and practical live exposure with real-world scenarios.
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
      src="/logos/hrm.PNG"
      alt="Course Hero"
      className="max-w-full max-h-full object-contain"
    />
  </div>
              <div className="text-sm">
                <div className="text-green-700 font-bold text-lg">Live Classes</div>
                <div className="mt-1">Instructor-Led Program</div>
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
            Showcase your HR Management expertise and boost your LinkedIn
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
          <p className="text-sm text-gray-700">
          A complete, industry-focused HR curriculum designed to make you job-ready—covering talent acquisition,
           recruitment workflows, HR operations, employer branding, corporate execution, and practical exposure with real-world HR scenarios.
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
            Start learning HR Management today — it's completely free.
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