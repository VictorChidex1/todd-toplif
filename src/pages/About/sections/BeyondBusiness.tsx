import { motion } from "framer-motion"

export function BeyondBusiness() {
  return (
    <section className="bg-slate-50 py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Image/Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] overflow-hidden bg-slate-200">
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-300 to-slate-100 flex items-center justify-center">
                 <span className="font-heading text-xl text-slate-400/50 tracking-widest uppercase">
                   SWFL Lifestyle Image
                 </span>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-yellow-600/10 rounded-full blur-[60px] pointer-events-none" />
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6 lg:col-start-7 lg:pl-8">
            <span className="text-yellow-600 font-sans tracking-[0.2em] uppercase text-sm font-medium mb-6 block">Beyond the Business</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-slate-900 mb-10">
              Deep roots.<br />Local perspective.
            </h2>
            
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-xl text-slate-600 font-light leading-relaxed mb-6">
                Todd has called Southwest Florida home since 1991.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                He lives in Estero with his wife and four children, giving him a personal connection to the communities and business owners he serves throughout the Florida Gulf Coast. That local perspective matters. Business transactions don't happen in a vacuum. They're influenced by the people, industries, communities, and economic environment around them.
              </p>
              
              <div className="h-px w-full bg-slate-200 my-8" />
              
              <h3 className="font-heading text-2xl font-medium text-slate-900 mb-4">There's more to Todd than the transaction.</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Outside of work, Todd enjoys the things that keep him connected to Southwest Florida and the outdoors. He's an inshore fisherman and an avid mountain biker, spending time on trails at places including Caloosahatchee Regional Park, Alafia State Park, and Markham Park.
              </p>
              
              <blockquote className="border-l-2 border-yellow-600 pl-6 my-10 italic text-xl text-slate-800 font-heading">
                "For Todd, the work is serious. The person behind it doesn't have to be."
              </blockquote>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
