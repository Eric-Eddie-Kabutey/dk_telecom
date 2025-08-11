'use client';
import React from 'react'
import welcomeImg from "@/public/assets/images/company/company-4.png";
import Image from 'next/image';
import { Quote } from 'lucide-react';
import Typography from '../shared/typography';

function DkTalentWelcome() {
  return (
    <div className='w-full py-24 bg-app-black-bg'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex md:flex-row flex-col justify-between items-center xl:gap-20 gap-8'>
            <div className='md:flex-1 md:max-w-[500px] w-full md:h-[450px] xs:h-[400px] h-[300px]'>
                <Image 
                    src={welcomeImg}
                    alt='Welcome'
                    className='w-full h-full object-cover rounded-lg'
                />
            </div>
            <div className='flex-1 text-white'>
                <div className='xl:w-[65%] flex flex-col gap-6'>
                    <Quote fill='#175AA1' color='#175AA1' className='rotate-180' />
                    <div className='flex flex-col gap-5'>
                        <Typography
                            typo="header-4-semibold"
                        >
                            Welcome to DK Talent Hub
                        </Typography>
                        <Typography>
                            At DK Telecom, we grow with our people. The Talent Hub is your space to explore new career paths, 
                            gain real skills, and connect with opportunities that make a difference. We're here to help you 
                            move forward with purpose.
                        </Typography>
                    </div>
                    <div className='flex justify-end '>
                        <Quote fill='#175AA1' color='#175AA1' />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default DkTalentWelcome