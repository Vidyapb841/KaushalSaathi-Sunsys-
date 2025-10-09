"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Award, BookOpen, Briefcase, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col bg-gradient-to-br from-muted via-background to-muted/50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-secondary/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 left-20 w-10 h-10 bg-accent/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 bg-primary/5 rounded-full animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* ✅ Flex Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 animate-fade-in-up">
            
            {/* Left Side Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* ✨ New Styled Heading */}
              <div className="mb-6">
                <h1 className="text-6xl md:text-7xl font-extrabold text-purple-800 leading-tight">
                  One Platform
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold text-black mt-1">
                  Endless Opportunities
                </h2>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto lg:mx-0">
                From learning new skills to achieving success, we empower your journey.
              </p>

              {/* Buttons remain unchanged */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-base px-6 py-4 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Link href="/courses">
                    Join Free 2-Month Course <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base px-6 py-4 border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Link href="/courses">Advanced 6-Month Course - ₹2,999</Link>
                </Button>
              </div>
            </div>

            {/* ✅ Right Side Banner Image */}
            <div className="flex-1 relative animate-fade-in-up">
              <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl p-6 relative overflow-hidden">
                {/* Decorative dots */}
                <div className="absolute top-3 left-3 w-4 h-4 bg-primary/30 rounded-full animate-ping"></div>
                <div className="absolute top-3 right-3 w-3 h-3 bg-secondary/30 rounded-full animate-ping"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 bg-accent/30 rounded-full animate-ping"></div>

                <Image
                  src="/logos/women-empowerment-digital-learning-illustration.jpg"
                  alt="Women learning"
                  width={700}
                  height={400}
                  className="mx-auto rounded-lg"
                />

                {/* Floating badges */}
                <div className="absolute -top-2 -left-2 bg-primary text-white px-2 py-0.5 rounded-full text-xs font-semibold animate-bounce">
                  1000+ Students
                </div>
                <div className="absolute -top-2 -right-2 bg-secondary text-white px-2 py-0.5 rounded-full text-xs font-semibold animate-bounce">
                  95% Success Rate
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent text-white px-2 py-0.5 rounded-full text-xs font-semibold animate-bounce">
                  Remote Access
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (unchanged) */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "1000+", label: "Women Empowered", color: "primary" },
              { number: "15+", label: "Expert Mentors", color: "secondary" },
              { number: "95%", label: "Success Rate", color: "accent" },
              { number: "Remote Access", label: "Remotly accessible", color: "primary" },
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up group">
                <div
                  className={`text-2xl md:text-3xl font-bold text-${stat.color} mb-1 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section (unchanged) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Why Choose KaushalSaathi?</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              When women grow, families thrive, and societies progress.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[Users, BookOpen, Award, Briefcase].map((Icon, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-lg transition-all duration-500 group animate-fade-in-up hover:scale-105 hover:-translate-y-1">
                <CardContent className="pt-4">
                  <Icon className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-all duration-300" />
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                    {["Industry Experts as Mentors", "Remote & Flexible Learning", "Recognized Certifications", "Lifestyle Enhancement"][index]}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {[
                      "Learn from professionals with years of industry experience",
                      "Study at your own pace from anywhere in India",
                      "Get industry-recognized certificates upon completion",
                      "Courses designed to improve your career and lifestyle",
                    ][index]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (unchanged) */}
      <section className="py-6 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-6 left-6 w-14 h-14 border border-white/20 rounded-full animate-spin"></div>
          <div className="absolute bottom-6 right-6 w-12 h-12 border border-white/20 rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 border border-white/10 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-2xl mx-auto text-center px-3 sm:px-4 lg:px-6 relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Ready to Transform Your Career?
            </h2>
            <p className="text-base mb-4 opacity-90">
              Join 1000+ women across India who've started their journey with KaushalSaathi
            </p>
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="text-sm px-4 py-2 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Link href="/courses">
                Start Your Journey Today <ArrowRight className="ml-2 h-3 w-3 animate-pulse" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
