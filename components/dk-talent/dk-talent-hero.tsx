'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import gridImages from "@/public/assets/images/careers/career_1.png"
import gridmobileImages from "@/public/assets/images/careers/hero_mobile_img.png"
import Image from 'next/image';

function DkTalentHero() {
  return (
    <div className='w-full lg:py-16 py-10 bg-[#F6F6F6]'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col items-center lg:gap-20 gap-10'>
            <div className='flex flex-col items-center gap-6'>
                <div className='max-w-[500px] mx-auto flex flex-col md:gap-3 gap-1'>
                    <Typography
                        typo="body-medium-medium"
                        className='text-center text-app-primary'
                    >
                        DK Talent
                    </Typography>
                    <Typography
                        typo="header-2-semibold"
                        className='!leading-11 text-center text-gray-600'
                    >
                        Heirs Technologies&apos; Training Centre
                    </Typography>
                </div>
                <Typography
                    className='max-w-[500px] text-center text-gray-500'
                >
                    Unlock your potential with our Supplementary Technical Engineering Program (STEP)
                </Typography>
                <Button
                    variant="primary"
                    className='!py-3 !px-5'
                >
                    Learn more
                    <ArrowRight />
                </Button>
            </div>
            <div className='md:block hidden w-full h-fit'>
                <Image 
                    src={gridImages}
                    alt='Grid images'
                    className='w-full h-full'
                />
            </div>
            <div className='md:hidden block w-full h-fit'>
                <Image 
                    src={gridmobileImages}
                    alt='Grid images'
                    className='w-full h-full'
                />
            </div>
        </section>
    </div>
  )
}

export default DkTalentHero