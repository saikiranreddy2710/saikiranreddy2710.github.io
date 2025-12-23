"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Contact from "@/components/sections/contact"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Background Gradient Mesh */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full filter blur-3xl" />
      </div>

      {/* Centered Floating Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-center">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gray-900/90 backdrop-blur-2xl border border-gray-700/50 rounded-full px-10 py-4 shadow-2xl"
          >
            <div className="flex items-center gap-10">
              {["home", "about", "skills", "experience", "projects", "contact"].map((section) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(section)
                  }}
                  className={`text-sm font-medium transition-colors duration-300 capitalize ${
                    activeSection === section ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Page Sections */}
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}
