import { Link } from "react-router-dom"
import { Search, SlidersHorizontal, LockKeyhole, ArrowRight } from "lucide-react"

export function OpportunityListings() {
  return (
    <section id="opportunity-listings" className="bg-background py-24 md:py-32 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
        
        <div className="mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4">
            Explore available opportunities.
          </h2>
          <p className="text-muted-foreground text-lg">Use the filters below to narrow your search.</p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white border border-border p-4 mb-12 flex flex-col lg:flex-row gap-4 items-center">
          
          <div className="relative w-full lg:w-[400px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search by industry, location, or keyword..." 
              className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-border focus:outline-none focus:ring-1 focus:ring-primary transition-all font-light"
              disabled
            />
          </div>

          <div className="flex-1 flex flex-wrap lg:flex-nowrap gap-4 w-full">
            <select className="flex-1 h-12 px-4 bg-slate-50 border border-border text-slate-600 focus:outline-none focus:ring-1 focus:ring-primary font-light appearance-none disabled:opacity-50" disabled>
              <option>Industry</option>
            </select>
            <select className="flex-1 h-12 px-4 bg-slate-50 border border-border text-slate-600 focus:outline-none focus:ring-1 focus:ring-primary font-light appearance-none disabled:opacity-50" disabled>
              <option>Location</option>
            </select>
            <select className="flex-1 h-12 px-4 bg-slate-50 border border-border text-slate-600 focus:outline-none focus:ring-1 focus:ring-primary font-light appearance-none disabled:opacity-50" disabled>
              <option>Price Range</option>
            </select>
            <select className="flex-1 h-12 px-4 bg-slate-50 border border-border text-slate-600 focus:outline-none focus:ring-1 focus:ring-primary font-light appearance-none disabled:opacity-50" disabled>
              <option>Revenue</option>
            </select>
            <select className="flex-1 h-12 px-4 bg-slate-50 border border-border text-slate-600 focus:outline-none focus:ring-1 focus:ring-primary font-light appearance-none disabled:opacity-50" disabled>
              <option>Cash Flow</option>
            </select>
          </div>

          <div className="w-full lg:w-auto flex items-center justify-between lg:justify-end gap-4 border-t lg:border-t-0 lg:border-l border-border pt-4 lg:pt-0 lg:pl-4 mt-4 lg:mt-0">
            <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Sort by:
            </div>
            <select className="w-[150px] h-12 px-4 bg-white border-b-2 border-primary text-foreground font-medium focus:outline-none appearance-none disabled:opacity-50" disabled>
              <option>Newest</option>
              <option>Price</option>
              <option>Revenue</option>
              <option>Cash Flow</option>
            </select>
          </div>

        </div>

        {/* Prototype Empty State */}
        <div className="bg-slate-50 border border-slate-200 p-12 md:p-24 text-center max-w-4xl mx-auto relative overflow-hidden">
          
          <div className="absolute top-0 right-0 p-8 text-slate-200 pointer-events-none">
            <LockKeyhole className="w-48 h-48 opacity-20 -rotate-12 translate-x-10 -translate-y-10" />
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm border border-slate-100">
              <LockKeyhole className="w-6 h-6 text-yellow-600" />
            </div>

            <h3 className="font-heading text-3xl md:text-4xl font-medium text-slate-900 mb-6">
              Looking for something specific?
            </h3>
            
            <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed mb-10">
              Not every opportunity is publicly displayed due to strict confidentiality requirements. Tell Todd what you're looking for and he can help you understand what may fit your acquisition goals.
            </p>

            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center h-14 px-8 text-sm font-medium tracking-wide uppercase bg-primary text-primary-foreground hover:bg-yellow-600 transition-colors duration-300"
            >
              Tell Us What You're Looking For
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}
