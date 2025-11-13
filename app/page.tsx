"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import HowItWorks from "@/components/how-it-works"
import Outcomes from "@/components/outcomes"
import MidCTA from "@/components/mid-cta"
import CaseStudies from "@/components/case-studies"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import ContactForm from "@/components/contact-form"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"

export default function Home() {
  const [selectedService, setSelectedService] = useState<"Move & Estate" | "Aging-in-Place" | "Both / Not Sure">(
    "Move & Estate",
  )

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services selectedService={selectedService} setSelectedService={setSelectedService} />
      <HowItWorks />
      <Outcomes />
      <MidCTA />
      <CaseStudies />
      <Pricing />
      <FAQ />
      <ContactForm selectedService={selectedService} setSelectedService={setSelectedService} />
      <FinalCTA />
      <Footer />
    </div>
  )
}
