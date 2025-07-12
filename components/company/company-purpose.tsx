'use client';
import React from 'react'
import africanMap from "@/public/assets/images/company/african_map.png";
import Image from 'next/image';
import Typography from '../shared/typography';
import { Separator } from '../ui/separator';

function CompanyPurpose() {
  return (
    <div className='w-full py-20 bg-[#F4F4F4]'>
      <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex justify-between gap-20'>
        <div className='flex-1'>
          <div className='w-[80%] mx-auto h-fit'>
            <Image 
              src={africanMap}
              alt='African map'
              className='w-full h-full'
            />
          </div>
        </div>
        <div className='flex-1 pt-6'>
          <div className='w-[75%] flex flex-col gap-8'>
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