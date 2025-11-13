"use client"

export default function MidCTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get your free 20-minute clarity call.</h2>
        <p className="text-lg text-foreground/70 mb-8">
          We'll review your situation and outline next steps—no obligation.
        </p>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:shadow-lg transition-shadow"
        >
          Schedule Your Free 20-Minute Clarity Call
        </button>
      </div>
    </section>
  )
}
