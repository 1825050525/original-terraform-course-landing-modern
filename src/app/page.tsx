import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import OverviewSection from '@/components/OverviewSection'
import CurriculumSection from '@/components/CurriculumSection'
import InstructorSection from '@/components/InstructorSection'
import PricingSection from '@/components/PricingSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden scrollbar-thin">
      <Navigation />
      <HeroSection />
      <OverviewSection />
      <CurriculumSection />
      <InstructorSection />
      <PricingSection />
      <ContactSection />
    </main>
  )
}