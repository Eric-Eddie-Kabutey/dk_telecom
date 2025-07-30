import ConnectivityPlans from '@/components/internet-plans/internet-plans/connectivity-plans'
import InternetPlansMain from '@/components/internet-plans/internet-plans/internet-plans-main'
import React from 'react'

function InternetPlansPage() {
  return (
    <div>
        <InternetPlansMain />
        <ConnectivityPlans />
    </div>
  )
}

export default InternetPlansPage