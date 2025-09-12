import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Heart, Award, Globe, Briefcase } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-muted/50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">KaushalSaathi</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto text-pretty">
            At KaushalSaathi, we are committed to empowering women across India through flexible, remote learning. Our
            goal is to equip homemakers, aspiring professionals, and creative minds with the skills to turn passion into
            a profession.
          </p>

          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8">
            <blockquote className="text-2xl md:text-3xl font-semibold text-foreground italic">
              "When women grow, families thrive, and societies progress."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-primary/20 p-8">
              <CardContent className="pt-0">
                <Target className="h-12 w-12 text-primary mb-6" />
                <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To create self-reliant communities by providing accessible skill development and digital training. We
                  bridge the gap between learning and livelihood, ensuring every woman has the opportunity to achieve
                  financial independence and personal growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 p-8">
              <CardContent className="pt-0">
                <Heart className="h-12 w-12 text-secondary mb-6" />
                <h2 className="text-3xl font-bold mb-4 text-secondary">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower women and youth through knowledge, technology, and opportunities. We envision a future
                  where every woman in India has access to quality education and the skills needed to thrive in the
                  digital economy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground">Comprehensive support for your learning journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Remote Access</h3>
                <p className="text-muted-foreground">Learn from anywhere in India with our flexible online platform</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Flexible Timing</h3>
                <p className="text-muted-foreground">
                  Designed for women of all backgrounds with family-friendly schedules
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Industry Experts</h3>
                <p className="text-muted-foreground">Learn from experienced professionals with proven track records</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lifestyle Enhancement</h3>
                <p className="text-muted-foreground">Make every day better</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Job-Readiness Training</h3>
                <p className="text-muted-foreground">Complete preparation for entering the professional workforce</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Empowerment-Driven</h3>
                <p className="text-muted-foreground">
                  Curriculum designed specifically for women's empowerment and growth
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Our Impact</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Women Empowered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">15+</div>
              <div className="text-muted-foreground">Expert Mentors</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">36</div>
              <div className="text-muted-foreground">States Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Powered By */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-8">Powered by Sunsys Techsol Pvt. Ltd.</h2>
          <p className="text-lg text-muted-foreground">
            KaushalSaathi is backed by Sunsys Techsol, a leading technology company committed to digital transformation
            and empowerment initiatives across India.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
