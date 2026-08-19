import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-32 md:pt-32 md:pb-40">
      {/* Subtle background texture/gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-muted/50 via-background to-background" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-screen-2xl flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground tracking-tight"
          >
            Your business is more than a number.<br className="hidden lg:block" />
            <span className="text-muted-foreground">Your exit shouldn't be either.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed font-sans"
          >
            Todd Topliff helps business owners across Southwest Florida understand their company's value, prepare for buyer scrutiny, and navigate a strategic exit with clarity and control.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link to="/contact" className={cn(buttonVariants({ size: "lg" }), "rounded-none px-8 font-sans tracking-wide")}>
              Start a Conversation
            </Link>
            <Link to="/about" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-none px-8 font-sans tracking-wide")}>
              Meet Todd
            </Link>
          </motion.div>
        </div>

        {/* Right Visual / Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex-1 w-full max-w-md md:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full bg-muted/30 border border-border/50 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-background/10 to-primary/5" />
            {/* Elegant placeholder indicating professional imagery */}
            <div className="text-muted-foreground/40 font-heading text-2xl tracking-widest uppercase">
              Todd Topliff
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}
