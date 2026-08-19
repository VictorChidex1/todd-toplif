import { motion } from "framer-motion"

export function Situations() {
  const situations = [
    {
      title: "Thinking About Selling",
      description: "You are curious about the process, timeline, and what it takes to prepare for a successful transition.",
    },
    {
      title: "Need to Understand Value",
      description: "You aren't selling today, but you need a realistic baseline of your company's worth to plan for future growth.",
    },
    {
      title: "Not Ready Yet",
      description: "You want to know exactly what institutional buyers look for, so you can fix any issues now before going to market.",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl text-foreground font-medium tracking-tight"
          >
            You may be here because...
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {situations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex flex-col p-8 md:p-10 bg-background border border-border transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/0 transition-all duration-300 group-hover:bg-primary/20" />
              <h3 className="font-heading text-2xl font-semibold mb-4 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
