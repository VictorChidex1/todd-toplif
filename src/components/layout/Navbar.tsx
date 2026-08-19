import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8 flex h-24 max-w-screen-2xl items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-primary">Todd Topliff</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">Home</Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">About</Link>
          <Link to="/services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Services</Link>
          <Link to="/opportunities" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Opportunities</Link>
          <Link to="/contact" className={cn(buttonVariants({ size: "lg" }), "ml-4 font-sans tracking-wide rounded-none px-8")}>
            Start a Conversation
          </Link>
        </div>
      </div>
    </nav>
  )
}
