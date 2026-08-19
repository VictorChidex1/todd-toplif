import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative min-h-[85vh] bg-primary text-primary-foreground flex items-center pt-24 overflow-hidden">
      {/* Background Texture/Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Subtle Glow */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-yellow-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-medium tracking-tight mb-8">
                Experience on{" "}
                <span className="italic text-white/80">both sides</span> of the
                table.
              </h1>

              <p className="text-xl md:text-2xl text-primary-foreground/70 font-light leading-relaxed mb-10 max-w-2xl">
                Todd Topliff brings more than 15 years of experience across
                business ownership, commercial banking, and business advisory —
                giving him a perspective that goes well beyond the transaction
                itself.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-14 px-8 text-sm font-medium tracking-wide uppercase bg-white text-primary hover:bg-yellow-500 hover:text-white transition-colors duration-300"
                >
                  Start a Conversation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center h-14 px-8 text-sm font-medium tracking-wide uppercase border border-white/20 text-white hover:bg-white/10 transition-colors duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Portrait / Image Placeholder */}
          <div className="lg:col-span-5 lg:col-start-8 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] overflow-hidden bg-primary/50 border border-white/10"
            >
              <img
                src="/assets/todd-toplif.jpg"
                alt="Todd Topliff"
                className="w-full h-full object-cover"
              />

              {/* Decorative Frame Elements */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-white/30" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-white/30" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
