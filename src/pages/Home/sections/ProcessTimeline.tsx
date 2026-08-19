import { motion } from "framer-motion"

export function ProcessTimeline() {
  const steps = [
    { num: "01", title: "Understand", desc: "Deep dive into your financials and goals." },
    { num: "02", title: "Prepare", desc: "Clean up operations to pass buyer scrutiny." },
    { num: "03", title: "Position", desc: "Take the company to market confidentially." },
    { num: "04", title: "Negotiate", desc: "Evaluate offers and structure the deal." },
    { num: "05", title: "Transition", desc: "Ensure a smooth handover and safeguard legacy." },
  ]

  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl text-foreground font-medium tracking-tight"
          >
            The Exit Process
          </motion.h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-[28px] left-0 w-full h-px bg-border" />
          
          {/* Vertical line for mobile */}
          <div className="md:hidden absolute top-0 left-[28px] h-full w-px bg-border" />

          <div className="flex flex-col md:flex-row gap-12 md:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-row md:flex-col items-start md:flex-1 relative"
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-background border border-primary/30 flex items-center justify-center font-mono text-sm tracking-widest text-primary mr-6 md:mr-0 md:mb-6 z-10 shadow-sm">
                  {step.num}
                </div>
                
                {/* Content */}
                <div className="pt-2 md:pt-0">
                  <h3 className="font-heading text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed pr-4">
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
