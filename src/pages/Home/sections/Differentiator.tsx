import { motion } from "framer-motion"

export function Differentiator() {
  return (
    <section className="py-24 md:py-32 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl text-foreground font-medium tracking-tight leading-[1.1]"
          >
            A broker sees the transaction.<br className="hidden md:block" />
            <span className="text-muted-foreground">Todd sees the business behind it.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Owner Perspective */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col space-y-4"
          >
            <div className="h-px w-12 bg-primary/40 mb-2" />
            <h3 className="font-heading text-2xl font-semibold">The Owner's Lens</h3>
            <p className="text-muted-foreground leading-relaxed">
              Having built and exited his own companies, Todd knows that selling isn't just a financial event—it's a deeply personal transition that requires safeguarding your legacy.
            </p>
          </motion.div>

          {/* Lender Perspective */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-4"
          >
            <div className="h-px w-12 bg-primary/40 mb-2" />
            <h3 className="font-heading text-2xl font-semibold">The Lender's Eye</h3>
            <p className="text-muted-foreground leading-relaxed">
              With a background in commercial banking, Todd anticipates exactly how financial institutions and buyers will stress-test your numbers, allowing you to prepare in advance.
            </p>
          </motion.div>

          {/* Advisor Perspective */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col space-y-4"
          >
            <div className="h-px w-12 bg-primary/40 mb-2" />
            <h3 className="font-heading text-2xl font-semibold">The Advisor's Strategy</h3>
            <p className="text-muted-foreground leading-relaxed">
              As an M&A advisor, Todd orchestrates the entire process, filtering out noise and positioning your business to attract the right institutional or strategic buyers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
