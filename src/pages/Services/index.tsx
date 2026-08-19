import { ServicesHero } from "./sections/ServicesHero"
import { ServicesIntro } from "./sections/ServicesIntro"
import { ServiceList } from "./sections/ServiceList"
import { ProcessTimeline } from "@/pages/Home/sections/ProcessTimeline"
import { ClientAvatars } from "./sections/ClientAvatars"
import { ServicesCTA } from "./sections/ServicesCTA"

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <ServicesHero />
      <ServicesIntro />
      <ServiceList />
      <ProcessTimeline />
      <ClientAvatars />
      <ServicesCTA />
    </main>
  )
}
