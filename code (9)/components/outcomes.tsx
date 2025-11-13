"use client"

export default function Outcomes() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F2F7F4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[#0A7A57] mb-2 uppercase tracking-wide">
            Most families save 25–40 hours; Aging-in-Place work finishes in 7–21 days (scope dependent).
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">What families actually get back.</h2>
          <p className="text-lg text-foreground/70">
            Professional coordination means faster closings, safer homes, and less stress for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Move & Estate Outcomes */}
          <div className="bg-white rounded-3xl p-8 border border-border shadow-md">
            <h3 className="text-2xl font-bold mb-6">Move & Estate</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#0A7A57] rounded-full mt-2 flex-shrink-0"></span>
                <span>Homes list and sell 15% faster with professional prep.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#0A7A57] rounded-full mt-2 flex-shrink-0"></span>
                <span>Family time back: 35+ hours a month during active projects.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#0A7A57] rounded-full mt-2 flex-shrink-0"></span>
                <span>Reduced liability: bonded, insured, background-checked vendors.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#0A7A57] rounded-full mt-2 flex-shrink-0"></span>
                <span>Tax-ready documentation: receipts + photo proof.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#0A7A57] rounded-full mt-2 flex-shrink-0"></span>
                <span>Relationships preserved, not strained.</span>
              </li>
            </ul>
          </div>

          {/* Aging-in-Place Outcomes */}
          <div className="bg-white rounded-3xl p-8 border border-border shadow-md">
            <h3 className="text-2xl font-bold mb-6">Aging-in-Place</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#0A7A57] rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Professional safety assessment with written recommendations: fall risk reduction 40–60% with targeted
                  upgrades.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#0A7A57] rounded-full mt-2 flex-shrink-0"></span>
                <span>Supports independence longer with right-sized modifications.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#0A7A57] rounded-full mt-2 flex-shrink-0"></span>
                <span>Lower caregiver stress, clearer plan of record.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#0A7A57] rounded-full mt-2 flex-shrink-0"></span>
                <span>Modifications completed in 1–3 weeks, not months.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
