'use client';
import React from 'react'
import hero_1 from "@/public/assets/images/services/managed-services-banner.png";
import Image from 'next/image';
import Typography from '../shared/typography';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

function ManagedServicesHero() {
  return (
    <div className='w-full'>
        <section className='w-[95%] max-h-[700px] h-[85vh] relative mx-auto'>
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
                        typo="header-3-medium"
                        className='!leading-11'
                    >
                        Managed Services
                    </Typography>
                    {/* <Typography
                        typo="header-3-medium"
                        className='!leading-tight '
                    >
                        Consulting
                    </Typography> */}
                </div>
                <div className='flex flex-col gap-1'>
                    <Typography
                        typo="body-medium-regular"
                        className='!font-light text-gray-300'
                    >
                        Empowering Your IT Infrastructure with Scalable,
                    </Typography>
                    <Typography
                        typo="body-medium-regular"
                        className='!font-light text-gray-300'
                    >
                        Secure, and Reliable Solutions
                    </Typography>
                </div>
                <Button
                    variant="primary"
                    className='w-fit py-3 px-5 font-medium'
                >
                    <span>Book a consultation</span>
                    <ArrowRight />
                </Button>
            </div>
        </section>
    </div>
  )
}

export default ManagedServicesHero