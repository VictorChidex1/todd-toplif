import { SEO } from "@/components/SEO"
import { DisclaimerHero } from "./sections/DisclaimerHero"
import { DisclaimerContent } from "./sections/DisclaimerContent"

export default function Disclaimer() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <SEO
        title="Disclaimer | Todd Topliff – M&A Advisory"
        description="Review the legal disclaimer for Todd Topliff's M&A advisory services, including professional boundaries, forward-looking statements, and independent verification."
        path="/disclaimer"
      />
      <DisclaimerHero />
      <DisclaimerContent />
    </main>
  )
}
