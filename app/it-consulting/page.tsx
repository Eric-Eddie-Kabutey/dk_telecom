import Testimonial from '@/components/home/testimonial'
import ConsultingServices from '@/components/it-consulting/consulting-services'
import ItConsultingHero from '@/components/it-consulting/it-consulting-hero'
import WhyBusiness from '@/components/it-consulting/why-business'
import BookNow from '@/components/reusable/book-now'
import React from 'react'

function ItConsultingPage() {
  return (
    <div>
        <ItConsultingHero />
        <ConsultingServices />
        <WhyBusiness />
        <Testimonial />
        <BookNow />
    </div>
  )
}

export default ItConsultingPage