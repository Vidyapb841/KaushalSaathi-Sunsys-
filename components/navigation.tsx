"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, User } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Input } from "@/components/ui/input"
export function Navigation() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const profileRef = useRef<HTMLDivElement>(null)

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
      setIsOpen(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("userToken")
    sessionStorage.clear()
    router.push("/login")
  }

  return (
    <nav className="bg-[#001A6E] shadow-lg border-b border-border sticky top-0 z-50 animate-fade-in-up text-white">
      <div className="max-w-7xl mx-auto pl-0 pr-6">

        {/* ================= TOP BAR ================= */}
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link href="/home" className="flex items-center space-x-3 group shrink-0">
            <Image
              src="/logos/ks(new-logo).jpg"
              alt="KaushalSaathi Logo"
              width={320}
              height={200}
              priority
              className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-8">

            {/* ABOUT US */}
            <Link
              href="/about"
              className={cn(
                "text-white hover:text-[#009990] transition-all duration-300 font-medium relative group",
                pathname === "/about" && "text-[#E1FFBB]"
              )}
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#009990] transition-all duration-300 group-hover:w-full"></span>
              {pathname === "/about" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#009990]" />
              )}
            </Link>

            {/* ======================================================
                REPLACED CATEGORIES (MEGA DROPDOWN LIKE SIMPLILEARN)
               ====================================================== */}
            <div className="relative group">
              {/* Trigger */}
              <button className="text-white hover:text-[#009990] transition-all duration-300 font-medium flex items-center space-x-1">
                <span>Categories</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* MEGA MENU PANEL */}
              <div
                className="
                  absolute left-0 top-full mt-2 
                  w-[750px] bg-white text-[#001A6E]
                  shadow-xl rounded-xl p-6 
                  flex opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-300
                "
              >
                {/* LEFT COLUMN */}
  <div className="w-1/3 border-r pr-4">
    <ul className="space-y-2 text-sm">
      <li className="hover:text-[#009990] cursor-pointer">Front End Development</li>
      <li className="hover:text-[#009990] cursor-pointer">Back End Development</li>
      <li className="hover:text-[#009990] cursor-pointer">Full Stack Web Development</li>
      <li className="hover:text-[#009990] cursor-pointer">UI/UX Designing</li>
      <li className="hover:text-[#009990] cursor-pointer">Digital Marketing</li>
      <li className="hover:text-[#009990] cursor-pointer">DevOps</li>
    </ul>
  </div>

  {/* MIDDLE COLUMN */}
  <div className="w-1/3 border-r px-4">
    <ul className="space-y-2 text-sm">
      <li className="hover:text-[#009990] cursor-pointer">Social Media Marketing</li>
      <li className="hover:text-[#009990] cursor-pointer">Fashion Designing</li>
      <li className="hover:text-[#009990] cursor-pointer">Interior Designing</li>
      <li className="hover:text-[#009990] cursor-pointer">Professional Makeup & Hair Artist</li>
      <li className="hover:text-[#009990] cursor-pointer">Human Resource Management</li>
    </ul>
  </div>

  {/* RIGHT COLUMN */}
  <div className="w-1/3 pl-4">
    <ul className="space-y-2 text-sm">
      <li className="hover:text-[#009990] cursor-pointer">Marketing & Branding</li>
      <li className="hover:text-[#009990] cursor-pointer">LIM IT Certification Program</li>
      <li className="hover:text-[#009990] cursor-pointer">SEO (Search Engine Optimization)</li>
      <li className="hover:text-[#009990] cursor-pointer">Salesforce CRM Administration</li>
      <li className="hover:text-[#009990] cursor-pointer">Spoken English & Communication Skills</li>
    </ul>
  </div>
              </div>
            </div>

            {/* SEARCH BAR */}
            <form onSubmit={handleSearch} className="relative w-60">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-[#009990]" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-full bg-white text-[#001A6E] placeholder-gray-500 focus:ring-2 focus:ring-[#009990] border border-[#009990]"
              />
            </form>

            {/* INTERNSHIP LINK */}
            <Link
              href="https://internsaathi.com/"
              target="_blank"
              className="text-white hover:text-[#009990] transition-all duration-300 font-medium relative group"
            >
              Internship
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#009990] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* NAUKRI LINK */}
            <Link
              href="https://naukrisaathi.com/"
              target="_blank"
              className="text-white hover:text-[#009990] transition-all duration-300 font-medium relative group"
            >
              Naukri
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#009990] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* PROFILE DROPDOWN */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 text-white hover:text-[#009990] transition-all duration-300 font-medium"
              >
                <User className="h-5 w-5" />
                <span>Profile</span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-[#001A6E] rounded-lg shadow-lg overflow-hidden border border-gray-200">
                  <Link
                    href="/profile"
                    onClick={() => setIsProfileOpen(false)}
                    className="block px-4 py-2 hover:bg-[#E1FFBB] transition-all"
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/settings"
                    onClick={() => setIsProfileOpen(false)}
                    className="block px-4 py-2 hover:bg-[#E1FFBB] transition-all"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-[#E1FFBB] transition-all"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* LOGIN SIGNUP */}
            <div className="flex space-x-3">
              <Button
                asChild
                className="bg-[#009990] hover:bg-[#074799] text-white rounded-full px-5 transition-all duration-300"
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button
                asChild
                className="bg-transparent border border-[#009990] text-[#E1FFBB] hover:bg-[#009990] hover:text-white rounded-full px-5 transition-all duration-300"
              >
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#009990] transition-transform duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        {isOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3 bg-[#001A6E] rounded-lg mt-2 text-white">
              
              {/* SEARCH */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-[#009990]" />
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full rounded-full bg-white text-[#001A6E] border border-[#009990] focus:ring-2 focus:ring-[#009990]"
                />
              </form>

              {/* ABOUT US */}
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md font-medium hover:text-[#009990] transition-all duration-300",
                  pathname === "/about" && "text-[#E1FFBB]"
                )}
              >
                About Us
              </Link>

              {/* MOBILE CATEGORIES */}
              <div>
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className="w-full flex justify-between items-center px-3 py-2 font-medium hover:text-[#009990] transition-all"
                >
                  Categories
                  <span>{isCategoriesOpen ? "▲" : "▼"}</span>
                </button>

                {isCategoriesOpen && (
                  <div className="ml-4 space-y-1">
                    {[ 
                      { name: "Web Dev", link: "/coursepage/fullstack" },
                      { name: "Design", link: "/courses/design" },
                      { name: "DevOps", link: "/coursepage/devops" },
                      { name: "AI & ML", link: "/courses/ai-ml" },
                      { name: "Soft Skills", link: "/courses/soft-skills" },
                      { name: "Entrepreneurship", link: "/courses/entrepreneurship" },
                    ].map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.link}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm hover:text-[#009990] transition-all"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md font-medium hover:text-[#009990] transition-all duration-300",
                  pathname === "/blog" && "text-[#E1FFBB]"
                )}
              >
                Blog
              </Link>

              <Link
                href="https://internsaathi.com/"
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md font-medium hover:text-[#009990] transition-all duration-300"
              >
                Internship
              </Link>
              <Link
                href="https://naukrisaathi.com/"
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md font-medium hover:text-[#009990] transition-all duration-300"
              >
                Naukri
              </Link>

              {/* PROFILE MOBILE */}
              <div className="pt-2 border-t border-[#009990]">
                <Link
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md font-medium hover:text-[#009990] transition-all duration-300"
                >
                  Profile
                </Link>
                <Link
                  href="/settings"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md font-medium hover:text-[#009990] transition-all duration-300"
                >
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 rounded-md font-medium hover:text-[#009990] transition-all duration-300"
                >
                  Logout
                </button>
              </div>

              {/* LOGIN SIGNUP MOBILE */}
              <div className="flex flex-col space-y-2 pt-2">
                <Button
                  asChild
                  className="bg-[#009990] hover:bg-[#074799] text-white rounded-full w-full"
                >
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button
                  asChild
                  className="bg-transparent border border-[#009990] text-[#E1FFBB] hover:bg-[#009990] hover:text-white rounded-full w-full"
                >
                  <Link href="/signup" onClick={() => setIsOpen(false)}>
                    Sign Up
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}

      </div>
    </nav>
  )
}
