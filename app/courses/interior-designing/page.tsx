import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Clock, Home, Ruler, TrendingUp, Lightbulb } from "lucide-react"

export default function InteriorDesigningPage() {
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
            <div className="text-6xl mb-6">🏠</div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Interior Designing</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Learn space planning, design principles, and client consultation skills to create beautiful, functional
              interiors.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-primary text-white">Creative Field</Badge>
              <Badge variant="secondary">High Growth</Badge>
              <Badge className="bg-accent text-white">₹35,000+ Average Income</Badge>
            </div>
          </div>
        </div>
      </section>

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
                    <h4 className="font-semibold text-lg">Month 1: Design Fundamentals</h4>
                    <ul className="space-y-2 mt-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Interior Design Principles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Color Theory & Psychology</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Space Planning Basics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Furniture & Layout Planning</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-semibold text-lg">Month 2: Practical Application</h4>
                    <ul className="space-y-2 mt-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Room Design Projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Client Consultation Basics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Budget Planning & Costing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Portfolio Development</span>
                      </li>
                    </ul>
                  </div>
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
                    <h4 className="font-semibold text-lg">Months 1-2: Advanced Design</h4>
                    <ul className="space-y-2 mt-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Advanced Space Planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>3D Design Software (SketchUp)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Lighting Design & Planning</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-semibold text-lg">Months 3-4: Specialization</h4>
                    <ul className="space-y-2 mt-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Residential Design Mastery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Commercial Space Design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Sustainable Design Practices</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-lg">Months 5-6: Business & Practice</h4>
                    <ul className="space-y-2 mt-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span>Interior Design Business Setup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span>Project Management & Execution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span>Professional Portfolio & Marketing</span>
                      </li>
                    </ul>
                  </div>
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
                <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Residential Designer</h3>
                <p className="text-muted-foreground mb-4">₹25,000 - ₹60,000/month</p>
                <p className="text-sm text-muted-foreground">
                  Design beautiful homes and residential spaces for families
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Ruler className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Freelance Interior Consultant</h3>
                <p className="text-muted-foreground mb-4">₹30,000 - ₹80,000/month</p>
                <p className="text-sm text-muted-foreground">
                  Provide design consultation services to multiple clients
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Design Studio Owner</h3>
                <p className="text-muted-foreground mb-4">₹60,000 - ₹2,00,000/month</p>
                <p className="text-sm text-muted-foreground">Start and manage your own interior design studio</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Design Beautiful Spaces?</h2>
          <p className="text-xl mb-8 opacity-90">Transform spaces and lives with professional interior design skills</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/register?course=free&domain=interior-designing">Start Free Course</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="/register?course=advanced&domain=interior-designing">Enroll in Advanced Course</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
