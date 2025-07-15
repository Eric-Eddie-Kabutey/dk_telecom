'use client';
import React from 'react'
import Typography from '../shared/typography'
import Image from 'next/image'
import joinImg from '@/public/assets/images/careers/join-us-img.png'
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

function DkTalentJoin() {
  return (
    <div className='w-full py-20 bg-[#F6F6F6]'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-10'>
            <div className='w-full flex md:flex-row flex-col justify-between items-stretch lg:gap-36 gap-8'>
                <div className='md:w-[40%] w-full flex flex-col'>
                    <div className='flex flex-col w-full md:h-full h-[500px]'>
                        <Image 
                            src={joinImg}
                            alt='Join us image'
                            className='w-full h-full object-cover rounded-2xl'
                        />
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-4'>
                <Typography
                    typo="header-4-medium"
                    className='text-gray-600'
                >
                    Join DK TalentHub
                </Typography>
                    <Typography>
                        Joining i-Academy means more than just acquiring new skills. It&apos;s about being part of a vibrant 
                        community of tech enthusiasts and professionals who are passionate about making an impact. Our inclusive 
                        environment fosters collaboration, innovation, and personal growth, ensuring that you&apos;re not just 
                        prepared for the tech industry but ready to lead it.
                    </Typography>
                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <div className='lg:pb-6 pb-5 flex flex-col lg:gap-5 gap-3 border-b'>
                            <Typography
                                typo="body-medium-regular"
                                className='text-gray-600'
                            >
                                Graduates with an Engineering background.
                            </Typography>
                        </div>
                        <div className='pb-6 flex flex-col lg:gap-5 gap-3 border-b'>
                            <Typography
                                typo="body-medium-regular"
                                className='text-gray-600'
                            >
                                Candidates with degrees in Computer Engineering, Computer Science, or Information Technology will have an added advantage.
                            </Typography>
                        </div>
                        <div className='pb-6 flex flex-col lg:gap-5 gap-3 border-b'>
                            <Typography
                                typo="body-medium-regular"
                                className='text-gray-600'
                            >
                                Must have access to a functional laptop and reliable internet connectivity.
                            </Typography>
                        </div>
                        <div className=' flex flex-col lg:gap-5 gap-3 '>
                            <Typography
                                typo="body-medium-regular"
                                className='text-gray-600'
                            >
                                Minimum academic requirements: BSc (Third Class or higher) or HND (Pass or higher).
                            </Typography>
                        </div>
                        <div className=' flex flex-col lg:gap-5 gap-3'>
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

export default DkTalentJoin