import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Globe, Play } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="space-y-4 animate-fade-in-up flex flex-col justify-start">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse-slow">
                <span className="text-white font-bold">KS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">KaushalSaathi</h3>
                <p className="text-sm opacity-80">Empowering Women Through Skills</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Transforming lives through accessible skill development and digital training across India.
            </p>

            {/* Sunsys Logo */}
            <div className="pt-4 border-t border-white/20">
              <p className="text-xs opacity-80 mb-2">Powered by</p>
              <div className="flex items-center gap-3"></div>
              <a
                href="http://www.sunsysglobal.com" // 🔗 Replace with the actual SunSys website
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-28%20at%2017.35.46_ad39b6ae.jpg-VrhYLWOIONEzRpB4xwJQ92eD9YcpCJ.jpeg"
                alt="Sunsys Techsol Pvt. Ltd."
                className="h-20 w-auto hover:scale-110 transition-transform duration-300"
              />
              <span className="text-sm font-medium text-white opacity-90">
                Sunsys Techsol Pvt. Ltd.
              </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in-up flex flex-col justify-start" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/home" },
                { name: "About Us", href: "/about" },
                { name: "Courses", href: "/courses" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */} 
          <div className="space-y-4 animate-fade-in-up" 
          style={{ animationDelay: "0.2s" }}> 
          <h4 className="text-lg font-semibold">Popular Courses</h4>
           <ul className="space-y-2"> {[ 
            "Digital Marketing", 
            "Influencer Marketing",
            "Makeup & Beauty", 
            "Interior Designing", 
            "Fashion Designing", 
            "Entrepreneurship",
             ].map((course) => ( <li key={course}> 
             <span className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-300">{course}
              
              </span> </li> ))}
               </ul>
                </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in-up flex flex-col justify-start" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 group">
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">+91-0000000</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">info@kaushalsaathi.com</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <MapPin className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">Remote Access</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              {[
                { Icon: Globe, link: "http://www.sunsysglobal.com" },
                { Icon: Facebook, link: "https://www.facebook.com/sunsystechsol" },
                { Icon: Instagram, link: "https://www.instagram.com/sunsystechsol" },
                { Icon: Linkedin, link: "https://www.linkedin.com/company/kaushalsaathi/" },
                { Icon: Play, link: "http://www.youtube.com/@sunsystechsol" },
              ].map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

          </div>

          {/* Optional empty column to balance spacing */}
          <div className="hidden md:block"></div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm opacity-80">
              © 2025 KaushalSaathi. All rights reserved. Powered by Sunsys Techsol Pvt. Ltd.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity duration-300">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-4">
            <p className="text-[13px] text-gray-300 leading-relaxed">
              Disclaimer: The information provided on this platform is for educational and training purposes only. 
              Sunsys Techsol Pvt. Ltd. assumes no responsibility for errors or omissions. 
              Job placements are not guaranteed and outcomes may vary based on individual performance.
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
