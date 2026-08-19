export function TrustStrip() {
  const metrics = [
    { label: "15+ Years", sub: "Experience" },
    { label: "Commercial", sub: "Banking Background" },
    { label: "Former", sub: "Business Owner" },
    { label: "SW Florida", sub: "Local Expertise" },
  ]

  return (
    <section className="border-y border-border bg-muted/20 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-border/0 md:divide-border/50 text-center md:text-left">
          {metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center md:items-start md:pl-12 first:pl-0">
              <span className="font-heading text-2xl md:text-3xl text-foreground font-semibold tracking-tight">{metric.label}</span>
              <span className="text-sm md:text-base text-muted-foreground mt-1 uppercase tracking-wider font-medium">{metric.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
