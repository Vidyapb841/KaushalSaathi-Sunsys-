"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { BookOpen, Clock, Award, Play, CheckCircle, Calendar } from "lucide-react"

export default function MyCoursesPage() {
  const [user, setUser] = useState<any>(null)
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("kaushalsaathi_user")
    if (!userData) {
      router.push("/")
      return
    }

    const parsedUser = JSON.parse(userData)
    setUser(parsedUser)

    // Get enrolled courses from localStorage
    const courses = JSON.parse(localStorage.getItem("kaushalsaathi_user_courses") || "[]")
    setEnrolledCourses(courses)
  }, [router])

  const getProgressColor = (progress: number) => {
    if (progress < 30) return "bg-red-500"
    if (progress < 70) return "bg-yellow-500"
    return "bg-green-500"
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>
      case "in-progress":
        return <Badge className="bg-blue-500">In Progress</Badge>
      case "not-started":
        return <Badge variant="outline">Not Started</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">My Courses</h1>
            <p className="text-muted-foreground">Track your learning progress and continue your journey</p>
          </div>

          {enrolledCourses.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Courses Enrolled Yet</h3>
                <p className="text-muted-foreground mb-6">
                  Start your learning journey by enrolling in one of our courses
                </p>
                <Button asChild>
                  <Link href="/courses">Browse Courses</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {enrolledCourses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{course.courseName}</CardTitle>
                        <CardDescription className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            Enrolled: {new Date(course.enrollmentDate).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {course.courseType === "free" ? "2 Months" : "6 Months"}
                          </span>
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        {getStatusBadge(course.status)}
                        <div className="mt-2">
                          <Badge
                            variant="outline"
                            className={course.courseType === "free" ? "border-primary" : "border-secondary"}
                          >
                            {course.courseType === "free" ? "FREE Course" : "ADVANCED Course"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm text-muted-foreground">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span className="text-sm">Domain: {course.domain}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Play className="h-4 w-4 text-secondary" />
                        <span className="text-sm">
                          Lessons: {course.completedLessons || 0}/{course.totalLessons || 20}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-accent" />
                        <span className="text-sm">
                          {course.status === "completed" ? "Certificate Earned" : "Certificate Pending"}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button asChild className="flex-1">
                        <Link href={`/courses/${course.domain.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "")}`}>
                          {course.status === "not-started" ? "Start Learning" : "Continue Learning"}
                        </Link>
                      </Button>
                      {course.status === "completed" && (
                        <Button variant="outline" asChild>
                          <Link href={`/certificate/${course.id}`}>
                            <Award className="h-4 w-4 mr-2" />
                            View Certificate
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Course Statistics */}
          {enrolledCourses.length > 0 && (
            <div className="mt-12 grid md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{enrolledCourses.length}</div>
                  <div className="text-sm text-muted-foreground">Total Courses</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Play className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold">
                    {enrolledCourses.filter((c) => c.status === "in-progress").length}
                  </div>
                  <div className="text-sm text-muted-foreground">In Progress</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">
                    {enrolledCourses.filter((c) => c.status === "completed").length}
                  </div>
                  <div className="text-sm text-muted-foreground">Completed</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold">
                    {Math.round(
                      enrolledCourses.reduce((acc, course) => acc + course.progress, 0) / enrolledCourses.length,
                    )}
                    %
                  </div>
                  <div className="text-sm text-muted-foreground">Avg Progress</div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
