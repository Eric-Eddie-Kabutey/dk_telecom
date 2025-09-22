import InsightsMain from '@/components/insights/insights-main'
import BookNow from '@/components/reusable/book-now'
import React, { Suspense } from 'react'

function InsightsPage() {
  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            <InsightsMain />
        </Suspense>
        <BookNow />
    </div>
  )
}

export default InsightsPage