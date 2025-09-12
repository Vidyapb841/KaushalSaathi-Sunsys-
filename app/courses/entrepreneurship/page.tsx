import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Clock, Briefcase, Target, TrendingUp, DollarSign } from "lucide-react"

export default function EntrepreneurshipPage() {
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
            <div className="text-6xl mb-6">💼</div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Entrepreneurship & Business</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Learn business planning, startup strategies, financial management, and turn your ideas into profitable
              ventures.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-primary text-white">Leadership Skills</Badge>
              <Badge variant="secondary">Business Growth</Badge>
              <Badge className="bg-accent text-white">Unlimited Income Potential</Badge>
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
                    <h4 className="font-semibold text-lg">Month 1: Business Foundations</h4>
                    <ul className="space-y-2 mt-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Entrepreneurship Fundamentals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Business Idea Validation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Market Research Basics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Basic Business Planning</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-semibold text-lg">Month 2: Launch Preparation</h4>
                    <ul className="space-y-2 mt-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Legal & Registration Basics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Financial Planning Fundamentals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Digital Marketing for Startups</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Business Pitch Development</span>
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
                    <h4 className="font-semibold text-lg">Months 1-2: Advanced Strategy</h4>
                    <ul className="space-y-2 mt-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Advanced Business Strategy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Competitive Analysis & Positioning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Financial Modeling & Projections</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-semibold text-lg">Months 3-4: Operations & Growth</h4>
                    <ul className="space-y-2 mt-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Operations Management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Team Building & Leadership</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Sales & Customer Acquisition</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-lg">Months 5-6: Scale & Investment</h4>
                    <ul className="space-y-2 mt-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span>Funding & Investment Strategies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span>Scaling & Expansion Planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span>Exit Strategies & Succession</span>
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
          <h2 className="text-3xl font-bold text-center mb-12">Business Opportunities</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Startup Founder</h3>
                <p className="text-muted-foreground mb-4">₹30,000 - ₹5,00,000+/month</p>
                <p className="text-sm text-muted-foreground">Launch and scale your own innovative business venture</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Business Consultant</h3>
                <p className="text-muted-foreground mb-4">₹40,000 - ₹1,50,000/month</p>
                <p className="text-sm text-muted-foreground">
                  Help other businesses grow and solve strategic challenges
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <DollarSign className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Franchise Owner</h3>
                <p className="text-muted-foreground mb-4">₹50,000 - ₹2,00,000/month</p>
                <p className="text-sm text-muted-foreground">Invest in and manage established franchise businesses</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Business Empire?</h2>
          <p className="text-xl mb-8 opacity-90">Transform your ideas into profitable ventures with expert guidance</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/register?course=free&domain=entrepreneurship">Start Free Course</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="/register?course=advanced&domain=entrepreneurship">Enroll in Advanced Course</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
