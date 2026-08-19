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
    <section className="relative py-24 md:py-32 bg-slate-50/50 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-screen-2xl">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          {situations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className="group relative flex flex-col p-10 xl:p-12 bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] overflow-hidden"
            >
              {/* Animated Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-600/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              
              {/* Large Background Number */}
              <div className="absolute -top-6 -right-2 text-[180px] font-heading font-bold text-slate-100/60 select-none pointer-events-none transition-transform duration-700 group-hover:scale-105 group-hover:text-slate-100/80 leading-none">
                0{i + 1}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="font-heading text-2xl xl:text-3xl font-medium tracking-tight mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1 text-base xl:text-lg">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
