import { ContactHero } from "./sections/ContactHero"
import { ContactIntro } from "./sections/ContactIntro"
import { ContactFormSection } from "./sections/ContactFormSection"
import { ContactDualCTA } from "./sections/ContactDualCTA"
import { ContactFinalCTA } from "./sections/ContactFinalCTA"

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <ContactHero />
      <ContactIntro />
      <ContactFormSection />
      <ContactDualCTA />
      <ContactFinalCTA />
    </main>
  )
}
