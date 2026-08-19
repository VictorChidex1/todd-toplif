import { SEO } from "@/components/SEO"
import { Hero } from "./sections/Hero"
import { TrustStrip } from "./sections/TrustStrip"
import { Situations } from "./sections/Situations"
import { Differentiator } from "./sections/Differentiator"
import { ProcessTimeline } from "./sections/ProcessTimeline"
import { LocalExpertise } from "./sections/LocalExpertise"
import { PersonalStory } from "./sections/PersonalStory"
import { KeyConsiderations } from "./sections/KeyConsiderations"
import { FinalCTA } from "./sections/FinalCTA"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Todd Topliff | Business Broker & M&A Advisor – Southwest Florida"
        description="Todd Topliff helps business owners across Southwest Florida understand their company's value, prepare for buyer scrutiny, and navigate a strategic exit with clarity and control."
        path="/"
      />
      <Hero />
      <TrustStrip />
      <Situations />
      <Differentiator />
      <ProcessTimeline />
      <LocalExpertise />
      <PersonalStory />
      <KeyConsiderations />
      <FinalCTA />
    </div>
  )
}
