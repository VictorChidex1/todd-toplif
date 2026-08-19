import { motion } from "framer-motion"

export function ProcessTimeline() {
  const steps = [
    { num: "01", title: "Understand", desc: "Deep dive into your financials, operations, and ultimate exit goals." },
    { num: "02", title: "Prepare", desc: "Clean up operations and financials to comfortably pass institutional buyer scrutiny." },
    { num: "03", title: "Position", desc: "Take the company to market confidentially, targeting the right strategic buyers." },
    { num: "04", title: "Negotiate", desc: "Evaluate offers, drive competitive tension, and structure the most favorable deal." },
    { num: "05", title: "Transition", desc: "Ensure a smooth handover process that safeguards your employees and legacy." },
  ]

  return (
    <section className="py-24 md:py-32 bg-slate-50/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-medium tracking-tight"
          >
            The Exit Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0"
          >
            Selling a business isn't an event; it's a meticulously planned transition. Here is how we navigate it together.
          </motion.p>
        </div>

        {/* Vertical Timeline Layout */}
        <div className="relative max-w-4xl md:mx-0 mx-auto">
          {/* Main Vertical Track Background */}
          <div className="absolute left-6 md:left-[39px] top-0 bottom-0 w-px bg-border" />

          <div className="flex flex-col gap-12 md:gap-16 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                className="flex items-start group relative"
              >
                {/* Node */}
                <div className="relative flex-shrink-0 w-12 h-12 md:w-20 md:h-20 rounded-full bg-white border border-border flex items-center justify-center shadow-sm z-10 transition-colors duration-500 group-hover:border-yellow-500/50 group-hover:bg-yellow-50/50">
                  <span className="font-heading text-lg md:text-2xl font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-500">
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className="ml-8 md:ml-12 pt-1 md:pt-4 flex-1">
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
