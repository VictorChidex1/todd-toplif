import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck } from "lucide-react"

export function ConfidentialityBlock() {
  return (
    <section className="bg-slate-900 text-white py-24 md:py-32 border-b border-white/10">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-md text-center">
        
        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10">
          <ShieldCheck className="w-8 h-8 text-yellow-500" />
        </div>

        <span className="text-yellow-500 font-sans tracking-[0.2em] uppercase text-sm font-medium mb-6 block">
          Confidentiality
        </span>

        <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-8">
          Some opportunities require discretion.
        </h2>

        <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed mb-10">
          <p>
            Not every business sale can be openly advertised. For owners, confidentiality can be important to protecting employees, customers, vendors, and the business itself.
          </p>
          <p>
            For qualified buyers, this means some opportunities may require an initial conversation and appropriate qualification before detailed information is shared.
          </p>
        </div>

        <Link 
          to="/contact" 
          className="inline-flex items-center text-sm font-medium tracking-widest uppercase text-white hover:text-yellow-500 transition-colors group"
        >
          Start a Confidential Conversation
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>

      </div>
    </section>
  )
}
