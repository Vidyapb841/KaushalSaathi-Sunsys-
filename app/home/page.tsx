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
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-muted/50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-12 h-12 bg-accent/10 rounded-full animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          ></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/5 rounded-full animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="flex justify-center items-center mb-6">
              <Sparkles className="h-8 w-8 text-accent mr-3 animate-pulse" />
              <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
                Empower Your Dreams with <span className="text-primary animate-pulse">Free & Affordable</span> Skilling
                Courses
              </h1>
              <Sparkles className="h-8 w-8 text-accent ml-3 animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>

            <p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto text-pretty animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              From the Comfort of Your Home! Get certified in high-demand fields like Digital Marketing, Fashion Design,
              Makeup Artistry, and more – all guided by industry experts!
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="/courses">
                  Join Free 2-Month Course <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="/courses">Advanced 6-Month Course - ₹4,999</Link>
              </Button>
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-8 animate-pulse-slow relative overflow-hidden">
              {/* Animated decorative elements */}
              <div className="absolute top-4 left-4 w-6 h-6 bg-primary/30 rounded-full animate-ping"></div>
              <div
                className="absolute top-4 right-4 w-4 h-4 bg-secondary/30 rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-4 left-4 w-5 h-5 bg-accent/30 rounded-full animate-ping"
                style={{ animationDelay: "2s" }}
              ></div>

              <Image
                src="/logos/women-empowerment-digital-learning-illustration.png"
                alt="Women learning"
                width={800}
                height={500}
              />

              {/* Floating achievement badges */}
              <div className="absolute -top-2 -left-2 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
                1000+ Students
              </div>
              <div
                className="absolute -top-2 -right-2 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                95% Success Rate
              </div>
              <div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce"
                style={{ animationDelay: "1s" }}
              >
                Remote Access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1000+", label: "Women Empowered", color: "primary", delay: "0s" },
              { number: "15+", label: "Expert Mentors", color: "secondary", delay: "0.1s" },
              { number: "95%", label: "Success Rate", color: "accent", delay: "0.2s" },
              { number: "Remote Access", label: "Remotly accessable", color: "primary", delay: "0.3s" },
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up group" style={{ animationDelay: stat.delay }}>
                <div
                  className={`text-3xl md:text-4xl font-bold text-${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose KaushalSaathi?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              When women grow, families thrive, and societies progress.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Industry Experts as Mentors",
                desc: "Learn from professionals with years of industry experience",
                color: "primary",
                delay: "0s",
              },
              {
                icon: BookOpen,
                title: "Remote & Flexible Learning",
                desc: "Study at your own pace from anywhere in India",
                color: "secondary",
                delay: "0.1s",
              },
              {
                icon: Award,
                title: "Recognized Certifications",
                desc: "Get industry-recognized certificates upon completion",
                color: "accent",
                delay: "0.2s",
              },
              {
                icon: Briefcase,
                title: "Lifestyle Enhancement",
                desc: "Courses designed to improve your career and lifestyle",
                color: "primary",
                delay: "0.3s",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`text-center p-6 hover:shadow-xl transition-all duration-500 border-${feature.color}/20 group animate-fade-in-up hover:scale-105 hover:-translate-y-2`}
                style={{ animationDelay: feature.delay }}
              >
                <CardContent className="pt-6">
                  <feature.icon
                    className={`h-12 w-12 text-${feature.color} mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                  />
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div
            className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full animate-spin"
            style={{ animationDuration: "15s", animationDirection: "reverse" }}
          ></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join 1000+ women across India who've started their journey with KaushalSaathi
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Link href="/courses">
                Start Your Journey Today <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
