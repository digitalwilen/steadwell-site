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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (name === "helpType") {
      setSelectedService(value as "Move & Estate" | "Aging-in-Place" | "Both / Not Sure")
    }
  }

  const fireGA4Conversion = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "lead_submission", {
        event_category: "conversion",
        event_label: formData.helpType,
        value: 1,
      })

      // Optional Google Ads-compatible event
      ;(window as any).gtag("event", "generate_lead")
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
        // ****** FIRE GA4 CONVERSION EVENT ******
        fireGA4Conversion()

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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary-foreground">
            Let's make this simple.
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Schedule your free 20-minute Clarity Call today.
          </p>
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
              {/* form fields unchanged */}
              {/* ... */}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
