import { CtaSection } from '@/components/home/CtaSection'
import BookNow from '@/components/reusable/book-now'
import ServicesMain from '@/components/services/services-main'
import React from 'react'

function ServicesPage() {
  return (
    <div>
        <ServicesMain />
        <BookNow />
        <CtaSection />
    </div>
  )
}

export default ServicesPage