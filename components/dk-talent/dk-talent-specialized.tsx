'use client';
import React from 'react'
import Typography from '../shared/typography'
import { specialized_trainings } from '@/constants';
import { Card, CardContent, CardHeader } from '../ui/card';
import Image from 'next/image';

function DkTalentSpecialized() {
  return (
    <div className='w-full py-20 bg-app-gray-color'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-4'>
            <div className='flex flex-col gap-2 text-gray-600'>
                <Typography
                    typo="header-4-semibold"
                >
                    Specialized OEM Trainings and Certifications
                </Typography>
                <Typography>
                    We offer specialized OEM training and certifications at a discount. Some of the certifications and trainings 
                    we offer include but are not limited to:
                </Typography>
            </div>
            <div className='w-full py-6 overflow-auto'>
                <div className='w-fit flex items-stretch gap-6'>
                    {specialized_trainings.map((data, index) => (
                        <Card
                            key={data.id}
                            className='w-[370px] p-3 rounded-2xl border-none shadow-sm'
                        >
                            <CardHeader className='w-full h-[180px] flex flex-col items-center justify-center bg-[#E5E6E6] rounded-lg'>
                                <div className='w-[45%] h-fit mx-auto  '>
                                    <Image 
                                        src={data.img}
                                        alt={`Specialized training ${index+1}`}
                                        className='w-full h-full'
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className='py-5 flex flex-col gap-4'>
                                <Typography
                                    typo="header-5-semibold"
                                    className='text-gray-600'
                                >
                                    {data.title}
                                </Typography>
                                <div className='flex flex-col gap-2'>
                                    {data.contents.map(data => (
                                        <div className='pb-3 flex items-center gap-2 border-b'>
                                            <div className='min-w-2 h-2 rounded-full bg-red-500'></div>
                                            <Typography
                                                typo="body-small-light"
                                                className='text-gray-500 !leading-normal'
                                            >
                                                {data}
                                            </Typography>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default DkTalentSpecialized