import { SEO } from "@/components/SEO"
import { TermsHero } from "./sections/TermsHero"
import { TermsContent } from "./sections/TermsContent"

export default function Terms() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <SEO
        title="Terms of Service | Todd Topliff – M&A Advisory"
        description="Review the Terms of Service for Todd Topliff's M&A advisory website, including important disclaimers regarding financial and legal advice."
        path="/terms"
      />
      <TermsHero />
      <TermsContent />
    </main>
  )
}
