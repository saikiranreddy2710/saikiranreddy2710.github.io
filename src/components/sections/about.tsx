"use client"

import React from "react"
import { motion } from "framer-motion"

/* ─── Data ─── */
const researchInterests = [
  {
    title: "Distributed Systems & Consensus",
    description: "Investigating fault-tolerant architectures and highly available state machines. Deeply interested in the performance characteristics and safety proofs of Paxos, PBFT, and Raft derivatives in adversarial network conditions."
  },
  {
    title: "Machine Learning & Verifiable AI",
    description: "Focusing on the intersection of deep learning and symbolic logic to create explainable, constrained AI pipelines. Researching robust time-series forecasting and inventory optimization for complex supply chains."
  },
  {
    title: "Scalable Infrastructure Design",
    description: "Studying the orchestration of distributed deployments using GitOps and infrastructure-as-code principles. Focused on zero-downtime microservices and cloud-native resilience."
  }
]

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stony Brook University",
    location: "Stony Brook, NY",
    date: "Expected May 2026",
    details: "Coursework: Distributed Systems, Machine Learning, Operating Systems, Advanced Algorithms."
  },
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Chennai Institute of Technology",
    location: "Chennai, India",
    date: "Aug 2019 - May 2023",
    details: "Graduated with Honors. Focused on Database Management and Core System Design."
  }
]

/* ─── Animation Presets ─── */
const ease = [0.25, 0.1, 0, 1] as const
const stagger = 0.1
const sectionDelay = 0.15

export default function About() {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-[#f5f5f7] dark:bg-black transition-colors duration-700">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="mb-20 md:mb-32"
        >
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] mb-6 transition-colors duration-700">
            About.
          </h2>
          <div className="w-full h-[1px] bg-black/10 dark:bg-white/10 mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Bio & Education */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease, delay: sectionDelay }}
            >
              <h3 className="text-sm font-semibold tracking-wider uppercase text-[#86868b] mb-8">
                Background
              </h3>
              <div className="space-y-6 text-[#1d1d1f]/80 dark:text-[#d2d2d7] text-lg md:text-xl leading-relaxed tracking-tight transition-colors duration-700 font-medium">
                <p>
                  I am a graduate researcher and software engineer specializing in distributed systems and applied machine learning. Based at Stony Brook University, my academic and professional work is driven by a focus on building systems that are theoretically sound, performant, and reliable under scale.
                </p>
                <p>
                  Currently, I serve as a Research Assistant developing supply chain intelligence platforms driven by <span className="text-[#1d1d1f] dark:text-white transition-colors duration-700">Ergo AI</span>. I work on bridging the gap between statistical machine learning and constraint-based symbolic reasoning, ensuring that AI-driven policy decisions remain verifiable and logically consistent.
                </p>
                <p>
                  My engineering ethos revolves around understanding systems from first principles—whether that entails implementing consensus algorithms from raw specifications or architecting cloud-native data pipelines with strict consistency bounds.
                </p>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease, delay: sectionDelay * 2 }}
            >
              <h3 className="text-sm font-semibold tracking-wider uppercase text-[#86868b] mb-8">
                Education
              </h3>
              <div className="space-y-10 border-l border-black/10 dark:border-white/10 pl-6 lg:pl-8 ml-2">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease, delay: sectionDelay * 2 + idx * stagger }}
                    className="relative"
                  >
                    {/* Node indicator */}
                    <div className="absolute -left-[31px] lg:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[#1d1d1f] dark:bg-white border-4 border-[#f5f5f7] dark:border-black transition-colors duration-700" />
                    
                    <h4 className="text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight transition-colors duration-700">
                      {edu.degree}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-[15px] text-[#86868b] mt-2 mb-3 gap-1 sm:gap-3">
                      <span className="font-medium text-[#1d1d1f]/70 dark:text-[#d2d2d7]/80">{edu.institution}</span>
                      <span className="hidden sm:inline text-black/20 dark:text-white/20">•</span>
                      <span>{edu.date}</span>
                    </div>
                    <p className="text-sm text-[#86868b] leading-relaxed max-w-md">
                      {edu.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Research Interests */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease, delay: sectionDelay * 1.5 }}
              className="sticky top-32"
            >
              <h3 className="text-sm font-semibold tracking-wider uppercase text-[#86868b] mb-8">
                Research Focus
              </h3>
              
              <div className="space-y-10 group">
                {researchInterests.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease, delay: sectionDelay * 2 + idx * stagger }}
                    className="relative"
                  >
                    <h4 className="text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-3 tracking-tight transition-colors duration-700">
                      {item.title}
                    </h4>
                    <p className="text-[15px] text-[#86868b] leading-relaxed transition-colors duration-700 pr-4">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Minimalistic Certification List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease, delay: sectionDelay * 3 }}
                className="mt-16 pt-10 border-t border-black/10 dark:border-white/10"
              >
                <h3 className="text-sm font-semibold tracking-wider uppercase text-[#86868b] mb-6">
                  Certifications
                </h3>
                <ul className="space-y-3">
                  {['Microsoft Azure Certified', 'ServiceNow Certified Application Developer (CAD)', 'ServiceNow Certified System Administrator (CSA)'].map((cert, idx) => (
                    <li key={idx} className="text-[15px] text-[#1d1d1f]/80 dark:text-[#d2d2d7] font-medium transition-colors duration-700 flex items-start gap-3">
                      <span className="text-blue-500 mt-1.5 flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-current" />
                      </span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </motion.div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}