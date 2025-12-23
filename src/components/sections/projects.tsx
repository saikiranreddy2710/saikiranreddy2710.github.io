"use client"

import { GlassCard } from "@/components/ui/glass-card"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Distributed Transaction Processing System with Paxos & PBFT",
      description: "Architected distributed banking system managing 3,000+ clients across 12 servers in 3 sharded clusters, implementing Modified Paxos with Two-Phase Commit for achieving 100% transaction consistency.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5a1fb95d-f9b8-4ff5-91b6-6f4da664e4ca.png",
      technologies: ["Go", "Paxos", "PBFT", "Distributed Systems", "Two-Phase Commit", "Consensus Algorithms"],
      features: [
        "Modified Paxos with Two-Phase Commit for intra-shard and cross-shard transactions",
        "Linear PBFT system processing 560+ TPS with view-change mechanism",
        "Ensured liveness, safety, and consensus in Byzantine fault conditions",
        "Enhanced transaction processing capacity by 40% and reduced latency by 25%",
        "Scalable sharding architecture for high-throughput distributed banking"
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
      duration: "Aug 2024 - Dec 2024",
      institution: "Stony Brook University"
    },
    {
      title: "Education Statistics and Teaching Quality Metrics",
      description: "Conducted sentiment analysis and cohort analysis on 100,000+ RateMyProfessors reviews, extracting behavioral trends to quantify teaching effectiveness across universities.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/86dd88fa-49b8-4c8f-a21c-75dee2459ac2.png",
      technologies: ["Python", "SQL", "ETL", "Data Science", "Regression Analysis", "Clustering"],
      features: [
        "Sentiment analysis on 100,000+ professor reviews",
        "End-to-end data pipelines using Python, SQL, and ETL processes",
        "Integrated behavioral and institutional datasets for faculty performance insights",
        "Applied regression analysis and clustering for correlation identification",
        "Data-driven evaluations of teaching effectiveness"
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
      duration: "Aug 2024 - Dec 2024",
      institution: "Stony Brook University"
    },
    {
      title: "NLP-Enhanced Recommender System with GitOps-Based Deployment",
      description: "Built machine learning web-based movie recommendation application using GitOps to solve efficiency challenges, achieving 30% faster deployment with CI/CD pipeline.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b3b55b94-c820-4684-a8d1-8e9def99ff8a.png",
      technologies: ["Python", "Machine Learning", "GitOps", "Azure", "CI/CD", "Prometheus", "Docker"],
      features: [
        "ML-based movie recommendation engine with NLP capabilities",
        "GitOps workflow for secure and scalable application deployment",
        "Automated deployment scripts reducing errors by 60%",
        "Deployed on Azure with Prometheus monitoring for real-time analysis",
        "Increased user engagement by 30% through optimized recommendations"
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
      duration: "Jan 2023 - May 2024",
      institution: "Sathyabama Institute of Science and Technology"
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

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sf-pro font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            A showcase of my research and academic projects, demonstrating expertise in distributed systems, 
            machine learning, and scalable backend engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-1 gap-8 mb-16">
          {projects.map((project, index) => (
            <GlassCard key={index} variant="hover" className="overflow-hidden group" glow>
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Project Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-medium text-white rounded-full bg-gradient-to-r ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="lg:col-span-2 p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-sf-pro font-semibold text-white">
                      {project.title}
                    </h3>
                    <div className="text-right">
                      <p className="text-white/60 text-xs">{project.duration}</p>
                      <p className="text-blue-300 text-xs">{project.institution}</p>
                    </div>
                  </div>
                  
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-xs text-white/60">
                          <div className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs px-3 py-1 bg-white/10 text-white/70 rounded-full border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <GlassCard variant="subtle" className="flex-1 py-2 px-4 text-center cursor-pointer hover:bg-white/10 transition-all">
                      <span className="text-white/80 text-sm font-medium">View Details</span>
                    </GlassCard>
                    <GlassCard variant="subtle" className="flex-1 py-2 px-4 text-center cursor-pointer hover:bg-white/10 transition-all">
                      <span className="text-white/80 text-sm font-medium">View Code</span>
                    </GlassCard>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <GlassCard variant="hover" className="p-6 text-center" glow>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">3</h3>
            <p className="text-white/70 text-sm">Major Projects</p>
          </GlassCard>
          
          <GlassCard variant="hover" className="p-6 text-center" glow>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">560+</h3>
            <p className="text-white/70 text-sm">TPS Achieved</p>
          </GlassCard>
          
          <GlassCard variant="hover" className="p-6 text-center" glow>
            <h3 className="text-2xl font-bold text-green-400 mb-2">100K+</h3>
            <p className="text-white/70 text-sm">Data Points Analyzed</p>
          </GlassCard>
          
          <GlassCard variant="hover" className="p-6 text-center" glow>
            <h3 className="text-2xl font-bold text-orange-400 mb-2">40%</h3>
            <p className="text-white/70 text-sm">Performance Improvement</p>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}