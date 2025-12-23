"use client"

import { GlassCard } from "@/components/ui/glass-card"

export default function Experience() {
  const experiences = [
    {
      title: "Machine Learning Research Assistant",
      company: "Stony Brook University",
      duration: "Aug 2024 - Present",
      type: "Research",
      location: "Stony Brook, NY",
      description: "Smart Warehouse Optimization using Ergo AI and Machine Learning. Designing warehouse automation systems with ML-driven optimization.",
      achievements: [
        "Designed warehouse automation planner on Ergo AI, encoding 30+ safety constraints with data-driven heuristics, reducing simulated plan inconsistencies by 25%",
        "Developed supervised learning models (random forests, neural networks) for demand forecasting and shelf-allocation, improving routing efficiency by 20%",
        "Built data-driven 'what-if' experimentation framework combining ML predictions with dynamic constraint toggles, cutting configuration time by 20%",
        "Implemented multi-robot coordination and dual-shelf layouts ensuring scalability under varying workloads"
      ],
      technologies: ["Python", "Ergo AI", "Machine Learning", "Neural Networks", "Random Forests", "Data Science"]
    },
    {
      title: "Software Engineering Intern",
      company: "Excelr Solutions",
      duration: "Aug 2022 - Nov 2022",
      type: "Internship",
      location: "Chennai, Tamil Nadu",
      description: "Designed and built Tableau dashboards for consumer goods analytics, analyzing product sales trends and business metrics.",
      achievements: [
        "Designed and created over 100 Tableau dashboards for consumer goods analytics, improving sales growth by 10%",
        "Performed Pearson correlation analysis in Excel examining product sales trends across 50+ locations and categories",
        "Raised company revenue by 10% by analyzing 5-year sales and product trends to identify key growth opportunities",
        "Collaborated in 3-member team to deliver actionable insights on product geography and categories"
      ],
      technologies: ["Tableau", "Excel", "Data Analysis", "Business Intelligence", "SQL"]
    }
  ]

  const education = [
    {
      degree: "M.S., Computer Science",
      institution: "Stony Brook University",
      duration: "Aug 2024 - May 2026",
      grade: "GPA: 3.4/4",
      highlights: [
        "Distributed Systems",
        "Data Science",
        "Reliable System Programming",
        "Database Management"
      ]
    },
    {
      degree: "B.Eng, Computer Science",
      institution: "Sathyabama Institute of Science and Technology",
      duration: "Sep 2020 - May 2024",
      grade: "GPA: 3.9/4",
      highlights: [
        "Machine Learning",
        "Artificial Intelligence",
        "Deep Learning",
        "Natural Language Processing",
        "Distributed Database Systems"
      ]
    }
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sf-pro font-bold text-white mb-6">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            My professional journey and educational background in software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-sf-pro font-semibold text-white mb-8">
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <GlassCard key={index} variant="hover" className="p-8 group" glow>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-blue-300 font-medium mb-2">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/80 text-sm">{exp.duration}</p>
                      <div className="flex gap-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded">
                          {exp.type}
                        </span>
                        <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/70 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-white mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2 text-sm text-white/70">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-white mb-2">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs px-3 py-1 bg-white/10 text-white/80 rounded-full border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Education & Additional Info */}
          <div className="space-y-8">
            {/* Education */}
            <GlassCard variant="default" className="p-8">
              <h3 className="text-xl font-sf-pro font-semibold text-white mb-6">
                Education
              </h3>
              
              {education.map((edu, index) => (
                <div key={index} className={index > 0 ? "mt-6 pt-6 border-t border-white/10" : ""}>
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-white/80 mb-1">{edu.institution}</p>
                  <p className="text-white/60 text-sm mb-1">{edu.duration}</p>
                  <p className="text-green-400 text-sm font-medium mb-3">{edu.grade}</p>

                  <div>
                    <h5 className="text-sm font-semibold text-white mb-2">Coursework:</h5>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start space-x-2 text-sm text-white/70">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </GlassCard>

            {/* Quick Stats */}
            <GlassCard variant="hover" className="p-6" glow>
              <h3 className="text-lg font-sf-pro font-semibold text-white mb-4">
                Quick Stats
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Graduate GPA</span>
                  <span className="text-blue-400 font-semibold">3.4/4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Undergraduate GPA</span>
                  <span className="text-purple-400 font-semibold">3.9/4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Projects Completed</span>
                  <span className="text-green-400 font-semibold">10+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Research Papers</span>
                  <span className="text-orange-400 font-semibold">1</span>
                </div>
              </div>
            </GlassCard>

            {/* Current Focus */}
            <GlassCard variant="subtle" className="p-6">
              <h3 className="text-lg font-sf-pro font-semibold text-white mb-4">
                Research Interests
              </h3>
              
              <div className="space-y-3">
                {[
                  "Distributed Consensus Algorithms",
                  "Fault-Tolerant Systems",
                  "Machine Learning Optimization",
                  "Cloud Infrastructure"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}