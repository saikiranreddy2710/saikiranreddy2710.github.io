"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useState, useEffect } from "react"

interface AnimatedNavProps {
  items: Array<{ id: string; label: string }>
  activeSection: string
  onItemClick?: (id: string) => void
}

export function AnimatedNav({ items, activeSection, onItemClick }: AnimatedNavProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for smooth animations
  const springConfig = { damping: 25, stiffness: 300 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Transform for glow effect
  const glowOpacity = useTransform(
    mouseX,
    [-100, 0, 100],
    [0, 0.5, 0]
  )

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <div className="relative flex items-center gap-1">
      {items.map((item, index) => {
        const isActive = activeSection === item.id
        const isHovered = hoveredIndex === index

        return (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault()
              onItemClick?.(item.id)
              document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
            className="relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-apple overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Active background with morphing animation */}
            {isActive && (
              <motion.div
                layoutId="activeSection"
                className="absolute inset-0 bg-white/10 rounded-apple"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}

            {/* Hover glow effect */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-apple"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            )}

            {/* Interactive shimmer on hover */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 rounded-apple"
                style={{
                  background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 50%)`,
                }}
              />
            )}

            {/* Text */}
            <span
              className={`relative z-10 transition-colors duration-300 ${
                isActive ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </span>

            {/* Bottom indicator for active state */}
            {isActive && (
              <motion.div
                className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full"
                layoutId="activeIndicator"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
                style={{ x: "-50%" }}
              />
            )}
          </motion.a>
        )
      })}
    </div>
  )
}
