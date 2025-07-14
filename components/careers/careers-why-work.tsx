'use client';
import React from 'react'
import Typography from '../shared/typography'
import { work_reasons } from '@/constants';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import Image from 'next/image';

function CareersWhyWork() {
  return (
    <div className='w-full py-12 bg-[#262626]'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col items-center gap-8'>
            <Typography
                typo="header-3-semibold"
                className='text-white'
            >
                Why You&apos;ll Love Working Here
            </Typography>
            <div className='w-full py-6 overflow-auto'>
                <div className='w-fit px-4 flex items-center gap-6 flex-nowrap'>
                    {work_reasons.map((data, index) => (
                        <Card
                            key={data.id}
                            className='w-[700px] p-3 flex justify-between gap-2 bg-white'
                        >
                            <div className='flex-1 flex flex-col gap-2'>
                                <CardHeader className='pb-0'>
                                    <div className='w-16 h-fit'>
                                        <Image 
                                            src={data.icon}
                                            alt={`Working icon ${index+1}`}
                                            className='w-full h-full'
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent className='pb-2'>
                                    <Typography
                                        typo="header-6-semibold"
                                        className='text-gray-600'
                                    >
                                        {data.title}
                                    </Typography>
                                </CardContent>
                                <CardFooter>
                                    <Typography
                                        typo="body-small-regular"
                                        className='!leading-snug text-gray-600'
                                    >
                                        {data.description}
                                    </Typography>
                                </CardFooter>
                            </div>
                            <div className='flex-1 h-[350px]'>
                                <Image 
                                    src={data.img}
                                    alt={`Working ${index+1}`}
                                    className='w-full h-full object-cover rounded-2xl'
                                />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default CareersWhyWork