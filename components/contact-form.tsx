"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface ContactFormProps {
  selectedService: "Move & Estate" | "Aging-in-Place" | "Both / Not Sure"
  setSelectedService: (service: "Move & Estate" | "Aging-in-Place" | "Both / Not Sure") => void
}

export default function ContactForm({ selectedService, setSelectedService }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    helpType: "Move & Estate" as "Move & Estate" | "Aging-in-Place" | "Both / Not Sure",
    situation: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setFormData((prev) => ({ ...prev, helpType: selectedService }))
  }, [selectedService])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (name === "helpType") {
      setSelectedService(value as "Move & Estate" | "Aging-in-Place" | "Both / Not Sure")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          helpType: "Move & Estate",
          situation: "",
        })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary-foreground">Let's make this simple.</h2>
          <p className="text-lg text-primary-foreground/90">Schedule your free 20-minute Clarity Call today.</p>
        </div>

        <div className="bg-white rounded-3xl p-8 max-w-2xl mx-auto shadow-xl">
          {submitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0A7A57]/20 rounded-full mb-4">
                <svg className="w-6 h-6 text-[#0A7A57]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold mb-2">Thank you!</p>
              <p className="text-foreground/70">A coordinator will follow up within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <select
                name="helpType"
                required
                value={formData.helpType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="Move & Estate">Move & Estate</option>
                <option value="Aging-in-Place">Aging-in-Place</option>
                <option value="Both / Not Sure">Both / Not Sure</option>
              </select>

              <textarea
                name="situation"
                placeholder="Describe your situation (optional)"
                value={formData.situation}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              ></textarea>

              <div className="text-sm text-foreground/70 bg-[#F7F2EC] p-4 rounded-lg">
                Prefer to call?{" "}
                <a href="tel:2405932485" className="font-semibold text-primary hover:underline">
                  (240) 593-2485
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground py-3 rounded-full font-medium hover:shadow-lg transition-shadow disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Request Your Clarity Call"}
              </button>

              <p className="text-xs text-foreground/60 text-center">
                We respect your privacy. Your information will only be used to schedule your Clarity Call.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
