import { SEO } from "@/components/SEO"
import { PrivacyHero } from "./sections/PrivacyHero"
import { PrivacyContent } from "./sections/PrivacyContent"

export default function Privacy() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <SEO
        title="Privacy Policy | Todd Topliff – M&A Advisory"
        description="Learn how Todd Topliff handles your personal information, maintains transactional confidentiality, and protects sensitive business data."
        path="/privacy"
      />
      <PrivacyHero />
      <PrivacyContent />
    </main>
  )
}
