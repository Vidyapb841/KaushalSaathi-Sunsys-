"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Users,
  BookOpen,
  Mail,
  TrendingUp,
  Download,
  Award,
  MessageSquare,
  BarChart3,
  UserCheck,
  GraduationCap,
} from "lucide-react"

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalEnrollments: 0,
    totalMessages: 0,
    completedCourses: 0,
    recentRegistrations: 0,
    activeUsers: 0,
  })
  const [recentUsers, setRecentUsers] = useState<any[]>([])
  const [recentMessages, setRecentMessages] = useState<any[]>([])

  useEffect(() => {
    // Load admin statistics
    const adminUsers = JSON.parse(localStorage.getItem("kaushalsaathi_admin_users") || "[]")
    const contactMessages = JSON.parse(localStorage.getItem("kaushalsaathi_contact_messages") || "[]")
    const userCourses = JSON.parse(localStorage.getItem("kaushalsaathi_user_courses") || "[]")

    // Calculate statistics
    const completedCourses = userCourses.filter((course: any) => course.status === "completed").length
    const recentRegistrations = adminUsers.filter((user: any) => {
      const registrationDate = new Date(user.registrationTime || user.loginTime)
      const weekAgo = new Date()
      weekAgo.setDate(weekAgo.getDate() - 7)
      return registrationDate > weekAgo
    }).length

    setStats({
      totalUsers: adminUsers.length,
      totalEnrollments: userCourses.length,
      totalMessages: contactMessages.length,
      completedCourses,
      recentRegistrations,
      activeUsers: adminUsers.filter((user: any) => user.registrationTime || user.loginTime).length,
    })

    // Set recent data
    setRecentUsers(adminUsers.slice(-5).reverse())
    setRecentMessages(contactMessages.slice(-5).reverse())
  }, [])

  const exportAllData = () => {
    const adminUsers = JSON.parse(localStorage.getItem("kaushalsaathi_admin_users") || "[]")
    const contactMessages = JSON.parse(localStorage.getItem("kaushalsaathi_contact_messages") || "[]")
    const userCourses = JSON.parse(localStorage.getItem("kaushalsaathi_user_courses") || "[]")

    // Create comprehensive Excel data
    const userData = [
      ["USER DATA"],
      ["Name", "Email", "Phone", "Age", "Education", "Course Type", "Domain", "Registration Date", "Status"],
      ...adminUsers.map((user: any) => [
        user.name || "N/A",
        user.email || "N/A",
        user.phone || "N/A",
        user.age || "N/A",
        user.education || "N/A",
        user.courseType || "N/A",
        user.domain || "N/A",
        user.registrationTime ? new Date(user.registrationTime).toLocaleDateString() : "N/A",
        "Registered",
      ]),
      [],
      ["COURSE ENROLLMENTS"],
      ["Course Name", "Domain", "User Email", "Enrollment Date", "Progress", "Status"],
      ...userCourses.map((course: any) => [
        course.courseName || "N/A",
        course.domain || "N/A",
        course.userDetails?.email || "N/A",
        new Date(course.enrollmentDate).toLocaleDateString(),
        `${course.progress || 0}%`,
        course.status || "N/A",
      ]),
      [],
      ["CONTACT MESSAGES"],
      ["Name", "Email", "Phone", "Interest", "Message", "Date", "Status"],
      ...contactMessages.map((msg: any) => [
        msg.fullName || "N/A",
        msg.email || "N/A",
        msg.phone || "N/A",
        msg.interest || "General",
        msg.message?.substring(0, 100) + "..." || "N/A",
        new Date(msg.submittedAt).toLocaleDateString(),
        msg.status || "N/A",
      ]),
    ]

    const csvContent = userData
      .map((row) => (Array.isArray(row) ? row.map((cell) => `"${cell}"`).join(",") : `"${row}"`))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `kaushalsaathi-admin-report-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)

    // Log admin action
    console.log(`[ADMIN ACTION] Data export performed by: vidyapb2004@gmail.com`)
    console.log(
      `[EXPORT DETAILS] Total users: ${adminUsers.length}, Total enrollments: ${userCourses.length}, Total messages: ${contactMessages.length}`,
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">KaushalSaathi Administration Panel (vidyapb2004@gmail.com)</p>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-4">
              <Button onClick={exportAllData} className="bg-primary">
                <Download className="h-4 w-4 mr-2" />
                Export All Data (Excel)
              </Button>
              <Button asChild variant="outline">
                <Link href="/admin/users">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Users
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/admin/messages">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  View Messages
                </Link>
              </Button>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                    <p className="text-2xl font-bold">{stats.totalUsers}</p>
                  </div>
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="mt-2">
                  <Badge variant="secondary" className="text-xs">
                    +{stats.recentRegistrations} this week
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Course Enrollments</p>
                    <p className="text-2xl font-bold">{stats.totalEnrollments}</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <div className="mt-2">
                  <Badge variant="outline" className="text-xs">
                    {stats.completedCourses} completed
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Contact Messages</p>
                    <p className="text-2xl font-bold">{stats.totalMessages}</p>
                  </div>
                  <Mail className="h-8 w-8 text-accent" />
                </div>
                <div className="mt-2">
                  <Badge variant="outline" className="text-xs">
                    Sent to vidyapb2004@gmail.com
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                    <p className="text-2xl font-bold">
                      {stats.totalEnrollments > 0
                        ? Math.round((stats.completedCourses / stats.totalEnrollments) * 100)
                        : 0}
                      %
                    </p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-500" />
                </div>
                <div className="mt-2">
                  <Badge variant="outline" className="text-xs">
                    Course completion
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Users */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-primary" />
                  Recent Registrations
                </CardTitle>
              </CardHeader>
              <CardContent>
                {recentUsers.length === 0 ? (
                  <p className="text-muted-foreground text-center py-4">No recent registrations</p>
                ) : (
                  <div className="space-y-4">
                    {recentUsers.map((user, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div>
                          <p className="font-medium">{user.name || "Unknown"}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                          <div className="flex gap-2 mt-1">
                            {user.courseType && (
                              <Badge variant="outline" className="text-xs">
                                {user.courseType === "free" ? "FREE" : "ADVANCED"}
                              </Badge>
                            )}
                            {user.domain && (
                              <Badge variant="secondary" className="text-xs">
                                {user.domain}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">
                            {user.registrationTime ? new Date(user.registrationTime).toLocaleDateString() : "N/A"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Messages */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-secondary" />
                  Recent Messages
                </CardTitle>
              </CardHeader>
              <CardContent>
                {recentMessages.length === 0 ? (
                  <p className="text-muted-foreground text-center py-4">No recent messages</p>
                ) : (
                  <div className="space-y-4">
                    {recentMessages.map((message, index) => (
                      <div key={index} className="p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium">{message.fullName}</p>
                          <Badge variant={message.status === "new" ? "default" : "secondary"} className="text-xs">
                            {message.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{message.email}</p>
                        <p className="text-sm line-clamp-2">{message.message}</p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {new Date(message.submittedAt).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Course Analytics */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-accent" />
                Course Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <GraduationCap className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">{stats.totalEnrollments}</p>
                  <p className="text-sm text-muted-foreground">Total Enrollments</p>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{stats.completedCourses}</p>
                  <p className="text-sm text-muted-foreground">Completed Courses</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-secondary mx-auto mb-2" />
                  <p className="text-2xl font-bold">
                    {stats.totalEnrollments > 0
                      ? Math.round((stats.completedCourses / stats.totalEnrollments) * 100)
                      : 0}
                    %
                  </p>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
