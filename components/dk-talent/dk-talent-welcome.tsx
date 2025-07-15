'use client';
import React from 'react'
import welcomeImg from "@/public/assets/images/welcome-img.png";
import Image from 'next/image';
import { Quote } from 'lucide-react';
import Typography from '../shared/typography';

function DkTalentWelcome() {
  return (
    <div className='w-full py-24 bg-app-black-bg'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex md:flex-row flex-col justify-between items-center xl:gap-20 gap-8'>
            <div className='md:flex-1 md:max-w-[500px] w-full md:h-fit xs:h-[400px] h-[300px]'>
                <Image 
                    src={welcomeImg}
                    alt='Welcome'
                    className='w-full h-full object-cover rounded-lg'
                />
            </div>
            <div className='flex-1 text-white'>
                <div className='xl:w-[90%] flex flex-col gap-6'>
                    <Quote fill='#175AA1' color='#175AA1' className='rotate-180' />
                    <div className='flex flex-col gap-5'>
                        <Typography
                            typo="header-4-semibold"
                        >
                            Welcome to DK TalentHub
                        </Typography>
                        <Typography>
                            We&apos;re so excited to have you here. At i-Academy, we don&apos;t just teach technology - we nurture 
                            innovators. Our goal is to help you unlock your potential, giving you the tools, confidence, and hands-on 
                            experience to thrive in today&apos;s fast-paced digital world. Whether you&apos;re just starting out or 
                            aiming to sharpen your expertise, our hands-on technical support engineering training is designed to 
                            help you jumpstart your tech career goals. We can&apos;t wait to see what you&apos;ll achieve.
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