import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export function OpportunitiesHero() {
  const scrollToListings = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById("opportunity-listings")
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative bg-primary text-primary-foreground pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-border/10">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none -translate-x-1/2 -translate-y-1/4" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-yellow-500 font-sans tracking-[0.2em] uppercase text-sm font-medium mb-6 block">
                Acquisition Search
              </span>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-medium tracking-tight mb-8">
                The right opportunity starts with the <span className="italic text-white/80">right fit.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-foreground/70 font-light leading-relaxed mb-10 max-w-2xl">
                Explore business acquisition opportunities across Southwest Florida and beyond. Whether you're an experienced buyer looking for your next acquisition or an entrepreneur exploring business ownership for the first time, the right opportunity begins with understanding the business behind the numbers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="#opportunity-listings"
                  onClick={scrollToListings}
                  className="inline-flex items-center justify-center h-14 px-8 text-sm font-medium tracking-wide uppercase bg-white text-primary hover:bg-yellow-500 hover:text-white transition-colors duration-300"
                >
                  View Opportunities
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center h-14 px-8 text-sm font-medium tracking-wide uppercase border border-white/20 text-white hover:bg-white/10 transition-colors duration-300"
                >
                  Start a Conversation
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Visual / Abstract Map Grid */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square overflow-hidden bg-primary border border-white/10"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
              
              {/* Highlight Nodes */}
              <div className="absolute top-[20%] left-[30%] w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="absolute top-[20%] left-[30%] w-3 h-3 bg-yellow-500 rounded-full animate-ping opacity-50" />
              
              <div className="absolute top-[60%] left-[70%] w-2 h-2 bg-white/40 rounded-full" />
              <div className="absolute top-[40%] left-[80%] w-2 h-2 bg-white/40 rounded-full" />
              <div className="absolute top-[80%] left-[40%] w-2 h-2 bg-white/40 rounded-full" />

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-white/20" fill="none">
                <path d="M 120 80 L 280 240 L 320 160 L 160 320" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/5 backdrop-blur-md border border-white/10">
                <p className="font-sans text-xs tracking-widest text-white/50 uppercase mb-2">Active Markets</p>
                <p className="font-heading text-xl text-white">Southwest Florida & Beyond</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
