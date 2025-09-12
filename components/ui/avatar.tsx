"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function Avatar({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200",
        className
      )}
    >
      {children}
    </div>
  )
}

export function AvatarFallback({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-full w-full items-center justify-center text-sm font-medium text-gray-600">
      {children}
    </span>
  )
}
