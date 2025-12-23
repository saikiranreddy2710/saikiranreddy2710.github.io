"use client"

import React, { useState } from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { springPresets } from "@/lib/animations"

interface RippleType {
  x: number
  y: number
  id: number
}

export interface InteractiveGlassButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  children: React.ReactNode
  variant?: "default" | "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  magnetic?: boolean
  ripple?: boolean
  glow?: boolean
  className?: string
}

/**
 * InteractiveGlassButton Component
 * 
 * Advanced button with liquid glass effects, ripple animations,
 * and magnetic hover behavior based on Apple's design principles.
 */
export const InteractiveGlassButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveGlassButtonProps
>(
  (
    {
      children,
      variant = "default",
      size = "md",
      magnetic = false,
      ripple = true,
      glow = false,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const [ripples, setRipples] = useState<RippleType[]>()
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    // Variant styles
    const variants = {
      default: "bg-white/10 border-white/20 text-white hover:bg-white/15",
      primary: "bg-gradient-to-r from-blue-500/80 to-purple-500/80 border-blue-400/30 text-white hover:from-blue-500/90 hover:to-purple-500/90",
      secondary: "bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white",
      ghost: "bg-transparent border-transparent text-white/70 hover:bg-white/5 hover:text-white",
    }

    // Size styles
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    }

    // Handle ripple effect
    const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!ripple) return

      const button = e.currentTarget
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const newRipple: RippleType = {
        x,
        y,
        id: Date.now(),
      }

      setRipples((prev) => [...(prev || []), newRipple])

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev?.filter((r) => r.id !== newRipple.id))
      }, 600)
    }

    // Handle click with ripple
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      handleRipple(e)
      onClick?.(e)
    }

    // Magnetic hover effect
    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic) return

      const button = e.currentTarget
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      setMousePosition({ x: x * 0.3, y: y * 0.3 })
    }

    const handleMouseLeave = () => {
      if (magnetic) {
        setMousePosition({ x: 0, y: 0 })
      }
    }

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-xl border backdrop-blur-md",
          "font-medium transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          sizes[size],
          className
        )}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        whileHover={{
          scale: 1.05,
          transition: springPresets.responsive,
        }}
        whileTap={{
          scale: 0.95,
          transition: springPresets.snappy,
        }}
        {...props}
      >
        {/* Glow effect */}
        {glow && (
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              background:
                "radial-gradient(circle at center, rgba(147, 197, 253, 0.3), transparent 70%)",
            }}
          />
        )}

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ x: "-100%" }}
          whileHover={{
            x: "100%",
            transition: {
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
          }}
        />

        {/* Ripple effects */}
        {ripple && ripples?.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full bg-white/30 pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 0,
              height: 0,
            }}
            initial={{ width: 0, height: 0, opacity: 0.5 }}
            animate={{
              width: 300,
              height: 300,
              opacity: 0,
              x: -150,
              y: -150,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </motion.button>
    )
  }
)

InteractiveGlassButton.displayName = "InteractiveGlassButton"

/**
 * Preset button variants for common use cases
 */
export const GlassButtonPrimary: React.FC<InteractiveGlassButtonProps> = (props) => {
  return <InteractiveGlassButton variant="primary" glow magnetic {...props} />
}

export const GlassButtonSecondary: React.FC<InteractiveGlassButtonProps> = (props) => {
  return <InteractiveGlassButton variant="secondary" magnetic {...props} />
}

export const GlassButtonGhost: React.FC<InteractiveGlassButtonProps> = (props) => {
  return <InteractiveGlassButton variant="ghost" {...props} />
}
