"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Message sent successfully!')
    }, 2000)
  }

  const contactInfo = [
    {
      title: "Email",
      value: "saikiranreddy2710@gmail.com",
      link: "mailto:saikiranreddy2710@gmail.com",
      icon: "📧"
    },
    {
      title: "Phone",
      value: "+1 (631) 820 1876",
      link: "tel:+16318201876",
      icon: "📱"
    },
    {
      title: "LinkedIn",
      value: "LinkedIn Profile",
      link: "https://www.linkedin.com",
      icon: "💼"
    },
    {
      title: "GitHub",
      value: "GitHub Profile",
      link: "https://github.com",
      icon: "🔗"
    },
    {
      title: "Location",
      value: "New York, NY",
      link: "#",
      icon: "📍"
    }
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sf-pro font-bold text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            Interested in collaboration or have questions about my research? Feel free to reach out. I&apos;m always open to discussing distributed systems, machine learning, and backend engineering opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <GlassCard variant="default" className="p-8">
              <h3 className="text-2xl font-sf-pro font-semibold text-white mb-8">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <GlassCard variant="subtle" className="p-0 overflow-hidden">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-4 bg-transparent text-white placeholder-white/50 border-none outline-none focus:ring-2 focus:ring-blue-400/50 transition-all"
                        placeholder="Your full name"
                      />
                    </GlassCard>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <GlassCard variant="subtle" className="p-0 overflow-hidden">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-4 bg-transparent text-white placeholder-white/50 border-none outline-none focus:ring-2 focus:ring-blue-400/50 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </GlassCard>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white/80 text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <GlassCard variant="subtle" className="p-0 overflow-hidden">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-4 bg-transparent text-white placeholder-white/50 border-none outline-none focus:ring-2 focus:ring-blue-400/50 transition-all"
                      placeholder="What's this about?"
                    />
                  </GlassCard>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <GlassCard variant="subtle" className="p-0 overflow-hidden">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full p-4 bg-transparent text-white placeholder-white/50 border-none outline-none focus:ring-2 focus:ring-blue-400/50 transition-all resize-none"
                      placeholder="Tell me about your project or how I can help you..."
                    />
                  </GlassCard>
                </div>

                <GlassCard 
                  variant="hover" 
                  className="w-full p-4 text-center cursor-pointer group"
                  glow
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white font-medium group-hover:text-blue-100 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </GlassCard>
              </form>
            </GlassCard>
          </div>

          {/* Contact Information & Social Links */}
          <div className="space-y-8">
            {/* Contact Info */}
            <GlassCard variant="default" className="p-8">
              <h3 className="text-xl font-sf-pro font-semibold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <GlassCard 
                    key={index}
                    variant="subtle" 
                    className="p-4 hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <a 
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-3"
                    >
                      <span className="text-xl">{info.icon}</span>
                      <div>
                        <p className="text-white/60 text-xs uppercase tracking-wide">
                          {info.title}
                        </p>
                        <p className="text-white/90 text-sm">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </GlassCard>
                ))}
              </div>
            </GlassCard>

            {/* Quick Response Times */}
            <GlassCard variant="hover" className="p-6" glow>
              <h3 className="text-lg font-sf-pro font-semibold text-white mb-4">
                Response Times
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">Email</span>
                  <span className="text-blue-400 text-sm font-medium">Within 24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">LinkedIn</span>
                  <span className="text-purple-400 text-sm font-medium">Same day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">Project Inquiries</span>
                  <span className="text-green-400 text-sm font-medium">Within 12 hours</span>
                </div>
              </div>
            </GlassCard>

            {/* Availability */}
            <GlassCard variant="subtle" className="p-6">
              <h3 className="text-lg font-sf-pro font-semibold text-white mb-4">
                Current Status
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white/80 text-sm">Graduate Student at Stony Brook</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full" />
                  <span className="text-white/80 text-sm">Research Assistant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full" />
                  <span className="text-white/80 text-sm">Open to Internship Opportunities</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="text-center">
            <GlassCard variant="subtle" className="inline-block px-6 py-3">
              <p className="text-white/70 text-sm">
                © 2024 Saikiran Reddy Jakka. Built with Next.js, TypeScript & Tailwind CSS
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}