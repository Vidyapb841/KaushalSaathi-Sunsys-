"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = { email };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send email");

      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (err: any) {
      alert(err?.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#E1FFBB]">
      <Navigation />

      {/* Main Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 overflow-hidden">
        {/* Decorative gradient stripes */}
        <div className="absolute right-0 top-0 h-full w-1 bg-[#009990] rotate-[20deg] translate-x-16 opacity-70"></div>
        <div className="absolute right-8 top-0 h-full w-1 bg-[#074799] rotate-[20deg] translate-x-12 opacity-70"></div>

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E1FFBB] via-[#E1FFBB]/90 to-white opacity-95"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#001A6E] mb-4">
            Membership that brings <br className="hidden sm:block" /> people
            together
          </h1>

          <p className="text-black text-base sm:text-lg leading-relaxed mb-10 font-normal">
            Build lasting relationships, grow together, learn together, find
            your people, find your purpose. <br />
            Share ideas, gain insights, and be supported — every member matters
            here.
          </p>

          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-xl mx-auto relative"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                required
                className="w-full px-5 py-6 pr-36 rounded-md border border-[#074799]/30 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#009990] text-gray-800 placeholder-gray-500 transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="absolute right-1 top-1 bottom-1 bg-[#009990] hover:bg-[#074799] text-white my-3 mx-1 font-semibold px-5 rounded-md transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-10">
              <CheckCircle className="h-14 w-14 text-[#009990] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#001A6E] mb-2">
                Thank You!
              </h3>
              <p className="text-gray-700">
                You’re now part of our growing community. <br />
                Expect awesome updates soon!
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
