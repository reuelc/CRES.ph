import React from "react"
import { cn } from "@/lib/utils"

type PatternProps = {
  className?: string
  tone?: "blue" | "warm"
  opacity?: number
}

export default function BackgroundPattern({
  className,
  tone = "blue",
  opacity = 0.12,
}: PatternProps) {
  const color = tone === "blue" ? "#2563eb" : "#b45309" // warm = amber-700
  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <defs>
        {/* Banig-inspired weave pattern */}
        <pattern id={`banig-${tone}`} width="32" height="32" patternUnits="userSpaceOnUse">
          <rect width="32" height="32" fill="transparent" />
          <path d="M0 16 L16 0 L32 16 L16 32 Z" fill={color} opacity={opacity} />
          <path d="M0 0 L16 16 L0 32 Z" fill={color} opacity={opacity * 0.7} />
          <path d="M32 0 L16 16 L32 32 Z" fill={color} opacity={opacity * 0.7} />
        </pattern>
        {/* subtle grid lines */}
        <pattern id={`grid-${tone}`} width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke={color} strokeOpacity={opacity * 0.6} strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#banig-${tone})`} />
      <rect width="100%" height="100%" fill={`url(#grid-${tone})`} />
    </svg>
  )
}
