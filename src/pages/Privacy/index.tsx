import { PrivacyHero } from "./sections/PrivacyHero"
import { PrivacyContent } from "./sections/PrivacyContent"

export default function Privacy() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <PrivacyHero />
      <PrivacyContent />
    </main>
  )
}
