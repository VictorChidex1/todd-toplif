import { SEO } from "@/components/SEO"
import { AboutHero } from "./sections/AboutHero"
import { ProfessionalBackground } from "./sections/ProfessionalBackground"
import { ThreePerspectives } from "./sections/ThreePerspectives"
import { Philosophy } from "./sections/Philosophy"
import { BeyondBusiness } from "./sections/BeyondBusiness"
import { FinalCTA } from "@/pages/Home/sections/FinalCTA"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <SEO
        title="About Todd Topliff | Trusted M&A Advisor in Southwest Florida"
        description="Meet Todd Topliff — a former commercial banker turned M&A advisor helping founders across the Florida Gulf Coast navigate business transitions with clarity and discretion."
        path="/about"
      />
      <AboutHero />
      <ProfessionalBackground />
      <ThreePerspectives />
      <Philosophy />
      <BeyondBusiness />
      <FinalCTA />
    </main>
  )
}
