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
                        DK TalentHub
                    </Typography>
                    <Typography
                        typo="header-2-semibold"
                        className='!leading-11 text-center text-gray-600'
                    >
                        DK Telecom Mentorship Centre
                    </Typography>
                </div>
                <Typography
                    className='max-w-[500px] text-center text-gray-500'
                >
                    DK Telecom&apos;s Talent Hub is our gateway for discovering, developing, and connecting people to the 
                    future of work in tech and telecom.
                </Typography>
                <Button
                    variant="primary"
                    className='!py-3 !px-5'
                >
                    Learn more
                    <ArrowRight />
                </Button>
            </div>
            <div className='md:block hidden w-full h-[650px]'>
                <Image 
                    src={gridImages}
                    alt='Grid images'
                    className='w-full h-full rounded-2xl object-cover'
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