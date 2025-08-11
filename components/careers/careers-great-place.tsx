'use client';
import React from 'react'
import Typography from '../shared/typography'
import careerImg from "@/public/assets/images/careers/career-work.png"
import Image from 'next/image';

function CareersGreatPlace() {
  return (
    <div className='w-full py-16 relative bg-app-black-bg'>
        <div className='w-full h-[600px] lg:-mb-[350px] md:-mb-[300px] xs:-mb-[250px] -mb-[200px] py-16 bg-app-black-bg'>
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
                        We are working in a workplace where staff bonds like a family built on mutual respect and shared goals. 
                        A corporation where your ideas matter and your growth is a priority. The culture blends professionalism 
                        with genuine care and support.Team spirit is strong, and every success is celebrated together. 
                        Here you don&apos;t just clock in, the culture makes you belong.
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