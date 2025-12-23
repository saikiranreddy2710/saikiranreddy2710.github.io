"use client"

import { GlassCard } from "@/components/ui/glass-card"

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

  const certifications = [
    "Microsoft Azure Certification",
    "ServiceNow Certified Application Developer (CAD)",
    "ServiceNow Certified System Administrator (CSA)",
    "IEEE AMATHE 2024 - GitOps Presentation"
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sf-pro font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit spanning distributed systems, machine learning, and cloud infrastructure for building scalable backend solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <GlassCard key={categoryIndex} variant="default" className="p-8 group">
              <h3 className="text-xl font-sf-pro font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white/90 font-medium">{skill.name}</span>
                      <span className="text-white/60 text-sm">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105 origin-left`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Additional Skills & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Additional Technologies */}
          <GlassCard variant="hover" className="p-8" glow>
            <h3 className="text-xl font-sf-pro font-semibold text-white mb-6">
              Additional Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "GitOps",
                "CI/CD",
                "Terraform",
                "Jenkins",
                "Ansible",
                "Helm",
                "Tableau",
                "Power BI",
                "ETL Pipelines",
                "Prometheus",
                "GCP",
                "Unix/Linux"
              ].map((tech, index) => (
                <GlassCard 
                  key={index} 
                  variant="subtle" 
                  className="p-3 text-center text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all"
                >
                  {tech}
                </GlassCard>
              ))}
            </div>
          </GlassCard>

          {/* Certifications */}
          <GlassCard variant="hover" className="p-8" glow>
            <h3 className="text-xl font-sf-pro font-semibold text-white mb-6">
              Certifications & Achievements
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex-shrink-0" />
                  <span className="text-white/80">{cert}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/60 text-sm italic">
                Continuously expanding expertise in distributed systems, consensus algorithms, and ML-driven optimization techniques.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}