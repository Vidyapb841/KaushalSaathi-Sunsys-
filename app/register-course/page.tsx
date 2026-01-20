"use client";

export const dynamic = 'force-dynamic';
import React, { useState, useRef, useEffect, Suspense } from "react";
import { Navigation } from "@/components/navigation"
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterCoursePage() {
  const router = useRouter();
  const [form, setForm] = useState({ userEmail: "", name: "", gender: "", qualification: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/course/register-course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      setMessage("Registered successfully!");
      setForm({ userEmail: "", name: "", gender: "", qualification: "" });
    } else {
      setMessage(data.message || "Error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded space-y-4 w-full max-w-md">
        <h1 className="text-xl font-bold">Register for Course</h1>

        <div>
          <Label>Email</Label>
          <Input name="userEmail" value={form.userEmail} onChange={handleChange} required />
        </div>

        <div>
          <Label>Name</Label>
          <Input name="name" value={form.name} onChange={handleChange} required />
        </div>

        <div>
          <Label>Gender</Label>
          <Input name="gender" value={form.gender} onChange={handleChange} required />
        </div>

        <div>
          <Label>Qualification</Label>
          <Input name="qualification" value={form.qualification} onChange={handleChange} required />
        </div>

        <Button type="submit" className="w-full">Register</Button>
        {message && <p className="text-sm text-green-600">{message}</p>}
      </form>
    </div>
  );
}
