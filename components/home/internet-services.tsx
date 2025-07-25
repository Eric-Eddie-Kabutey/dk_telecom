'use client';
import React, { useState, useEffect } from 'react'
import Typography from '../shared/typography'
import { internet_services, our_services } from '@/constants';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { ArrowRight, ArrowUp } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';
import StarRating from '../reusable/star-rating';

function InternetServices() {
    const [activeCardId, setActiveCardId] = useState<string | null>(our_services[0]?.id || null);

    useEffect(() => {
        if (our_services.length > 0 && !activeCardId) {
            setActiveCardId(our_services[0].id);
        }
    }, []);


    return (
        <div className='w-full py-12'>
            <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-6'>
                <div className='w-full pb-4 flex flex-col items-center gap-5'>
                    <Typography
                        typo="header-3-medium"
                        className='text-gray-600'
                    >
                        Internet Services
                    </Typography>
                    <Typography
                        typo="body-medium-regular"
                        className='text-gray-600 text-center'
                    >
                        Tailored technology services to accelerate your business growth
                    </Typography>
                </div>
                <div className='flex-1 lg:pr-4 flex flex-col gap-9 lg:border-r border-dashed'>
                    <div className='md:w-[740px] w-full mx-auto grid sm:grid-cols-3 grid-cols-2 md:gap-5 gap-3'>
                        {internet_services.map((data, index) => (
                            <Card key={data.id} className='p-3 flex flex-col justify-between gap-2'>
                                <div className='flex flex-col '>
                                    <CardHeader className='w-full md:h-[140px] xs:h-[120px] h-[100px] p-0'>
                                        <Image 
                                            src={data.img}
                                            alt={`service ${index+1}`}
                                            className='w-full h-full'
                                        />
                                    </CardHeader>
                                    <CardContent className='px-0 pt-1 pb-0 flex flex-col'>
                                        <Typography 
                                            typo="body-large-semibold"
                                            className='pb-2 !leading-none'>{data.title}</Typography>
                                            <Typography
                                                typo="body-small-regular"
                                                className='text-gray-500  line-clamp-1'
                                            >
                                                {data.sub_title}
                                            </Typography>
                                    </CardContent>
                                </div>
                                <CardFooter className='px-0 pb-0 flex flex-row justify-between items-center'>
                                    <StarRating rating={5} />
                                    <button
                                        type='button'
                                        className='p-1 border rounded-full'
                                    >
                                        <ArrowUp size={16} />
                                    </button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                    <style>{`
                      @keyframes beep {
                        0%, 100% { opacity: 1; transform: scale(1); }
                        20% { opacity: 0.5; transform: scale(1.08); }
                        40% { opacity: 1; transform: scale(1); }
                      }
                    `}</style>
                    <Button
                        variant="primary"
                        className='w-fit mx-auto animate-[beep_1.2s_ease-in-out_infinite]'
                    >
                        Other Solutions
                        <ArrowRight />
                    </Button>
                </div>  
            </section>
        </div>
    )
}

export default InternetServices