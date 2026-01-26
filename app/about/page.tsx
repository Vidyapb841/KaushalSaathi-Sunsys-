import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, BarChart3, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* =====================================
          TOP SECTION (IMAGE LEFT + TEXT RIGHT)
      ======================================== */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* IMAGE */}
          <div className="relative w-full min-h-[450px] md:min-h-[600px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/logos/LST.png"
              alt="About Banner"
              fill
              priority
              unoptimized={true}
              className="object-cover object-center"
            />
          </div>

          {/* TEXT */}
          <div className="flex flex-col justify-start h-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#001A6E]">
              We Transform Lives by Empowering People Via Digital Skills.
            </h1>

            {/* STATS — VERTICAL */}
            <div className="flex flex-col gap-6 mt-10">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-[#009990]">1M+</p>
                <p className="text-base md:text-lg text-gray-700">
                  Careers Advanced
                </p>
              </div>

              <div>
                <p className="text-4xl md:text-5xl font-bold text-[#009990]">100+</p>
                <p className="text-base md:text-lg text-gray-700">
                  Live classes per month
                </p>
              </div>

              <div>
                <p className="text-4xl md:text-5xl font-bold text-[#009990]">15+</p>
                <p className="text-base md:text-lg text-gray-700">
                  Courses
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================
          WHO WE ARE
      ======================================== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#001A6E] mb-6">
            Who We Are
          </h2>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            KaushalSaathi is a women-centric initiative that uplifts and empowers
            individuals through high-impact digital skills, career pathways,
            and lifestyle growth.
          </p>

          {/* Video placeholder */}
          <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
            <p className="text-gray-600 text-lg">Video Coming Soon</p>
          </div>
        </div>
      </section>

      {/* =====================================
          CORE VALUES WITH ICONS
      ======================================== */}
      <section className="py-16 px-6 bg-[#E1FFBB]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#001A6E] mb-10">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <Card className="bg-[#074799] text-white p-6 rounded-2xl shadow-md">
              <CardContent>
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb size={28} className="text-[#E1FFBB]" />
                  <h3 className="text-2xl font-bold">Entrepreneurship</h3>
                </div>
                <p className="text-gray-200">
                  We embrace innovation and act with agility to seize opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#074799] text-white p-6 rounded-2xl shadow-md">
              <CardContent>
                <div className="flex items-center gap-3 mb-3">
                  <Users size={28} className="text-[#E1FFBB]" />
                  <h3 className="text-2xl font-bold">Teamwork</h3>
                </div>
                <p className="text-gray-200">
                  We collaborate openly, leveraging diverse perspectives to achieve success.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#074799] text-white p-6 rounded-2xl shadow-md">
              <CardContent>
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 size={28} className="text-[#E1FFBB]" />
                  <h3 className="text-2xl font-bold">Data-Driven</h3>
                </div>
                <p className="text-gray-200">
                  We rely on evidence-based insights to make decisions and drive results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#074799] text-white p-6 rounded-2xl shadow-md">
              <CardContent>
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck size={28} className="text-[#E1FFBB]" />
                  <h3 className="text-2xl font-bold">Transparency</h3>
                </div>
                <p className="text-gray-200">
                  We foster trust by communicating openly and being accountable.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* =====================================
          TEAM SECTION
      ======================================== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-[#001A6E] mb-6">
            Meet the Team
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Our leadership and team members are passionate about creating impact
            through skill-building and empowerment.
          </p>

          <p className="text-lg text-gray-600 mb-4">
            Our core team —{" "}
            <a
              href="https://www.linkedin.com/in/vidya-p-b-03955a25b/"
              className="text-[#009990] underline"
              target="_blank"
            >
              Vidya P. B
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/aneek-ghosh-a93127249"
              className="text-[#009990] underline"
              target="_blank"
            >
              Aneek Ghosh
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/anushkajain1712"
              className="text-[#009990] underline"
              target="_blank"
            >
              Anushka Jain
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/yogesh-lokhande-1b0b4029a/"
              className="text-[#009990] underline"
              target="_blank"
            >
              Yogesh Lokhande
            </a>
          </p>

          <p className="text-lg text-gray-600">
            Guided by{" "}
            <a
              href="https://www.linkedin.com/in/ashwanigarg-chro/"
              className="text-[#009990] underline"
              target="_blank"
            >
              Ashwani Garg
            </a>
            , CHRO at Sunsys Techsol Pvt. Ltd.
          </p>

        </div>
      </section>

      {/* =====================================
          PARTNERS
      ======================================== */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-[#001A6E] mb-8">
            Our Partners
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <a
              href="https://chalosaathi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-38 bg-white shadow-md rounded-xl flex items-center justify-center"
            >
              <img
                src="/logos/chalosaathi.jpg"
                alt="ChaloSaathi"
                className="w-44 h-44 object-contain"
              />
            </a>

            <a
              href="https://internsaathi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-38 bg-white shadow-md rounded-xl flex items-center justify-center"
            >
              <img
                src="/logos/internsaathi.jpg"
                alt="InternSaathi"
                className="w-84 h-54 object-contain"
              />
            </a>

            <a
              href="https://naukrisaathi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-38 bg-white shadow-md rounded-xl flex items-center justify-center"
            >
              <img
                src="/logos/NAUKRISAATHI-Logo.jpg"
                alt="NaukriSaathi"
                className="w-44 h-44 object-contain"
              />
            </a>

            <a
              href="https://tasksaathi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-38 bg-white shadow-md rounded-xl flex items-center justify-center"
            >
              <img
                src="/logos/task saathi png.png"
                alt="TaskSaathi"
                className="w-44 h-44 object-contain"
              />
            </a>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
