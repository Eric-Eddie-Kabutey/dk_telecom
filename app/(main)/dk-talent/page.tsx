import DkTalentCourseModules from '@/components/dk-talent/dk-talent-course-modules'
import DkkTalentElevate from '@/components/dk-talent/dk-talent-elevate'
import DkTalentFaqs from '@/components/dk-talent/dk-talent-faqs'
import DkTalentHero from '@/components/dk-talent/dk-talent-hero'
import DkTalentJoin from '@/components/dk-talent/dk-talent-join'
import DkTalentPartners from '@/components/dk-talent/dk-talent-partners'
import DkTalentPipeline from '@/components/dk-talent/dk-talent-pipeline'
import DkTalentSpecialized from '@/components/dk-talent/dk-talent-specialized'
import DkTalentWelcome from '@/components/dk-talent/dk-talent-welcome'
import BookNow from '@/components/reusable/book-now'
import React from 'react'

// career _ join us (career) and talent (talent hub)

function DkTalentPage() {
  return (
    <div>
        <DkTalentHero />
        <DkTalentWelcome />
        <DkkTalentElevate />
        <DkTalentJoin />
        <DkTalentCourseModules />
        <DkTalentSpecialized />
        <DkTalentPartners />
        <DkTalentPipeline />
        <DkTalentFaqs />
        <BookNow />
    </div>
  )
}

export default DkTalentPage