import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 bg-primary text-primary-foreground overflow-hidden">
      {/* Subtle ambient glow to create depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-60" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-screen-2xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="font-sans text-sm tracking-[0.3em] text-yellow-500 uppercase mb-6 block">
            Your Next Chapter Begins Here
          </span>
          <h2 className="font-heading text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-[1.1]">
            Thinking about what<br/>comes next?
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/70 mb-14 font-light max-w-2xl">
            A successful exit isn't just about the numbers. It's about finding the right partner to protect your legacy. Start with a conversation.
          </p>
          
          <Link 
            to="/contact" 
            className="group relative inline-flex items-center justify-center bg-white text-primary px-12 py-6 overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10 font-sans tracking-[0.1em] uppercase font-semibold text-sm">
              Start a Conversation
            </span>
            <div className="absolute inset-0 bg-yellow-50 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
