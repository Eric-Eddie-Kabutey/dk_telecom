import CompanyHero from '@/components/company/company-hero'
import CompanyPurpose from '@/components/company/company-purpose'
import CoreValues from '@/components/company/core-values'
import React from 'react'

function CompanyPage() {
  return (
    <div>
        <CompanyHero />
        <CompanyPurpose />
        <CoreValues />
    </div>
  )
}

export default CompanyPage