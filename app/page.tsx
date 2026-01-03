import { HeroSection } from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import MinimalTestimonials from "@/components/MinimalTestimonials"
import TransformationsSection from "@/components/transformations-section"
import FooterSection from "@/components/footer-section"
import CTASection from "@/components/cta-section"
import PricingSection from "@/components/pricing-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFCF5]">
      <HeroSection />
      <FeaturesSection />
      <MinimalTestimonials />
      <TransformationsSection />
      <PricingSection />
      <CTASection />
      <FooterSection />
    </main>
  )
}
