'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import gridImages from "@/public/assets/images/careers/career_1.png"
import gridmobileImages from "@/public/assets/images/careers/hero_mobile_img.png"
import Image from 'next/image';

function CareersHero() {
  return (
    <div className='w-full lg:py-16 py-10 bg-[#F6F6F6]'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col items-center lg:gap-20 gap-10'>
            <div className='flex flex-col items-center gap-6'>
                <div className='max-w-[400px] mx-auto flex flex-col md:gap-3 gap-1'>
                    <Typography
                        typo="body-medium-medium"
                        className='text-center text-app-primary'
                    >
                        Careers
                    </Typography>
                    <Typography
                        typo="header-2-semibold"
                        className='!leading-11 text-center text-gray-600'
                    >
                        Welcome to Heirs Technologies!
                    </Typography>
                </div>
                <Typography
                    className='max-w-[630px] text-center text-gray-500'
                >
                    Join a team that values creativity, innovation, and continuous growth. We’re looking for passionate 
                    individuals ready to make a difference. Apply to get started on your journey with Heirs Technologies.
                </Typography>
                <Button
                    variant="primary"
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

export default CareersHero