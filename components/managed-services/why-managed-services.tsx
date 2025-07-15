'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import consultingImg from "@/public/assets/images/services/why_consulting_img.png"
import Image from 'next/image';
import { managed_reasons } from '@/constants/services';

function WhyManagedServices() {
  return (
    <div className='w-full py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto '>
            <div className='w-full flex lg:flex-row flex-col justify-between xl:gap-32 gap-16'>
                <div className='flex-1 flex flex-col gap-10'>
                    <Typography
                        typo="header-4-semibold"
                        className='text-gray-500'
                    >
                        Why Digital Services
                    </Typography>
                    <Button
                        variant="primary"
                        className='w-fit !py-3 !px-6'
                    >
                        <span>Get expert advIce</span>
                        <ArrowRight />
                    </Button>
                    <div className='w-full h-[500px]'>
                        <Image 
                            src={consultingImg}
                            alt="Consulting image"
                            className='w-full h-full object-cover rounded-2xl'
                        />
                    </div>
                </div>
                <div className='flex-1 '>
                    <div className='w-full flex flex-col gap-5'>
                        {managed_reasons.map((data, index) => (
                            <div key={data.id} className='sm:py-6 py-4 flex sm:gap-12 gap-6 border-t'>
                                <div className='sm:w-16 w-12 h-fit'>
                                    <Image 
                                        src={data.icon}
                                        alt={`Consulting ${index+1}`}
                                        className='w-full h-full'
                                    />
                                </div>
                                <div className='flex-1 flex flex-col gap-4'>
                                    <Typography
                                        typo="header-5-semibold"
                                        className='text-gray-600 !text-[1.8rem] !leading-tight'
                                    >
                                        {data.title}
                                    </Typography>
                                    <Typography
                                        className='text-gray-600'
                                    >
                                        {data.description}
                                    </Typography>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default WhyManagedServices