import { AboutHero } from "./sections/AboutHero"
import { ProfessionalBackground } from "./sections/ProfessionalBackground"
import { ThreePerspectives } from "./sections/ThreePerspectives"
import { Philosophy } from "./sections/Philosophy"
import { BeyondBusiness } from "./sections/BeyondBusiness"
import { FinalCTA } from "@/pages/Home/sections/FinalCTA"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <AboutHero />
      <ProfessionalBackground />
      <ThreePerspectives />
      <Philosophy />
      <BeyondBusiness />
      <FinalCTA />
    </main>
  )
}
