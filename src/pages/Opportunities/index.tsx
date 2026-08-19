import { SEO } from "@/components/SEO"
import { OpportunitiesHero } from "./sections/OpportunitiesHero"
import { OpportunitiesIntro } from "./sections/OpportunitiesIntro"
import { OpportunityListings } from "./sections/OpportunityListings"
import { BuyerPerspective } from "./sections/BuyerPerspective"
import { ConfidentialityBlock } from "./sections/ConfidentialityBlock"
import { OpportunitiesCTA } from "./sections/OpportunitiesCTA"

export default function Opportunities() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <SEO
        title="Business Opportunities | Todd Topliff – Southwest Florida"
        description="Explore vetted acquisition opportunities across Southwest Florida. Confidential listings for qualified buyers seeking their next business investment."
        path="/opportunities"
      />
      <OpportunitiesHero />
      <OpportunitiesIntro />
      <OpportunityListings />
      <BuyerPerspective />
      <ConfidentialityBlock />
      <OpportunitiesCTA />
    </main>
  )
}
