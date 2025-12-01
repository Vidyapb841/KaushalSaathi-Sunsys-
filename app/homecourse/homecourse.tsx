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

export default function CoursesSection() {
  const courses = [
    { title: "Full Stack Web Development", img: FullStackImg },
    { title: "UI/UX Designing", img: UIUXImg },
    { title: "Fashion Designing", img: FashionImg },
    { title: "DevOps", img: DevOpsImg },
    { title: "Digital Marketing", img: DigitalMarketingImg },
  ];

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
              
              {/* FIXED IMAGE WRAPPER */}
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

                {/* Full Stack */}
                {course.title === "Full Stack Web Development" && (
                  <Link href="/coursepage">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {/* DevOps */}
                {course.title === "DevOps" && (
                  <Link href="/coursepage/devops">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {/* UI/UX */}
                {course.title === "UI/UX Designing" && (
                  <Link href="/coursepage/ui-ux">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {/* Fashion Designing */}
                {course.title === "Fashion Designing" && (
                  <Link href="/coursepage/fashiond">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                {/* Digital Marketing */}
                {course.title === "Digital Marketing" && (
                  <Link href="/coursepage/digitalm">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}

                <Button className="w-full text-white font-medium rounded-xl">
                  Start Learning
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
