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

  // Check if already logged in
  useEffect(() => {
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
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (isForgot) {
        alert("Password reset link sent to your email (demo only).");
      } else if (isLogin) {
        const res = await fetch("http://localhost:5000/api/auth/login", {
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
        const res = await fetch("http://localhost:5000/api/auth/register", {
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
      alert(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
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
              <div className="relative ">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-[#009990]" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Username or Email"
                  className="pl-9 text-[#001A6E] bg-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {!isForgot && (
              <div>
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
              <p className="text-sm text-white  inline-block px-2 py-1 rounded-md">
                Enter your email to receive password reset instructions.
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
            {!isForgot && (
              <button
                type="button"
                className="text-white hover:underline"
                onClick={() => setIsForgot(true)}
              >
                Forgot Password?
              </button>
            )}
            <div className="mt-2">
              {isForgot ? (
                <button
                  type="button"
                  className="text-[#E1FFBB] hover:underline"
                  onClick={() => setIsForgot(false)}
                >
                  Back to Sign In
                </button>
              ) : isLogin ? (
                <span className="text-white">
                  Don’t have an account?{" "}
                  <button
                    type="button"
                    className="text-[#E1FFBB] hover:underline"
                    onClick={() => setIsLogin(false)}
                  >
                    Sign Up
                  </button>
                </span>
              ) : (
                <span className="text-white">
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="text-[#E1FFBB] hover:underline"
                    onClick={() => setIsLogin(true)}
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
