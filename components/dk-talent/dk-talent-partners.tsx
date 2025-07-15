'use client';
import React from 'react'
import Typography from '../shared/typography'
import { partners } from '@/constants';
import Image from 'next/image';

function DkTalentPartners() {
  return (
    <div className='w-full py-20 bg-app-black-bg'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-10 text-white'>
            <Typography
                typo="header-3-semibold"
            >
                Our Training Partners
            </Typography>
            <div className='w-full py-8 flex justify-between items-center gap-5'>
                {partners.map((data, index) => (
                    <div className='w-fit h-10'>
                        <Image 
                            src={data}
                            alt={`Partner ${index+1}`}
                            className='w-full h-full'
                        />
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default DkTalentPartners