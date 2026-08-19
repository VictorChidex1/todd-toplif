import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function ContactFinalCTA() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById("contact-form-section")
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-slate-900 text-white py-24 md:py-32 relative overflow-hidden">
      
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
            Next Steps
          </span>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-8 leading-[1.1]">
            Start with clarity.
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            You don't have to know exactly what comes next. You just have to be willing to start the conversation.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="#contact-form-section"
              onClick={scrollToForm}
              className="inline-flex items-center justify-center h-14 px-8 text-sm font-medium tracking-wide uppercase bg-white text-slate-900 hover:bg-yellow-500 hover:text-white transition-colors duration-300 group"
            >
              Start a Conversation
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
