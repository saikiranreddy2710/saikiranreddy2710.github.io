"use client"

import React from "react"
import { motion } from "framer-motion"
import AntiGravityCanvas from "@/components/ui/particle-effect"

export default function Contact() {
  const socialLinks = [
    {
      title: "LinkedIn",
      description: "Let's connect professionally",
      link: "https://www.linkedin.com/in/saikiranreddyj/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      title: "GitHub",
      description: "Check out my open source work",
      link: "https://github.com/saikiranreddy2710",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ),
    },
    {
      title: "Email",
      description: "Reach out via email",
      link: "mailto:saikiranreddy2710@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      ),
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring" as const, stiffness: 120, damping: 20 }
    }
  }

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-white dark:bg-black font-sf-pro transition-colors duration-700">
      <AntiGravityCanvas />
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
            Get in touch.
          </h2>
          <p className="text-[#86868b] text-xl md:text-2xl font-medium max-w-2xl mx-auto tracking-tight transition-colors duration-700">
            Interested in collaboration or research opportunities? I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {socialLinks.map((item, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : "_self"}
              rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group p-8 bg-white dark:bg-[#0a0a0a] rounded-[2rem] transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(255,255,255,0.02)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] hover:-translate-y-1 border border-transparent dark:border-white/5 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-[#f5f5f7] dark:bg-white/10 flex items-center justify-center text-[#1d1d1f] dark:text-[#f5f5f7] group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-1 transition-colors duration-700">
                {item.title}
              </h3>
              <p className="text-[#86868b] text-sm transition-colors duration-700">
                {item.description}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="p-8 bg-white dark:bg-[#0a0a0a] rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(255,255,255,0.02)] border border-transparent dark:border-white/5 transition-colors duration-700"
        >
          <h3 className="text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-6 transition-colors duration-700">
            Current Status
          </h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-slate-50 dark:bg-white/5 transition-colors duration-700">
              <div className="w-2.5 h-2.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-slate-700 dark:text-gray-300 transition-colors duration-700">Graduate Student at Stony Brook</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-slate-50 dark:bg-white/5 transition-colors duration-700">
              <div className="w-2.5 h-2.5 bg-slate-400 dark:bg-slate-500 rounded-full" />
              <span className="text-sm font-medium text-slate-700 dark:text-gray-300 transition-colors duration-700">Research Assistant</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-slate-50 dark:bg-white/5 transition-colors duration-700">
              <div className="w-2.5 h-2.5 bg-slate-400 dark:bg-slate-500 rounded-full" />
              <span className="text-sm font-medium text-slate-700 dark:text-gray-300 transition-colors duration-700">Open to Opportunities</span>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-[#86868b] text-sm transition-colors duration-700">
            © 2025 Saikiran Reddy Jakka. Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </motion.div>

      </div>
    </section>
  )
}