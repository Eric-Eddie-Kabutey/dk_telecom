import { PaymentsHeroSection } from '@/components/internet-services/NewHero'
import { PricingPlans } from '@/components/internet-services/pricing-plans'
import { ServicesSection } from '@/components/internet-services/ServiceSection'
import { DownloadAppSection } from '@/components/shared/download-app'
import { CtaSection } from "@/components/home/CtaSection";

function ItConsultingPage() {
  return (
    <div>
      {/* hero section */}      
      <PaymentsHeroSection />

      {/* internet service */}
      <ServicesSection />
       
      {/* pricing plans */}
      <PricingPlans />
           
      {/* reusable - download our wallet app */}
      <DownloadAppSection />

      {/* CTA */}
      <CtaSection />
    </div>
  )
}

export default ItConsultingPage