'use client';
import Typography from '@/components/shared/typography'
import React from 'react'

function ConnectivityPlans() {
  return (
    <div className='connectivity-bg w-full max-h-[700px] h-[100vh] py-20 '>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto '>
            <div className='lg:w-[55%] md:w-[80%] flex flex-col gap-4 text-white'>
                <Typography
                    typo="header-3-semibold"
                    className='uppercase'
                >
                    Connectivity where you least expect it
                </Typography>
                <Typography
                    typo="body-medium-regular"
                    className='w-[80%]'
                >
                    Streaming, video calls, online gaming, remote working and more are now possible in even the most remote 
                    locations thanks to the world&apos;s most advanced internet system.
                </Typography>
            </div>
        </section>
    </div>
  )
}

export default ConnectivityPlans