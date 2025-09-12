"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

export const Badge: React.FC<BadgeProps> = ({ className, children, ...props }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-primary px-2 py-1 text-xs font-medium text-white",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
