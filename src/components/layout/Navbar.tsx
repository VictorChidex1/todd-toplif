import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinkClass = ({ isActive }: { isActive: boolean }) => 
    cn("text-sm font-medium transition-colors hover:text-primary", !isActive && "text-muted-foreground")

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) => 
    cn("text-lg font-medium transition-colors hover:text-primary", !isActive && "text-muted-foreground")

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      <div className="container mx-auto px-4 md:px-8 flex h-24 max-w-screen-2xl items-center justify-between">
        <Link to="/" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
          <img src="/favicon.jpg" alt="Todd Topliff Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          <span className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-primary">Todd Topliff</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/opportunities" className={navLinkClass}>Opportunities</NavLink>
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
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>About</NavLink>
            <NavLink to="/services" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>Services</NavLink>
            <NavLink to="/opportunities" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>Opportunities</NavLink>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={cn(buttonVariants({ size: "lg" }), "w-full font-sans tracking-wide rounded-none mt-4 py-6 text-base")}>
              Start a Conversation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
