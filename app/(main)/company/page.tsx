import CompanyHero from '@/components/company/company-hero'
import CompanyPurpose from '@/components/company/company-purpose'
import CoreValues from '@/components/company/core-values'
import LeadershipMain from '@/components/company/leadership-main'
import Partners from '@/components/company/partners'
import { CtaSection } from '@/components/home/CtaSection'
import Testimonial from '@/components/home/testimonial'
import BookNow from '@/components/reusable/book-now'
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
    </div>
  )
}

export default CompanyPage