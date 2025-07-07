import Hereforyou from '@/components/home/hereforyou'
import InsightsMain from '@/components/insights/insights-main'
import React, { Suspense } from 'react'

function InsightsPage() {
  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            <InsightsMain />
        </Suspense>
        <Hereforyou />
    </div>
  )
}

export default InsightsPage