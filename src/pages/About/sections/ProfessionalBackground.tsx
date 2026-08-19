

export function ProfessionalBackground() {
  return (
    <section className="bg-background py-32 border-b border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
          
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <span className="text-yellow-600 font-sans tracking-[0.2em] uppercase text-sm font-medium mb-6 block">Introduction</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-foreground">
                The person behind the transaction matters.
              </h2>
            </div>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7 prose prose-lg prose-slate dark:prose-invert max-w-none">
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-8">
              Selling a business isn't simply a financial transaction. For most owners, it's the result of years of work, difficult decisions, relationships, risk, and personal investment. And when the time comes to consider an exit, understanding the numbers is only part of the equation.
            </p>
            <p className="text-foreground leading-relaxed">
              Todd's approach is shaped by experience on both sides of the table.
            </p>
            <p className="text-foreground leading-relaxed">
              Before becoming a business broker and M&A advisor, he spent years in commercial banking, managing multi-million-dollar portfolios and helping evaluate the financial realities of businesses across Florida.
            </p>
            <p className="text-foreground leading-relaxed">
              He's also been an owner himself — starting and selling two companies before the age of 30.
            </p>
            <p className="text-foreground leading-relaxed">
              That combination gives Todd an understanding of business from multiple perspectives: the owner making the decision, the financial professional evaluating the numbers, and the advisor helping guide the transaction.
            </p>
          </div>
          
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-32" />

        {/* Career Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <span className="text-yellow-600 font-sans tracking-[0.2em] uppercase text-sm font-medium mb-6 block">Professional Background</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-foreground mb-6">
                A career built around understanding business.
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                From commercial banking to business ownership — and back to advising owners.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-12">
              
              <div className="relative pl-8 border-l border-border">
                <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-yellow-600" />
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4">Commercial Banking & Finance</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Before joining Corporate Investment Business Brokers, Todd served as Vice President at several major banks, where he managed multi-million-dollar portfolios and structured financing solutions for small and mid-sized companies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  His background includes formal credit training and IRS tax certification, giving him a strong foundation in financial analysis, business fundamentals, and the factors that can withstand scrutiny when a business enters a transaction.
                </p>
              </div>

              <div className="relative pl-8 border-l border-border">
                <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-yellow-600" />
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4">Entrepreneurship & Ownership</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  But Todd's understanding of business didn't begin in a bank. He became an entrepreneur himself, starting and selling two companies before turning 30.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  That experience changed the way he views an owner's decision to sell. He understands that behind every balance sheet is an owner who has spent years building something — and that a successful exit should account for much more than the final number.
                </p>
              </div>

            </div>
          </div>
          
        </div>

      </div>
    </section>
  )
}
