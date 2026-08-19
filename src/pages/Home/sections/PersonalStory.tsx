import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export function PersonalStory() {
  return (
    <section className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="aspect-[3/4] w-full bg-border flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
               <span className="font-heading text-xl text-muted-foreground/50 tracking-widest uppercase">Todd Topliff</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-medium tracking-tight mb-8">
              A Partner Who Knows Both Sides of the Table
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-2xl">
              <p>
                Before becoming an advisor, Todd spent over 15 years in commercial banking and corporate finance. He's also been in the trenches as a business owner himself.
              </p>
              <p>
                This rare combination of hands-on entrepreneurial experience and rigorous financial acumen allows him to protect your interests, negotiate from a position of strength, and guide you through the complexities of a strategic exit.
              </p>
            </div>
            
            <Link 
              to="/about" 
              className="mt-10 inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors uppercase tracking-widest text-sm"
            >
              Read Full Story
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
