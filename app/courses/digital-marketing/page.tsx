"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Clock, Users, Target, TrendingUp, BarChart, Play, Lock, BookOpen } from "lucide-react"

const courseLessons = [
  { id: 1, title: "Digital Marketing Fundamentals", duration: "45 min", type: "video" },
  { id: 2, title: "Understanding Your Target Audience", duration: "30 min", type: "video" },
  { id: 3, title: "Social Media Platform Overview", duration: "60 min", type: "video" },
  { id: 4, title: "Content Creation Basics", duration: "40 min", type: "practical" },
  { id: 5, title: "Basic Analytics & Metrics", duration: "35 min", type: "video" },
  { id: 6, title: "Campaign Planning Workshop", duration: "90 min", type: "workshop" },
  { id: 7, title: "Social Media Management Tools", duration: "50 min", type: "practical" },
  { id: 8, title: "Real Client Project Setup", duration: "120 min", type: "project" },
  { id: 9, title: "Portfolio Development", duration: "60 min", type: "practical" },
  { id: 10, title: "Final Assessment", duration: "45 min", type: "assessment" },
]

export default function DigitalMarketingPage() {
  const [user, setUser] = useState<any>(null)
  const [enrolledCourse, setEnrolledCourse] = useState<any>(null)
  const [isEnrolled, setIsEnrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("kaushalsaathi_user")
    if (userData) {
      setUser(JSON.parse(userData))
    }

    // Check if user is enrolled in this course
    const userCourses = JSON.parse(localStorage.getItem("kaushalsaathi_user_courses") || "[]")
    const digitalMarketingCourse = userCourses.find(
      (course: any) => course.domain === "Digital Marketing & Social Media",
    )

    if (digitalMarketingCourse) {
      setEnrolledCourse(digitalMarketingCourse)
      setIsEnrolled(true)
    }
  }, [])

  const handleLessonClick = (lessonId: number) => {
    if (!isEnrolled) {
      alert("Please enroll in the course to access lessons")
      return
    }

    // Update lesson progress
    const userCourses = JSON.parse(localStorage.getItem("kaushalsaathi_user_courses") || "[]")
    const courseIndex = userCourses.findIndex((course: any) => course.domain === "Digital Marketing & Social Media")

    if (courseIndex !== -1) {
      const currentCourse = userCourses[courseIndex]
      const completedLessons = Math.max(currentCourse.completedLessons || 0, lessonId)
      const progress = Math.round((completedLessons / courseLessons.length) * 100)

      userCourses[courseIndex] = {
        ...currentCourse,
        completedLessons,
        progress,
        status: progress === 100 ? "completed" : "in-progress",
      }

      localStorage.setItem("kaushalsaathi_user_courses", JSON.stringify(userCourses))
      setEnrolledCourse(userCourses[courseIndex])

      // Simulate lesson access
      alert(`Accessing Lesson ${lessonId}: ${courseLessons[lessonId - 1].title}`)
    }
  }

  const getLessonStatus = (lessonId: number) => {
    if (!isEnrolled) return "locked"
    const completedLessons = enrolledCourse?.completedLessons || 0
    if (lessonId <= completedLessons) return "completed"
    if (lessonId === completedLessons + 1) return "available"
    return "locked"
  }

  const getLessonIcon = (lessonId: number) => {
    const status = getLessonStatus(lessonId)
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "available":
        return <Play className="h-5 w-5 text-primary" />
      case "locked":
        return <Lock className="h-5 w-5 text-muted-foreground" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-muted/50">
      <Navigation />

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/courses" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Link>

          <div className="text-center">
            <div className="text-6xl mb-6">📱</div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Digital Marketing & Social Media</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Master the art of online marketing, social media management, and digital advertising to build successful
              campaigns and grow businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-primary text-white">High Demand</Badge>
              <Badge variant="secondary">Remote Work Friendly</Badge>
              <Badge className="bg-accent text-white">₹25,000+ Average Salary</Badge>
              {isEnrolled && <Badge className="bg-green-500 text-white">Enrolled</Badge>}
            </div>

            {isEnrolled && enrolledCourse && (
              <Card className="max-w-2xl mx-auto mb-8">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Your Progress</h3>
                    <Badge variant={enrolledCourse.status === "completed" ? "default" : "secondary"}>
                      {enrolledCourse.status === "completed"
                        ? "Completed"
                        : enrolledCourse.status === "in-progress"
                          ? "In Progress"
                          : "Not Started"}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Lessons Completed</span>
                      <span>
                        {enrolledCourse.completedLessons || 0}/{courseLessons.length}
                      </span>
                    </div>
                    <Progress value={enrolledCourse.progress || 0} className="h-2" />
                    <div className="text-center text-sm text-muted-foreground">
                      {enrolledCourse.progress || 0}% Complete
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {isEnrolled && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Course Lessons</h2>

            <div className="space-y-4">
              {courseLessons.map((lesson) => {
                const status = getLessonStatus(lesson.id)
                const isClickable = status === "available" || status === "completed"

                return (
                  <Card
                    key={lesson.id}
                    className={`transition-all duration-200 ${
                      isClickable ? "hover:shadow-md cursor-pointer" : "opacity-60"
                    } ${status === "completed" ? "border-green-200 bg-green-50" : ""}`}
                    onClick={() => isClickable && handleLessonClick(lesson.id)}
                  >
                    <CardContent className="flex items-center justify-between p-6">
                      <div className="flex items-center gap-4">
                        {getLessonIcon(lesson.id)}
                        <div>
                          <h3 className="font-semibold text-lg">{lesson.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {lesson.duration}
                            </span>
                            <Badge variant="outline" className="text-xs">
                              {lesson.type}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {status === "completed" && <Badge className="bg-green-500">Completed</Badge>}
                        {status === "available" && (
                          <Button size="sm">
                            <Play className="h-4 w-4 mr-2" />
                            Start
                          </Button>
                        )}
                        {status === "locked" && (
                          <Badge variant="outline" className="text-muted-foreground">
                            Locked
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {enrolledCourse?.status === "completed" && (
              <Card className="mt-8 border-green-200 bg-green-50">
                <CardContent className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Congratulations!</h3>
                  <p className="text-green-600 mb-4">You have successfully completed the Digital Marketing course</p>
                  <Button asChild className="bg-green-500 hover:bg-green-600">
                    <Link href="/certificate/digital-marketing">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Download Certificate
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      )}

      {/* Complete Roadmap */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Complete Learning Roadmap</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Free Course Roadmap */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <Clock className="h-6 w-6" />
                  FREE 2-Month Course
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-lg">Month 1: Foundations</h4>
                    <ul className="space-y-2 mt-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Digital Marketing Fundamentals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Social Media Platform Overview</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Content Creation Basics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Basic Analytics & Metrics</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-semibold text-lg">Month 2: Application</h4>
                    <ul className="space-y-2 mt-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Campaign Planning & Execution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Social Media Management Tools</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Real Client Project (Internship)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Portfolio Development</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">What You'll Get:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Certificate of Completion</li>
                    <li>• Letter of Recommendation</li>
                    <li>• Internship Experience</li>
                    <li>• Basic Portfolio</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Course Roadmap */}
            <Card className="border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary flex items-center gap-2">
                  <TrendingUp className="h-6 w-6" />
                  ADVANCED 6-Month Course
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-lg">Months 1-2: Advanced Foundations</h4>
                    <ul className="space-y-2 mt-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Advanced Digital Marketing Strategies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>SEO & SEM Mastery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Google Ads & Facebook Ads</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-semibold text-lg">Months 3-4: Specialization</h4>
                    <ul className="space-y-2 mt-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Email Marketing Automation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Content Marketing Strategy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Advanced Analytics & ROI</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-lg">Months 5-6: Professional Practice</h4>
                    <ul className="space-y-2 mt-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span>Client Management & Consulting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span>Agency-Level Project Management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span>Professional Portfolio & Job Prep</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">What You'll Get:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Professional Certification</li>
                    <li>• Letter of Recommendation</li>
                    <li>• Career Mentorship (6 months)</li>
                    <li>• Job Placement Support</li>
                    <li>• Premium Tools Access</li>
                    <li>• Professional Portfolio</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Career Opportunities</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Digital Marketing Specialist</h3>
                <p className="text-muted-foreground mb-4">₹20,000 - ₹40,000/month</p>
                <p className="text-sm text-muted-foreground">
                  Plan and execute digital marketing campaigns across multiple platforms
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Social Media Manager</h3>
                <p className="text-muted-foreground mb-4">₹25,000 - ₹50,000/month</p>
                <p className="text-sm text-muted-foreground">
                  Manage brand presence and engagement across social platforms
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <BarChart className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Digital Marketing Consultant</h3>
                <p className="text-muted-foreground mb-4">₹50,000 - ₹1,00,000/month</p>
                <p className="text-sm text-muted-foreground">
                  Provide strategic marketing advice to businesses as a freelancer
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isEnrolled ? "Continue Your Learning Journey" : "Ready to Start Your Digital Marketing Journey?"}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isEnrolled
              ? "Keep progressing through your course and achieve your goals"
              : "Join thousands of women who've transformed their careers with digital marketing skills"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isEnrolled ? (
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/my-courses">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Go to My Courses
                </Link>
              </Button>
            ) : user ? (
              <>
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <Link href="/register?course=free&domain=digital-marketing">Start Free Course</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  <Link href="/register?course=advanced&domain=digital-marketing">Enroll in Advanced Course</Link>
                </Button>
              </>
            ) : (
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/">Login to Enroll</Link>
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
