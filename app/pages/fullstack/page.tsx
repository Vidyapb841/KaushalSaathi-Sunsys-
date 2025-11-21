import CoursePage from "../../coursepage/page";
import React from "react";
import Image from "next/image";
import fsHero from "/logos/fsw.jpg";

export default function FullStackCoursePage() {
  const data = {
    title: "Full-Stack Web Development Bootcamp",
    subtitle: "Beginner to Job-Ready · Free Certification Course",
    rating: 4.7,
    learners: "25,432 Learners Enrolled",
    level: "Beginner Level",
    description:
      "Learn HTML, CSS, JavaScript, React, Node.js, Express, MongoDB and deployment. Build real projects and become job-ready.",
    features: [
      "HTML5 & CSS3 Fundamentals",
      "JavaScript (ES6+)",
      "React + Hooks",
      "Node.js & Express",
      "MongoDB & Mongoose",
      "Authentication (JWT)",
      "REST APIs",
      "Deployment & CI/CD",
    ],
    syllabus: [
      { title: "Intro & Environment Setup",  },
      { title: "HTML5 & CSS3 Refresher",  },
      { title: "Modern JavaScript (ES6+)",  },
      { title: "React Basics: Components & JSX",  },
      { title: "Hooks: useState & useEffect",  },
      { title: "Routing with React Router",  },
      { title: "Node.js Fundamentals",  },
      { title: "Express: Building REST APIs",  },
      { title: "MongoDB & Mongoose",  },
      { title: "JWT Authentication",  },
      { title: "Deployment (Vercel/Heroku)",  },
      { title: "Capstone Project",  },
    ],
    instructor: {
      name: "Alex Johnson",
      title: "Senior Full-Stack Engineer",
      photo:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60",
      bio: "Alex has 8+ years of experience building production-grade full-stack apps.",
    },
    faqs: [
      {
        q: "What does this course cover?",
        a: "This course teaches front-end, back-end, databases, authentication and deployment.",
      },
      {
        q: "Is this course beginner-friendly?",
        a: "Yes. No prior experience required.",
      },
      {
        q: "Will I get a certificate?",
        a: "Yes — after completing the course and capstone project.",
      },
    ],

    heroImage: "/logos/fsw.jpg",
  };

  return <CoursePage {...data} />;
}
