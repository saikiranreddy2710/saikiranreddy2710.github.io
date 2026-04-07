"use client"

import React from "react"
import { motion } from "framer-motion"
import AntiGravityCanvas from "@/components/ui/particle-effect"

export default function Experience() {
  const experiences = [
    {
      title: "Graduate Research And Teaching Assistant",
      company: "Stony Brook University",
      type: "Part-time",
      duration: "Aug 2025 to Present",
      durationLength: "8 mos",
      location: "Stony Brook, New York, United States",
      locationType: "On-site"
    },
    {
      title: "Software Development Intern",
      company: "HCLTech",
      type: "Internship",
      duration: "Oct 2023 to Mar 2024",
      durationLength: "6 mos",
      location: "Chennai, Tamil Nadu, India",
      locationType: "Remote"
    },
    {
      title: "Data Analyst Intern",
      company: "ExcelR Solutions",
      type: "Contract",
      duration: "Sep 2022 to Nov 2022",
      durationLength: "3 mos",
      location: "Chennai, Tamil Nadu, India",
      locationType: "Remote"
    }
  ]

  const ease = [0.25, 0.1, 0, 1] as const
  const stagger = 0.1
  const sectionDelay = 0.15

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-white dark:bg-black transition-colors duration-700">
      <AntiGravityCanvas />
      <div className="container mx-auto max-w-6xl relative z-10 pointer-events-none">
        
        {/* Header - matching about.tsx exactly */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease }}
           className="mb-20 md:mb-32"
        >
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] mb-6 transition-colors duration-700 pointer-events-auto">
            Experience.
          </h2>
          <div className="w-full h-[1px] bg-black/10 dark:bg-white/10 mt-8 pointer-events-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
           {/* Left side sticky column matching about.tsx styling */}
           <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease, delay: sectionDelay }}
                className="sticky top-32 pointer-events-auto"
              >
                <h3 className="text-sm font-semibold tracking-wider uppercase text-[#86868b] mb-8">
                  Career Path
                </h3>
                <p className="text-lg md:text-xl text-[#1d1d1f]/80 dark:text-[#d2d2d7] leading-relaxed tracking-tight font-medium">
                  Building scalable infrastructure and intelligent systems across academia and enterprise.
                </p>
              </motion.div>
           </div>

           {/* Right Side: Clean Timeline matching the 'Education' node style */}
           <div className="lg:col-span-8">
              <div className="space-y-16 lg:space-y-20 border-l border-black/10 dark:border-white/10 pl-6 lg:pl-10 ml-2 pointer-events-auto">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease, delay: sectionDelay * 2 + idx * stagger }}
                    className="relative group"
                  >
                    {/* Node indicator */}
                    <div className="absolute -left-[31px] lg:-left-[47px] top-2.5 w-3 h-3 rounded-full bg-[#1d1d1f] dark:bg-white border-4 border-[#f5f5f7] dark:border-black transition-colors duration-700" />

                    <h4 className="text-2xl md:text-3xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight transition-colors duration-700 mb-2">
                      {exp.title}
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center text-[16px] md:text-[17px] text-[#86868b] mt-3 mb-1 gap-1 sm:gap-3 transition-colors duration-700">
                      <span className="font-semibold text-[#1d1d1f]/80 dark:text-[#d2d2d7]">{exp.company}</span>
                      <span className="hidden sm:inline text-black/20 dark:text-white/20">•</span>
                      <span>{exp.type}</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm md:text-[15px] text-[#86868b] mb-1 gap-1 sm:gap-3 transition-colors duration-700 font-medium">
                      <span>{exp.duration}</span>
                      <span className="hidden sm:inline text-black/20 dark:text-white/20">•</span>
                      <span>{exp.durationLength}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center text-sm md:text-[15px] text-[#86868b] gap-1 sm:gap-3 transition-colors duration-700">
                      <span>{exp.location}</span>
                      {exp.locationType && (
                        <>
                           <span className="hidden sm:inline text-black/20 dark:text-white/20">•</span>
                           <span>{exp.locationType}</span>
                        </>
                      )}
                    </div>

                  </motion.div>
                ))}
              </div>
           </div>
        </div>

      </div>
    </section>
  )
}