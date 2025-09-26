import { CtaSection } from '@/components/home/CtaSection'
import Testimonial from '@/components/home/testimonial'
import ManagedServicesHero from '@/components/managed-services/managed-services-hero'
import ManagedServicesMain from '@/components/managed-services/managed-services-main'
import WhyManagedServices from '@/components/managed-services/why-managed-services'
import React from 'react'

function ManagedServicesPage() {
  return (
    <div>
        <ManagedServicesHero />
        <ManagedServicesMain />
        <WhyManagedServices />
        <Testimonial />
        <CtaSection />
    </div>
  )
}

export default ManagedServicesPage