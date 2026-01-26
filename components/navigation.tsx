"use client"
export const dynamicParams = true;

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
  const [user, setUser] = useState<any>(null)
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const profileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return;
    
    const loginSuccess = localStorage.getItem("ks_login_success");
    const storedUser = localStorage.getItem("kaushalsaathi_user");

    if (loginSuccess && storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, [isClient])

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
    if (searchQuery.trim() && isClient) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
      setIsOpen(false)
    }
  }

  const handleLogout = () => {
    if (!isClient) return;
    localStorage.removeItem("kaushalsaathi_user")
    localStorage.removeItem("ks_login_success")
    setUser(null)
    router.push("/login")
  }

  if (!isClient) {
    return (
      <nav className="bg-[#001A6E] shadow-lg border-b border-border sticky top-0 z-50 text-white">
        <div className="max-w-7xl mx-auto pl-0 pr-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 shrink-0">
              <div className="h-16 w-64 bg-gray-300 animate-pulse rounded"></div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <div className="h-4 w-16 bg-gray-300 animate-pulse rounded"></div>
              <div className="h-4 w-20 bg-gray-300 animate-pulse rounded"></div>
              <div className="h-10 w-60 bg-gray-300 animate-pulse rounded-full"></div>
              <div className="h-10 w-20 bg-gray-300 animate-pulse rounded"></div>
              <div className="h-10 w-20 bg-gray-300 animate-pulse rounded"></div>
              <div className="h-10 w-24 bg-gray-300 animate-pulse rounded-full"></div>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="bg-[#001A6E] shadow-lg border-b border-border sticky top-0 z-50 animate-fade-in-up text-white">
      <div className="max-w-7xl mx-auto pl-0 pr-6">

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

            {/* HOME */}
            <Link
              href="/home"
              className={cn(
                "text-white hover:text-[#009990] transition-all duration-300 font-medium relative group",
                pathname === "/home" && "text-[#E1FFBB]"
              )}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#009990] transition-all duration-300 group-hover:w-full"></span>
            </Link>

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
            </Link>

            {/* CATEGORIES */}
            <div className="relative group">
              <button className="text-white hover:text-[#009990] transition-all duration-300 font-medium flex items-center space-x-1">
                <span>Categories</span>
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute left-0 top-full mt-2 w-[750px] bg-white text-[#001A6E] shadow-xl rounded-xl p-6 flex opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="w-1/3 border-r pr-4">
                  <ul className="space-y-2 text-sm">
                    <li><a href="/coursepage/front">Frontend Developer Certification</a></li>
                    <li><a href="/coursepage/backend">Backend Developer Certification</a></li>
                    <li><a href="/coursepage/fullstack">Full Stack Developer Program</a></li>
                    <li><a href="/coursepage/ui-ux">UI/UX Design Professional Course</a></li>
                    <li><a href="/coursepage/digitalm">Digital Marketing Certification Program</a></li>
                    <li><a href="/coursepage/devops">DevOps Engineering Certification Course</a></li>
                  </ul>
                </div>
                <div className="w-1/3 border-r px-4">
                  <ul className="space-y-2 text-sm">
                    <li><a href="/coursepage/socialm">Social Media Marketing Course</a></li>
                    <li><a href="/coursepage/fashiond">Fashion Design Certification Course</a></li>
                    <li><a href="/coursepage/interior">Interior Design Certification Course</a></li>
                    <li><a href="/coursepage/makeup">Professional Makeup Artist Course</a></li>
                    <li><a href="coursepage/hr">HR Management Certification</a></li>
                  </ul>
                </div>
                <div className="w-1/3 pl-4">
                  <ul className="space-y-2 text-sm">
                    <li><a href="/coursepage/Marketing">Marketing & Branding Certification Program</a></li>
                    <li><a href="/coursepage/llm">LLM IT Certification Program</a></li>
                    <li><a href="/coursepage/SEO">SEO Certification Program</a></li>
                    <li><a href="/coursepage/salesforce">Salesforce CRM Administration Program</a></li>
                    <li><a href="/coursepage/English">Spoken English & Communication Skills</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SEARCH */}
            <form onSubmit={handleSearch} className="relative w-60">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-[#009990]" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-full bg-white text-[#001A6E]"
              />
            </form>

            <Link href="https://internsaathi.com/" target="_blank">Internship</Link>
            <Link href="https://naukrisaathi.com/" target="_blank">Naukri</Link>

            {!user ? (
              <div className="flex space-x-3">
                <Button asChild><Link href="/login">Login</Link></Button>
                <Button asChild variant="outline"><Link href="/signup">Sign Up</Link></Button>
              </div>
            ) : (
              <div className="relative" ref={profileRef}>
                <button onClick={() => setIsProfileOpen(!isProfileOpen)}>
                  <User className="h-5 w-5 inline mr-1" /> {user.name || "Profile"}
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white text-[#001A6E] rounded-lg shadow-lg">
                    <Link href="/profile">My Profile</Link>
                    <Link href="/settings">Settings</Link>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <Button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        {isOpen && (
          <div className="md:hidden px-3 pt-2 pb-4 space-y-2 bg-[#001A6E] text-white">

            {/* HOME */}
            <Link href="/home" onClick={() => setIsOpen(false)}>Home</Link>

            {/* ABOUT */}
            <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>

            <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="https://internsaathi.com/" target="_blank">Internship</Link>
            <Link href="https://naukrisaathi.com/" target="_blank">Naukri</Link>

            {!user ? (
              <>
                <Link href="/login">Login</Link>
                <Link href="/signup">Sign Up</Link>
              </>
            ) : (
              <>
                <Link href="/profile">My Profile</Link>
                <button onClick={handleLogout}>Logout</button>
              </>
            )}
          </div>
        )}

      </div>
    </nav>
  )
}
