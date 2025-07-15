'use client';
import React from 'react'
import Typography from '../shared/typography'
import pipelineImg from "@/public/assets/images/dk-talent/academy-ready-pipeline.png";
import Image from 'next/image';
import { Button } from '../ui/button';

function DkTalentPipeline() {
  return (
    <div className='w-full py-20'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto p-6 flex justify-between items-stretch gap-12 text-white bg-app-black-bg rounded-2xl'>
            <div className='flex-1 flex flex-col'>
                <div className='w-[83%] flex flex-col gap-4'>
                    <div className='flex flex-col gap-4'>
                        <Typography
                            typo="body-medium-regular"
                        >
                            Hire from us
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
                            Build exceptional teams with top-tier, rigorously vetted tech professionals from our growing tech talent pipeline.
                        </Typography>
                        <Typography
                            typo="body-medium-light"
                        >
                            We help organisations globally with flexible and dependable talent outsourcing solutions. Whether 
                            you&apos;re looking for project-based hires, managed teams, or long-term staff, we have the 
                            expertise to meet your needs.
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
                <div className='w-full h-full'>
                    <Image 
                        src={pipelineImg}
                        alt='Pipeline image'
                        className='w-full h-full '
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default DkTalentPipeline