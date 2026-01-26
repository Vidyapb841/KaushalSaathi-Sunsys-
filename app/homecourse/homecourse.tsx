import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const FullStackImg = "/logos/fsw.jpg";
const UIUXImg = "/logos/5.png";
const FashionImg = "/logos/8.png";
const DevOpsImg = "/logos/4.png";
const DigitalMarketingImg = "/logos/6.png";
const Front = "/logos/1.png";
const back = "/logos/2.png";
const ssm = "/logos/7.png";
const id = "/logos/9.png";
const mkpup = "/logos/10.png";
const HR = "/logos/11.png";
const MB = "/logos/12.png";
const LLM = "/logos/13.png";
const SEO = "/logos/14.png";
const SLS = "/logos/15.png";
const ENG = "/logos/16.png";

const courses = [
  { title: "Frontend Developer Certification", img: Front },
  { title: "Backend Developer Certification", img: back },
  { title: "Full Stack Developer Program", img: FullStackImg },
  { title: "UI/UX Design Professional Course", img: UIUXImg },
  { title: "Digital Marketing Certification Program", img: DigitalMarketingImg },
  { title: "DevOps Engineering Certification Course", img: DevOpsImg },
  { title: "Social Media Marketing Course", img: ssm },
  { title: "Fashion Design Certification Course", img: FashionImg },
  { title: "Interior Design Certification Course", img: id },
  { title: "Professional Makeup Artist Course", img: mkpup },
  { title: "HR Management Certification", img: HR },
  { title: "Marketing & Branding Certification Program", img: MB },
  { title: "LLM IT Certification Program", img: LLM },
  { title: "SEO Certification Program", img: SEO },
  { title: "Salesforce CRM Administration Program", img: SLS },
  { title: "Spoken English & Communication Skills", img: ENG },
];

export default function CoursesSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Courses</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
        {courses.map((course, index) => (
          <Card
            key={index}
            className="min-w-[260px] max-w-[260px] rounded-2xl shadow-md bg-white"
          >
            <CardContent className="p-4 flex flex-col items-center text-center">

              {/* IMAGE */}
              <div className="relative w-full h-44 mb-4 bg-white rounded-xl flex items-center justify-center p-2">
                <Image
                  src={course.img}
                  alt={course.title}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>

              {/* COURSE TITLE — CENTERED */}
              <h3 className="text-lg font-semibold mb-3">
                {course.title}
              </h3>

              {/* BUTTONS */}
              <div className="flex flex-col gap-3 w-full">

                {course.title === "Full Stack Developer Program" && (
                  <Link href="/coursepage/fullstack">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "DevOps Engineering Certification Course" && (
                  <Link href="/coursepage/devops">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "UI/UX Design Professional Course" && (
                  <Link href="/coursepage/ui-ux">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "Fashion Design Certification Course" && (
                  <Link href="/coursepage/fashiond">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "Digital Marketing Certification Program" && (
                  <Link href="/coursepage/digitalm">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "Frontend Developer Certification" && (
                  <Link href="/coursepage/front">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "Backend Developer Certification" && (
                  <Link href="/coursepage/backend">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "Social Media Marketing Course" && (
                  <Link href="/coursepage/socialm">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "Interior Design Certification Course" && (
                  <Link href="/coursepage/interior">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "Professional Makeup Artist Course" && (
                  <Link href="/coursepage/makeup">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "HR Management Certification" && (
                  <Link href="/coursepage/hr">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "Marketing & Branding Certification Program" && (
                  <Link href="/coursepage/Marketing">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "LLM IT Certification Program" && (
                  <Link href="/coursepage/llm">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "SEO Certification Program" && (
                  <Link href="/coursepage/SEO">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "Salesforce CRM Administration Program" && (
                  <Link href="/coursepage/salesforce">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "Spoken English & Communication Skills" && (
                  <Link href="/coursepage/English">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {/* ⭐ Watch & Enroll Button */}
                <Link
                  href={
                    course.title === "Full Stack Developer Program"
                      ? "/coursepage/fullstack#videos"
                      : course.title === "DevOps Engineering Certification Course"
                      ? "/coursepage/devops#videos"
                      : course.title === "UI/UX Design Professional Course"
                      ? "/coursepage/ui-ux#videos"
                      : course.title === "Fashion Design Certification Course"
                      ? "/coursepage/fashiond#videos"
                      : course.title === "Digital Marketing Certification Program"
                      ? "/coursepage/digitalm#videos"
                      : course.title === "Frontend Developer Certification"
                      ? "/coursepage/front#videos"
                      : course.title === "Backend Developer Certification"
                      ? "/coursepage/backend#videos"
                      : course.title === "Social Media Marketing Course"
                      ? "/coursepage/socialm#videos"
                      : course.title === "Interior Design Certification Course"
                      ? "/coursepage/interior#videos"
                      : course.title === "Professional Makeup Artist Course"
                      ? "/coursepage/makeup#videos"
                      : course.title === "HR Management Certification"
                      ? "/coursepage/hr#videos"
                      : course.title === "Marketing & Branding Strategy Course"
                      ? "/coursepage/digitalm#videos"
                      : course.title === "LLM IT Certification Program"
                      ? "/coursepage/llm#videos"
                      : course.title === "SEO Certification Program"
                      ? "/coursepage/SEO#videos"
                      : course.title === "Salesforce CRM Administration Program"
                      ? "/coursepage/salesforce#videos"
                      : "/coursepage/digitalm#videos"
                  }
                >
                  <Button variant="outline" className="w-full font-medium rounded-xl">
                    Watch & Enroll
                  </Button>
                </Link>

              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
