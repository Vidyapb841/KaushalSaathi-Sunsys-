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
  { title: "Front End Development", img: Front },
  { title: "Back End Development", img: back },
  { title: "Full Stack Development", img: FullStackImg },
  { title: "UI/UX Designing", img: UIUXImg },
  { title: "Digital Marketing", img: DigitalMarketingImg },
  { title: "DevOps", img: DevOpsImg },
  { title: "Social Media Marketing", img: ssm },
  { title: "Fashion Designing", img: FashionImg },
  { title: "Interior Designing", img: id },
  { title: "Professional Makeup", img: mkpup },
  { title: "HR Management", img: HR },
  { title: "Marketing & Branding", img: MB },
  { title: "LLM IT Certification Program", img: LLM },
  { title: "SEO(Search Engine Optimization)", img: SEO },
  { title: "Salesforce CRM Administration", img: SLS },
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
            <CardContent className="p-4">

              <div className="relative w-full h-44 mb-4 bg-white rounded-xl flex items-center justify-center p-2">
                <Image
                  src={course.img}
                  alt={course.title}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>

              <h3 className="text-lg font-semibold mb-3">{course.title}</h3>

              <div className="flex flex-col gap-3">

                {course.title === "Full Stack Development" && (
                  <Link href="/coursepage/fullstack">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "DevOps" && (
                  <Link href="/coursepage/devops">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "UI/UX Designing" && (
                  <Link href="/coursepage/ui-ux">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "Fashion Designing" && (
                  <Link href="/coursepage/fashiond">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "Digital Marketing" && (
                  <Link href="/coursepage/digitalm">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "Front End Development" && (
                  <Link href="/coursepage/front">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "Back End Development" && (
                  <Link href="/coursepage/backend">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "Social Media Marketing" && (
                  <Link href="/coursepage/socialm">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "Interior Designing" && (
                  <Link href="/coursepage/interior">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "Professional Makeup" && (
                  <Link href="/coursepage/makeup">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "HR Management" && (
                  <Link href="/coursepage/hr">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "Marketing & Branding" && (
                  <Link href="/coursepage/digitalm">
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

                {course.title === "SEO(Search Engine Optimization)" && (
                  <Link href="/coursepage/SEO">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {course.title === "Salesforce CRM Administration" && (
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
<Link href={
  course.title === "Full Stack Development"
    ? "/coursepage/fullstack#videos"
    : course.title === "DevOps"
    ? "/coursepage/devops#videos"
    : course.title === "UI/UX Designing"
    ? "/coursepage/ui-ux#videos"
    : course.title === "Fashion Designing"
    ? "/coursepage/fashiond#videos"
    : course.title === "Digital Marketing"
    ? "/coursepage/digitalm#videos"
    : course.title === "Front End Development"
    ? "/coursepage/digitalm#videos"
    : course.title === "Back End Development"
    ? "/coursepage/digitalm#videos"
    : course.title === "Social Media Marketing"
    ? "/coursepage/digitalm#videos"
    : course.title === "Interior Designing"
    ? "/coursepage/digitalm#videos"
    : course.title === "Professional Makeup"
    ? "/coursepage/digitalm#videos"
    : course.title === "HR Management"
    ? "/coursepage/digitalm#videos"
    : course.title === "Marketing & Branding"
    ? "/coursepage/digitalm#videos"
    : course.title === "LLM IT Certification Program"
    ? "/coursepage/llm#videos"
    : course.title === "SEO(Search Engine Optimization)"
    ? "/coursepage/digitalm#videos"
    : course.title === "Salesforce CRM Administration"
    ? "/coursepage/salesforce#videos"
    : "/coursepage/digitalm#videos"
}>
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
