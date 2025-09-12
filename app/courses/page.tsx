import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Users, Award, Briefcase, Star } from "lucide-react"

const domains = [
  {
    id: "digital-marketing",
    title: "Digital Marketing & Social Media",
    description: "Master online marketing strategies, social media management, and digital advertising",
    icon: "📱",
    duration: "2-6 months",
    level: "Beginner to Advanced",
  },
  {
    id: "influencer-marketing",
    title: "Influencer Marketing",
    description: "Learn to build personal brand and monetize your social media presence",
    icon: "🌟",
    duration: "2-6 months",
    level: "Beginner to Advanced",
  },
  {
    id: "makeup-beauty",
    title: "Makeup & Beauty",
    description: "Professional makeup techniques, beauty consulting, and business setup",
    icon: "💄",
    duration: "2-6 months",
    level: "Beginner to Advanced",
  },
  {
    id: "interior-designing",
    title: "Interior Designing",
    description: "Space planning, design principles, and client consultation skills",
    icon: "🏠",
    duration: "2-6 months",
    level: "Beginner to Advanced",
  },
  {
    id: "fashion-designing",
    title: "Fashion Designing",
    description: "Fashion illustration, garment construction, and trend forecasting",
    icon: "👗",
    duration: "2-6 months",
    level: "Beginner to Advanced",
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship & Business",
    description: "Business planning, startup strategies, and financial management",
    icon: "💼",
    duration: "2-6 months",
    level: "Beginner to Advanced",
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-muted/50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your <span className="text-primary">Learning Path</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Enroll → Learn → Practice → Get Certified → Advance
          </p>
        </div>
      </section>

      {/* Course Offerings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Free Course */}
            <Card className="relative overflow-hidden border-primary/20 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-white">MOST POPULAR</Badge>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-primary">FREE 2-Month Course</CardTitle>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-foreground">FREE</span>
                  <span className="text-lg text-muted-foreground line-through">₹3,000</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Real-world internship experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Certificate of Completion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>LOR (Letter of Recommendation)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Flexible online learning</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  <Link href="/register?course=free">
                    Join Now - FREE <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Advanced Course */}
            <Card className="relative overflow-hidden border-secondary/20 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-secondary text-white">
                  ADVANCED
                </Badge>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-secondary">ADVANCED 6-Month Course</CardTitle>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-foreground">₹4,999</span>
                  <span className="text-lg text-muted-foreground line-through">₹10,000</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Deep practical training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Professional Certification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Job Placement Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Access to premium resources</span>
                  </div>
                </div>
                <Button asChild variant="secondary" className="w-full text-lg py-6">
                  <Link href="/register?course=advanced">
                    Enroll Now - Only ₹4,999 <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Domains */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Popular Domains</h2>
            <p className="text-xl text-muted-foreground">Click on any domain to see the complete learning roadmap</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain) => (
              <Card
                key={domain.id}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-primary/10 hover:border-primary/30"
              >
                <Link href={`/courses/${domain.id}`}>
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {domain.icon}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {domain.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <p className="text-muted-foreground">{domain.description}</p>
                    <div className="flex justify-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{domain.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-accent" />
                        <span>{domain.level}</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <span className="text-primary font-medium group-hover:underline">View Complete Roadmap →</span>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Your Learning Journey</h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {[
              { step: "1", title: "Enroll", desc: "Choose your course", icon: Users },
              { step: "2", title: "Learn", desc: "Study with experts", icon: Clock },
              { step: "3", title: "Practice", desc: "Gain real experience", icon: Briefcase },
              { step: "4", title: "Get Certified", desc: "Earn your certificate", icon: Award },
              { step: "5", title: "Advance", desc: "Upskill & apply knowledge in real life", icon: Star },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {item.step}
                </div>
                <item.icon className="h-8 w-8 text-primary mb-2" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
                {index < 4 && (
                  <ArrowRight className="h-6 w-6 text-primary mt-4 hidden md:block rotate-90 md:rotate-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
