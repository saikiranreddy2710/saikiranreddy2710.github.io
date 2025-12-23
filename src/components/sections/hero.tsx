"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main Content - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-6 mb-16"
        >
          {/* Hero Text with Gradient Name - Single Line */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight whitespace-nowrap"
          >
            <span className="text-white">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Saikiran Reddy Jakka
            </span>
          </motion.h1>

          {/* Subtitle - Larger and More Prominent */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-medium"
          >
            MS Computer Science • Backend Engineer & ML Researcher
          </motion.p>

          {/* Description with Colored Keywords - Tighter Spacing */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            Graduate student at Stony Brook University specializing in distributed systems and machine learning. Building scalable backend systems with{" "}
            <span className="text-blue-400 font-medium">Paxos & PBFT consensus algorithms</span>,{" "}
            <span className="text-purple-400 font-medium">Go & Rust</span>, and developing{" "}
            <span className="text-red-500 font-medium">ML-driven warehouse optimization systems</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 w-full sm:w-auto text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-300 w-full sm:w-auto text-center border border-gray-700"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Key Highlights - Inline Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-3 justify-center items-center pt-8"
          >
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium">
              Distributed Systems
            </span>
            <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium">
              Machine Learning
            </span>
            <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-300 rounded-full text-sm font-medium">
              Backend Engineering
            </span>
            <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 text-orange-300 rounded-full text-sm font-medium">
              Cloud Infrastructure
            </span>
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
            className="w-2 h-2 rounded-full bg-gray-600 hover:bg-blue-500 transition-all duration-300"
            whileHover={{ scale: 1.5 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.5 + index * 0.1 }}
          />
        ))}
      </motion.div>
    </section>
  )
}
