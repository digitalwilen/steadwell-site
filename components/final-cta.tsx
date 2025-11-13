"use client"

export default function FinalCTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#04324A]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Ready to take the list off your plate?</h2>
        <p className="text-lg text-white/90 mb-8">Schedule a free Clarity Call with one of our coordinators.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-[#04324A] px-8 py-3 rounded-full font-medium hover:shadow-lg transition-shadow"
          >
            Schedule Your Free 20-Minute Clarity Call
          </button>
          <a
            href="tel:2405932485"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            (240) 593-2485
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
          <span>NASMM Member</span>
          <span className="opacity-50">•</span>
          <span>AIP Certified</span>
          <span className="opacity-50">•</span>
          <span>Bonded & Insured</span>
        </div>
      </div>
    </section>
  )
}
