"use client";

import Link from "next/link";
import { Linkedin, Instagram, Twitter, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#001A6E] text-white py-14 px-4 sm:px-8 border-t border-[#074799]/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Column 1 - Brand Info */}
        <div className="col-span-2">
          <h2 className="text-2xl font-bold text-[#E1FFBB] mb-3">
            KaushalSaathi
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed text-sm">
            Education that empowers skills that last. <br />
            Join the best platform for career growth and digital learning.
          </p>
          <p className="text-sm text-gray-400 mb-3">Join our social media</p>
          <div className="flex space-x-3 mt-3">
            <a
              href="https://www.linkedin.com/company/kaushalsaathi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
            >
              <Linkedin className="h-5 w-5" style={{ color: "#0A66C2" }} />
            </a>
            <a
              href="https://www.instagram.com/sunsystechsol"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
            >
              <Instagram className="h-5 w-5" style={{ color: "#E1306C" }} />
            </a>
            <a
              href="https://twitter.com/sunsystechsol"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
            >
              <Twitter className="h-5 w-5" style={{ color: "#1DA1F2" }} />
            </a>
          </div>
        </div>

        {/* Column 2 - Home */}
        <div>
          <h3 className="text-[#E1FFBB] font-semibold mb-3 text-lg">Home</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/about" className="hover:text-[#009990]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-[#009990]">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-[#009990]">
                Features
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#009990]">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Quick Links */}
        <div>
          <h3 className="text-[#E1FFBB] font-semibold mb-3 text-lg">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="#" className="hover:text-[#009990]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#009990]">
                Discussion
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#009990]">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#009990]">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Resources */}
        <div>
          <h3 className="text-[#E1FFBB] font-semibold mb-3 text-lg">
            Resources
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="#" className="hover:text-[#009990]">
                Feedback
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#009990]">
                Support
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#009990]">
                Community
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#009990]">
                Guides
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 5 - Contact */}
        <div>
          <h3 className="text-[#E1FFBB] font-semibold mb-3 text-lg">
            Contact Us
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#009990]" />
              <span>admin@kaushalsaathi.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#009990]" />
              <span>9105837321 </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-10 border-t border-[#074799]/40 pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-400">
        <p>Copyright © KaushalSaathi. All Rights Reserved.</p>
        <div className="flex gap-6 mt-3 md:mt-0">
          <Link href="#" className="hover:text-[#009990]">
            Privacy
          </Link>
          <Link href="#" className="hover:text-[#009990]">
            Security
          </Link>
          <Link href="#" className="hover:text-[#009990]">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
