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
            className="flex justify-between items-center px-4 py-3 border-b last:border-b-0"
          >
            <div className="text-sm font-semibold">{it.title}</div>
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

export default function CoursePage() {
  const modulesRef = useRef(null);

  const handleExplore = () => {
    modulesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <Suspense fallback={
        <div className="bg-gradient-to-b from-[#001A6E]/95 to-[#074799]/85">
          <div className="h-16 bg-white/10"></div>
        </div>
      }>
        <Navigation />
      </Suspense>

      <section className="bg-gradient-to-b from-[#001A6E]/95 to-[#074799]/85 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* LEFT */}
            <div className="lg:col-span-2">
              <nav className="text-sm mb-3 text-slate-200">
                Home &gt; KoushalSaathi &gt; Salesforce Development
              </nav>

              <h1
                className="text-3xl md:text-4xl font-extrabold leading-tight"
                style={{ color: COLORS.highlight }}
              >
                Salesforce Development & Administration Program
              </h1>

              <p className="mt-3 text-lg text-slate-200 max-w-3xl">
                Become a job-ready Salesforce Administrator & Developer with
                hands-on CRM, Apex, LWC, Integrations, Automation & Deployment.
              </p>

              <div className="mt-5 text-sm text-slate-100 max-w-3xl">
                <div className="flex flex-wrap gap-3">
                  <Chip>Beginner to Advanced</Chip>
                  <Chip>4.9 ★ Rating</Chip>
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
      src="/logos/sale.PNG"
      alt="Course Hero"
      className="max-w-full max-h-full object-contain"
    />
  </div>

              <div className="text-sm">
                <div className="text-green-700 font-bold text-lg">Live classes</div>
                <div className="mt-1">Instructor-Led Program · 6 Months</div>
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
            {[
              "Salesforce Administration",
              "CRM Management",
              "Apex Programming",
              "SOQL & SOSL",
              "Lightning Web Components (LWC)",
              "Automation Tools (Flow, PB, Workflow)",
            ].map((skill, i) => (
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
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Syllabus */}
        <div className="mb-10 w-full" ref={modulesRef}>
          <SyllabusList
            items={[
              { title: "Month 1: Salesforce Basics, CRM, Admin Foundations" },
              { title: "Month 2: Advanced Admin & Automation Tools" },
              { title: "Month 3: Apex Programming Fundamentals" },
              { title: "Month 4: Advanced Apex & Integrations" },
              { title: "Month 5: Lightning Web Components (LWC)" },
              { title: "Month 6: Deployment, DevOps & Interview Prep" },
            ]}
          />
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-md shadow p-6 mb-10">
          <h4 className="font-semibold mb-4">FAQs</h4>
          <FAQAccordion
            faqs={[
              {
                q: "Is this course beginner-friendly?",
                a: "Yes, no prior Salesforce experience required.",
              },
              {
                q: "Will I learn Apex & LWC?",
                a: "Yes, full Apex + LWC development modules are included.",
              },
              {
                q: "Will this help me get Salesforce Admin or Developer jobs?",
                a: "Yes, this course prepares you for Admin + PD1 certification paths.",
              },
            ]}
          />
        </div>

        {/* Instructor */}
        <div className="bg-white rounded-md shadow p-6 flex gap-4 mb-10">
          <img
            src="/logos/profile.png"
            className="w-20 h-20 rounded-full object-cover"
          />

          <div>
            <h5 className="font-semibold">Rohit Verma</h5>
            <div className="text-sm text-gray-600 mb-2">
              Salesforce Developer & CRM Consultant
            </div>
            <p className="text-sm text-gray-700">
              6+ years in Salesforce Administration, Apex Development, LWC,
              Integrations & Enterprise Deployments.
            </p>
          </div>
        </div>
        {/* CERTIFICATE */}
<div className="bg-white rounded-md shadow mb-4 p-5">
  <h4 className="font-semibold text-2xl mb-1">
    Get a Completion Certificate
  </h4>

  <p className="text-md font-semibold text-gray-600 mb-10">
    Showcase your Salesforce expertise and boost your LinkedIn profile.
  </p>

  <div className="mb-6 flex justify-center">
    <img
      src="/logos/certificate.jpg"
      alt="Certificate Example"
      className="w-[700px] h-auto rounded-md border shadow"
    />
  </div>
</div>


        {/* CTA */}
        <div className="bg-white rounded-md shadow p-6 text-center">
          <h4 className="font-semibold mb-2">Ready to start your Salesforce career?</h4>
          <p className="text-sm text-gray-600 mb-4">
            Become a certified Salesforce Admin/Developer with hands-on training.
          </p>
          <button className="bg-[#009990] hover:bg-[#007f6f] text-white px-6 py-2 rounded-md">
            Start Learning
          </button>
        </div>
      </section>

      <Suspense fallback={<div className="h-20 bg-gray-100"></div>}>
        <Footer />
      </Suspense>
    </main>
  );
}
