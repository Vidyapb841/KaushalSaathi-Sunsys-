"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Users, Search, Download, Mail, Phone, Calendar, Filter, Trash2 } from "lucide-react"

export default function AdminUsersPage() {
  const [users, setUsers] = useState<any[]>([])
  const [filteredUsers, setFilteredUsers] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [selectedUser, setSelectedUser] = useState<any>(null)

  useEffect(() => {
    // Load user data
    const adminUsers = JSON.parse(localStorage.getItem("kaushalsaathi_admin_users") || "[]")
    const userCourses = JSON.parse(localStorage.getItem("kaushalsaathi_user_courses") || "[]")

    // Combine user data with course information
    const enrichedUsers = adminUsers.map((user: any) => {
      const userCourse = userCourses.find((course: any) => course.userDetails?.email === user.email)
      return {
        ...user,
        courseInfo: userCourse || null,
      }
    })

    setUsers(enrichedUsers.reverse()) // Show newest first
    setFilteredUsers(enrichedUsers.reverse())
  }, [])

  useEffect(() => {
    // Filter users based on search term and filter type
    let filtered = users.filter(
      (user) =>
        user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.domain?.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    if (filterType !== "all") {
      filtered = filtered.filter((user) => user.courseType === filterType)
    }

    setFilteredUsers(filtered)
  }, [searchTerm, filterType, users])

  const exportUsersToCSV = () => {
    const csvContent = [
      [
        "Name",
        "Email",
        "Phone",
        "Age",
        "Education",
        "Course Type",
        "Domain",
        "Registration Date",
        "Course Progress",
        "Course Status",
      ],
      ...filteredUsers.map((user) => [
        user.name || "N/A",
        user.email || "N/A",
        user.phone || "N/A",
        user.age || "N/A",
        user.education || "N/A",
        user.courseType || "N/A",
        user.domain || "N/A",
        user.registrationTime ? new Date(user.registrationTime).toLocaleDateString() : "N/A",
        user.courseInfo ? `${user.courseInfo.progress || 0}%` : "N/A",
        user.courseInfo?.status || "N/A",
      ]),
    ]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `kaushalsaathi-users-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)

    // Log admin action
    console.log(`[ADMIN ACTION] User data export performed by: vidyapb2004@gmail.com`)
    console.log(`[EXPORT DETAILS] ${filteredUsers.length} users exported`)
  }

  const deleteUser = (userEmail: string) => {
    if (confirm("Are you sure you want to delete this user? This action cannot be undone.")) {
      // Remove from admin users
      const adminUsers = JSON.parse(localStorage.getItem("kaushalsaathi_admin_users") || "[]")
      const updatedAdminUsers = adminUsers.filter((user: any) => user.email !== userEmail)
      localStorage.setItem("kaushalsaathi_admin_users", JSON.stringify(updatedAdminUsers))

      // Remove from user courses
      const userCourses = JSON.parse(localStorage.getItem("kaushalsaathi_user_courses") || "[]")
      const updatedUserCourses = userCourses.filter((course: any) => course.userDetails?.email !== userEmail)
      localStorage.setItem("kaushalsaathi_user_courses", JSON.stringify(updatedUserCourses))

      // Update local state
      const updatedUsers = users.filter((user) => user.email !== userEmail)
      setUsers(updatedUsers)
      setSelectedUser(null)

      console.log(`[ADMIN ACTION] User deleted: ${userEmail} by vidyapb2004@gmail.com`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">User Management</h1>
            <p className="text-muted-foreground">
              Manage registered users and their course enrollments (vidyapb2004@gmail.com)
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Users List */}
            <div className="lg:col-span-2 space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Users ({filteredUsers.length})
                    </CardTitle>
                    <Button onClick={exportUsersToCSV} variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export Excel
                    </Button>
                  </div>

                  <div className="flex gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <div className="relative">
                      <Filter className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="all">All Courses</option>
                        <option value="free">FREE Course</option>
                        <option value="advanced">ADVANCED Course</option>
                      </select>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 max-h-96 overflow-y-auto">
                  {filteredUsers.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No users found</p>
                    </div>
                  ) : (
                    filteredUsers.map((user, index) => (
                      <Card
                        key={index}
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          selectedUser?.email === user.email ? "border-primary" : ""
                        }`}
                        onClick={() => setSelectedUser(user)}
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold">{user.name || "Unknown"}</h3>
                            <div className="flex items-center gap-2">
                              <Badge variant={user.courseType === "free" ? "default" : "secondary"}>
                                {user.courseType === "free" ? "FREE" : "ADVANCED"}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                {user.registrationTime ? new Date(user.registrationTime).toLocaleDateString() : "N/A"}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{user.email}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                              {user.domain && (
                                <Badge variant="outline" className="text-xs">
                                  {user.domain}
                                </Badge>
                              )}
                              {user.courseInfo && (
                                <Badge
                                  variant={user.courseInfo.status === "completed" ? "default" : "secondary"}
                                  className="text-xs"
                                >
                                  {user.courseInfo.progress || 0}% Complete
                                </Badge>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </CardContent>
              </Card>
            </div>

            {/* User Details */}
            <div className="space-y-4">
              {selectedUser ? (
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">User Details</CardTitle>
                      <div className="flex gap-2">
                        <Button onClick={() => deleteUser(selectedUser.email)} variant="destructive" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Personal Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span>{selectedUser.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span>{selectedUser.phone || "N/A"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {selectedUser.registrationTime
                              ? new Date(selectedUser.registrationTime).toLocaleString()
                              : "N/A"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Education & Background</h4>
                      <div className="space-y-1 text-sm">
                        <p>
                          <strong>Age:</strong> {selectedUser.age || "N/A"}
                        </p>
                        <p>
                          <strong>Education:</strong> {selectedUser.education || "N/A"}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Course Information</h4>
                      <div className="space-y-2">
                        <Badge variant={selectedUser.courseType === "free" ? "default" : "secondary"}>
                          {selectedUser.courseType === "free" ? "FREE Course" : "ADVANCED Course"}
                        </Badge>
                        {selectedUser.domain && (
                          <div>
                            <p className="text-sm">
                              <strong>Domain:</strong> {selectedUser.domain}
                            </p>
                          </div>
                        )}
                        {selectedUser.courseInfo && (
                          <div className="space-y-1 text-sm">
                            <p>
                              <strong>Progress:</strong> {selectedUser.courseInfo.progress || 0}%
                            </p>
                            <p>
                              <strong>Status:</strong> {selectedUser.courseInfo.status || "N/A"}
                            </p>
                            <p>
                              <strong>Lessons Completed:</strong> {selectedUser.courseInfo.completedLessons || 0}/
                              {selectedUser.courseInfo.totalLessons || 0}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Button asChild className="w-full">
                        <a href={`mailto:${selectedUser.email}?subject=KaushalSaathi Course Update`}>
                          <Mail className="h-4 w-4 mr-2" />
                          Send Email
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="text-center py-12">
                    <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Select a user to view details</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
