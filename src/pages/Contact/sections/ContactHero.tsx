import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function ContactHero() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById("contact-form-section")
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative bg-primary text-primary-foreground pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-white/10">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-screen-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-yellow-500 font-sans tracking-[0.2em] uppercase text-sm font-medium mb-6 block">
            Get in Touch
          </span>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-medium tracking-tight mb-8">
            Let's start with a <span className="italic text-white/80">conversation.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/70 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            You don't need to have a deal on the table. Whether you're thinking about selling, exploring an acquisition, trying to understand what your business may be worth, or simply considering what comes next, the first step is a conversation.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="#contact-form-section"
              onClick={scrollToForm}
              className="inline-flex items-center justify-center h-14 px-8 text-sm font-medium tracking-wide uppercase bg-white text-primary hover:bg-yellow-500 hover:text-white transition-colors duration-300 group"
            >
              Send an Inquiry
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
