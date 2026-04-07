"use client"

import React, { useState } from "react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"

export default function Skills() {
  const [activeTab, setActiveTab] = useState<number | null>(0)

  const skillCategories = [
    {
      id: "ai-ml",
      title: "Machine Learning & AI",
      description: "Building intelligent retrieval systems and multi-agent architectures.",
      story: "My ML work started with NLP and recommendation pipelines at HCL Technologies, where I built sentiment classifiers and feature extraction workflows using scikit-learn and PyTorch. At Stony Brook, I took it further designing Graph-Tree RAG, a hybrid retrieval pipeline combining FAISS vector search, BM25, and graph traversal that improved multi-hop accuracy by 37%. I also built a Self-Evolving Agentic AI system with semantic memory and multi-LLM orchestration, eliminating 60% of manual workflow steps through adaptive prompt strategies.",
      skills: ["PyTorch & scikit-learn", "RAG & Vector Search", "NLP & Embeddings", "LLM Agents & Orchestration"]
    },
    {
      id: "systems",
      title: "Distributed Systems",
      description: "Architecting fault-tolerant, high-throughput database and consensus systems.",
      story: "I wanted to understand databases at their lowest level, so I built NexusDB, a distributed SQL engine in Rust with Raft consensus, LSM-tree storage, and full ACID compliance. It sustains ~150K–180K rows/sec write throughput with memtables, SSTables, Bloom filters, and leveled compaction. Implementing Raft-based replication, concurrency control, and RBAC from scratch gave me a deep understanding of consensus protocols, fault tolerance, and the tradeoffs that make distributed systems genuinely hard.",
      skills: ["Raft Consensus & Replication", "LSM-tree Storage Engines", "Concurrency & ACID Transactions", "Rust Systems Programming"]
    },
    {
      id: "cloud",
      title: "Cloud & Infrastructure",
      description: "Automating resilient, observable deployments across cloud providers.",
      story: "At HCL, I automated infrastructure provisioning across AWS and Azure using Terraform, Docker, and Kubernetes — cutting provisioning time by 50% and eliminating configuration drift. I extended this with OpsFlow, an infrastructure automation platform using Ansible, AWX, and Vault for auditable, zero-SSH deployments with approval gates and automated rollback. Every environment I build includes Prometheus and Grafana observability from day one.",
      skills: ["AWS, GCP & Azure", "Docker & Kubernetes", "Terraform & Ansible", "Infrastructure as Code"]
    },
    {
      id: "languages",
      title: "Programming Languages",
      description: "Choosing the right tool for the job across systems, backend, and ML domains.",
      story: "I write Rust for performance critical systems like NexusDB, Python for ML pipelines and automation, and Go for concurrent backend services. My C++ background from OS-level coursework sharpened how I think about memory and concurrency. On the web side, I build with TypeScript and React. Across all of these, I care most about writing code that's readable, testable, and built to last — not just code that works today.",
      skills: ["Python", "Rust", "Go", "TypeScript / JavaScript", "C / C++"]
    },
    {
      id: "data",
      title: "Data Engineering",
      description: "Designing real-time streaming pipelines and high-performance storage systems.",
      story: "With EdgeStream, I built a real-time data pipeline using Kafka, FastAPI, and containerized agents with backpressure controls — handling bursty, financial-scale event telemetry reliably. Through NexusDB, I went deep on storage internals: LSM-trees, SSTables, Bloom filters, and query optimization. I've worked with PostgreSQL, MySQL, Redis, and BigQuery across projects, always focused on getting data ingested, indexed, and queryable as fast as possible.",
      skills: ["Apache Kafka & Streaming", "PostgreSQL & MySQL", "Redis & BigQuery", "ETL & Data Pipelines"]
    },
    {
      id: "web",
      title: "Web & API Engineering",
      description: "Building production-grade backends and responsive frontend interfaces.",
      story: "Most of my projects are served through FastAPI backends with REST endpoints, role-based access controls, and SQL-driven analytics dashboards. I've built production-grade API layers for Graph-Tree RAG, the Agentic AI system, and EdgeStream — all with automated integration tests and sub-second latency. On the frontend, I work with React, Next.js, Tailwind CSS, and Framer Motion to create responsive, polished interfaces.",
      skills: ["FastAPI & REST APIs", "React / Next.js", "Tailwind CSS", "gRPC & Microservices"]
    },
    {
      id: "devops",
      title: "DevOps & CI/CD",
      description: "Automating build, test, and deploy pipelines for reproducible releases.",
      story: "At HCL, I built CI/CD pipelines in Jenkins and GitHub Actions that reduced manual deployment steps by 75% and standardized releases across environments. I published an IEEE paper on GitOps for faster CI/CD cycles. With OpsFlow, I took it further — integrating Ansible playbooks into AWX with approval gates, Vault secrets injection, and automated rollback, creating fully auditable deployment workflows with zero manual SSH access.",
      skills: ["GitHub Actions & Jenkins", "GitOps & Release Pipelines", "Linux Administration", "Prometheus & Grafana"]
    },
    {
      id: "security",
      title: "Security & Access Control",
      description: "Implementing authentication, authorization, and audit systems from scratch.",
      story: "Security isn't an afterthought in my work — it's built into every system I touch. In NexusDB, I implemented authentication, RBAC authorization, and tamper-evident audit logging from scratch. With the IAM Authentication Lab, I deployed centralized OpenLDAP and Kerberos authentication across networked Linux hosts with automated user provisioning, keytab rotation, and compliance-ready access tracking. Graduate coursework in network security and cryptography rounds out the foundation.",
      skills: ["RBAC & Authentication", "LDAP & Kerberos", "Audit Logging & Compliance", "Network Security"]
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-black transition-colors duration-700 w-full flex flex-col items-center">

      <div className="container mx-auto w-full max-w-[1400px] relative z-20 px-4 md:px-8">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] mb-6">
            Technical Stack.
          </h2>
        </motion.div>

        {/* Master Interactive Container (Seamless Background) */}
        <div className="w-full relative flex flex-col lg:flex-row gap-12 lg:gap-8 min-h-[500px]">

          {/* Subtle background glow effect using neutral tones */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-black/5 dark:bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/4 translate-x-1/4" />

          {/* Left Side: Flawless Accordion Pill Menu */}
          <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col relative z-20">
            <div className="flex flex-col space-y-3 w-full">
              {skillCategories.map((category, idx) => {
                const isActive = activeTab === idx
                // Top half opens down, bottom half opens up
                const expandUpwards = idx >= skillCategories.length / 2

                const bodyContent = (
                  <div className="px-6 md:px-7 select-text">
                    <p className={`text-[16px] leading-[1.5] text-[#1d1d1f]/80 dark:text-[#f5f5f7]/80 tracking-tight font-medium ${expandUpwards ? 'pt-6 pb-3' : 'pb-6 pt-3'}`}>
                      {category.description}
                    </p>
                    <div className={`flex gap-2 flex-wrap ${expandUpwards ? 'pb-6 pt-1' : 'pb-6 mt-1'}`}>
                      {category.skills.map((s, i) => (
                        <span key={i} className="text-[13px] px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[#1d1d1f] dark:text-gray-300 font-medium">{s}</span>
                      ))}
                    </div>
                  </div>
                )

                return (
                  <div
                    key={category.id}
                    onClick={() => setActiveTab(idx === activeTab ? null : idx)}
                    className={`cursor-pointer backdrop-blur-xl transition-all duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] w-full select-none outline-none focus:outline-none overflow-hidden border
                      ${isActive
                        ? "bg-white/80 dark:bg-[#1c1c1e]/90 shadow-md border-transparent dark:border-white/5 rounded-[24px]"
                        : "bg-black/5 dark:bg-[#151516]/60 hover:bg-black/10 dark:hover:bg-[#1c1c1e] border-transparent rounded-[100px]"}`}
                  >
                    <div className="flex flex-col w-full relative outline-none focus:outline-none">

                      {/* Body Content (Expanding UPWARDS) */}
                      {expandUpwards && (
                        <div className={`grid transition-all duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                          <div className="overflow-hidden min-h-0">
                            {bodyContent}
                          </div>
                        </div>
                      )}

                      {/* Fixed Header */}
                      <div className="flex items-center gap-4 px-6 md:px-7 py-[18px]">
                        <div className={`flex items-center justify-center w-[22px] h-[22px] rounded-full border border-[1.5px] shrink-0 transition-colors duration-300 ${isActive ? "border-transparent bg-[#1d1d1f] dark:bg-white" : "border-[#1d1d1f]/30 dark:border-white/40"}`}>
                          {isActive ? (
                            <div className="w-[10px] h-[2px] bg-white dark:bg-[#1d1d1f] rounded-full" />
                          ) : (
                            <svg className="w-[12px] h-[12px] text-[#1d1d1f] dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                            </svg>
                          )}
                        </div>

                        <span className="font-semibold text-[17px] tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] whitespace-nowrap">
                          {category.title}
                        </span>
                      </div>

                      {/* Body Content (Expanding DOWNWARDS) */}
                      {!expandUpwards && (
                        <div className={`grid transition-all duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                          <div className="overflow-hidden min-h-0">
                            {bodyContent}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Side: The Story of Mastery */}
          <div className="w-full lg:w-[55%] xl:w-[60%] flex flex-col pt-4 lg:pt-12 relative z-20 md:pl-8 lg:pl-16 lg:border-l border-black/5 dark:border-white/5 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab !== null ? activeTab : 0}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col h-full max-w-3xl"
              >


                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1d1d1f] dark:text-white tracking-tight mb-6 leading-[1.2]">
                  {skillCategories[activeTab !== null ? activeTab : 0].title}
                </h3>

                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-[16px] md:text-[17px] leading-[1.6] text-[#1d1d1f]/80 dark:text-gray-300 font-medium">
                    {skillCategories[activeTab !== null ? activeTab : 0].story}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}