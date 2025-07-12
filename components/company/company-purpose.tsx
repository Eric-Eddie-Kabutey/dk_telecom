'use client';
import React from 'react'
import africanMap from "@/public/assets/images/company/african_map.png";
import Image from 'next/image';
import Typography from '../shared/typography';
import { Separator } from '../ui/separator';

function CompanyPurpose() {
  return (
    <div className='w-full md:py-20 py-12 bg-[#F4F4F4]'>
      <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex md:flex-row flex-col justify-between md:gap-20 gap-5'>
        <div className='flex-1'>
          <div className='xl:w-[80%] md:w-full w-[70%] mx-auto h-fit'>
            <Image 
              src={africanMap}
              alt='African map'
              className='w-full h-full'
            />
          </div>
        </div>
        <div className='flex-1 pt-6'>
          <div className='xl:w-[75%] lg:w-[80%] flex flex-col xl:gap-8 md:gap-4 gap-8'>
            <Typography
              typo="body-medium-regular"
              className='!leading-relaxed text-gray-600'
            >
              Our expertise spans Managed Services , Business Transformation and Consulting , and Licensing and Renewals, 
              establishing us as a trusted partner for businesses seeking efficiency, growth, and resilience . With a 
              strong pipeline of skilled technical engineers, we are transforming Africa&apos;s technology ecosystem and 
              shaping a future where African businesses set the global benchmark for digital excellence
            </Typography>
            <Separator />
            <div className='flex flex-col gap-4'>
              <Typography
                typo="header-5-semibold"
                className='text-gray-600'
              >
                Our Purpose
              </Typography>
              <Typography
                typo="body-medium-regular"
                className='!leading-relaxed text-gray-600'
              >
                To empower Africa&apos;s digital transformation through innovative and locally tailored solutions
              </Typography>
            </div>
            <Separator />
            <div className='flex flex-col gap-4'>
              <Typography
                typo="header-5-semibold"
                className='text-gray-600'
              >
                Our Promise
              </Typography>
              <Typography
                typo="body-medium-regular"
                className='!leading-relaxed text-gray-600'
              >
                Become a Trusted Advisor and Deliver Value that is not just Transactional.
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CompanyPurpose