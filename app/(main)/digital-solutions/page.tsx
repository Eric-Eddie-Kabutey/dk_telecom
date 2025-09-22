import Testimonial from '@/components/home/testimonial'
import ManagedServicesHero from '@/components/managed-services/managed-services-hero'
import ManagedServicesMain from '@/components/managed-services/managed-services-main'
import WhyManagedServices from '@/components/managed-services/why-managed-services'
import BookNow from '@/components/reusable/book-now'
import React from 'react'

function ManagedServicesPage() {
  return (
    <div>
        <ManagedServicesHero />
        <ManagedServicesMain />
        <WhyManagedServices />
        <Testimonial />
        <BookNow />
    </div>
  )
}

export default ManagedServicesPage