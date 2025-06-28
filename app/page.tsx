import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TestimonialSection from "@/components/testimonial-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <Footer />
    </main>
  )
}
