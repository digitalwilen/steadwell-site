"use client"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Problem */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Endless to-dos. No clear starting point. We can help.
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              We own the list and coordinate vendors. You stay in control with one accountable partner.
            </p>

            <div className="space-y-4">
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="font-medium mb-2">Response within one business day.</p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="font-medium mb-2">Action plan delivered within 72 hours.</p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="font-medium mb-2">Weekly status updates (one owner, single thread).</p>
              </div>
            </div>
          </div>

          {/* Right Column - 5-Step System */}
          <div>
            <div className="bg-background rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-2">5-Step System</h3>
              <p className="text-foreground/70 mb-8">Five steps. One accountable partner.</p>

              <div className="space-y-6">
                {[
                  {
                    num: 1,
                    title: "Discovery Call",
                    desc: "Understand your goals, constraints, and timeline.",
                  },
                  {
                    num: 2,
                    title: "Custom Plan Written",
                    desc: "Scope, timeline, and cost ranges.",
                  },
                  {
                    num: 3,
                    title: "Vendor Coordination",
                    desc: "We source, propose, book, and supervise vendors (you retain final approval).",
                  },
                  {
                    num: 4,
                    title: "Weekly Updates",
                    desc: "One summary, next milestones, no chasing.",
                  },
                  {
                    num: 5,
                    title: "Project Completion",
                    desc: "Punch list closed, photo proof, receipts archived.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                        {step.num}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{step.title}</h4>
                      <p className="text-sm text-foreground/70">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
