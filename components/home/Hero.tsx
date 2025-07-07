'use client';
import React from 'react'
import hero_1 from "@/public/assets/images/hero-2.png";
import Image from 'next/image';
import Typography from '../shared/typography';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

function HomeHero() {
  return (
    <div className='w-full'>
        <section className='w-[95%] max-h-[700px] h-[90vh] relative mx-auto'>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 to-black/80 z-10 rounded-[1.2rem]"></div>
            <div className='w-full h-full'>
                <Image 
                    src={hero_1}
                    alt='Hero image 1'
                    className='w-full h-full object-cover rounded-[1.2rem]'
                />
            </div>
            <div className='pops absolute bottom-16 inset-x-0 max-container 2xl:w-[85%] w-[95%] flex flex-col gap-6 text-white z-20'>
                <div className='flex flex-col '>
                    <Typography
                        typo="header-2-medium"
                        className='!leading-11 md:!text-[3rem]'
                    >
                        Driving Africa&apos;s
                    </Typography>
                    <Typography
                        typo="header-2-medium"
                        className='!leading-11 md:!text-[3rem]'
                    >
                        Digital Transformation
                    </Typography>
                </div>
                <Typography
                    typo="body-large-medium"
                >
                    Your Partner in Business Transformation & Consulting, Licensing & Renewals and Managed Services
                </Typography>
                <Button
                    variant="primary"
                    className='w-fit py-3 px-5 font-medium'
                >
                    <span>Explore more</span>
                    <ArrowRight />
                </Button>
            </div>
        </section>
    </div>
  )
}

export default HomeHero