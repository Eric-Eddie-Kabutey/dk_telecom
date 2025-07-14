'use client';
import React from 'react'
import Typography from '../shared/typography'
import Image from 'next/image'
import joinImg from '@/public/assets/images/careers/join-us-img.png'
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

function CareersJoinUs() {
  return (
    <div className='w-full py-20 bg-[#F6F6F6]'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-10'>
            <Typography
                typo="header-4-semibold"
                className='text-gray-600'
            >
                Ready to Join Us?
            </Typography>
            <div className='w-full flex md:flex-row flex-col justify-between items-stretch lg:gap-44 gap-8'>
                <div className='md:w-[40%] w-full flex flex-col'>
                    <div className='flex flex-col w-full md:h-full h-[500px]'>
                        <Image 
                            src={joinImg}
                            alt='Join us image'
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-12'>
                    <Typography>
                        Now that you know a bit more about who we are, how about taking the next step? If you&apos;re excited 
                        about making a real difference, growing your career, and working with a team that&apos;s passionate 
                        about Africa&apos;s digital transformation, then we want to hear from you.
                    </Typography>
                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <div className='lg:pb-10 pb-5 flex flex-col lg:gap-5 gap-3 border-b'>
                            <Typography
                                typo="header-5-semibold"
                                className='text-gray-600'
                            >
                                Experienced Hires
                            </Typography>
                            <Button
                                variant="primary"
                                className='w-fit !px-5'
                            >
                                Apply Now 
                                <ArrowRight />
                            </Button>
                        </div>
                        <div className='pb-10 flex flex-col lg:gap-5 gap-3 border-b'>
                            <Typography
                                typo="header-5-semibold"
                                className='text-gray-600'
                            >
                                Internship
                            </Typography>
                            <Button
                                variant="primary"
                                className='w-fit !px-5'
                            >
                                Apply Now 
                                <ArrowRight />
                            </Button>
                        </div>
                        <div className=' flex flex-col lg:gap-5 gap-3 '>
                            <Typography
                                typo="header-5-semibold"
                                className='text-gray-600'
                            >
                                Talent Management Outsourcing
                            </Typography>
                            <Button
                                variant="primary"
                                className='w-fit !px-5'
                            >
                                Apply Now 
                                <ArrowRight />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default CareersJoinUs