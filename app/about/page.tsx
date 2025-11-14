import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Award, Globe, Briefcase } from "lucide-react";
import WhyUsSection from "../whyus/page";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-muted/20">
      <Navigation />

      {/* Hero Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">KaushalSaathi</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Empowering Women through Multi‑Skilling, Career Growth & Lifestyle
            Enhancement
          </p>
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl p-6">
            <blockquote className="text-2xl font-semibold text-foreground italic">
              "When women grow, families thrive, and societies progress."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            🌟 Overview
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong>KaushalSaathi</strong>, an initiative by{" "}
            <a
              href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A107474202&keywords=SunsysTechsol%20Pvt.%20Ltd."
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Sunsys Techsol Pvt. Ltd.
            </a>
            , is a women-focused platform dedicated to multi-skilling, career
            empowerment, and lifestyle enhancement. We help women develop
            professional abilities, gain financial independence, and lead
            fulfilling lives. Through structured learning, real-world exposure,
            and guided mentorship, KaushalSaathi bridges the gap between
            education and employability — empowering women to grow both
            professionally and personally.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="p-6 border border-muted bg-white">
            <CardContent className="pt-0">
              <Target className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-primary">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To enable women from diverse backgrounds to acquire practical
                skills, unlock their potential, and achieve balance between
                career ambitions and lifestyle aspirations.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 border border-muted bg-white">
            <CardContent className="pt-0">
              <Heart className="h-10 w-10 text-secondary mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-secondary">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become India’s most trusted and impactful women’s
                multi-skilling and empowerment platform, supporting women
                through every stage — from education to employment to
                entrepreneurship.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team & Mentorship */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            👩‍💼 Our Team & Mentorship
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Behind KaushalSaathi is a passionate and purpose-driven team
            committed to meaningful change through skill-based empowerment.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Our core team —{" "}
            <a
              href="https://www.linkedin.com/in/vidya-p-b-03955a25b/"
              className="text-primary underline"
              target="_blank"
            >
              Vidya P. B
            </a>{" "}
            (
            <a
              href="https://www.kitcoek.in/"
              target="_blank"
              className="underline"
            >
              KIT
            </a>
            ),{" "}
            <a
              href="https://www.linkedin.com/in/yogesh-lokhande-1b0b4029a/"
              className="text-primary underline"
              target="_blank"
            >
              Yogesh Sadanand Lokhande
            </a>{" "}
            (
            <a
              href="https://www.mitacsc.ac.in/"
              target="_blank"
              className="underline"
            >
              MIT ACS College
            </a>
            ),{" "}
            <a
              href="https://www.linkedin.com/in/divya-bhogawade-264194253/"
              className="text-primary underline"
              target="_blank"
            >
              Divya Bhogawade
            </a>{" "}
            (
            <a
              href="https://svims-pune.edu.in/"
              target="_blank"
              className="underline"
            >
              SVIMSG
            </a>
            )
          </p>
          <p className="text-lg text-muted-foreground">
            Guided by{" "}
            <a
              href="https://www.linkedin.com/in/ashwanigarg-chro/"
              className="text-primary underline"
              target="_blank"
            >
              Ashwani Garg
            </a>
            , CHRO at{" "}
            <a
              href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A107474202&keywords=SunsysTechsol%20Pvt.%20Ltd."
              target="_blank"
              className="text-primary underline"
            >
              Sunsys Techsol Pvt. Ltd.
            </a>
            , whose leadership drives KaushalSaathi's vision and evolution.
          </p>
        </div>
      </section>

      {/* Why KaushalSaathi */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            💫 Why KaushalSaathi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <ul className="text-lg text-muted-foreground list-disc list-inside space-y-3">
              <li>
                Dedicated to women’s skill empowerment and career development
              </li>
              <li>
                Focuses equally on personal growth and lifestyle enrichment
              </li>
              <li>
                Offers expert mentorship and real-world project experience
              </li>
            </ul>
            <ul className="text-lg text-muted-foreground list-disc list-inside space-y-3">
              <li>
                Encourages confidence, independence, and continuous learning
              </li>
              <li>
                Builds a community of strong, skilled, and future-ready women
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            🚀 Join the Movement
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you’re a student, homemaker, or working professional,
            KaushalSaathi is your partner in transformation. Step into a world
            of learning, growth, and empowerment — where every woman is inspired
            to be skilled, confident, and unstoppable.
          </p>
        </div>
      </section>

      {/* Powered By */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-foreground mb-2">
            Powered by{" "}
            <a
              href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A107474202&keywords=SunsysTechsol%20Pvt.%20Ltd."
              target="_blank"
              className="text-primary underline"
            >
              Sunsys Techsol Pvt. Ltd.
            </a>
          </h2>
          <p className="text-lg text-muted-foreground">
            KaushalSaathi is backed by Sunsys Techsol, a leading technology
            company committed to digital transformation and empowerment
            initiatives across India.
          </p>
        </div>
      </section>
      <WhyUsSection />
      <Footer />
    </div>
  );


}
