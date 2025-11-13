"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgot, setIsForgot] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Check if already logged in - BUT ONLY FOR LOGIN MODE
  useEffect(() => {
    if (!isForgot) { // Only check session if not in forgot password mode
      (async () => {
        try {
          const res = await fetch("/api/auth/session", { cache: "no-store" });
          if (res.ok) {
            const data = await res.json();
            if (data?.user) {
              localStorage.setItem(
                "kaushalsaathi_user",
                JSON.stringify(data.user)
              );
              router.push("/home");
            }
          }
        } catch {}
      })();
    }
  }, [router, isForgot]); // Add isForgot as dependency

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // STEP 4: Forgot Password functionality - FIXED
      if (isForgot) {
        console.log("Sending reset link to:", email);
        
        // Check if backend URL is available
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        if (!backendUrl) {
          alert("Backend URL not configured. Please check your environment variables.");
          setIsLoading(false);
          return;
        }

        const res = await fetch(`${backendUrl}/api/auth/forgot-password`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        console.log("Reset response:", data);
        
        alert(data.message || "Reset link sent to your email!");
        setIsForgot(false); // Go back to login after sending reset link
        setIsLoading(false);
        return; // IMPORTANT: Return here to prevent further execution
      }

      // Login functionality
      if (isLogin) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok)
          throw new Error(data?.error || data?.message || "Login failed");
        localStorage.setItem(
          "kaushalsaathi_user",
          JSON.stringify(data.user || data)
        );
        router.push("/home");
      } else {
        // Registration functionality
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, name, phone }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok)
          throw new Error(
            data?.error || data?.message || "Registration failed"
          );
        localStorage.setItem(
          "kaushalsaathi_user",
          JSON.stringify(data.user || data)
        );
        router.push("/home");
      }
    } catch (err: any) {
      console.error("Submit error:", err);
      alert(err.message || "Something went wrong. Please check if the backend server is running.");
    } finally {
      setIsLoading(false);
    }
  };

  // Reset form when switching modes - BUT KEEP EMAIL
  const handleModeSwitch = (newIsForgot: boolean, newIsLogin: boolean) => {
    setIsForgot(newIsForgot);
    setIsLogin(newIsLogin);
    // Keep the email, but clear other fields
    setPassword("");
    setName("");
    setPhone("");
  };

  // Switch to forgot password mode WITH current email
  const switchToForgotPassword = () => {
    setIsForgot(true);
    // Email is already populated from the login form
  };

  // Switch back to login from forgot password - KEEP EMAIL
  const switchBackToLogin = () => {
    setIsForgot(false);
    setIsLogin(true);
    // Keep the email for login
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#074799] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/women-empowerment-digital-learning-illustration.png')] bg-cover bg-center opacity-10" />

      {/* Card / Panel */}
      <Card className="w-[430px] bg-[#5b92d5] text-white shadow-lg border-white/10 z-10">
        <CardHeader className="text-center space-y-2">
          <Image
            src="/logos/koushalsaathi.png"
            alt="KaushalSaathi"
            width={150}
            height={150}
            className="mx-auto m-4 rounded-xl font-serif"
          />
          <CardTitle className="text-2xl font-semibold text-white">
            {isForgot ? "Forgot Password" : isLogin ? "Sign In" : "Sign Up"}
          </CardTitle>
          <CardDescription className="text-[#E1FFBB]">
            {isForgot
              ? "Reset your password using registered email"
              : isLogin
              ? "Enter your credentials to your learning journey"
              : "Create your account to begin your journey"}
          </CardDescription>
        </CardHeader>

        <CardContent className="text-white">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && !isForgot && (
              <>
                <div>
                  <Label htmlFor="name" className="text-[#E1FFBB]">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-[#009990]" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="pl-9 text-[#001A6E] bg-white"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[#E1FFBB]">
                    Phone
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-[#009990]" />
                    <Input
                      id="phone"
                      type="text"
                      placeholder="Enter your phone number"
                      className="pl-9 text-[#001A6E] bg-white"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <Label htmlFor="email" className="text-[#E1FFBB]">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-[#009990]" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-9 text-[#001A6E] bg-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {!isForgot && (
              <div>
                <Label htmlFor="password" className="text-[#E1FFBB]">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-[#009990]" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-9 pr-9 text-[#001A6E] bg-white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-[#009990]" />
                    ) : (
                      <Eye className="h-4 w-4 text-[#009990]" />
                    )}
                  </div>
                </div>
              </div>
            )}

            {isForgot && (
              <p className="text-sm text-white inline-block px-2 py-1 rounded-md">
                We'll send a reset link to: <strong>{email}</strong>
              </p>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className={`w-full ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              } bg-[#009990] hover:bg-[#074799] text-white`}
            >
              {isLoading
                ? "Loading..."
                : isForgot
                ? "Send Reset Link"
                : isLogin
                ? "Sign In"
                : "Sign Up"}
            </Button>
          </form>

          {/* Divider */}
          {!isForgot && (
            <>
              <div className="flex items-center my-7">
                <div className="flex-1 h-px bg-[#E1FFBB]/40"></div>
                <span className="px-2 text-sm text-white">
                  or continue with
                </span>
                <div className="flex-1 h-px bg-[#E1FFBB]/40"></div>
              </div>

              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 bg-white text-[#001A6E] hover:shadow-md px-4 py-2"
                >
                  <FcGoogle className="h-5 w-5" /> Google
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 px-4 py-2"
                >
                  <FaFacebook className="h-5 w-5 text-white" /> Facebook
                </Button>
              </div>
            </>
          )}

          {/* Links */}
          <div className="text-center text-sm mt-4">
            {!isForgot && isLogin && (
              <button
                type="button"
                className="text-white hover:underline"
                onClick={switchToForgotPassword}
              >
                Forgot Password?
              </button>
            )}
            <div className="mt-2">
              {isForgot ? (
                <button
                  type="button"
                  className="text-[#E1FFBB] hover:underline"
                  onClick={switchBackToLogin}
                >
                  Back to Sign In
                </button>
              ) : isLogin ? (
                <span className="text-white">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="text-[#E1FFBB] hover:underline"
                    onClick={() => handleModeSwitch(false, false)}
                  >
                    Sign Up
                  </button>
                </span>
              ) : (
                <span className="text-white">
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="text-[#E1FFBB] hover-underline"
                    onClick={() => handleModeSwitch(false, true)}
                  >
                    Sign In
                  </button>
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}