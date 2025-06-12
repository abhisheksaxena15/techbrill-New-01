import Hero from "@/components/hero"
import TechnologyStack from "@/components/technology-stack"
import ServicesOverview from "@/components/services-overview"
import AboutPreview from "@/components/about-preview"
import ProjectsPreview from "@/components/projects-preview"
import CTASection from "@/components/cta-section"
import AdvancedServicesClient from "@/components/AdvancedServicesClient"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <AdvancedServicesClient />
      <TechnologyStack />
      <ProjectsPreview />
      <CTASection />
    </>
  )
}
