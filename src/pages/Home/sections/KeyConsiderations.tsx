import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const considerations = [
  {
    question: "When is the right time to start planning an exit?",
    answer: "Long before you intend to sell. The decisions made 12 to 36 months prior to a transaction significantly impact the final valuation, tax implications, and structure."
  },
  {
    question: "How is confidentiality maintained during the process?",
    answer: "Discretion is paramount. We use rigorous non-disclosure agreements and qualify all potential buyers before any sensitive operational or financial data is shared."
  },
  {
    question: "What factors determine the value of my business?",
    answer: "While revenue multiples offer a baseline, true value is determined by structural integrity, market position, recurring revenue streams, management depth, and growth potential."
  },
  {
    question: "Do I need to be ready to sell right now to start a conversation?",
    answer: "Not at all. Many of our most successful engagements begin as exploratory conversations years before a transaction occurs. Understanding your options is the first step."
  }
]

export function KeyConsiderations() {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // Default first one open

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-slate-50 py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Side: Sticky Intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <span className="text-yellow-600 font-sans tracking-[0.2em] uppercase text-sm font-medium mb-6 block">
              Key Considerations
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-slate-900 mb-8">
              Common Inquiries
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8 max-w-md">
              Navigating a business transition requires clarity. Here are the perspectives we share with owners considering their next chapter.
            </p>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:col-span-7">
            <div className="border-t border-slate-200">
              {considerations.map((item, index) => {
                const isOpen = openIndex === index

                return (
                  <div key={index} className="border-b border-slate-200">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between py-8 text-left focus:outline-none group"
                    >
                      <span className={cn(
                        "font-heading text-xl md:text-2xl font-medium pr-8 transition-colors duration-300",
                        isOpen ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"
                      )}>
                        {item.question}
                      </span>
                      
                      <span className="flex-shrink-0 ml-auto flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 text-slate-400 group-hover:border-slate-400 group-hover:text-slate-600 transition-colors duration-300">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 pr-12 text-slate-600 font-light text-lg leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
