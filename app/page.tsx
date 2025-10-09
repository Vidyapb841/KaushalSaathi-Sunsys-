// C:\Koushalsaathi(sunsys)1\app\page.tsx
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import Image from "next/image"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch("/api/auth/session", { cache: "no-store" })
        if (res.ok) {
          const data = await res.json()
          if (data?.user) {
            localStorage.setItem("kaushalsaathi_user", JSON.stringify(data.user))
            router.push("/home")
          }
        }
      } catch {}
    })()
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      if (isLogin) {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        })
        const data = await res.json().catch(() => ({}))
        if (!res.ok) throw new Error(data?.error || data?.message || "Login failed")
        localStorage.setItem("kaushalsaathi_user", JSON.stringify(data.user || data))
        router.push("/home")
      } else {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, name, phone }),
        })
        const data = await res.json().catch(() => ({}))
        if (!res.ok) throw new Error(data?.error || data?.message || "Registration failed")
        localStorage.setItem("kaushalsaathi_user", JSON.stringify(data.user || data))
        router.push("/home")
      }
    } catch (err: any) {
      alert(err.message || "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-start p-4 flex-grow relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/women-empowerment-digital-learning-illustration.png')] bg-cover bg-center opacity-5 pointer-events-none"></div>

      {/* Center Card */}
      <Card className="w-full max-w-md relative z-10 shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center space-y-4">
          {/* Center KaushalSaathi Logo */}
          <div className="flex justify-center">
            <Image
              src="/logos/koushalsaathi.png"
              alt="KaushalSaathi Logo"
              width={120}
              height={120}
              className="h-24 w-auto"
            />
          </div>
          <CardTitle className="text-2xl font-bold text-primary">
            {isLogin ? "Welcome Back" : "Join KaushalSaathi"}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {isLogin
              ? "Sign in to continue your learning journey"
              : "Start your journey of empowerment and skill development"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pl-10 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Please wait..." : isLogin ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-primary hover:underline"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Side Logos */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full mt-6 space-y-4 md:space-y-0 md:px-6 md:absolute md:top-1/4">
        {/* Left Logos */}
        <div className="flex flex-row md:flex-col items-center md:space-y-6 space-x-6 md:space-x-0">
          <a href="https://chalosaathi.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/logos/chalosaathi.jpg"
              alt="Chalo Saathi"
              width={300}
              height={300}
              className="rounded"
            />
          </a>
          <a href="https://internsaathi.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/logos/internsaathi.jpg"
              alt="Intern Saathi"
              width={300}
              height={300}
              className="rounded"
            />
          </a>
        </div>

        {/* Right Logos */}
        <div className="flex flex-row md:flex-col items-center md:space-y-6 space-x-6 md:space-x-0 mt-4 md:mt-0">
          <a href="https://naukrisaathi.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/logos/NAUKRISAATHI-Logo.jpg"
              alt="Naukri Saathi"
              width={300}
              height={300}
              className="rounded"
            />
          </a>
          <a href="https://tasksaathi.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/logos/task saathi png.png"
              alt="Task Saathi"
              width={300}
              height={300}
              className="rounded"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
