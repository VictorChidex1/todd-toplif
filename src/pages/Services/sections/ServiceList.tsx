import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    id: "01",
    title: "Business Valuation",
    subtitle: "Understand what your business may be worth.",
    description: [
      "Before making a major decision about your business, you need a realistic understanding of its value.",
      "Todd helps owners look beyond simple revenue multiples and consider the financial performance, structure, market position, and other factors that influence how a business may be viewed by potential buyers."
    ],
    listTitle: "What this can help you understand:",
    listItems: [
      "How buyers may evaluate your business",
      "The financial factors influencing value",
      "Potential areas that may strengthen the business",
      "What a potential transaction could look like",
      "Whether now is the right time to consider an exit"
    ],
    ctaText: "Discuss Your Business"
  },
  {
    id: "02",
    title: "Exit Planning",
    subtitle: "The best time to think about an exit isn't always when you're ready to sell.",
    description: [
      "An effective exit strategy can begin well before a business ever reaches the market.",
      "Todd works with owners to think through their objectives, identify potential areas for preparation, and develop a clearer understanding of what needs to happen before pursuing a transaction."
    ],
    listTitle: "The goal is simple:",
    listItems: [
      "Be prepared before the opportunity arrives."
    ],
    ctaText: "Talk About Your Exit"
  },
  {
    id: "03",
    title: "Business Sales",
    subtitle: "When you're ready to sell, preparation matters.",
    description: [
      "Taking a business to market requires more than putting together a listing.",
      "A business needs to be positioned in a way that helps the right buyers understand its strengths, opportunities, financial fundamentals, and potential.",
      "Todd helps guide owners through the process — from preparing the business and presenting the opportunity to navigating buyer conversations and negotiations."
    ],
    listTitle: "The process includes:",
    listItems: [
      "Understanding the owner's objectives",
      "Preparing the business for market",
      "Positioning the opportunity",
      "Identifying and engaging appropriate buyers",
      "Evaluating offers",
      "Navigating negotiations",
      "Working toward a successful closing"
    ],
    ctaText: "Discuss Selling Your Business"
  },
  {
    id: "04",
    title: "Buyer Representation",
    subtitle: "Finding an opportunity is only the beginning.",
    description: [
      "For buyers, acquiring a business requires careful consideration of more than the asking price.",
      "The right opportunity needs to make sense from both a strategic and financial perspective.",
      "Todd helps prospective buyers navigate the process of evaluating opportunities and understanding the considerations involved in a potential acquisition."
    ],
    listTitle: "Areas of consideration can include:",
    listItems: [
      "Business fundamentals",
      "Financial performance",
      "Market position",
      "Growth opportunities",
      "Transaction structure",
      "Financing considerations",
      "Overall fit with the buyer's objectives"
    ],
    ctaText: "Explore Opportunities"
  },
  {
    id: "05",
    title: "Deal Strategy",
    subtitle: "Clear thinking when the stakes are high.",
    description: [
      "Transactions can become complicated quickly.",
      "Financial considerations, buyer questions, negotiations, timing, and deal structure can all influence the outcome.",
      "Todd brings his commercial banking and business ownership background into the process to provide an informed perspective as owners navigate these decisions.",
      "The objective isn't simply to get to a closing. It's to help the owner understand the decisions being made along the way."
    ],
    listTitle: "",
    listItems: [],
    ctaText: "Start a Conversation"
  }
]

export function ServiceList() {
  const [activeId, setActiveId] = useState("01")

  return (
    <section className="bg-background py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
          
          {/* Sticky Navigation Sidebar (Left) */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 lg:h-[calc(100vh-8rem)]">
            <span className="text-yellow-600 font-sans tracking-[0.2em] uppercase text-sm font-medium mb-12 block">
              Core Services
            </span>
            
            <nav className="flex flex-col gap-6">
              {services.map((service) => (
                <button
                  key={`nav-${service.id}`}
                  onClick={() => {
                    const el = document.getElementById(`service-${service.id}`)
                    if (el) {
                      // offset for sticky header
                      const y = el.getBoundingClientRect().top + window.scrollY - 150
                      window.scrollTo({ top: y, behavior: 'smooth' })
                    }
                  }}
                  className={cn(
                    "text-left group flex items-center gap-6 transition-all duration-300",
                    activeId === service.id ? "opacity-100" : "opacity-40 hover:opacity-70"
                  )}
                >
                  <span className={cn(
                    "font-sans text-sm tracking-widest transition-colors duration-300",
                    activeId === service.id ? "text-yellow-600" : "text-muted-foreground"
                  )}>
                    {service.id}
                  </span>
                  <span className={cn(
                    "font-heading text-2xl md:text-3xl transition-transform duration-300",
                    activeId === service.id ? "translate-x-2 text-foreground font-medium" : "text-foreground font-light"
                  )}>
                    {service.title}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Scrolling Content (Right) */}
          <div className="w-full lg:w-2/3 flex flex-col gap-32">
            {services.map((service) => (
              <motion.div 
                key={service.id} 
                id={`service-${service.id}`}
                className="pt-10 scroll-mt-32"
                onViewportEnter={() => setActiveId(service.id)}
                viewport={{ margin: "-40% 0px -40% 0px", amount: 0.1 }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-yellow-600 font-sans font-medium">{service.id}</span>
                  <div className="h-px bg-border flex-grow" />
                </div>
                
                <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] text-foreground mb-6">
                  {service.subtitle}
                </h2>
                
                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none mb-10">
                  {service.description.map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed font-light text-lg md:text-xl">
                      {p}
                    </p>
                  ))}
                </div>

                {service.listItems.length > 0 && (
                  <div className="bg-slate-50 border border-slate-100 p-8 md:p-10 mb-10">
                    <h3 className="font-heading text-xl font-medium text-slate-900 mb-6">
                      {service.listTitle}
                    </h3>
                    <ul className="space-y-4 m-0 p-0 list-none">
                      {service.listItems.map((item, i) => (
                        <li key={i} className="relative pl-6 text-slate-700 font-light">
                          <span className="absolute left-0 top-[10px] w-1.5 h-1.5 bg-yellow-600 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-sm font-medium tracking-widest uppercase text-yellow-600 hover:text-yellow-700 transition-colors group"
                >
                  {service.ctaText}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
