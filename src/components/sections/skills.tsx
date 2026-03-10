"use client"

import React from "react"
import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Machine Learning", level: 90, color: "from-purple-400 to-pink-400" },
        { name: "Deep Learning", level: 85, color: "from-pink-400 to-red-400" },
        { name: "NLP", level: 88, color: "from-blue-400 to-purple-400" },
        { name: "PyTorch", level: 82, color: "from-orange-400 to-red-500" },
        { name: "Data Science", level: 90, color: "from-cyan-400 to-blue-500" }
      ]
    },
    {
      title: "Programming & Data",
      skills: [
        { name: "Python", level: 95, color: "from-blue-500 to-yellow-500" },
        { name: "Rust", level: 85, color: "from-orange-500 to-red-600" },
        { name: "Go", level: 88, color: "from-cyan-400 to-blue-600" },
        { name: "C++", level: 80, color: "from-blue-600 to-indigo-700" },
        { name: "SQL", level: 90, color: "from-blue-400 to-cyan-500" }
      ]
    },
    {
      title: "Systems & DevOps",
      skills: [
        { name: "Distributed Systems", level: 92, color: "from-green-400 to-emerald-600" },
        { name: "Docker", level: 88, color: "from-blue-500 to-blue-700" },
        { name: "Kubernetes", level: 82, color: "from-blue-400 to-indigo-600" },
        { name: "AWS", level: 85, color: "from-yellow-500 to-orange-600" },
        { name: "Azure", level: 87, color: "from-blue-600 to-cyan-600" }
      ]
    }
  ]

  const additionalTech = [
    "GitOps", "CI/CD", "Terraform", "Jenkins",
    "Ansible", "Helm", "Tableau", "Power BI",
    "ETL Pipelines", "Prometheus", "GCP", "Unix/Linux"
  ]

  const certifications = [
    "Microsoft Azure Certification",
    "ServiceNow Certified Application Developer (CAD)",
    "ServiceNow Certified System Administrator (CSA)",
    "IEEE AMATHE 2024 - GitOps Presentation"
  ]

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring" as const, stiffness: 120, damping: 20 }
    }
  }

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-[#f5f5f7] dark:bg-black font-sf-pro transition-colors duration-700">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 px-4"
        >
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] mb-6 transition-colors duration-700">
            Skills.
          </h2>
          <p className="text-[#86868b] text-xl md:text-2xl font-medium max-w-2xl mx-auto tracking-tight transition-colors duration-700">
            A comprehensive toolkit for building scalable systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-3 gap-6 mb-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="p-8 bg-white dark:bg-[#0a0a0a] rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(255,255,255,0.02)] border border-transparent dark:border-white/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)]"
            >
              <h3 className="text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-6 text-center transition-colors duration-700">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[#1d1d1f] dark:text-[#d2d2d7] font-medium text-sm transition-colors duration-700">{skill.name}</span>
                      <span className="text-[#86868b] text-xs transition-colors duration-700">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-black/5 dark:bg-white/10 rounded-full h-1.5 overflow-hidden transition-colors duration-700">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tech & Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Additional Technologies */}
          <motion.div
            variants={itemVariants}
            className="p-8 bg-white dark:bg-[#0a0a0a] rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(255,255,255,0.02)] border border-transparent dark:border-white/5 transition-colors duration-700"
          >
            <h3 className="text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-5 transition-colors duration-700">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {additionalTech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#f5f5f7] dark:bg-white/5 text-[#1d1d1f] dark:text-[#d2d2d7] text-sm font-medium rounded-full border border-black/5 dark:border-white/10 transition-colors duration-700 hover:bg-black/5 dark:hover:bg-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={itemVariants}
            className="p-8 bg-white dark:bg-[#0a0a0a] rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(255,255,255,0.02)] border border-transparent dark:border-white/5 transition-colors duration-700"
          >
            <h3 className="text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-5 transition-colors duration-700">
              Certifications & Achievements
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex-shrink-0" />
                  <span className="text-[#1d1d1f] dark:text-[#d2d2d7] text-sm transition-colors duration-700">{cert}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-black/5 dark:border-white/10 transition-colors duration-700">
              <p className="text-[#86868b] text-sm italic transition-colors duration-700">
                Continuously expanding expertise in distributed systems, consensus algorithms, and ML-driven optimization.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}