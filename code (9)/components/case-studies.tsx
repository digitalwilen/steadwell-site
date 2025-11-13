"use client"

export default function CaseStudies() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Real families. Real results.</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Case Study 1 */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Austin, TX</div>
            <h3 className="text-2xl font-bold mb-4">Estate Sale & Home Sale</h3>
            <p className="text-foreground/70 mb-6 italic">
              "My mom passed and left a full house. I live 2 hours away. I didn't know where to start."
            </p>

            <div className="bg-blue-50/50 rounded-lg p-4 mb-6 border border-border">
              <p className="text-foreground/80">
                "Steadwell handled everything—sorting, estate sale, yard cleanup, repairs. The house sold 10 days after
                listing. I can't overstate the value of having one person to call."
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <span className="font-bold">40 hours saved.</span> Estate sale conducted + home prepped for market.
              </div>
              <div>
                <span className="font-bold">$485K sale price</span> vs. estimated $420K without prep.
              </div>
              <div>
                <span className="font-bold">Coordination fee: $8,200</span> (far less than opportunity cost of DIY).
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Raleigh, NC</div>
            <h3 className="text-2xl font-bold mb-4">Aging-in-Place Safety Retrofit</h3>
            <p className="text-foreground/70 mb-6 italic">
              "Dad had a fall. We panicked. Steadwell came in 48 hours with a professional assessment and plan."
            </p>

            <div className="bg-blue-50/50 rounded-lg p-4 mb-6 border border-border">
              <p className="text-foreground/80">
                "Grab bars, ramp, accessible shower, better lighting—done in 2 weeks. Dad is safe. I can finally sleep."
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <span className="font-bold">35 hours saved.</span> Assessment + vendor coordination + installation
                oversight.
              </div>
              <div>
                <span className="font-bold">$22K in modifications</span> completed without delays or family stress.
              </div>
              <div>
                <span className="font-bold">Coordination fee: $3,600</span> (3–5 year independence extension priceless).
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
