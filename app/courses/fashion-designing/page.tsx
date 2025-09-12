import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Clock, Scissors, Palette, TrendingUp, Shirt } from "lucide-react"

export default function FashionDesigningPage() {
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
            <div className="text-6xl mb-6">👗</div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Fashion Designing</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Master fashion illustration, garment construction, trend forecasting, and build your fashion brand from
              scratch.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-primary text-white">Creative Industry</Badge>
              <Badge variant="secondary">Global Market</Badge>
              <Badge className="bg-accent text-white">₹40,000+ Potential Income</Badge>
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
                    <h4 className="font-semibold text-lg">Month 1: Design Basics</h4>
                    <ul className="space-y-2 mt-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Fashion Design Fundamentals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Fashion Illustration Basics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Color & Fabric Knowledge</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Basic Pattern Making</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-semibold text-lg">Month 2: Practical Skills</h4>
                    <ul className="space-y-2 mt-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Basic Garment Construction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Fashion Trend Analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Fashion Business Basics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Portfolio Creation</span>
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
                        <span>Advanced Fashion Illustration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Professional Pattern Making</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Draping & Fitting Techniques</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-semibold text-lg">Months 3-4: Specialization</h4>
                    <ul className="space-y-2 mt-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Couture & Ready-to-Wear</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Fashion Merchandising</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Sustainable Fashion Design</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-lg">Months 5-6: Brand Building</h4>
                    <ul className="space-y-2 mt-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span>Fashion Brand Development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span>Fashion Show Production</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span>Digital Fashion Marketing</span>
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
                <Scissors className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fashion Designer</h3>
                <p className="text-muted-foreground mb-4">₹20,000 - ₹60,000/month</p>
                <p className="text-sm text-muted-foreground">
                  Create original clothing designs for brands or your own label
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Palette className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fashion Stylist</h3>
                <p className="text-muted-foreground mb-4">₹25,000 - ₹75,000/month</p>
                <p className="text-sm text-muted-foreground">
                  Style clients for events, photoshoots, and personal wardrobes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Shirt className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fashion Entrepreneur</h3>
                <p className="text-muted-foreground mb-4">₹50,000 - ₹3,00,000/month</p>
                <p className="text-sm text-muted-foreground">Launch your own fashion brand or boutique business</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Fashion Magic?</h2>
          <p className="text-xl mb-8 opacity-90">Turn your creative vision into a successful fashion career</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/register?course=free&domain=fashion-designing">Start Free Course</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="/register?course=advanced&domain=fashion-designing">Enroll in Advanced Course</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
