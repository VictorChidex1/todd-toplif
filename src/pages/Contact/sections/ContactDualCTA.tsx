import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export function ContactDualCTA() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById("contact-form-section")
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section className="flex flex-col lg:flex-row min-h-[600px]">
      
      {/* Seller CTA (Dark Side) */}
      <div className="flex-1 bg-primary text-primary-foreground p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-xl mx-auto lg:mx-0 lg:ml-auto w-full">
          <span className="text-yellow-500 font-sans tracking-[0.2em] uppercase text-sm font-medium mb-6 block">
            For Sellers
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-6">
            Thinking about selling?
          </h2>
          <p className="text-lg text-primary-foreground/70 font-light leading-relaxed mb-10">
            Selling a business is a major decision. Before you put anything on the market, it can help to understand your options and what preparation may be required.
          </p>
          <a 
            href="#contact-form-section"
            onClick={scrollToForm}
            className="inline-flex items-center text-sm font-medium tracking-widest uppercase text-white hover:text-yellow-500 transition-colors group"
          >
            Discuss Selling Your Business
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Buyer CTA (Light Side) */}
      <div className="flex-1 bg-slate-50 text-slate-900 p-12 md:p-24 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border">
        <div className="max-w-xl mx-auto lg:mx-0 lg:mr-auto w-full">
          <span className="text-yellow-600 font-sans tracking-[0.2em] uppercase text-sm font-medium mb-6 block">
            For Buyers
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-6">
            Looking for your next opportunity?
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
            Tell Todd what type of business you're looking for, where you want to operate, and what you're hoping to accomplish.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              to="/opportunities" 
              className="inline-flex items-center justify-center h-14 px-8 text-sm font-medium tracking-wide uppercase bg-primary text-primary-foreground hover:bg-yellow-600 transition-colors duration-300 group"
            >
              Explore Opportunities
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}
