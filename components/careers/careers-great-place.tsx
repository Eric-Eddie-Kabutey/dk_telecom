'use client';
import React from 'react'
import Typography from '../shared/typography'
import careerImg from "@/public/assets/images/careers/career-great.png"
import Image from 'next/image';

function CareersGreatPlace() {
  return (
    <div className='w-full py-16 relative bg-[#F6F6F6]'>
        <div className='w-full h-[600px] lg:-mb-[350px] md:-mb-[300px] xs:-mb-[250px] -mb-[200px] py-16 bg-[#262626]'>
            <section className='max-container 2xl:w-[85%] w-[95%] mx-auto'>
                <div className='w-full flex md:flex-row flex-col justify-between lg:gap-20 gap-8'>
                    <Typography
                        typo="header-3-semibold"
                        className='flex-1 text-white !leading-normal'
                    >
                        Let&apos;s talk about what makes us a great place to work.
                    </Typography>
                    <Typography
                        typo="body-medium-regular"
                        className='flex-1 text-gray-400'
                    >
                        We&apos;re all about driving Africa&apos;s digital transformation, and we do it by delivering world class 
                        solutions that is not just transactional. This means that when you join Heirs Technologies, you are not 
                        just getting a job – you are becoming part of something bigger. Here, your work will have a direct impact 
                        on businesses, communities, and economies across the continent. Exciting, right?
                    </Typography>
                </div>
            </section>
        </div>
        <div className='max-container 2xl:w-[85%] w-[95%] md:h-[560px] xs:h-[400px] h-[300px] mx-auto overflow-visible'>
            <Image 
                src={careerImg}
                alt='Career image'
                className='w-full h-full object-cover rounded-2xl'
            />
        </div>
    </div>
  )
}

export default CareersGreatPlace