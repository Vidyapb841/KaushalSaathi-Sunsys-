"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import HeroSlider from "../heroslider/heroslider";
import CoursePage from "../coursepage/page";
import FullStackCoursePage from "../pages/fullstack/page";
import Link from "next/link";
import Image from "next/image";
import HomeCourse from "../homecourse/homecourse";
import FAQHome from "@/app/homecourse/faq-home";


import {
  Code,
  Brush,
  Settings,
  Cpu,
  Globe,
  TrendingUp,
  Clock,
  Star,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WhyImage from "../whyus/whyus.jpg";

/* ---------------------- COURSES DATA ---------------------- */

const initialCourses = [
  {
    id: "uiux-designer",
    title: "UI/UX Designer",
    rating: 4.9,
    students: "54,268",
    videos: 16,
    watched: 0,
    hours: 87.6,
    seats: 2,
    favorite: true,
    img: "/images/uiux-course.png",
  },
  {
    id: "fullstack-developer",
    title: "Fullstack Developer",
    rating: 4.9,
    students: "24,580",
    videos: 16,
    watched: 0,
    hours: 87.6,
    seats: 8,
    favorite: false,
    img: "/images/fullstack-course.png",
  },
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    rating: 4.9,
    students: "16,324",
    videos: 16,
    watched: 0,
    hours: 87.6,
    seats: 6,
    favorite: false,
    img: "/images/graphic-course.png",
  },
];

/* ---------------------- ALUMNI DATA ---------------------- */

const alumniList = [
  {
    name: "ESTELLA NG",
    title: "Artist and Co-Founder, Ripple Root",
    message:
      "I think so much about living is about finding out the solutions that are best for yourself.",
    image: "/images/alumni1.jpg",
  },
  {
    name: "BOBBIE JEN LEE",
    title: "Speech Therapist, TTS Hospital",
    message:
      "No two patients are the same. Care should be more than treating an illness.",
    image: "/images/alumni2.jpg",
  },
  {
    name: "RAHUL MEHRA",
    title: "Software Engineer, Infosys",
    message:
      "My time here taught me to stay curious, keep learning, and never fear innovation.",
    image: "/images/alumni3.jpg",
  },
  {
    name: "SNEHA PATIL",
    title: "UX Designer, Figma",
    message:
      "Design is not just about looks, it’s about how people feel when using something.",
    image: "/images/alumni4.jpg",
  },
  {
    name: "ARJUN NAIR",
    title: "Data Scientist, Google",
    message:
      "The journey of learning never stops; each challenge brings new opportunities.",
    image: "/images/alumni5.jpg",
  },
];

/* ========================================================= */
/*                     HOME PAGE START                       */
/* ========================================================= */

export default function HomePage() {
  const [courses, setCourses] = useState(initialCourses);

  useEffect(() => {
    const saved = localStorage.getItem("courseProgress");
    if (saved) setCourses(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("courseProgress", JSON.stringify(courses));
  }, [courses]);

  const handleWatchVideo = (id) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === id && c.watched < c.videos
          ? { ...c, watched: c.watched + 1 }
          : c
      )
    );
  };

  return (
    <div className="flex flex-col bg-white">
      <Navigation />

      {/* Compact Courses Icons */}
      <section className="py-4 bg-[#E1FFBB]">
        <div className="max-w-6xl mx-auto px-2 flex flex-wrap justify-center items-center gap-20 sm:gap-20">
          {[
            { icon: Code, name: "Web Dev", link: "/pages/fullstack" },
            { icon: Brush, name: "Design", link: "/courses/design" },
            { icon: Settings, name: "Marketing", link: "/courses/marketing" },
            { icon: Cpu, name: "AI & ML", link: "/courses/ai-ml" },
            { icon: Globe, name: "Soft Skills", link: "/courses/soft-skills" },
            {
              icon: TrendingUp,
              name: "Entrepreneurship",
              link: "/courses/entrepreneurship",
            },
          ].map((c, i) => (
            <Link
              key={i}
              href={c.link}
              className="flex flex-col items-center justify-center text-center hover:scale-110 transition-transform duration-300"
            >
              <c.icon className="h-5 w-5 text-[#074799]" />
              <p className="text-[#001A6E] text-sm mt-1 font-medium">
                {c.name}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative w-full py-10 px-4 bg-gradient-to-br from-[#E1FFBB] via-white to-[#E1FFBB]">
        <div className="w-full">
          <HeroSlider />
        </div>
      </section>

      {/* CERTIFICATE SECTION */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center items-center">
            <Image
              src="/logos/certificate.jpg"
              alt="Certificate"
              width={550}
              height={400}
              className="rounded-xl shadow-xl border-[4px] border-[#E1FFBB] object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#001A6E] mb-6">
              What You Will Gain
            </h2>

            <ul className="space-y-5 text-gray-700">
              {[
                "Courses designed to build strong foundational skills for real career growth.",
                "Learn from Industry Experts with practical knowledge.",
                "Access resources — career guides, interview prep, salary insights & more.",
                "Skill-based learning with 50+ job-ready skills.",
                "Learn anytime, anywhere — fully flexible learning.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#009990] text-xl">✔</span>
                  <p className="leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* YOUR COURSES SECTION */}
      <HomeCourse />

      {/* Alumni Section */}
      <section className="bg-[#E1FFBB] py-10 overflow-x-auto">
        <h2 className="text-center text-3xl font-bold text-[#001A6E] mb-8">
          Hear From Our Alumni
        </h2>

        <div className="flex space-x-8 px-8 md:px-16 overflow-auto">
          {alumniList.map((alumni, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 sm:w-96 bg-[#074799] text-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
            >
              <p className="text-lg italic mb-6">“{alumni.message}”</p>

              <div className="flex items-center gap-4">
                <Image
                  src={alumni.image}
                  alt={alumni.name}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-[#009990] object-cover"
                />

                <div>
                  <h3 className="font-semibold text-[#E1FFBB]">
                    {alumni.name}
                  </h3>
                  <p className="text-gray-200 text-sm">{alumni.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center items-center">
            <Image
              src={WhyImage}
              alt="Why Us"
              width={550}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-extrabold text-[#001A6E] mb-4">
              Why we are best <br />
              <span className="text-[#009990]">from others?</span>
            </h2>

            <p className="text-gray-700 mb-10">
              Education that empowers you with skills that create real career
              transformation.
            </p>

            {[
              "Placement Support",
              "Internship Opportunities",
              "Live Classes",
              "Best Class Instructors",
              "Discover Courses",
              "Flexible Course Plan",
              "Align Skills & Goals",
              "Post-Course Certificate",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 border border-gray-300 rounded-lg p-4 mb-4"
              >
                <div className="bg-[#E1FFBB] text-[#001A6E] font-bold rounded-full h-8 w-8 flex justify-center items-center">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-[#001A6E]">
                    {item}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {
                      {
                        "Placement Support":
                          "Get complete placement assistance with resume building, mock interviews, and job referrals.",
                        "Internship Opportunities":
                          "Gain hands-on industry experience through guided internships.",
                        "Live Classes":
                          "Attend interactive live sessions for real-time learning and doubt-clearing.",
                        "Best Class Instructors":
                          "Get trained by industry experts with real-world experience.",
                        "Discover Courses":
                          "Learn at your own pace with structured lessons and expert guidance.",
                        "Flexible Course Plan":
                          "Study with complete freedom and choose schedules that fit your lifestyle.",
                        "Align Skills & Goals":
                          "Gain job-ready skills that match your career goals and industry demands.",
                        "Post-Course Certificate":
                          "Receive a verified certificate that enhances your professional credibility.",
                      }[item]
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQHome />

      <Footer />
    </div>
  );
}
