"use client"

import { useState, useEffect, ChangeEvent } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { User, Mail, Phone, Calendar, Edit, Save, X, BookOpen, GraduationCap, Camera } from "lucide-react"

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    education: "",
    field: "",
    profilePic: "",
  })
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("kaushalsaathi_user")
    if (!userData) {
      router.push("/")
      return
    }

    const parsedUser = JSON.parse(userData)
    setUser(parsedUser)
    setFormData({
      name: parsedUser.name || "",
      email: parsedUser.email || "",
      phone: parsedUser.phone || "",
      gender: parsedUser.gender || "",
      education: parsedUser.education || "",
      field: parsedUser.field || "",
      profilePic: parsedUser.profilePic || "",
    })
  }, [router])

  const handleSave = () => {
    const updatedUser = { ...user, ...formData }
    localStorage.setItem("kaushalsaathi_user", JSON.stringify(updatedUser))
    setUser(updatedUser)
    setIsEditing(false)

    // Update admin data
    const adminData = JSON.parse(localStorage.getItem("kaushalsaathi_admin_users") || "[]")
    const userIndex = adminData.findIndex((u: any) => u.email === user.email)
    if (userIndex !== -1) {
      adminData[userIndex] = updatedUser
    } else {
      adminData.push(updatedUser)
    }
    localStorage.setItem("kaushalsaathi_admin_users", JSON.stringify(adminData))
  }

  const handleCancel = () => {
    setFormData({
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      gender: user.gender || "",
      education: user.education || "",
      field: user.field || "",
      profilePic: user.profilePic || "",
    })
    setIsEditing(false)
  }

  const handleProfilePicChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({ ...formData, profilePic: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  if (!user) {
    return <div>Loading...</div>
  }

  // Get fallback letter
  const getInitial = () => {
    if (formData.name) return formData.name.charAt(0).toUpperCase()
    if (formData.email) return formData.email.charAt(0).toUpperCase()
    return "U"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-6 w-6 text-primary" />
                My Profile
              </CardTitle>
              <CardDescription>Manage your account information and preferences</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Profile Picture */}
              <div className="flex flex-col items-center">
                {formData.profilePic ? (
                  <img
                    src={formData.profilePic}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-2 border-primary"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                    {getInitial()}
                  </div>
                )}

                {isEditing && (
                  <div className="mt-3 flex items-center gap-2">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleProfilePicChange}
                      className="cursor-pointer"
                    />
                    <Camera className="h-5 w-5 text-muted-foreground" />
                  </div>
                )}
              </div>

              {/* Edit / Save Buttons */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                {!isEditing ? (
                  <Button onClick={() => setIsEditing(true)} variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button onClick={handleSave} size="sm">
                      <Save className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button onClick={handleCancel} variant="outline" size="sm">
                      <X className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                )}
              </div>

              {/* User Info Fields */}
              <div className="grid gap-4">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  {isEditing ? (
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>{user.name || "Not provided"}</span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{user.email}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Email cannot be changed</p>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{user.phone || "Not provided"}</span>
                    </div>
                  )}
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  {isEditing ? (
                    <Input
                      id="gender"
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>{user.gender || "Not provided"}</span>
                    </div>
                  )}
                </div>

                {/* Education */}
                <div className="space-y-2">
                  <Label htmlFor="education">Education</Label>
                  {isEditing ? (
                    <Input
                      id="education"
                      value={formData.education}
                      onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span>{user.education || "Not provided"}</span>
                    </div>
                  )}
                </div>

                {/* Field */}
                <div className="space-y-2">
                  <Label htmlFor="field">Interested Field</Label>
                  {isEditing ? (
                    <Input
                      id="field"
                      value={formData.field}
                      onChange={(e) => setFormData({ ...formData, field: e.target.value })}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span>{user.field || "Not provided"}</span>
                    </div>
                  )}
                </div>

                {/* Member Since */}
                <div className="space-y-2">
                  <Label>Member Since</Label>
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {user.registrationTime
                        ? new Date(user.registrationTime).toLocaleDateString()
                        : user.loginTime
                        ? new Date(user.loginTime).toLocaleDateString()
                        : "Unknown"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
