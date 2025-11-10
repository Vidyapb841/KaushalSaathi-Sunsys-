"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Award, BookOpen, Briefcase } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-white">
      <Navigation />

      {/* ✅ Hero Section (Simplilearn Style) */}
      {/* ✅ Hero Section (Aesthetic | Custom Palette) */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#E1FFBB] via-white to-[#E1FFBB]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          {/* LEFT CONTENT */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-[#001A6E]">
              Be a Leader in Your Field
            </h1>

            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-[#074799] leading-snug">
              Change, Adapt and Build with AI
            </h2>

            <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
              Empower your career with industry-grade AI programs designed for
              real impact.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-[#009990] hover:bg-[#074799] text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl"
              >
                <Link href="/courses">Explore Programs</Link>
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="flex-1 relative">
            {/* Soft Aesthetic Gradient Backdrop */}
            <div className="absolute -inset-10 blur-3xl opacity-40 bg-gradient-to-br from-[#009990] via-[#074799] to-[#001A6E] rounded-full"></div>

            {/* Floating subtle squares */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-30">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border border-[#001A6E]/20"></div>
              ))}
            </div>

            {/* Main Image */}
            <Image
              src="/logos/women-empowerment-digital-learning-illustration.jpg"
              alt="AI Learning"
              width={650}
              height={650}
              className="relative z-10 rounded-2xl shadow-xl object-cover border-[6px] border-white"
            />
          </div>
        </div>
      </section>

      {/* ✅ Stats Section (unchanged) */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "1000+", label: "Women Empowered", color: "primary" },
              { number: "15+", label: "Expert Mentors", color: "secondary" },
              { number: "95%", label: "Success Rate", color: "accent" },
              {
                number: "Remote Access",
                label: "Remotly Accessible",
                color: "primary",
              },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div
                  className={`text-2xl md:text-3xl font-bold text-${stat.color} mb-1 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Features Section (unchanged) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Why Choose KaushalSaathi?
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              When women grow, families thrive, and societies progress.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[Users, BookOpen, Award, Briefcase].map((Icon, index) => (
              <Card
                key={index}
                className="text-center p-4 hover:shadow-lg transition-all duration-500 group hover:scale-105 hover:-translate-y-1"
              >
                <CardContent className="pt-4">
                  <Icon className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-all duration-300" />
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                    {
                      [
                        "Industry Experts as Mentors",
                        "Remote & Flexible Learning",
                        "Recognized Certifications",
                        "Lifestyle Enhancement",
                      ][index]
                    }
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {
                      [
                        "Learn from professionals with years of industry experience",
                        "Study at your own pace from anywhere in India",
                        "Get industry-recognized certificates upon completion",
                        "Courses designed to improve your career and lifestyle",
                      ][index]
                    }
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CTA Section (unchanged) */}
      <section className="py-6 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="max-w-2xl mx-auto text-center px-3 sm:px-4 lg:px-6 relative z-10">
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Ready to Transform Your Career?
          </h2>
          <p className="text-base mb-4 opacity-90">
            Join 1000+ women across India who've started their journey with
            KaushalSaathi
          </p>

          <Button
            asChild
            size="sm"
            variant="secondary"
            className="text-sm px-4 py-2 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Link href="/courses">
              Start Your Journey Today{" "}
              <ArrowRight className="ml-2 h-3 w-3 animate-pulse" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
