import Testimonial from '@/components/home/testimonial'
import LicensingRenewalHero from '@/components/licensing-renewal/licensing-renewal-hero'
import LicensingRenewalServices from '@/components/licensing-renewal/licensing-renewal-services'
import WhyLicensingRenewalServices from '@/components/licensing-renewal/why-licensing-renewal'
import BookNow from '@/components/reusable/book-now'
import React from 'react'

function BpoPage() {
  return (
    <div>
        <LicensingRenewalHero />
        <LicensingRenewalServices />
        <WhyLicensingRenewalServices />
        <Testimonial />
        <BookNow />
    </div>
  )
}

export default BpoPage