'use client';
import React, { useState } from 'react'
import Typography from '../shared/typography'
import { our_services } from '@/constants';
import { Card, CardContent, CardHeader } from '../ui/card';
import clsx from 'clsx';
import { LaptopMinimal } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';

function OurServices() {
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
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-6'>
            <div className='w-full pb-4 flex flex-col items-center gap-5'>
                <Typography
                    typo="header-3-medium"
                    className='text-gray-600'
                >
                    Explore our Services
                </Typography>
                <Typography
                    typo="body-medium-regular"
                    className='text-gray-600'
                >
                    Tailored technology services to accelerate your business growth
                </Typography>
            </div>
            <div className='w-full py-6 flex flex-col gap-8 overflow-auto'>
                <div className='w-fit flex items-center gap-8'>
                    {our_services.slice(0, 3).map((data, index) => {
                    const isActive = activeCards[data.id];

                    return (
                        <Card
                        key={data.id}
                        onClick={() => toggleCard(data.id)}
                        className={clsx(
                            'transition-all duration-500 ease-in-out h-[480px] flex justify-between items-stretch sm:gap-8 bg-white border-none rounded-xl overflow-hidden cursor-pointer',
                            isActive ? 'sm:w-[900px] w-[800px]' : 'sm:w-[400px] w-[300px]'
                        )}
                        style={{backgroundColor: data.bg_color}}
                        >
                        <div className={`flex-1 xs:pl-2 flex flex-col justify-between gap-8 ${data.id === "2" ? "text-gray-700" : "text-white"}`}>
                            <CardHeader className='flex flex-col gap-2'>
                                <div className='w-fit p-1.5 rounded-md bg-gray-200'>
                                    <LaptopMinimal size={25} />
                                </div>
                                <Typography
                                    typo='header-5-semibold'
                                    className='!text-xl'
                                >
                                    {data.title}
                                </Typography>
                                <Typography
                                    typo='body-medium-regular'
                                    className=''
                                >
                                    {data.sub_title}
                                </Typography>
                            </CardHeader>
                            <CardContent className='pb-10 flex flex-col gap-5'>
                            <Typography
                                typo='body-medium-regular'
                                className=''
                            >
                                {data.description}
                            </Typography>
                            <Button
                                variant='primary'
                                className='w-fit !py-2 !px-3 !text-sm rounded-[1.1rem]'
                            >
                                View
                            </Button>
                            </CardContent>
                        </div>

                        <div
                            className={clsx(
                            'transition-all duration-500 ease-in-out h-full p-2 flex-shrink-0',
                            isActive ? 'w-[60%] opacity-100' : 'w-0 opacity-0 p-0'
                            )}
                        >
                            <Image
                            src={data.img}
                            alt={`Digital ${index + 1}`}
                            className='w-full h-full object-cover rounded-xl'
                            />
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

export default OurServices