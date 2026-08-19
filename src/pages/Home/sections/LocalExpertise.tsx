import { motion } from "framer-motion"

export function LocalExpertise() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8"
            >
              Built in<br/>Southwest Florida.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed max-w-lg"
            >
              Our roots are here. We understand the local market dynamics, the buyer networks, and what it takes to successfully transition a business in this region.
            </motion.p>
          </div>
          
          <div className="flex items-center justify-center md:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square w-full max-w-md border border-primary-foreground/20 flex flex-col items-center justify-center p-8 text-center"
            >
              <div className="absolute inset-0 bg-primary-foreground/5" />
              <div className="font-heading text-2xl tracking-[0.2em] uppercase text-primary-foreground/60 mb-2">
                Naples
              </div>
              <div className="font-heading text-2xl tracking-[0.2em] uppercase text-primary-foreground/60 mb-2">
                Fort Myers
              </div>
              <div className="font-heading text-2xl tracking-[0.2em] uppercase text-primary-foreground/60">
                Sarasota
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
