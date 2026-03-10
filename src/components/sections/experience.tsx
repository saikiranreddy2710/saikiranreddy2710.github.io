"use client"

import React from "react"
import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      title: "Graduate Research And Teaching Assistant",
      company: "Stony Brook University",
      type: "Part-time",
      duration: "Aug 2025 to Present",
      durationLength: "8 mos",
      location: "Stony Brook, New York, United States",
      locationType: "On-site",
      logo: "SBU", 
      logoBg: "bg-red-50 text-red-600 border-red-100 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20"
    },
    {
      title: "Software Development Intern",
      company: "HCLTech",
      type: "Internship",
      duration: "Oct 2023 to Mar 2024",
      durationLength: "6 mos",
      location: "Chennai, Tamil Nadu, India",
      locationType: "",
      logo: "HCL", 
      logoBg: "bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20"
    },
    {
      title: "Data Analyst Intern",
      company: "ExcelR Solutions",
      type: "Contract",
      duration: "Sep 2022 to Nov 2022",
      durationLength: "3 mos",
      location: "Chennai, Tamil Nadu, India",
      locationType: "Remote",
      logo: "EXL", 
      logoBg: "bg-green-50 text-green-600 border-green-100 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20"
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Stagger Apple-style fade ins
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        mass: 1 
      }
    }
  }

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-[#f5f5f7] dark:bg-black font-sf-pro transition-colors duration-700">
      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 px-4"
        >
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] mb-6 transition-colors duration-700">
            Experience.
          </h2>
          <p className="text-[#86868b] dark:text-[#86868b] text-xl md:text-2xl font-medium max-w-2xl mx-auto tracking-tight transition-colors duration-700">
            A history of building and learning.
          </p>
        </motion.div>

        {/* Unified Single Column Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              variants={cardVariants}
              key={index} 
              className="p-8 md:p-12 bg-white dark:bg-[#0a0a0a] rounded-[2.5rem] transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(255,255,255,0.02)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] hover:-translate-y-1 border border-transparent dark:border-white/5"
            >
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                
                {/* Logo Squircles (Apple Style) */}
                <div className={`w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-[1.25rem] flex items-center justify-center font-bold text-lg border border-black/5 dark:border-white/5 shadow-sm transition-colors duration-700 ${exp.logoBg}`}>
                  {exp.logo}
                </div>

                {/* Content Container */}
                <div className="flex-1 w-full relative pt-1 md:pt-2">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] mb-2 transition-colors duration-700">
                    {exp.title}
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-lg text-[#1d1d1f] dark:text-[#d2d2d7] mb-2 font-medium transition-colors duration-700">
                    <span>{exp.company}</span>
                    <span className="hidden sm:inline text-[#86868b] md:scale-75">•</span>
                    <span className="text-[#86868b]">{exp.type}</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-base text-[#86868b] mb-1 transition-colors duration-700">
                    <span>{exp.duration}</span>
                    <span className="hidden sm:inline text-[#86868b] md:scale-75">•</span>
                    <span>{exp.durationLength}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-base text-[#86868b] transition-colors duration-700">
                    <span>{exp.location}</span>
                    {exp.locationType && (
                      <>
                        <span className="hidden sm:inline text-[#86868b] md:scale-75">•</span>
                        <span>{exp.locationType}</span>
                      </>
                    )}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}