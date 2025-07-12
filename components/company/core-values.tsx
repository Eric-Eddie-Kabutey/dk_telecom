'use client';
import React from 'react'
import Typography from '../shared/typography'
import { core_values } from '@/constants';
import Image from 'next/image';

function CoreValues() {
  return (
    <div className='w-full py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='w-[65%] mx-auto flex flex-col items-center gap-4'>
                <Typography
                    typo="header-3-medium"
                    className='text-gray-600'
                >
                    Our Core Values
                </Typography>
                <Typography
                    typo="body-medium-regular"
                    className='text-center text-gray-600'
                >
                    We understand the importance of ethics in our business and our values form our corporate culture. This culture is anchored on our 3 Es.
                </Typography>
            </div>
            <div className='w-full pt-12 grid grid-cols-3 gap-16'>
                {core_values.map((data, index) => (
                    <div key={data.id} className='flex flex-col items-center gap-6'>
                        <div className='w-24 h-fit'>
                            <Image 
                                src={data.icon}
                                alt={`Core value ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                        <div className='flex flex-col items-center gap-3'>
                            <Typography
                                typo="header-5-semibold"
                                className='text-gray-600'
                            >
                                {data.title}
                            </Typography>
                            <Typography
                                typo="body-medium-regular"
                                className='text-gray-600 text-center !leading-normal'
                            >
                                {data.description}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default CoreValues