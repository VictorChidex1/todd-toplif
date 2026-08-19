import { OpportunitiesHero } from "./sections/OpportunitiesHero"
import { OpportunitiesIntro } from "./sections/OpportunitiesIntro"
import { OpportunityListings } from "./sections/OpportunityListings"
import { BuyerPerspective } from "./sections/BuyerPerspective"
import { ConfidentialityBlock } from "./sections/ConfidentialityBlock"
import { OpportunitiesCTA } from "./sections/OpportunitiesCTA"

export default function Opportunities() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <OpportunitiesHero />
      <OpportunitiesIntro />
      <OpportunityListings />
      <BuyerPerspective />
      <ConfidentialityBlock />
      <OpportunitiesCTA />
    </main>
  )
}
