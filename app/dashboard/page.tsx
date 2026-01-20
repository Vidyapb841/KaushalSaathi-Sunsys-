"use client"
export const dynamic = 'force-dynamic';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Phone,
  CheckCircle,
  Star,
  Briefcase,
  Palette,
  Home,
  Shirt,
  TrendingUp,
} from "lucide-react"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/dashboard" className="text-2xl font-bold text-primary">
                KaushalSaathi
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="#home" className="text-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="#about" className="text-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="#courses" className="text-foreground hover:text-primary transition-colors">
                  Courses
                </Link>
                <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Profile
              </Button>
              <Link href="/login">
                <Button size="sm">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Empower Your Dreams with Free & Affordable Skilling Courses
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            From the Comfort of Your Home! Get certified in high-demand fields like Digital Marketing, Influencer
            Marketing, Fashion & Interior Designing, Makeup Artistry, and more – all guided by industry experts!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              Join Free 2-Month Course
              <Badge variant="secondary" className="ml-2">
                Worth ₹3000, now FREE!
              </Badge>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              Enroll in 6-Month Advanced Course
              <Badge variant="secondary" className="ml-2">
                Worth ₹10,000, now at ₹4999
              </Badge>
            </Button>
          </div>

          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
            At KaushalSaathi, we are committed to empowering women across India through flexible, remote learning. Our
            goal is to equip homemakers, aspiring professionals, and creative minds with the skills to turn passion into
            a profession.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Courses</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our carefully designed programs to kickstart your career transformation
            </p>
          </div>

          {/* Course Offerings */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Free Course */}
            <Card className="relative overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <div className="absolute top-4 right-4">
                <Badge className="bg-secondary text-secondary-foreground">MOST POPULAR</Badge>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl">FREE 2-Month Course</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-primary">FREE</span>
                  <span className="text-lg text-muted-foreground line-through">₹3,000</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Real-world internship experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Certificate of Completion</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>LOR (Letter of Recommendation)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Flexible online learning</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" size="lg">
                  Join Now – FREE
                </Button>
              </CardContent>
            </Card>

            {/* Advanced Course */}
            <Card className="relative overflow-hidden border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="border-secondary text-secondary">
                  ADVANCED
                </Badge>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="w-6 h-6 text-secondary" />
                  <CardTitle className="text-2xl">ADVANCED 6-Month Course</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-secondary">₹4,999</span>
                  <span className="text-lg text-muted-foreground line-through">₹10,000</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span>Deep practical training</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span>Professional Certification</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span>LOR + Career Mentorship</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span>Job Placement Support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span>Access to premium resources</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="secondary" size="lg">
                  Enroll Now – Only ₹4,999
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Popular Domains */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
              What You'll Learn – Popular Domains
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Digital Marketing & Social Media</CardTitle>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Influencer Marketing</CardTitle>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Makeup & Beauty</CardTitle>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Interior Designing</CardTitle>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shirt className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Fashion Designing</CardTitle>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Entrepreneurship & More!</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Learning Process */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">Your Learning Journey</h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  1
                </div>
                <span className="font-semibold">Enroll</span>
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 md:rotate-0" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  2
                </div>
                <span className="font-semibold">Learn</span>
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 md:rotate-0" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  3
                </div>
                <span className="font-semibold">Intern</span>
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 md:rotate-0" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  4
                </div>
                <span className="font-semibold">Get Certified</span>
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 md:rotate-0" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  5
                </div>
                <span className="font-semibold">Placement</span>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">Why Choose Us?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Industry Experts as Mentors</h4>
                  <p className="text-muted-foreground text-sm">
                    Learn from professionals with real industry experience
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Remote & Flexible Learning</h4>
                  <p className="text-muted-foreground text-sm">Study at your own pace from anywhere in India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Recognized Certifications</h4>
                  <p className="text-muted-foreground text-sm">Get certificates that employers value and trust</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Internship & Placement Support</h4>
                  <p className="text-muted-foreground text-sm">Real job opportunities and career guidance</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Empowerment-Driven Curriculum</h4>
                  <p className="text-muted-foreground text-sm">Designed specifically for women's career growth</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">10,000+ Success Stories</h4>
                  <p className="text-muted-foreground text-sm">
                    Join thousands of women who've transformed their careers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              When women grow, families thrive, and societies progress.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Remote, Pan-India Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn from anywhere across India with our flexible online platform
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Flexible Timing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Designed for women of all backgrounds with adaptable schedules</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Industry Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Learn from industry veterans with real-world experience</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Job-Ready Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Hands-on internships and job-readiness training programs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Contact Us</h2>
          <div className="flex items-center justify-center space-x-2 text-xl">
            <Phone className="w-6 h-6 text-primary" />
            <span className="font-semibold">+91-0000000</span>
          </div>
          <p className="text-muted-foreground mt-4">Remote Access</p>
          <p className="text-sm text-muted-foreground mt-8">Powered by Sunsys Techsol Pvt. Ltd.</p>
        </div>
      </section>
    </div>
  )
}
