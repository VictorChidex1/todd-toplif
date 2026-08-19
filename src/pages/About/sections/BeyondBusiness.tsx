import { motion } from "framer-motion"

export function BeyondBusiness() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      
      {/* Background Image / Parallax Layer */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/swfl-coast.webp" 
          alt="Southwest Florida Coastline" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-black/20" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-screen-2xl flex justify-end">
        
        {/* Overlapping Content Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-7/12 xl:w-1/2 bg-white p-8 md:p-16 lg:p-20 shadow-2xl"
        >
          <span className="text-yellow-600 font-sans tracking-[0.2em] uppercase text-sm font-medium mb-8 block">
            Beyond the Business
          </span>
          
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
            
            <div className="h-px w-16 bg-yellow-600/30 my-10" />
            
            <h3 className="font-heading text-2xl font-medium text-slate-900 mb-4">There's more to Todd than the transaction.</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              Outside of work, Todd enjoys the things that keep him connected to Southwest Florida and the outdoors. He's an inshore fisherman and an avid mountain biker, spending time on trails at places including Caloosahatchee Regional Park, Alafia State Park, and Markham Park.
            </p>
            
            <div className="bg-slate-50 p-8 border-l-2 border-yellow-600">
              <p className="italic text-xl text-slate-800 font-heading mb-0">
                "For Todd, the work is serious. The person behind it doesn't have to be."
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
