import { HighSpeedInternetHero } from '@/components/internet-services/hero'
import { Locations } from '@/components/internet-services/locations'
import { PricingPlans } from '@/components/internet-services/pricing-plans'
import { DownloadAppSection } from '@/components/shared/download-app'

function ItConsultingPage() {
  return (
    <div>
      {/* hero section */}
        <HighSpeedInternetHero />
       
      {/* pricing plans */}
      <PricingPlans />
      
      {/* our locations */}
      <Locations />
      {/* reusable - download our wallet app */}
      <DownloadAppSection />
    </div>
  )
}

export default ItConsultingPage