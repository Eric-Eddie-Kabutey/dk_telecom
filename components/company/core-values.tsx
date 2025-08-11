'use client';
import React from 'react'
import Typography from '../shared/typography'
import { core_values } from '@/constants';
import Image from 'next/image';

function CoreValues() {
  return (
    <div className='w-full py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='md:w-[65%] w-full mx-auto flex flex-col items-center gap-4'>
                <Typography
                    typo="header-3-medium"
                    className='text-gray-600'
                >
                    The DK Difference
                </Typography>
                <Typography
                    typo="body-medium-regular"
                    className='text-center text-gray-600'
                >
                    At DK Telecom, our values guide how we work, serve, and grow—with our customers and for our country.
                </Typography>
            </div>
            <div className='w-full pt-12 grid md:grid-cols-3 xl:gap-16 lg:gap-8 md:gap-4 gap-10'>
                {core_values.map((data, index) => (
                    <div key={data.id} className='flex flex-col items-center gap-6'>
                        <div className='w-20 h-fit'>
                            <data.icon color='#0b55a5' className='w-full h-full text-app-secondary' />
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