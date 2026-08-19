import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function PersonalStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle parallax effect for the portrait
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-40 bg-background overflow-hidden relative"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10" />

      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left Column: Editorial Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Image Container with subtle overflow hidden for parallax */}
            <div className="aspect-[4/5] w-full relative overflow-hidden bg-muted">
              <motion.img
                style={{ y: imageY, scale: 1.05 }}
                src="/assets/todd-toplif.jpg"
                alt="Todd Topliff - Managing Director"
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-1000 ease-out"
              />
              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20 mix-blend-multiply" />
            </div>

            {/* Stylized Label */}
            <div className="absolute -bottom-6 -right-6 bg-background p-6 border border-border shadow-sm hidden md:block">
              <span className="font-heading text-sm tracking-[0.3em] uppercase text-primary/80">
                Founder & Managing Partner
              </span>
            </div>
          </motion.div>

          {/* Right Column: The Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start pt-8 lg:pt-0"
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-10 leading-[1.1] text-foreground">
              A Partner Who Knows
              <br /> Both Sides of the Table.
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-2xl font-sans font-light">
              <p className="first-letter:font-heading first-letter:text-7xl first-letter:font-medium first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:-mt-2">
                Before becoming an advisor, I spent over 15 years in commercial
                banking and corporate finance. More importantly, I've been in
                the trenches as a business owner myself.
              </p>
              <p>
                Selling the company you built is one of the most significant
                financial and emotional events of your life. This rare
                combination of hands-on entrepreneurial experience and rigorous
                financial acumen allows us to protect your interests, negotiate
                from a position of undeniable strength, and guide you through
                the complexities of a strategic exit.
              </p>
            </div>

            {/* Signature Sign-off */}
            <div className="mt-12 mb-12">
              <span className="font-heading italic text-4xl text-primary/80 block">
                Todd Topliff
              </span>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center font-medium text-primary hover:text-primary/70 transition-colors uppercase tracking-[0.2em] text-xs border-b border-primary/30 hover:border-primary pb-1"
            >
              Read The Full Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
