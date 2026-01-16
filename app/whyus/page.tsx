"use client";

import Image from "next/image";

export default function WhyUsSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Image */}
        <div className="relative flex justify-center items-center">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#E1FFBB] rounded-tl-[60px] rounded-br-[60px]"></div>

          <Image
            src="/logos/whyb.jpg"
            alt="Students discussing learning"
            width={550}
            height={400}
            className="relative rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#001A6E] leading-snug mb-4">
            Why we are best <br />
            <span className="text-[#009990]">from others?</span>
          </h2>

          <p className="text-gray-700 mb-10 leading-relaxed max-w-lg">
            Education that empowers skills that last a lifetime. Join the best
            platform for learning, unlock your potential with us. Your career
            growth begins here — transform your future today and build the
            future you deserve.
          </p>

          <div className="space-y-4">
            
            {/* Card 1 */}
            <div className="flex items-start gap-4 bg-[#E1FFBB] border border-[#009990]/40 rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-center bg-[#009990] text-white font-bold rounded-full h-8 w-8 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-[#001A6E] text-lg">
                  Discover Courses
                </h3>
                <p className="text-gray-700 text-sm mt-1">
                  Your journey begins with just one click — from basics to pro,
                  whatever your goal, start something great anytime, anywhere.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4 border border-gray-200 rounded-lg p-4 hover:border-[#009990]/60 transition-all">
              <div className="flex items-center justify-center bg-[#E1FFBB] text-[#001A6E] font-bold rounded-full h-8 w-8 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-[#001A6E] text-lg">
                  Flexible Course Plan
                </h3>
                <p className="text-gray-700 text-sm mt-1">
                  Learn at your own pace — access structured lessons designed
                  for balance and flexibility.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4 border border-gray-200 rounded-lg p-4 hover:border-[#009990]/60 transition-all">
              <div className="flex items-center justify-center bg-[#E1FFBB] text-[#001A6E] font-bold rounded-full h-8 w-8 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-[#001A6E] text-lg">
                  Best Class Instructors
                </h3>
                <p className="text-gray-700 text-sm mt-1">
                  Learn from experienced mentors who guide you every step of the
                  way toward success.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex items-start gap-4 border border-gray-200 rounded-lg p-4 hover:border-[#009990]/60 transition-all">
              <div className="flex items-center justify-center bg-[#E1FFBB] text-[#001A6E] font-bold rounded-full h-8 w-8 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold text-[#001A6E] text-lg">
                  Align Skills & Goals
                </h3>
                <p className="text-gray-700 text-sm mt-1">
                  Build skills that match your aspirations — turn learning into
                  real-world growth and achievement.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
