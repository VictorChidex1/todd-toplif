export function Philosophy() {
  return (
    <section className="bg-primary text-primary-foreground py-32 md:py-48 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Massive Headline */}
          <div className="lg:col-span-7">
            <span className="text-yellow-500 font-sans tracking-[0.2em] uppercase text-sm font-medium mb-8 block">His Philosophy</span>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8">
              A business sale is a <span className="italic text-white/80">financial</span> decision. It's also a <span className="italic text-white/80">personal</span> one.
            </h2>
          </div>

          {/* Supporting Copy */}
          <div className="lg:col-span-5 lg:pt-16 prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-primary-foreground/80 font-light leading-relaxed mb-6">
              For an owner, selling a business can represent the end of one chapter and the beginning of another.
            </p>
            <p className="text-primary-foreground/70 font-light leading-relaxed">
              That's why Todd believes the process should start with understanding — not pressure. Before talking about buyers, offers, or closing dates, owners should have a clear picture of their business, its position in the market, and what they actually want from the next chapter.
            </p>
            <ul className="mt-8 space-y-4 text-primary-foreground/80 font-light list-none pl-0">
              <li className="relative pl-6">
                <span className="absolute left-0 top-[10px] w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                Sometimes that means preparing to sell.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-[10px] w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                Sometimes it means improving the business before going to market.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-[10px] w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                And sometimes it means deciding that now isn't the right time.
              </li>
            </ul>
            <p className="text-xl text-white font-medium leading-relaxed mt-10">
              The right answer is different for every owner. Todd's job is to help them find it.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
