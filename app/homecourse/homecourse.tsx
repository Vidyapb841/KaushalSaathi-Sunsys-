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
    { title: "Social Media Marketing", img: ssm},
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
                {course.title === "Full Stack Development" && (
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
                
                {/* Front End Development */}
                {course.title === "Front End Development" && (
                  <Link href="/coursepage/digitalm">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}
                
                {/* Back End Development */}
                {course.title === "Back End Development" && (
                  <Link href="/coursepage/digitalm">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}
                {/* Social Media Marketing */}
                {course.title === "Social Media Marketing" && (
                  <Link href="/coursepage/digitalm">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}
                {/* Interior Designing */}
                {course.title === "Interior Designing" && (
                  <Link href="/coursepage/digitalm">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}
                {/* Professional Makeup & Hair Artist */}
                {course.title === "Professional Makeup" && (
                  <Link href="/coursepage/digitalm">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}
                {/* Human Resource Management */}
                {course.title === "HR Management" && (
                  <Link href="/coursepage/digitalm">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}
                {/* Marketing & Branding */}
                {course.title === "Marketing & Branding" && (
                  <Link href="/coursepage/digitalm">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}
                {/* LLM IT Certification Program */}
                {course.title === "LLM IT Certification Program" && (
                  <Link href="/coursepage/digitalm">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}
                {/* SEO(Search Engine Optimization) */}
                {course.title === "SEO(Search Engine Optimization)" && (
                  <Link href="/coursepage/digitalm">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}
                {/* Salesforce CRM Administration */}
                {course.title === "Salesforce CRM Administration" && (
                  <Link href="/coursepage/digitalm">
                    <Button variant="outline" className="w-full font-medium rounded-xl">
                      View Course
                    </Button>
                  </Link>
                )}
                {/* Spoken English & Communication Skills*/}
                {course.title === "Spoken English & Communication Skills" && (
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
