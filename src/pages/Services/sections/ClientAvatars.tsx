export function ClientAvatars() {
  const profiles = [
    {
      title: "Considering a Sale",
      description: "You've spent years building your company and want to understand what an exit could look like.",
    },
    {
      title: "Preparing for the Future",
      description: "You're not ready to sell today, but you want to make decisions now that could strengthen your position later.",
    },
    {
      title: "Evaluating an Opportunity",
      description: "You're considering acquiring a business and want to approach the opportunity with a clear understanding of the fundamentals.",
    },
    {
      title: "Looking for Clarity",
      description: "You don't know exactly what comes next yet — and that's okay. The first step can simply be a conversation.",
    }
  ]

  return (
    <section className="bg-primary text-primary-foreground py-32 border-b border-white/10">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-yellow-500 font-sans tracking-[0.2em] uppercase text-sm font-medium mb-6 block">Who Todd Works With</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
            Every business owner starts from a different place.
          </h2>
          <p className="text-xl text-primary-foreground/70 font-light leading-relaxed">
            Todd's approach is designed for owners and buyers at various stages of their journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-white/10">
          {profiles.map((profile, index) => (
            <div 
              key={index} 
              className="p-10 md:p-16 border-b border-r border-white/10 group relative overflow-hidden"
            >
              {/* Subtle hover effect background */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-yellow-500 font-sans font-medium mb-4 block opacity-50 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                <h3 className="font-heading text-2xl md:text-3xl font-medium mb-4 text-white">
                  {profile.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed font-light text-lg">
                  {profile.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
