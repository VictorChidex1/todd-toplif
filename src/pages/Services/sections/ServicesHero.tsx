import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="relative bg-primary text-primary-foreground pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-border/10">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-medium tracking-tight mb-8">
                Strategic guidance for the <span className="italic text-white/80">next chapter</span> of your business.
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-foreground/70 font-light leading-relaxed mb-10 max-w-2xl">
                Selling a business is rarely as simple as putting a price on it and finding a buyer. Todd Topliff helps business owners understand their options, prepare for the market, position their business effectively, and navigate the transaction with a clear strategy from the first conversation through closing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center h-14 px-8 text-sm font-medium tracking-wide uppercase bg-white text-primary hover:bg-yellow-500 hover:text-white transition-colors duration-300"
                >
                  Start a Conversation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                
                <Link 
                  to="/about" 
                  className="inline-flex items-center justify-center h-14 px-8 text-sm font-medium tracking-wide uppercase border border-white/20 text-white hover:bg-white/10 transition-colors duration-300"
                >
                  Meet Todd
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Visual / Abstract Frame */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square overflow-hidden bg-primary/50 border border-white/10"
            >
              <img 
                src="/assets/services-hero.webp" 
                alt="Executive Boardroom" 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 to-transparent" />
              
              {/* Decorative Frame Elements */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-white/30" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-white/30" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
