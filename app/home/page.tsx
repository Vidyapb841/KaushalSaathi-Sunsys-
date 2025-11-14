"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import {
  Code,
  Brush,
  Settings,
  Cpu,
  Globe,
  TrendingUp,
  Clock,
  Star
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
        <div className="max-w-6xl mx-auto px-2 flex flex-wrap justify-center items-center gap-10 sm:gap-12">
          {[
            { icon: Code, name: "Web Dev", link: "/courses/web-dev" },
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
              <c.icon className="h-10 w-10 text-[#074799]" />
              <p className="text-[#001A6E] text-sm mt-1 font-medium">
                {c.name}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#E1FFBB] via-white to-[#E1FFBB]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-6xl font-extrabold text-[#001A6E] leading-tight">
              Be a Leader in Your Field
            </h1>

            <h2 className="mt-4 text-4xl font-semibold text-[#074799]">
              Change, Adapt and Build with AI
            </h2>

            <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
              Empower your career with industry-grade AI programs designed for real impact.
            </p>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-[#009990] hover:bg-[#074799] text-white px-8 py-4 text-lg shadow-xl"
              >
                <Link href="/courses">Explore Programs</Link>
              </Button>
            </div>
          </div>

          <div className="flex-1 relative">
            <Image
              src="/logos/women-empowerment-digital-learning-illustration.jpg"
              alt="AI Learning"
              width={650}
              height={650}
              className="rounded-2xl shadow-xl border-[6px] border-white object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/*   📌 INSERTED COURSES CARDS (REPLACES POPULAR DOMAINS)  */}
      {/* ================================================= */}

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#001A6E] mb-4">
            Explore Our Courses
          </h2>
          <p className="text-lg text-gray-600">
            Track your progress & learn at your own pace.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="border hover:shadow-lg transition-all duration-300 relative"
            >
              {course.favorite && (
                <span className="absolute top-4 left-4 bg-primary text-white text-sm px-3 py-1 rounded-full">
                  Favorite
                </span>
              )}

              <CardContent className="p-6 text-center">
                <Image
                  src={course.img}
                  alt={course.title}
                  width={180}
                  height={120}
                  className="mx-auto rounded-md object-contain mb-6"
                />

                <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>

                <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground mb-4">
                  <span>⭐ {course.rating}</span>•<span>{course.students}</span>
                </div>

                <div className="flex justify-center items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>🎥 {course.watched}/{course.videos} Videos</span>
                  <span>⏱️ {course.hours} Hours</span>
                </div>

                <div className="flex flex-col gap-2">
                  <Button
                    onClick={() => handleWatchVideo(course.id)}
                    className="bg-[#009990] hover:bg-[#074799] text-white"
                  >
                    Watch Next Video
                  </Button>

                  <Button asChild className="bg-[#074799] hover:bg-[#009990] text-white">
                    <Link href={`/courses/${course.id}`}>View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

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
                  <h3 className="font-semibold text-[#E1FFBB]">{alumni.name}</h3>
                  <p className="text-gray-200 text-sm">{alumni.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
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
              Education that empowers skills that last a lifetime. Transform your future today.
            </p>

            {[
              "Discover Courses",
              "Flexible Course Plan",
              "Best Class Instructors",
              "Align Skills & Goals",
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
                    Learn at your own pace with structured lessons and expert guidance.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
