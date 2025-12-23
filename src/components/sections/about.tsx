"use client"

import { GlassCard } from "@/components/ui/glass-card"

export default function About() {
  const highlights = [
    {
      title: "Backend Engineering",
      description: "Building scalable distributed systems with consensus algorithms like Paxos and PBFT, ensuring high availability and fault tolerance."
    },
    {
      title: "Machine Learning & AI",
      description: "Developing ML-driven solutions for warehouse optimization, demand forecasting, and data-driven decision making using Python and PyTorch."
    },
    {
      title: "Systems & DevOps",
      description: "Implementing GitOps workflows, CI/CD pipelines, and cloud infrastructure on AWS, Azure, and GCP for reliable deployments."
    }
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sf-pro font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <GlassCard variant="default" className="p-8">
              <h3 className="text-2xl font-sf-pro font-semibold text-white mb-6">
                Backend Engineer & ML Researcher
              </h3>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  I'm a graduate student at Stony Brook University pursuing my Master's in Computer Science, 
                  specializing in distributed systems and machine learning. My research focuses on building 
                  fault-tolerant distributed systems using consensus algorithms like Paxos and PBFT.
                </p>
                <p>
                  Currently working as a Machine Learning Research Assistant, I'm developing smart warehouse 
                  optimization systems using Ergo AI and ML models. With expertise in Python, Rust, Go, and 
                  C++, I build scalable backend systems that handle high-throughput transactions while 
                  maintaining consistency and reliability.
                </p>
                <p>
                  My experience spans from implementing distributed transaction processing systems to 
                  building ML-driven applications with GitOps-based deployments. I'm passionate about 
                  solving complex systems challenges and applying data-driven approaches to real-world problems.
                </p>
              </div>
            </GlassCard>

            {/* Professional Stats */}
            <div className="grid grid-cols-2 gap-4">
              <GlassCard variant="hover" className="p-6 text-center" glow>
                <h4 className="text-2xl font-bold text-blue-400">3.4/4</h4>
                <p className="text-white/70">Graduate GPA</p>
              </GlassCard>
              <GlassCard variant="hover" className="p-6 text-center" glow>
                <h4 className="text-2xl font-bold text-purple-400">10+</h4>
                <p className="text-white/70">Projects Completed</p>
              </GlassCard>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            <GlassCard variant="default" className="p-8">
              <h3 className="text-2xl font-sf-pro font-semibold text-white mb-8">
                What I Bring to the Table
              </h3>
              
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="group">
                    <GlassCard 
                      variant="subtle" 
                      className="p-6 group-hover:bg-white/10 transition-all duration-300"
                    >
                      <h4 className="text-lg font-semibold text-blue-100 mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </GlassCard>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Certifications */}
            <GlassCard variant="hero" className="p-6">
              <h3 className="text-xl font-sf-pro font-semibold text-white mb-4">
                Certifications
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                  <span className="text-white/80 text-sm">Microsoft Azure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full" />
                  <span className="text-white/80 text-sm">ServiceNow CAD</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                  <span className="text-white/80 text-sm">ServiceNow CSA</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}