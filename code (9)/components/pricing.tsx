"use client"

export default function Pricing() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Simple, predictable pricing.</h2>
          <p className="text-lg text-foreground/70">Coordination fee typically ranges 15%–25% of total vendor costs.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 border border-border shadow-md">
            <h3 className="text-2xl font-bold mb-2">Coordination Fee Model</h3>
            <p className="text-foreground/70 mb-8">
              Coordination fee typically ranges 15%–25% of total vendor costs, depending on complexity and scope.
            </p>

            <div className="bg-[#F7F2EC] rounded-lg p-6 mb-8 border border-[#F7F2EC]">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Example</span>
                </div>
                <div className="h-px bg-border"></div>
                <div className="flex justify-between text-sm">
                  <span>Total vendor work</span>
                  <span className="font-semibold">$30,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Steadwell fee (15%)</span>
                  <span className="font-semibold text-[#0A7A57]">$4,500</span>
                </div>
              </div>
            </div>

            <h4 className="font-bold mb-4">What's Included</h4>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#0A7A57] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm">Single point of accountability (planning, scheduling, supervision).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#0A7A57] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm">Vendor sourcing and negotiation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#0A7A57] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm">Bonded/insured, background-checked teams.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#0A7A57] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm">Weekly status updates and change order management.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#0A7A57] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm">Final punch list + documentation (photos, receipts, donation letters).</span>
              </li>
            </ul>

            <button
              onClick={() => scrollToSection("contact")}
              className="w-full border-2 border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary/5 transition-colors mb-4"
            >
              Talk to a coordinator about your project
            </button>

            <p className="text-xs text-foreground/60 text-center">Or jump straight to your Clarity Call</p>
          </div>
        </div>
      </div>
    </section>
  )
}
