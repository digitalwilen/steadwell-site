"use client"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <p className="text-sm font-medium text-[#0A7A57] mb-4 uppercase tracking-widest">
              For adult children managing moves, estates, and aging-in-place.
            </p>

            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
              When your parent's next move becomes your job, we make it manageable.
            </h1>

            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              We coordinate moves, estates, and aging-in-place—so your family can stay focused on what matters most.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:shadow-lg transition-shadow"
              >
                Schedule Your Free 20-Minute Clarity Call
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary/5 transition-colors"
              >
                Speak with a Coordinator Today
              </button>
            </div>

            {/* Proof Bar */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#0A7A57] rounded-full"></span>
                <span>Bonded & Insured Vendors</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#0A7A57] rounded-full"></span>
                <span>Background-Checked Teams</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#0A7A57] rounded-full"></span>
                <span>Serving Austin & Raleigh</span>
              </div>
            </div>

            {/* Savings Blurb */}
            <div className="bg-[#0A7A57]/5 rounded-full px-6 py-4 border border-[#0A7A57]/20">
              <p className="text-sm font-medium">
                <span className="text-[#04324A] font-bold">25–40 hours</span> typically reclaimed by families per
                project in coordination and vendor wrangling.
              </p>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="flex justify-center">
            <div className="relative w-full h-96 bg-gradient-to-br from-[#F7F2EC] to-[#0A7A57]/10 rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Adult child and aging parent working together on move preparations"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
