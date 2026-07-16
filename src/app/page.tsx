import { Navbar } from "@/components/marketing/navbar"
import { Hero } from "@/components/marketing/hero"
import { ProblemSolution } from "@/components/marketing/problem-solution"
import { HowItWorks } from "@/components/marketing/how-it-works"
import { Verticals } from "@/components/marketing/verticals"
import { PackagesPreview } from "@/components/marketing/packages-preview"
import { CtaSection } from "@/components/marketing/cta-section"
import { Footer } from "@/components/marketing/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Verticals />
        <PackagesPreview />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
