'use client';
import React from 'react'
import Typography from '../shared/typography'

function DkTalentCourseModules() {
  return (
    <div className='w-full py-12'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-5'>
            <div className='flex flex-col items-center gap-3'>
                <Typography
                    typo="body-medium-medium"
                    className='text-center text-app-primary'
                >
                    Benefits
                </Typography>
                <Typography
                    typo="header-4-semibold"
                    className='text-gray-600'
                >
                    Course Modules
                </Typography>
                <Typography
                    typo="body-medium-regular"
                    className='text-gray-600'
                >
                    Here are some of the courses available at our academy
                </Typography>
            </div>
        </section>
    </div>
  )
}

export default DkTalentCourseModules