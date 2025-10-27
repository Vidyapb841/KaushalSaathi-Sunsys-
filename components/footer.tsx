"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4">
        {/* Top Section: Contact | Powered By | Social */}
        <div className="grid grid-cols-3 items-center gap-2 text-xs sm:text-sm">
          
          {/* Contact Info - Left */}
          <div className="flex flex-col items-start space-y-0.5">
            <p className="font-semibold">Contact Us:</p>
            <p>info@kaushalsaathi.com</p>
            <p>admin@kaushalsaathi.com</p>
          </div>

          {/* Powered By - Center */}
          <div className="flex flex-col items-center space-y-1">
            <p className="opacity-80 text-sm">Powered by</p>
            <a
              href="http://www.sunsysglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2"
            >
              <div className="flex items-center gap-3">
                {/* Enlarged Sunsys logo */}
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-28%20at%2017.35.46_ad39b6ae.jpg-VrhYLWOIONEzRpB4xwJQ92eD9YcpCJ.jpeg"
                  alt="Sunsys Techsol Pvt. Ltd."
                  className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
                {/* LinkedIn Icon beside logo */}
                <a
                  href="https://www.linkedin.com/company/sunsystechsol-pvt-ltd/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                  title="Visit Sunsys LinkedIn"
                >
                  <Linkedin className="h-5 w-5" style={{ color: "#0A66C2" }} />
                </a>
              </div>
              <span className="font-bold text-base opacity-90 leading-tight text-center">
                Sunsys Techsol Pvt. Ltd.
              </span>
            </a>
          </div>

          {/* Social Links - Right */}
          <div className="flex justify-end space-x-3">
            {[
              { Icon: Linkedin, link: "https://www.linkedin.com/company/kaushalsaathi/", color: "#0A66C2" },
              { Icon: Instagram, link: "https://www.instagram.com/sunsystechsol", color: "#E1306C" },
              { Icon: Twitter, link: "https://twitter.com/sunsystechsol", color: "#1DA1F2" },
            ].map(({ Icon, link, color }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
              >
                <Icon className="h-6 w-6" style={{ color }} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-3 pt-2 text-center text-xs opacity-80">
          © 2025 KaushalSaathi. All Rights Reserved. |{" "}
          <Link href="#" className="hover:underline">Privacy Policy</Link> |{" "}
          <Link href="#" className="hover:underline">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
