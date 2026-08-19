import { useState } from "react"
import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8 flex h-24 max-w-screen-2xl items-center justify-between">
        <Link to="/" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
          <img src="/favicon.jpg" alt="Todd Topliff Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          <span className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-primary">Todd Topliff</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">Home</Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">About</Link>
          <Link to="/services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Services</Link>
          <Link to="/opportunities" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Opportunities</Link>
          <Link to="/contact" className={cn(buttonVariants({ size: "lg" }), "ml-4 font-sans tracking-wide rounded-none px-8")}>
            Start a Conversation
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden p-2 -mr-2 text-primary focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border/50 bg-background absolute top-24 left-0 w-full shadow-2xl flex flex-col px-6 py-8 gap-6 z-40"
          >
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium transition-colors hover:text-primary">Home</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary">About</Link>
            <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary">Services</Link>
            <Link to="/opportunities" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary">Opportunities</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={cn(buttonVariants({ size: "lg" }), "w-full font-sans tracking-wide rounded-none mt-4 py-6 text-base")}>
              Start a Conversation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
