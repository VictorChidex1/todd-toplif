export function ThreePerspectives() {
  return (
    <section className="bg-background py-32 border-b border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-yellow-600 font-sans tracking-[0.2em] uppercase text-sm font-medium mb-6 block">What makes Todd different?</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-foreground mb-6">
            Three Perspectives.<br />One Approach.
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Todd brings three experiences to the table that rarely exist in one place.
          </p>
        </div>

        {/* Architectural 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-yellow-600/30">
          
          {/* Column 1 */}
          <div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-yellow-600/30">
            <h3 className="font-heading text-3xl font-medium text-foreground mb-6">The Owner's Perspective</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong className="font-medium text-foreground">He's built businesses himself.</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed font-light">
              Todd understands the uncertainty, responsibility, pride, and emotion that come with building something of your own — and eventually deciding whether it's time to let it go.
            </p>
          </div>

          {/* Column 2 */}
          <div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-yellow-600/30">
            <h3 className="font-heading text-3xl font-medium text-foreground mb-6">The Lender's Perspective</h3>
            <p className="text-muted-foreground leading-relaxed font-light">
              His commercial banking background taught him how financial professionals evaluate businesses. He understands the importance of financial performance, creditworthiness, cash flow, structure, and the questions that serious buyers and lenders are likely to ask.
            </p>
          </div>

          {/* Column 3 */}
          <div className="p-8 md:p-12 lg:p-16">
            <h3 className="font-heading text-3xl font-medium text-foreground mb-6">The Advisor's Perspective</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong className="font-medium text-foreground">Today, Todd combines those experiences to help owners make better decisions.</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed font-light">
              His role isn't simply to put a business on the market. It's to help an owner understand where they stand, what their options are, and how to approach the next stage with greater clarity.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
