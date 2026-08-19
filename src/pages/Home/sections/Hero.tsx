import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-32 md:pt-32 md:pb-40">
      {/* Subtle background texture/gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-muted/50 via-background to-background" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-screen-2xl flex flex-col md:flex-row items-center gap-12 md:gap-24">
        {/* Left Content */}
        <div className="flex-1 w-full max-w-2xl text-center md:text-left pt-12 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center md:justify-start gap-4 mb-6"
          >
            <div className="hidden md:block h-[1px] w-12 bg-primary/40" />
            <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-primary/80 uppercase">
              Business Broker & M&A Advisory
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-primary leading-[1.05] mb-6"
          >
            Your business is more than a number.
            <br />
            <span className="text-muted-foreground italic font-normal">
              Your exit shouldn't be either.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0 font-sans font-light"
          >
            Todd Topliff helps business owners across Southwest Florida
            understand their company's value, prepare for buyer scrutiny, and
            navigate a strategic exit with clarity and control.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              to="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-none px-8 font-sans tracking-wide",
              )}
            >
              Start a Conversation
            </Link>
            <Link
              to="/about"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-none px-8 font-sans tracking-wide",
              )}
            >
              Meet Todd
            </Link>
          </motion.div>
        </div>

        {/* Right Visual / Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="flex-1 w-full max-w-lg md:max-w-none ml-auto"
        >
          <div className="relative aspect-[4/5] w-full bg-muted/10 border border-border/30 overflow-hidden shadow-2xl">
            <motion.img
              src="/assets/todd-toplif.jpg"
              alt="Todd Topliff - M&A Advisor"
              className="w-full h-full object-cover origin-center"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
            />
            {/* Subtle gradient overlay to tie the image into the brand colors */}
            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-primary/10 pointer-events-none mix-blend-overlay" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
