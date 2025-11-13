"use client"

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Steadwell</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Coordination services for moves, estates, and aging-in-place. Bonded, insured, background-checked teams.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Move & Estate
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Aging-in-Place
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:2405932485"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium"
                >
                  (240) 593-2485
                </a>
              </li>
              <li>
                <p className="text-sm text-foreground/70">Monday–Friday, 8AM–6PM local</p>
              </li>
              <li>
                <p className="text-sm text-foreground/70">Austin, TX & Raleigh, NC</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Strip */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-foreground/60">© 2025 Steadwell. All rights reserved.</p>
            <p className="text-xs text-foreground/60 text-center">
              Steadwell provides non-medical coordination services. We are not a healthcare provider.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
