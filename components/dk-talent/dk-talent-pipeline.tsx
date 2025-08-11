'use client';
import React from 'react'
import Typography from '../shared/typography'
import pipelineImg from "@/public/assets/images/company/company-2.png";
import Image from 'next/image';
import { Button } from '../ui/button';

function DkTalentPipeline() {
  return (
    <div className='w-full py-20'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto p-6 flex md:flex-row flex-col justify-between items-stretch xl:gap-12 gap-8 text-white bg-app-black-bg rounded-2xl'>
            <div className='flex-1 flex flex-col'>
                <div className='md:w-[83%] w-full flex flex-col gap-4'>
                    <div className='flex flex-col gap-4'>
                        <Typography
                            typo="body-medium-regular"
                        >
                            Hire from Us
                        </Typography>
                        <Typography
                            typo="header-3-regular"
                        >
                            Ready Pipeline of Tech Talent
                        </Typography>
                    </div>
                    <div className='flex flex-col gap-3 text-gray-300'>
                        <Typography
                            typo="body-medium-light"
                        >
                            Looking for dependable, well-trained talent? 
                        </Typography>
                        <Typography
                            typo="body-medium-light"
                        >
                            DK Talent Hub connects you with job-ready professionals trained in digital services, support, customer care, and more.
                        </Typography>
                        <Typography
                            typo="body-medium-semibold"
                        >
                            How It Works:
                        </Typography>
                        <Typography
                            typo="body-medium-light"
                        >
                            Let us know what kind of tech talent you&apos;re looking for by filling out the form below. We&apos;l 
                            match you with the right professionals who are ready to deliver results.
                        </Typography>
                        <Button
                            variant="primary"
                            className='w-fit !px-6 !py-3'
                        >
                            Hire from us
                        </Button>
                    </div>
                </div>
            </div>
            <div className='flex-1'>
                <div className='w-full md:h-full h-[400px]'>
                    <Image 
                        src={pipelineImg}
                        alt='Pipeline image'
                        className='w-full h-full object-cover rounded-xl'
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default DkTalentPipeline