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
  title = "Full Stack Developer Certification 2026",
  subtitle = "Become a job-ready Full Stack Developer with a complete 6-month structured day-wise roadmap.",
  rating = "4.9",
  learners = "500+ learners enrolled",
  level = "Beginner to Advanced",
  description =
    "A complete 6-month Full Stack Development roadmap including HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, SQL, DevOps basics, and deployment.",
  
  // ⭐ UPDATED FULL 6-MONTH SYLLABUS
  syllabus = [

      {title: "Month 1: HTML, CSS & Responsive Web Design"},
      {title: "Month 2: JavaScript & Frontend Logic"},
      {title: "Month 3: React.js & Modern Frontend Development"},
      {title: "Month 4: Backend Development (Node.js, Express & Databases)"},
      {title: "Month 5: Full Stack Integration & DevOps Basics"},
      {title: "Month 6: Major Project, System Design & Interview Preparation"},
      
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
  {
    q: "Is this Full-Stack Development course completely free?",
    a: "Yes. This Full-Stack Development course is 100% free and includes live sessions, practical training, and real-world projects."
  },
  {
    q: "Who should enroll in this Full-Stack course?",
    a: "This course is ideal for beginners, students, and working professionals who want to become complete Full-Stack Developers."
  },
  {
    q: "Do I need prior coding experience?",
    a: "No prior experience is required. The course starts from basics and gradually moves to advanced full-stack concepts."
  },
  {
    q: "Which technologies will I learn in this course?",
    a: "You will learn HTML, CSS, JavaScript, React, Node.js, databases (SQL & NoSQL), REST APIs, authentication, and deployment."
  },
  {
    q: "Will I build real-world projects?",
    a: "Yes. You will build complete full-stack applications, including frontend UI, backend APIs, database integration, and deployment."
  },
  {
    q: "Is this course job-oriented?",
    a: "Absolutely. The curriculum is designed to match industry requirements and make you job-ready as a Full-Stack Developer."
  },
  {
    q: "Will I receive a certificate after completion?",
    a: "Yes. A verified completion certificate will be provided after successfully finishing the course."
  },
  {
    q: "Will there be live classes and recordings?",
    a: "Yes. The program includes live instructor-led sessions along with recorded videos for revision and self-paced learning."
  }
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

            {/* RIGHT CARD */}
            <aside className="bg-white rounded-md shadow-md p-5 text-gray-800">
  <div className="w-full h-36 rounded-md overflow-hidden bg-gray-100 mb-4 flex items-center justify-center">
    <img
      src="/logos/fullstack.PNG"
      alt="Course Hero"
      className="max-w-full max-h-full object-contain"
    />
  </div>

              <div className="text-sm">
                <div className="text-green-700 font-bold text-lg">Live Classes</div>
                <div className="mt-1">Instructer-Led Program</div>
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
  A comprehensive, industry-aligned Full Stack Development program designed to take you from beginner to job-ready professional in 6 months. This roadmap covers the complete web development stack—from front-end fundamentals like HTML, CSS, JavaScript, and modern UI frameworks to back-end systems including server-side programming, RESTful APIs, databases, authentication, and scalable architecture.
  <br /><br />
  You will gain hands-on experience building real-world applications while learning DevOps basics, version control with Git, cloud deployment, and modern development workflows. The curriculum also includes interview preparation, coding practice, and portfolio development to ensure you are fully prepared for full stack developer roles.
  <br /><br />
  By the end of the program, you will have built multiple production-ready projects, developed a strong understanding of both front-end and back-end technologies, and gained the confidence to apply for full stack developer roles, internships, or freelance opportunities. This course is ideal for students, freshers, and professionals who want to become well-rounded, future-ready software developers.
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
      </section>

      <Footer />
    </main>
  );
}
