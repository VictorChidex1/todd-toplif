import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export function ServicesCTA() {
  return (
    <section className="bg-primary text-primary-foreground py-24 md:py-32 relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,transparent_70%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-screen-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-yellow-500 font-sans tracking-[0.2em] uppercase text-sm font-medium mb-6 block">
            Closing Thoughts
          </span>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-8 leading-[1.1]">
            Not sure where to start?
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/70 font-light mb-12 max-w-2xl mx-auto">
            You don't need to have a deal in mind to start a conversation. Sometimes the most valuable first step is simply understanding your options.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
    </section>
  )
}
