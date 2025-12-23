"use client"

import { cn } from "@/lib/utils"
import React from "react"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'hero' | 'hover' | 'subtle'
  blur?: 'light' | 'medium' | 'heavy'
  glow?: boolean
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, variant = 'default', blur = 'medium', glow = false, ...props }, ref) => {
    const baseClasses = "relative overflow-hidden transition-all duration-500 ease-out"
    
    const variants = {
      default: "bg-white/10 border border-white/20 backdrop-blur-md",
      hero: "bg-gradient-to-br from-white/15 to-white/5 border border-white/30 backdrop-blur-xl shadow-2xl shadow-purple-500/10",
      hover: "bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/15 hover:border-white/30 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-[1.02] cursor-pointer",
      subtle: "bg-white/5 border border-white/5 backdrop-blur-sm"
    }
    
    const blurIntensity = {
      light: "backdrop-blur-sm",
      medium: "backdrop-blur-md",
      heavy: "backdrop-blur-xl"
    }
    
    const glowClasses = glow 
      ? "before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-400/20 before:via-purple-400/20 before:to-pink-400/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
      : ""

    return (
      <div
        className={cn(
          baseClasses,
          variants[variant],
          blurIntensity[blur],
          glowClasses,
          "rounded-xl",
          className
        )}
        ref={ref}
        {...props}
      >
        {glow && (
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl" />
        )}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    )
  }
)

GlassCard.displayName = "GlassCard"

export { GlassCard }