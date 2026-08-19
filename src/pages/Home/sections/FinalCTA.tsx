import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-medium tracking-tight mb-8">
            Thinking about what comes next?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Start with a conversation.
          </p>
          <Link to="/contact" className={cn(buttonVariants({ size: "lg" }), "rounded-none px-12 py-6 text-base font-sans tracking-wide")}>
            Start a Conversation
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
