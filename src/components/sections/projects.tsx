"use client"

import { GlassCard } from "@/components/ui/glass-card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"
import { useEffect, useState, useCallback, useRef } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import Autoplay from "embla-carousel-autoplay"

export default function Projects() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  )

  const projects = [
    {
      title: "Ergo AI: Intelligent Supply Chain Optimization",
      description: "Building a supply chain intelligence platform powered by Ergo AI, combining machine learning, symbolic reasoning, and constraint-based logic to enforce consistent, verifiable, and explainable decision-making.",
      gradient: "bg-gradient-to-br from-[#2c3e50] via-[#34495e] to-[#2c3e50] dark:from-[#1a1c29] dark:via-[#12141d] dark:to-[#0a0b10]",
      glowColor: "shadow-[inset_0_0_80px_rgba(52,73,94,0.2)] dark:shadow-[inset_0_0_80px_rgba(59,130,246,0.08)]",
      institution: "Stony Brook University",
      duration: "Aug 2025 - Present",
      technologies: ["Machine Learning", "Logical Reasoning", "Constraint Solving", "Time Series Forecasting"],
      liveUrl: "#",
      githubUrl: "#",
      status: "In Progress",
    },
    {
      title: "Budget GPT: Optimizing LLM Inference",
      description: "Built a 'fast + slow' agent framework to reduce overthinking in Large Reasoning Models (LRMs). A Manager LLM predicts an optimal token budget, while a Reflector performs verbal reinforcement learning via natural language error analysis.",
      gradient: "bg-gradient-to-br from-[#4a3f5c] via-[#3d3451] to-[#2d2540] dark:from-[#2a1b38] dark:via-[#1a1224] dark:to-[#0d0912]",
      glowColor: "shadow-[inset_0_0_80px_rgba(100,70,130,0.2)] dark:shadow-[inset_0_0_80px_rgba(168,85,247,0.08)]",
      institution: "Stony Brook University",
      duration: "Aug 2025 - Dec 2025",
      technologies: ["LLMs", "Agent Systems", "Python", "Prompt Engineering", "Evaluation"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
    },
    {
      title: "MotionDB: Distributed MYSQL Database Systems",
      description: "Architected a distributed SQL database in Rust with an LSM tree KV engine, SageTree, MVCC, and a custom SQL stack, supporting ACID transactions and scalable query execution handling ~150K rows/sec.",
      gradient: "bg-gradient-to-br from-[#5c4033] via-[#4a3428] to-[#3d2b21] dark:from-[#2e1d13] dark:via-[#1c120c] dark:to-[#0e0906]",
      glowColor: "shadow-[inset_0_0_80px_rgba(92,64,51,0.2)] dark:shadow-[inset_0_0_80px_rgba(249,115,22,0.08)]",
      institution: "Stony Brook University",
      duration: "Jan 2026 - Present",
      technologies: ["Rust", "Distributed Databases", "LSM-Tree", "MVCC", "SQL"],
      liveUrl: "#",
      githubUrl: "#",
      status: "In Progress",
    },
    {
      title: "Raft Protocol Implementation in Rust with Verus",
      description: "Developed a high-assurance Raft/Paxos consensus implementation in Rust, integrated with formal verification using Verus to prove critical safety and liveness guarantees like agreement and validity.",
      gradient: "bg-gradient-to-br from-[#2d4a3e] via-[#253d34] to-[#1d3029] dark:from-[#1b2a24] dark:via-[#121c18] dark:to-[#090e0c]",
      glowColor: "shadow-[inset_0_0_80px_rgba(45,74,62,0.2)] dark:shadow-[inset_0_0_80px_rgba(34,197,94,0.08)]",
      institution: "Stony Brook University",
      duration: "Feb 2025 - Sep 2025",
      technologies: ["Rust", "Verus", "Formal Verification", "Distributed Systems"],
      liveUrl: "#",
      githubUrl: "https://github.com/saikiranreddy2710/Verus-IronRSL",
      status: "Completed",
    },
    {
      title: "Scalable Banking System with Modified Paxos & 2PC",
      description: "Implemented a fault-tolerant distributed transaction processing system integrating Modified Paxos, sharding, replication, and Two-Phase Commit to achieve strong consistency over 3 replicated shards for 3K+ clients.",
      gradient: "bg-gradient-to-br from-[#2a3d4e] via-[#233445] to-[#1c2b3a] dark:from-[#132a2e] dark:via-[#0d1d1f] dark:to-[#060c0e]",
      glowColor: "shadow-[inset_0_0_80px_rgba(42,61,78,0.2)] dark:shadow-[inset_0_0_80px_rgba(20,184,166,0.08)]",
      institution: "Stony Brook University",
      duration: "Aug 2024 - Dec 2024",
      technologies: ["Go", "Paxos", "Two Phase Commit", "Distributed Sharding", "RAFT"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
    },
    {
      title: "Education Statistics & Teaching Quality Metrics",
      description: "Engineered a data-driven teaching quality metric evaluating 500+ U.S. universities by integrating datasets from RateMyProfessors, College Scorecard, and IPEDS using advanced standardization techniques.",
      gradient: "bg-gradient-to-br from-[#4e2a3a] via-[#3f2230] to-[#331c28] dark:from-[#2d1222] dark:via-[#1a0a14] dark:to-[#0d050a]",
      glowColor: "shadow-[inset_0_0_80px_rgba(78,42,58,0.2)] dark:shadow-[inset_0_0_80px_rgba(236,72,153,0.08)]",
      institution: "Stony Brook University",
      duration: "Oct 2024 - Dec 2024",
      technologies: ["Data Analytics", "Python", "Data Visualization", "Levenshtein Distance"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
    },
    {
      title: "Fault-Tolerant Distributed Systems with PBFT",
      description: "Engineered a fault-tolerant distributed transaction processing system in Go, implementing a modified linear PBFT protocol to ensure consensus across multiple servers in adversarial network environments.",
      gradient: "bg-gradient-to-br from-[#353a50] via-[#2d3145] to-[#252838] dark:from-[#1a1c29] dark:via-[#12141d] dark:to-[#0a0b10]",
      glowColor: "shadow-[inset_0_0_80px_rgba(53,58,80,0.2)] dark:shadow-[inset_0_0_80px_rgba(59,130,246,0.08)]",
      institution: "Stony Brook University",
      duration: "Aug 2024 - Dec 2024",
      technologies: ["Go", "Distributed Algorithms", "Blockchain", "PBFT"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
    },
    {
      title: "GitOps ML Application Deployment",
      description: "Built and deployed a machine learning web application using GitOps, CI/CD pipelines, and DevOps automation, improving deployment speed and security by 40%.",
      gradient: "bg-gradient-to-br from-[#2d4a42] via-[#253e38] to-[#1d322e] dark:from-[#1b2a24] dark:via-[#121c18] dark:to-[#090e0c]",
      glowColor: "shadow-[inset_0_0_80px_rgba(45,74,66,0.2)] dark:shadow-[inset_0_0_80px_rgba(34,197,94,0.08)]",
      institution: "Sathyabama Institute",
      duration: "Sep 2023 - May 2024",
      technologies: ["DevOps", "Docker", "Kubernetes", "Git", "Terraform", "Unix"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
    },
    {
      title: "Automated Web App Deployment CI/CD",
      description: "Applied Git, Jenkins, and Docker to automate the deployment process, cutting manual errors by 75%. Implemented Kubernetes & Terraform for scaling infrastructure and in-built load balancing.",
      gradient: "bg-gradient-to-br from-[#3f3550] via-[#342c44] to-[#2a2338] dark:from-[#2a1b38] dark:via-[#1a1224] dark:to-[#0d0912]",
      glowColor: "shadow-[inset_0_0_80px_rgba(63,53,80,0.2)] dark:shadow-[inset_0_0_80px_rgba(168,85,247,0.08)]",
      institution: "Sathyabama Institute",
      duration: "Feb 2023 - May 2023",
      technologies: ["Kubernetes", "Containerization", "Jenkins", "Microsoft Azure"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
    },
    {
      title: "FMCG Analytics: Market Insights",
      description: "Performed in-depth analytics to gain valuable market insights and understand consumer behavior within the Fast-Moving Consumer Goods (FMCG) industry assisting with promotional campaigns.",
      gradient: "bg-gradient-to-br from-[#4a3d2e] via-[#3e3326] to-[#332a1f] dark:from-[#2e1d13] dark:via-[#1c120c] dark:to-[#0e0906]",
      glowColor: "shadow-[inset_0_0_80px_rgba(74,61,46,0.2)] dark:shadow-[inset_0_0_80px_rgba(249,115,22,0.08)]",
      institution: "ExcelR Solutions",
      duration: "Aug 2022 - Nov 2022",
      technologies: ["Microsoft Power BI", "Tableau", "Data Analytics", "Microsoft Excel"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'from-green-400 to-green-600'
      case 'In Progress':
        return 'from-yellow-400 to-orange-500'
      case 'In Development':
        return 'from-blue-400 to-purple-500'
      default:
        return 'from-gray-400 to-gray-600'
    }
  }

  // Handle Carousel API Updates
  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    // Set initial values
    setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)
    
    // Listen for autoplay events to update pause/play button UI
    const autoplay = api.plugins().autoplay
    if (autoplay) {
      setIsPlaying(autoplay.isPlaying())
      api.on("autoplay:play", () => setIsPlaying(true))
      api.on("autoplay:stop", () => setIsPlaying(false))
    }

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  const toggleAutoplay = () => {
    const autoplay = api?.plugins().autoplay
    if (!autoplay) return
    
    if (autoplay.isPlaying()) {
      autoplay.stop()
      setIsPlaying(false)
    } else {
      autoplay.play()
      setIsPlaying(true)
    }
  }

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-white dark:bg-black transition-colors duration-700">
      <div className="container mx-auto w-full max-w-[1600px]">
        
        <div className="text-center mb-16 px-4">
          <h2 className="text-6xl md:text-7xl font-sf-pro font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-6 transition-colors duration-700">
            Get the highlights.
          </h2>
          <p className="text-[#86868b] text-xl md:text-2xl mt-4 font-medium max-w-3xl mx-auto transition-colors duration-700 tracking-tight">
            A deeper dive into the projects that define my technical journey.
          </p>
        </div>

        {/* Horizontal Scrolling Carousel Area */}
        <div className="relative w-full pb-10 cursor-grab active:cursor-grabbing">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            opts={{
              align: "center",
              dragFree: false, // Ensures it aggressively snaps to centers after manual swipes like Apple's
              loop: true,
              skipSnaps: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-8 flex touch-pan-y">
              {projects.map((project, index) => {
                const isActive = current === index;
                
                return (
                  <CarouselItem 
                    key={index} 
                    className="pl-4 md:pl-8 basis-[90%] md:basis-[70%] lg:basis-[60%]"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1 : 0.95,
                        opacity: isActive ? 1 : 0.5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                        mass: 1
                      }}
                      className={`h-full relative rounded-[3rem] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] min-h-[500px] md:min-h-[650px] flex flex-col justify-end group border border-black/5 dark:border-white/5 transition-colors duration-1000 ${project.gradient} ${project.glowColor}`}
                    >
                      {/* Edge-to-Edge Image Background (Now replaced with dynamic gradients + subtle texture/noise) */}
                      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')"}}></div>
                      
                      {/* Gradient overlays for text legibility */}
                      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                      {/* Top Status Pill */}
                      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
                        <span className={`px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider rounded-full bg-gradient-to-r ${getStatusColor(project.status)} shadow-lg shadow-black/20 backdrop-blur-md`}>
                          {project.status}
                        </span>
                      </div>

                      {/* Content Overlay */}
                      <div className="relative z-10 p-6 md:p-12 w-full max-w-3xl translate-y-6 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.slice(0, 4).map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="text-xs md:text-sm font-medium px-4 py-1.5 bg-white/20 text-white/90 backdrop-blur-xl rounded-full border border-white/20 shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-sf-pro font-bold text-white mb-4 leading-[1.1] tracking-tight drop-shadow-lg">
                          {project.title}
                        </h3>
                        
                        <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed font-medium drop-shadow md:line-clamp-none line-clamp-3">
                          {project.description}
                        </p>

                        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 translate-y-4 group-hover:translate-y-0">
                           <a href={project.liveUrl}>
                             <button className="bg-white text-black px-6 py-3 rounded-full font-semibold border border-transparent hover:bg-white/90 transition-colors shadow-xl active:scale-95">
                               View Project
                             </button>
                           </a>
                           <a href={project.githubUrl}>
                             <button className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold border border-white/30 backdrop-blur-md hover:bg-white/30 transition-colors active:scale-95 text-shadow-sm">
                               Source Code
                             </button>
                           </a>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Apple-style Pagination Indicator with Autoplay Controls */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <div className="flex items-center gap-3 bg-black/5 dark:bg-white/10 backdrop-blur-xl px-5 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-black/5 dark:border-white/15 transition-colors duration-700">
            {projects.map((_, index) => {
              const isActive = current === index;
              return (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-full ${
                    isActive 
                      ? 'w-10 h-2 bg-black dark:bg-white shadow-[0_2px_8px_rgba(0,0,0,0.2)] dark:shadow-[0_0_10px_rgba(255,255,255,0.5)]' 
                      : 'w-2 h-2 bg-black/20 hover:bg-black/40 dark:bg-white/40 dark:hover:bg-white/70'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              );
            })}
          </div>
          
          <button 
            onClick={toggleAutoplay}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-xl border border-black/5 dark:border-white/15 text-black/60 hover:text-black hover:bg-black/10 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/20 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] active:scale-95"
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
          >
            {isPlaying ? (
              // Pause Icon
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
              </svg>
            ) : (
              // Play Icon
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 translate-x-[1px]">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>

      </div>
    </section>
  )
}