import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export function BuyerPerspective() {
  const questions = [
    "Does the business fit my experience?",
    "Does the financial performance support the asking price?",
    "What opportunities exist for future growth?",
    "What does the transition look like?",
    "How will the acquisition be structured?",
    "What financing considerations should I understand?"
  ]

  return (
    <section className="bg-white py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Intro */}
          <div>
            <span className="text-yellow-600 font-sans tracking-[0.2em] uppercase text-sm font-medium mb-6 block">
              Buyer Perspective
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] text-slate-900 mb-8">
              Buying a business is more than finding a listing.
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-8">
              A promising business still needs to make sense for the person acquiring it.
            </p>
            <p className="text-slate-600 leading-relaxed mb-10">
              Todd's background in commercial banking and business advisory provides an additional perspective as buyers evaluate opportunities.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-sm font-medium tracking-widest uppercase text-yellow-600 hover:text-yellow-700 transition-colors group"
            >
              Talk About Your Acquisition Goals
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column - Considerations */}
          <div className="lg:pt-16">
            <h3 className="font-sans text-sm tracking-widest uppercase text-slate-400 mb-8 border-b border-slate-200 pb-4">
              Before moving forward, buyers should consider:
            </h3>
            <ul className="space-y-6">
              {questions.map((question, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-600 font-sans font-medium mr-4 opacity-50 mt-1">0{index + 1}</span>
                  <span className="font-heading text-xl md:text-2xl text-slate-800">{question}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}
