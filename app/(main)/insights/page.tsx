import { CtaSection } from '@/components/home/CtaSection'
import InsightsMain from '@/components/insights/insights-main'
import React, { Suspense } from 'react'

function InsightsPage() {
  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            <InsightsMain />
        </Suspense>
        {/* <BookNow /> */}
        <CtaSection />
    </div>
  )
}

export default InsightsPage