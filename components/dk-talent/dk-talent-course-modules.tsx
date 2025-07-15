'use client';
import React, { useState } from 'react'
import Typography from '../shared/typography'
import { course_modules } from '@/constants';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Check, LaptopMinimal } from 'lucide-react';
import { Button } from '../ui/button';
import clsx from 'clsx';
import Image from 'next/image';

function DkTalentCourseModules() {
    const [activeCards, setActiveCards] = useState<Record<string, boolean>>({});
    const [isMore, setIsMore] = useState(false);

    const toggleCard = (id: string) => {
        setActiveCards(prev => ({
        ...prev,
        [id]: !prev[id]
        }));
    };
  return (
    <div className='w-full py-12'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-5'>
            <div className='flex flex-col items-center gap-3'>
                <Typography
                    typo="body-medium-medium"
                    className='text-center text-app-primary'
                >
                    Benefits
                </Typography>
                <Typography
                    typo="header-4-semibold"
                    className='text-gray-600'
                >
                    Course Modules
                </Typography>
                <Typography
                    typo="body-medium-regular"
                    className='text-gray-600'
                >
                    Here are some of the courses available at our academy
                </Typography>
            </div>
            <div className='w-full pb-6 flex flex-col gap-8 overflow-auto'>
                <div className='w-fit flex items-center gap-8'>
                    {course_modules.map((data, index) => {
                    const isActive = activeCards[data.id];

                    return (
                        <Card
                            key={data.id}
                            onClick={() => toggleCard(data.id)}
                            className={clsx(
                                'p-2 transition-all duration-500 ease-in-out max-h-[750px] flex justify-between items-stretch gap-5 bg-app-gray-color border-none rounded-xl overflow-hidden cursor-pointer',
                                isActive ? 'w-[900px]' : 'w-[400px]'
                            )}
                        >
                        <div className='flex-1 pl-2 flex flex-col justify-between gap-'>
                            <div>
                                <CardHeader className='flex flex-col gap-4'>
                                    <div className='w-16 h-fit '>
                                        <Image 
                                            src={data.img}
                                            alt={`Course ${index+1}`}
                                            className='w-full h-full'
                                        />
                                    </div>
                                    <Typography
                                        typo='header-5-semibold'
                                        className='pt-2 text-gray-600'
                                    >
                                        {data.title}
                                    </Typography>
                                    <Typography
                                        typo='body-small-light'
                                        className='text-gray-700 !leading-normal'
                                    >
                                        {data.sub_title}
                                    </Typography>
                                </CardHeader>
                                <CardContent className='pt-0 flex flex-col justify-between gap-5'>
                                    <Typography
                                        typo="body-medium-light"
                                    >The course will help you learn skills in: </Typography>
                                    <div className='flex flex-col gap-2'>
                                        {data.contents.map(data => (
                                            <div key={data} className='pb-3 flex items-center gap-2 border-b'>
                                                <Check size={16} color='#ff0000' />
                                                <Typography
                                                    typo="body-small-light"
                                                >{data}</Typography>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </div>
                            <div className='pb-8'>
                                <Button
                                    variant='primary'
                                    className='w-fit !py-2 !px-5 !text-sm rounded-[1.1rem]'
                                >
                                    View more
                                </Button>
                            </div>
                        </div>

                        <div
                            className={clsx(
                            'py-4 px-6 flex justify-between gap-4 transition-all duration-500 ease-in-out flex-shrink-0 bg-white rounded-lg',
                            isActive ? 'w-[60%] opacity-100' : 'w-0 opacity-0 p-0'
                            )}
                        >
                            <div className='flex-1 flex flex-col gap-3'>
                                <Typography
                                    typo="header-6-medium"
                                    className='text-gray-600'
                                >
                                    Topics Covered
                                </Typography>
                                <div className='flex flex-col gap-2'>
                                    {data.topics_covered.map(data => (
                                        <div className='pb-3 flex items-center gap-3 border-b'>
                                            <div className='min-w-2 h-2 bg-red-500 rounded-full'></div>
                                            <Typography
                                                typo="body-small-light"
                                                className='!leading-normal'
                                            >{data}</Typography>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='flex-1 h-full flex-col gap-8'>
                                <div className='flex-1 pb-8 flex flex-col gap-3'>
                                    <Typography
                                        typo="header-6-medium"
                                        className='text-gray-600'
                                    >
                                        Careers paths
                                    </Typography>
                                    <div className='flex flex-col gap-2'>
                                        {data.career_paths.map(data => (
                                            <div key={data} className='pb-3 flex items-center gap-3 border-b'>
                                                <div className='min-w-2 h-2 bg-red-500 rounded-full'></div>
                                                <Typography
                                                    typo="body-small-light"
                                                    className='!leading-normal'
                                                >{data}</Typography>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex-1 flex flex-col gap-3'>
                                    <Typography
                                        typo="header-6-medium"
                                        className='text-gray-600'
                                    >
                                        Minimum Requirement
                                    </Typography>
                                    <div className='flex flex-col gap-2'>
                                        {data.minimum.map(data => (
                                            <div key={data} className='pb-3 flex items-center gap-3 border-b'>
                                                <div className='min-w-2 h-2 bg-red-500 rounded-full'></div>
                                                <Typography
                                                    typo="body-small-light"
                                                    className='!leading-normal'
                                                >{data}</Typography>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Card>
                    );
                    })}
                </div>
            </div>
        </section>
    </div>
  )
}

export default DkTalentCourseModules