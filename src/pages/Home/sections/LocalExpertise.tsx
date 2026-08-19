import { motion } from "framer-motion"

export function LocalExpertise() {
  // Approximate relative vertical positioning for the nodes along the coast
  const locations = [
    { name: "Sarasota", top: "25%", left: "30%" },
    { name: "Fort Myers", top: "55%", left: "45%" },
    { name: "Naples", top: "75%", left: "55%" },
  ]

  return (
    <section className="relative py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      {/* Subtle radial gradient to focus attention */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-primary to-primary opacity-80" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left Content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 leading-[1.1]"
            >
              Built in<br/>
              <span className="text-yellow-500/90">Southwest Florida.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0"
            >
              Our roots are here. We understand the local market dynamics, the buyer networks, and what it takes to successfully transition a business in this region.
            </motion.p>
          </div>
          
          {/* Right Content - Interactive Map */}
          <div className="order-1 md:order-2 flex items-center justify-center">
            <div className="relative w-full max-w-[400px] aspect-[3/4]">
              {/* Animated SVG Coastline (Abstract representation of FL Peninsula west coast) */}
              <svg 
                viewBox="0 0 100 133" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full drop-shadow-2xl opacity-60"
              >
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d="M10,0 C15,20 20,40 30,50 C40,60 45,80 50,100 C55,120 70,130 90,133"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary-foreground/20"
                />
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                  d="M15,0 C20,20 25,40 35,50 C45,60 50,80 55,100 C60,120 75,130 95,133"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary-foreground/10"
                />
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 2.5, ease: "easeInOut", delay: 0.4 }}
                  d="M5,0 C10,20 15,40 25,50 C35,60 40,80 45,100 C50,120 65,130 85,133"
                  stroke="#eab308"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className="opacity-30"
                />
              </svg>

              {/* Pulsing Nodes */}
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 1 + (i * 0.3) }}
                  className="absolute flex items-center gap-4 group"
                  style={{ top: loc.top, left: loc.left }}
                >
                  {/* Node Dot */}
                  <div className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-500 border-2 border-primary"></span>
                  </div>
                  
                  {/* Node Label */}
                  <div className="font-heading text-lg md:text-xl tracking-widest uppercase text-primary-foreground/70 group-hover:text-yellow-400 transition-colors duration-300">
                    {loc.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
