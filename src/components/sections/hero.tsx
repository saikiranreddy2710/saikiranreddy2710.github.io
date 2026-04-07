"use client"

import React from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { FloatingPaths } from "@/components/ui/background-paths"

export default function Hero() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative bg-white dark:bg-black transition-colors duration-700 overflow-hidden">
      
      {/* Dynamic Background Paths */}
      <div className="absolute inset-0 z-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-6 mb-16 flex flex-col items-center"
        >
          {/* Hero Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter"
          >
            <span className="text-slate-900 dark:text-white transition-colors duration-700">
              Hi, I&apos;m{" "}
            </span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-white/70">
              Saikiran Reddy Jakka
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl text-[#86868b] dark:text-gray-300 font-medium transition-colors duration-700 tracking-tight"
          >
            Software Engineer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-slate-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed transition-colors duration-700"
          >
            MS Computer Science graduate student at Stony Brook University. Interested in working with{" "}
            <span className="text-slate-900 dark:text-white font-medium transition-colors duration-700">scalable backend systems</span>,{" "}
            <span className="text-slate-900 dark:text-white font-medium transition-colors duration-700">advanced machine learning</span>, and building innovative{" "}
            <span className="text-slate-900 dark:text-white font-medium transition-colors duration-700">AI-driven applications</span>.
          </motion.p>

          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center justify-center pt-2 pb-2"
          >
            <span className="text-[15px] font-bold text-slate-900 dark:text-white tracking-wider uppercase text-sm">
              Currently available for software engineering roles
            </span>
          </motion.div>

          {/* Premium Glassmorphic CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            {/* Discover Button styled like 21st.dev Premium Component */}
            <div className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 dark:from-white/10 dark:to-black/10 p-px rounded-xl backdrop-blur-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center rounded-[0.7rem] px-5 py-2 text-sm font-semibold backdrop-blur-md bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 text-black dark:text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10 hover:shadow-md dark:hover:shadow-neutral-800/50"
              >
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                    View My Work
                </span>
              </a>
            </div>

            {/* Secondary CTA */}
            <a
              href="#contact"
              className="px-5 py-2 bg-transparent text-slate-700 dark:text-white text-sm font-medium rounded-xl transition-all duration-300 w-full sm:w-auto text-center border-2 border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 backdrop-blur-sm"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Key Highlight Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-3 justify-center items-center pt-10"
          >
            {["Distributed Systems", "Machine Learning", "Backend Engineering", "Cloud Infrastructure"].map((tag) => (
               <span key={tag} className="px-4 py-2 bg-slate-100/50 border border-slate-200/50 dark:bg-white/5 dark:border-white/10 text-slate-700 dark:text-white rounded-full text-sm font-medium transition-colors duration-700 backdrop-blur-md">
                 {tag}
               </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator Dots - Right Side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3"
      >
        {["home", "about", "skills", "experience", "projects", "contact"].map((section, index) => (
          <motion.a
            key={section}
            href={`#${section}`}
            className="w-2 h-2 rounded-full bg-black/20 dark:bg-gray-600 hover:bg-slate-900 dark:hover:bg-white transition-all duration-300"
            whileHover={{ scale: 1.5 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.5 + index * 0.1 }}
            aria-label={`Scroll to ${section}`}
          />
        ))}
      </motion.div>
    </section>
  )
}
