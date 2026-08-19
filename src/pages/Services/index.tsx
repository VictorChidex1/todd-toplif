import { SEO } from "@/components/SEO"
import { ServicesHero } from "./sections/ServicesHero"
import { ServicesIntro } from "./sections/ServicesIntro"
import { ServiceList } from "./sections/ServiceList"
import { ProcessTimeline } from "@/pages/Home/sections/ProcessTimeline"
import { ClientAvatars } from "./sections/ClientAvatars"
import { ServicesCTA } from "./sections/ServicesCTA"

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <SEO
        title="Services | Business Brokerage & M&A Advisory – Todd Topliff"
        description="From business valuations and exit planning to full-service M&A representation, Todd Topliff provides end-to-end advisory for business owners considering a transition."
        path="/services"
      />
      <ServicesHero />
      <ServicesIntro />
      <ServiceList />
      <ProcessTimeline />
      <ClientAvatars />
      <ServicesCTA />
    </main>
  )
}
