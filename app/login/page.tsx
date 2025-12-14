"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [isForgot, setForgot] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isForgot) {
        alert("Reset link sent!");
        setForgot(false);
        setLoading(false);
        return;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("kaushalsaathi_user", JSON.stringify(data.user));
localStorage.setItem("ks_login_success", "yes");
router.push("/home");

    } catch (e: any) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#074799] relative">
      <div className="absolute inset-0 bg-[url('/women-empowerment-digital-learning-illustration.png')] bg-cover opacity-10"></div>

      <Card className="w-[430px] bg-[#5b92d5] text-white z-10">
        <CardHeader className="text-center">
          <Image
            src="/logos/koushalsaathi.jpg"
            width={150}
            height={150}
            alt="logo"
            className="mx-auto m-4"
          />
          <CardTitle className="text-2xl">
            {isForgot ? "Forgot Password" : "Sign In"}
          </CardTitle>
          <CardDescription className="text-[#E1FFBB]">
            {isForgot ? "Reset your password" : "Welcome back"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label className="text-[#E1FFBB]">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-[#009990]" />
                <Input
                  className="pl-9 bg-white text-[#001A6E]"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {!isForgot && (
              <div>
                <Label className="text-[#E1FFBB]">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 text-[#009990]" />
                  <Input
                    type={showPass ? "text" : "password"}
                    className="pl-9 pr-9 bg-white text-[#001A6E]"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-3 cursor-pointer"
                  >
                    {showPass ? <EyeOff /> : <Eye />}
                  </div>
                </div>
              </div>
            )}

            {isForgot && (
              <p className="text-white text-sm">
                Reset link will be sent to: <strong>{email}</strong>
              </p>
            )}

            <Button type="submit" className="w-full bg-[#009990] text-white">
              {loading
                ? "Loading..."
                : isForgot
                ? "Send Reset Link"
                : "Sign In"}
            </Button>
          </form>

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
                <Button className="bg-white text-[#001A6E]">
                  <FcGoogle /> Google
                </Button>
                <Button className="bg-blue-700 text-white">
                  <FaFacebook /> Facebook
                </Button>
              </div>
            </>
          )}

          <div className="text-center text-sm mt-4">
            {!isForgot && (
              <button
                onClick={() => setForgot(true)}
                className="text-white underline"
              >
                Forgot Password?
              </button>
            )}

            <div className="mt-2">
              {isForgot ? (
                <button
                  onClick={() => setForgot(false)}
                  className="text-[#E1FFBB] underline"
                >
                  Back to Sign In
                </button>
              ) : (
                <span className="text-white">
                  Don't have an account?{" "}
                  <button
                    className="text-[#E1FFBB] underline"
                    onClick={() => router.push("/signup")}
                  >
                    Sign Up
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
