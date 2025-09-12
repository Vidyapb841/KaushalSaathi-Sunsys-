"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Users, Clock, Award, Briefcase } from "lucide-react"

const courseDetails = {
  free: {
    title: "FREE 2-Month Course",
    price: "FREE",
    originalPrice: "₹3,000",
    features: [
      "Real-world internship experience",
      "Certificate of Completion",
      "Letter of Recommendation",
      "Flexible online learning",
      "Basic portfolio development",
    ],
    color: "primary",
  },
  advanced: {
    title: "ADVANCED 6-Month Course",
    price: "₹4,999",
    originalPrice: "₹10,000",
    features: [
      "Deep practical training",
      "Professional Certification",
      "LOR + Career Mentorship",
      "Job Placement Support",
      "Access to premium resources",
      "Advanced portfolio development",
    ],
    color: "secondary",
  },
}

const domainNames = {
  "digital-marketing": "Digital Marketing & Social Media",
  "influencer-marketing": "Influencer Marketing",
  "makeup-beauty": "Makeup & Beauty",
  "interior-designing": "Interior Designing",
  "fashion-designing": "Fashion Designing",
  entrepreneurship: "Entrepreneurship & Business",
}

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [selectedCourse, setSelectedCourse] = useState(searchParams.get("course") || "free")
  const [selectedDomain, setSelectedDomain] = useState(searchParams.get("domain") || "")
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    education: "",
    experience: "",
    motivation: "",
    availability: "",
    deviceAccess: false,
    internetAccess: false,
    englishProficiency: "",
    agreeTerms: false,
    agreeUpdates: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      // Create user data
      const userData = {
        email: formData.email,
        name: `${formData.firstName} ${formData.lastName}`,
        phone: formData.phone,
        age: formData.age,
        education: formData.education,
        registrationTime: new Date().toISOString(),
        courseType: selectedCourse,
        domain: selectedDomain,
      }

      // Store user session
      localStorage.setItem("kaushalsaathi_user", JSON.stringify(userData))

      // Create course enrollment record
      const courseEnrollment = {
        id: Date.now().toString(),
        courseName: `${courseDetails[selectedCourse as keyof typeof courseDetails].title}`,
        courseType: selectedCourse,
        domain: domainNames[selectedDomain as keyof typeof domainNames] || selectedDomain,
        enrollmentDate: new Date().toISOString(),
        status: "not-started",
        progress: 0,
        completedLessons: 0,
        totalLessons: selectedCourse === "free" ? 15 : 30,
        userDetails: {
          ...formData,
          name: `${formData.firstName} ${formData.lastName}`,
        },
      }

      // Store course enrollment
      const existingCourses = JSON.parse(localStorage.getItem("kaushalsaathi_user_courses") || "[]")
      existingCourses.push(courseEnrollment)
      localStorage.setItem("kaushalsaathi_user_courses", JSON.stringify(existingCourses))

      // Store for admin tracking (using vidyapb2004@gmail.com)
      const adminData = JSON.parse(localStorage.getItem("kaushalsaathi_admin_users") || "[]")
      adminData.push({
        ...userData,
        courseEnrollment,
        formData,
      })
      localStorage.setItem("kaushalsaathi_admin_users", JSON.stringify(adminData))

      // Send confirmation email (simulated - using vidyapb2004@gmail.com)
      console.log(`[EMAIL INTEGRATION] Confirmation email sent to: ${formData.email}`)
      console.log(`[ADMIN EMAIL] New registration notification sent to: vidyapb2004@gmail.com`)
      console.log(`[COURSE TRACKING] User enrolled in: ${courseEnrollment.courseName} - ${courseEnrollment.domain}`)

      setIsLoading(false)
      alert(
        `Registration successful! Welcome to KaushalSaathi ${selectedCourse === "free" ? "FREE" : "ADVANCED"} course in ${domainNames[selectedDomain as keyof typeof domainNames] || "your chosen domain"}. Check your email for confirmation.`,
      )

      // Redirect to home page
      router.push("/home")
    }, 3000)
  }

  const course = courseDetails[selectedCourse as keyof typeof courseDetails]

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-muted/50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/courses" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Courses
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join <span className="text-primary">KaushalSaathi</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Start your journey towards financial independence and personal growth
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Course Selection & Details */}
            <div className="lg:col-span-1 space-y-6">
              {/* Course Selection */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Select Your Course</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedCourse === "free"
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedCourse("free")}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">FREE Course</h3>
                        <Badge className="bg-primary text-white">POPULAR</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">FREE</span>
                        <span className="text-sm text-muted-foreground line-through">₹3,000</span>
                      </div>
                    </div>

                    <div
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedCourse === "advanced"
                          ? "border-secondary bg-secondary/5"
                          : "border-border hover:border-secondary/50"
                      }`}
                      onClick={() => setSelectedCourse("advanced")}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">ADVANCED Course</h3>
                        <Badge variant="secondary">PROFESSIONAL</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-secondary">₹4,999</span>
                        <span className="text-sm text-muted-foreground line-through">₹10,000</span>
                      </div>
                    </div>
                  </div>

                  {/* Domain Selection */}
                  <div className="pt-4 border-t">
                    <Label htmlFor="domain" className="text-base font-medium">
                      Choose Your Domain
                    </Label>
                    <select
                      id="domain"
                      value={selectedDomain}
                      onChange={(e) => setSelectedDomain(e.target.value)}
                      className="w-full mt-2 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select a domain</option>
                      {Object.entries(domainNames).map(([key, name]) => (
                        <option key={key} value={key}>
                          {name}
                        </option>
                      ))}
                    </select>
                  </div>
                </CardContent>
              </Card>

              {/* Course Features */}
              <Card className={`border-${course.color}/20`}>
                <CardHeader>
                  <CardTitle className={`text-xl text-${course.color}`}>What You'll Get</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className={`h-4 w-4 text-${course.color} mt-1 flex-shrink-0`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Eligibility Criteria */}
              <Card className="border-accent/20">
                <CardHeader>
                  <CardTitle className="text-xl text-accent">Eligibility Criteria</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <Users className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Age: 18-45 years (women preferred)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Minimum 10th grade education</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>5-10 hours/week availability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Briefcase className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Basic English communication</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Registration Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Registration Form</CardTitle>
                  <p className="text-muted-foreground">
                    Please fill in all required details to complete your registration
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Personal Information</h3>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Enter your first name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Enter your last name"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email address"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="age">Age *</Label>
                          <Input
                            id="age"
                            name="age"
                            type="number"
                            min="18"
                            max="45"
                            value={formData.age}
                            onChange={handleInputChange}
                            placeholder="Enter your age"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="education">Highest Education *</Label>
                          <select
                            id="education"
                            name="education"
                            value={formData.education}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                          >
                            <option value="">Select education level</option>
                            <option value="10th">10th Grade</option>
                            <option value="12th">12th Grade</option>
                            <option value="diploma">Diploma</option>
                            <option value="graduate">Graduate</option>
                            <option value="postgraduate">Post Graduate</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Background Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Background Information</h3>

                      <div>
                        <Label htmlFor="experience">Previous Experience (if any)</Label>
                        <Textarea
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          placeholder="Describe any relevant work experience, skills, or projects"
                          rows={3}
                        />
                      </div>

                      <div>
                        <Label htmlFor="motivation">Why do you want to join this course? *</Label>
                        <Textarea
                          id="motivation"
                          name="motivation"
                          value={formData.motivation}
                          onChange={handleInputChange}
                          placeholder="Tell us about your goals and what you hope to achieve"
                          rows={3}
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="availability">Weekly Availability *</Label>
                          <select
                            id="availability"
                            name="availability"
                            value={formData.availability}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                          >
                            <option value="">Select availability</option>
                            <option value="5-10">5-10 hours/week</option>
                            <option value="10-15">10-15 hours/week</option>
                            <option value="15-20">15-20 hours/week</option>
                            <option value="20+">20+ hours/week</option>
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="englishProficiency">English Proficiency *</Label>
                          <select
                            id="englishProficiency"
                            name="englishProficiency"
                            value={formData.englishProficiency}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                          >
                            <option value="">Select proficiency</option>
                            <option value="basic">Basic</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                            <option value="fluent">Fluent</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Technical Requirements */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Technical Requirements</h3>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="deviceAccess"
                            checked={formData.deviceAccess}
                            onCheckedChange={(checked) => handleCheckboxChange("deviceAccess", checked as boolean)}
                          />
                          <Label htmlFor="deviceAccess" className="text-sm">
                            I have access to a computer/laptop/smartphone for online learning *
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="internetAccess"
                            checked={formData.internetAccess}
                            onCheckedChange={(checked) => handleCheckboxChange("internetAccess", checked as boolean)}
                          />
                          <Label htmlFor="internetAccess" className="text-sm">
                            I have reliable internet connection for video classes and assignments *
                          </Label>
                        </div>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Terms & Conditions</h3>

                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="agreeTerms"
                            checked={formData.agreeTerms}
                            onCheckedChange={(checked) => handleCheckboxChange("agreeTerms", checked as boolean)}
                          />
                          <Label htmlFor="agreeTerms" className="text-sm">
                            I agree to the{" "}
                            <Link href="#" className="text-primary hover:underline">
                              Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="#" className="text-primary hover:underline">
                              Privacy Policy
                            </Link>{" "}
                            *
                          </Label>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="agreeUpdates"
                            checked={formData.agreeUpdates}
                            onCheckedChange={(checked) => handleCheckboxChange("agreeUpdates", checked as boolean)}
                          />
                          <Label htmlFor="agreeUpdates" className="text-sm">
                            I agree to receive course updates, announcements, and promotional materials via email and
                            SMS
                          </Label>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button
                        type="submit"
                        className={`w-full text-lg py-6 bg-${course.color} hover:bg-${course.color}/90`}
                        disabled={
                          isLoading || !formData.agreeTerms || !formData.deviceAccess || !formData.internetAccess
                        }
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Processing Registration...
                          </>
                        ) : (
                          `Complete Registration - ${course.price}`
                        )}
                      </Button>

                      {selectedCourse === "advanced" && (
                        <p className="text-center text-sm text-muted-foreground mt-2">
                          Payment will be processed after form submission
                        </p>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
