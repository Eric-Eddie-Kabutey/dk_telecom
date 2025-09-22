import CareersGreatPlace from '@/components/careers/careers-great-place'
import CareersHero from '@/components/careers/careers-hero'
import CareersInsider from '@/components/careers/careers-insider'
import CareersJoinUs from '@/components/careers/careers-join-us'
import CareersWhyWork from '@/components/careers/careers-why-work'
import BookNow from '@/components/reusable/book-now'
import React from 'react'

function CareersPage() {
  return (
    <div>
        <CareersHero />
        <CareersGreatPlace />
        <CareersWhyWork />
        <CareersJoinUs />
        <CareersInsider />
        <BookNow />
    </div>
  )
}

export default CareersPage