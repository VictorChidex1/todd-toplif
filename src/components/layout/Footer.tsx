import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="border-t bg-background py-16">
      <div className="container max-w-screen-2xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-heading text-3xl font-semibold mb-2">Todd Topliff</h3>
          <p className="text-base text-muted-foreground">Business Broker & M&A Advisor</p>
          <p className="text-sm text-muted-foreground mt-4">Advising businesses across Southwest Florida.</p>
        </div>
        <div className="flex flex-col md:items-end space-y-4">
          <div className="flex gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link>
            <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">Services</Link>
            <Link to="/opportunities" className="text-sm text-muted-foreground hover:text-primary">Opportunities</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
          </div>
          <div className="flex gap-4 pt-4 text-xs text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms / Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
