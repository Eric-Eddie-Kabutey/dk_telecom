import CompanyHero from '@/components/company/company-hero'
import CompanyPurpose from '@/components/company/company-purpose'
import CoreValues from '@/components/company/core-values'
import LeadershipMain from '@/components/company/leadership-main'
import Partners from '@/components/company/partners'
import { CtaSection } from '@/components/home/CtaSection'
import Testimonial from '@/components/home/testimonial'
import FloatingContactButton from '@/reusable/floating-contact-button'
import React from 'react'

function CompanyPage() {
  return (
    <div>
        <CompanyHero />
        <CompanyPurpose />
        <CoreValues />
        <LeadershipMain />
        <Partners />
        <Testimonial />
        <CtaSection />
        <FloatingContactButton />  
    </div>
  )
}

export default CompanyPage