import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-background text-foreground pt-24 pb-12 overflow-hidden border-t border-border">
      {/* Massive Typographic Watermark */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none select-none flex justify-center opacity-[0.03]">
        <span className="font-heading font-bold text-[15vw] whitespace-nowrap text-foreground">
          TODD TOPLIFF
        </span>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-screen-2xl">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center space-x-3 mb-6">
              <img src="/favicon.jpg" alt="Todd Topliff Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
              <span className="font-heading text-3xl font-medium tracking-tight text-primary">Todd Topliff</span>
            </Link>
            <p className="text-muted-foreground max-w-sm text-lg font-light leading-relaxed">
              Business Broker & M&A Advisor helping founders maximize the value of their life's work.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-sm tracking-[0.2em] text-yellow-600 uppercase mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">Meet Todd</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/opportunities" className="text-muted-foreground hover:text-primary transition-colors">Opportunities</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Admin */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-sm tracking-[0.2em] text-yellow-600 uppercase mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-sm tracking-[0.2em] text-yellow-600 uppercase mb-6">Connect</h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a href="mailto:todd@cibb.com" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  todd@cibb.com
                  <ArrowUpRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/todd-topliff-b3a55921/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  LinkedIn
                  <ArrowUpRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground font-light">
              Proudly advising businesses<br/>across Southwest Florida.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-light">
            &copy; {currentYear} Todd Topliff. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground font-light">Accepting New Clients</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
