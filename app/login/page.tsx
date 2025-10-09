"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || "Login failed")
      }

      localStorage.setItem("token", data.token)
      router.push("/home")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4 relative">

      {/* Left Logos */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        <a href="https://chalosaathi.com" target="_blank" rel="noopener noreferrer">
          <img src="/logos/chalosaathi.jpg" alt="ChaloSaathi" className="w-16 h-16 object-contain" />
        </a>
        <a href="https://internsaathi.com" target="_blank" rel="noopener noreferrer">
          <img src="/logos/internsaathi.jpg" alt="InternSaathi" className="w-16 h-16 object-contain" />
        </a>
      </div>

      {/* Right Logos */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        <a href="https://naukrisaathi.com" target="_blank" rel="noopener noreferrer">
          <img src="/logos/NAUKRISAATHI-Logo.jpg" alt="NaukriSaathi" className="w-16 h-16 object-contain" />
        </a>
        <a href="https://tasksaathi.com" target="_blank" rel="noopener noreferrer">
          <img src="/logos/task saathi png.png" alt="TaskSaathi" className="w-16 h-16 object-contain" />
        </a>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md z-40">
        <div className="text-center mb-8">
          <img src="/logos/kaushalsaathi.png" alt="KaushalSaathi" className="mx-auto mb-3 w-20 h-20 object-contain" />
          <h1 className="text-3xl font-bold text-primary mb-2">KaushalSaathi</h1>
          <p className="text-muted-foreground">Empowering Women Through Skills</p>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Sign in to continue your learning journey</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" placeholder="Enter your password" required />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm">
                Don’t have an account?{" "}
                <Link href="/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
