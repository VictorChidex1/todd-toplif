import { SEO } from "@/components/SEO"
import { ContactHero } from "./sections/ContactHero"
import { ContactIntro } from "./sections/ContactIntro"
import { ContactFormSection } from "./sections/ContactFormSection"
import { ContactDualCTA } from "./sections/ContactDualCTA"
import { ContactFinalCTA } from "./sections/ContactFinalCTA"

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <SEO
        title="Contact Todd Topliff | Start a Confidential Conversation"
        description="Whether you're considering selling, exploring an acquisition, or simply want to understand your options — the first step is a conversation."
        path="/contact"
      />
      <ContactHero />
      <ContactIntro />
      <ContactFormSection />
      <ContactDualCTA />
      <ContactFinalCTA />
    </main>
  )
}
