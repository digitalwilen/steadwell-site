"use client"

interface ServicesProps {
  selectedService: "Move & Estate" | "Aging-in-Place" | "Both / Not Sure"
  setSelectedService: (service: "Move & Estate" | "Aging-in-Place" | "Both / Not Sure") => void
}

export default function Services({ selectedService, setSelectedService }: ServicesProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleServiceSelect = (service: "Move & Estate" | "Aging-in-Place" | "Both / Not Sure") => {
    setSelectedService(service)
    scrollToSection("contact")
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F2EC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Which transition are you planning?</h2>
          <p className="text-lg text-foreground/70">Select your situation to get started.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Move & Estate Card */}
          <div className="bg-white rounded-3xl p-8 border border-border shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-6">Move & Estate</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#0A7A57] rounded-full mt-2 flex-shrink-0"></span>
                <span>Home emptied, move executed, new place setup</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#0A7A57] rounded-full mt-2 flex-shrink-0"></span>
                <span>Estate items sold/donated with receipts for your records</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#0A7A57] rounded-full mt-2 flex-shrink-0"></span>
                <span>Repairs, clean-out done, home market-ready</span>
              </li>
            </ul>
            <button
              onClick={() => handleServiceSelect("Move & Estate")}
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow"
            >
              Start Move / Estate Plan
            </button>
          </div>

          {/* Aging-in-Place Card */}
          <div className="bg-white rounded-3xl p-8 border border-border shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-6">Aging-in-Place</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#0A7A57] rounded-full mt-2 flex-shrink-0"></span>
                <span>Professional home safety assessment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#0A7A57] rounded-full mt-2 flex-shrink-0"></span>
                <span>Safety upgrades: grab bars, ramps, bath & lighting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#0A7A57] rounded-full mt-2 flex-shrink-0"></span>
                <span>Ongoing maintenance plan and vetted pros</span>
              </li>
            </ul>
            <button
              onClick={() => handleServiceSelect("Aging-in-Place")}
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow"
            >
              Start Aging-In-Place Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
