"use client";
export const dynamic = 'force-dynamic';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import Image from "next/image";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, phone, email, password: pass }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("kaushalsaathi_user", JSON.stringify(data.user));
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
            src="/logos/koushalsaathi.png"
            width={150}
            height={150}
            alt="logo"
            className="mx-auto m-4"
          />
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription className="text-[#E1FFBB]">
            Create your account to begin your journey
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" onSubmit={handleSignup}>
            <div>
              <label className="text-[#E1FFBB]">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-[#009990]" />
                <Input
                  className="pl-9 bg-white text-[#001A6E]"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-[#E1FFBB]">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-[#009990]" />
                <Input
                  className="pl-9 bg-white text-[#001A6E]"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-[#E1FFBB]">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-[#009990]" />
                <Input
                  type="email"
                  className="pl-9 bg-white text-[#001A6E]"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-[#E1FFBB]">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-[#009990]" />
                <Input
                  type={showPass ? "text" : "password"}
                  className="pl-9 pr-9 bg-white text-[#001A6E]"
                  required
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                <div
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-3 cursor-pointer"
                >
                  {showPass ? <EyeOff /> : <Eye />}
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full bg-[#009990] text-white">
              {loading ? "Loading..." : "Sign Up"}
            </Button>
          </form>

          <div className="text-center text-sm mt-4">
            <span className="text-white">
              Already have an account?{" "}
              <button
                className="text-[#E1FFBB] underline"
                onClick={() => router.push("/login")}
              >
                Sign In
              </button>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
