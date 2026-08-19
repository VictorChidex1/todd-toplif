import { motion } from "framer-motion"

export function Differentiator() {
  const pillars = [
    {
      title: "The Owner's Lens",
      description: "Having built and exited his own companies, Todd knows that selling isn't just a financial event—it's a deeply personal transition that requires safeguarding your legacy."
    },
    {
      title: "The Lender's Eye",
      description: "With a background in commercial banking, Todd anticipates exactly how financial institutions and buyers will stress-test your numbers, allowing you to prepare in advance."
    },
    {
      title: "The Advisor's Strategy",
      description: "As an M&A advisor, Todd orchestrates the entire process, filtering out noise and positioning your business to attract the right institutional or strategic buyers."
    }
  ]

  return (
    <section className="relative py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Sticky Headline */}
          <div className="relative">
            <div className="lg:sticky lg:top-32">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]"
              >
                A broker sees the transaction.<br className="hidden md:block" />
                <span className="bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm mt-4 block">
                  Todd sees the business behind it.
                </span>
              </motion.h2>
            </div>
          </div>

          {/* Right Column: Stacked Pillars */}
          <div className="flex flex-col gap-12 lg:gap-16 pt-4 lg:pt-0">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                className="relative pl-8 md:pl-10 group"
              >
                {/* Vertical Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-primary-foreground/10" />
                {/* Animated Vertical Line Fill on Hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-400 to-yellow-600 scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100" />
                
                <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-4 text-primary-foreground group-hover:text-yellow-400 transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed text-lg font-sans">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
