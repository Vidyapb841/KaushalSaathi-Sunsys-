"use client";
import React, { useState } from "react";

const COLORS = {
  secondary: "#074799",
};

export default function FAQHome() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    // 📌 General FAQs
    {
      q: "What is Kaushal Sathi?",
      a: "Kaushal Sathi is a professional learning platform offering live skill-based courses in Full Stack Development, DevOps, Digital Marketing, Art & Beauty, Creative Design, HR, and Analytics. We also provide free internships and end-to-end placement assistance.",
    },
    {
      q: "Are the classes live or recorded?",
      a: "Our programs include 100% live instructor-led classes, supported with session recordings for revision or missed lessons.",
    },
    {
      q: "Who can enroll in Kaushal Sathi courses?",
      a: "Anyone—students, freshers, working professionals, career switchers, or homemakers—can join. All programs are beginner-friendly and include hands-on training.",
    },
    {
      q: "Do you offer internships?",
      a: "Yes. Every eligible student receives a free internship opportunity, helping them gain real work experience and build their resume.",
    },
    {
      q: "Do you provide placement support?",
      a: "Yes, we offer 100% placement assistance, including job referrals, resume building, interview preparation, and career guidance.",
    },

    // 📌 Course-Specific FAQs
    {
      q: "What types of courses do you offer?",
      a: "We offer professional live courses in Full Stack Development, DevOps, Digital Marketing, Creative Design (UI/UX + Graphics), Art & Beauty Courses, HR Management, and Business & Data Analytics.",
    },
    {
      q: "Do I need prior experience?",
      a: "No prior experience is needed. Basic computer knowledge is enough for IT courses like Full Stack or DevOps.",
    },
    {
      q: "What is the duration of your courses?",
      a: "Full Stack / DevOps: 3–6 months, Digital Marketing: 2–3 months, HR & Analytics: 2–4 months, Creative Design / Beauty Courses: 1–2 months.",
    },
    {
      q: "Will I work on real projects?",
      a: "Yes. Every course includes live projects, case studies, and assignments to help you build a job-ready portfolio.",
    },
    {
      q: "Do you provide certifications?",
      a: "Yes. Students receive a Kaushal Sathi Course Completion Certificate. Some programs also include industry-recognized certificates.",
    },

    // 📌 Fees & Enrollment FAQs
    {
      q: "What are the fees for the courses?",
      a: "Fees vary by course. You can check the detailed fee structure on the course page or contact our support team.",
    },
    {
      q: "Do you offer EMI or installment options?",
      a: "Yes. We offer easy EMI options for selected professional courses.",
    },
    {
      q: "How do I enroll?",
      a: "Click the “Enroll Now” button on the website or connect with our counsellors for guidance.",
    },
    {
      q: "Can I attend a demo class?",
      a: "Yes. We provide free demo sessions so you can understand the teaching style before enrolling.",
    },

    // 📌 Learning Support FAQs
    {
      q: "Will I get study material?",
      a: "Yes. We provide PDF notes, practice files, tool access, recorded sessions, and project templates with every course.",
    },
    {
      q: "What if I miss a class?",
      a: "You can watch the recording or request a batch shift (based on availability).",
    },
    {
      q: "Do you offer one-on-one doubt clearing?",
      a: "Yes. Mentors provide 1:1 doubt support during and after the live classes.",
    },

    // 📌 Internship & Career Support FAQs
    {
      q: "What is included in your placement assistance?",
      a: "Our placement program covers resume & LinkedIn optimization, mock interviews, soft skill training, job alerts & referrals, internship opportunities, and portfolio building.",
    },
    {
      q: "How soon will I get placement after course completion?",
      a: "Placement timelines vary based on performance, profile, and job market demand. Most active learners secure internships or jobs within 1–3 months after course completion.",
    },
    {
      q: "How do internships work?",
      a: "After course completion, eligible learners are matched with companies or in-house projects for hands-on internship experience.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>

      <div className="space-y-3">
        {faqs.map((item, index) => {
          const open = openIndex === index;

          return (
            <div
              key={index}
              className="border rounded-lg bg-white shadow-sm overflow-hidden"
            >
              <button
                className="w-full text-left px-5 py-4 flex justify-between items-center font-medium"
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span>{item.q}</span>

                <span
                  className="text-xl"
                  style={{ color: COLORS.secondary }}
                >
                  {open ? "−" : "+"}
                </span>
              </button>

              {open && (
                <div className="px-5 pb-4 text-gray-700 text-sm">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
