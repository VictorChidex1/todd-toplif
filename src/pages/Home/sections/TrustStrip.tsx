import { motion, type Variants } from "framer-motion"

const stats = [
  {
    value: "15+",
    label: "Years",
    subtext: "EXPERIENCE",
  },
  {
    value: "Commercial",
    label: "Banking",
    subtext: "BACKGROUND",
  },
  {
    value: "Former",
    label: "Owner",
    subtext: "BUSINESS",
  },
  {
    value: "SW Florida",
    label: "Local",
    subtext: "EXPERTISE",
  },
]

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

export function TrustStrip() {
  return (
    <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden shadow-inner">
      {/* Subtle background texture/noise could go here. For now, a deep gradient works. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-screen-2xl">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 md:gap-8 divide-x-0 md:divide-x divide-primary-foreground/10"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="flex flex-col items-center justify-center text-center px-4 relative group"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 rounded-full scale-150" />
              
              <h3 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-2 relative z-10">
                <span className="bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm">
                  {stat.value}
                </span>
                {stat.label && (
                  <span className="block text-2xl md:text-3xl text-primary-foreground/90 mt-1">{stat.label}</span>
                )}
              </h3>
              <p className="font-sans text-xs md:text-sm font-semibold tracking-[0.25em] text-primary-foreground/50 uppercase mt-2 relative z-10">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
