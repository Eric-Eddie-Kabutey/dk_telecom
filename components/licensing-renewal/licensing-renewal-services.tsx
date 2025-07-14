'use client';
import React from 'react'
import Typography from '../shared/typography'
import { consulting_services, licensing_services, managed_services } from '@/constants/services';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

function LicensingRenewalServices() {
  return (
    <div className='w-full py-16 bg-[#F9F9F9]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-8'>
            <div className='max-w-[700px] flex flex-col gap-3'>
                <Typography
                    typo="body-medium-medium"
                    className='text-app-primary !leading-normal'
                >Licensing and Renewals</Typography>
                <Typography
                    typo="header-3-semibold"
                    className='text-gray-500'
                >
                    Explore Services
                </Typography>
                <Typography
                    typo="body-medium-regular"
                    className='text-gray-500'
                >
                    Heirs Technologies delivers end-to-end OEM licence management solutions, ensuring cost-effectiveness and 
                    compliance while optimising your software investments.
                </Typography>
            </div>
            <div className='w-full py-8 overflow-auto'>
                <div className='w-fit px-3 flex gap-8 flex-nowrap'>
                    {licensing_services.map((data, index) => (
                        <Card
                            key={data.id}
                            className='w-[390px] flex flex-col justify-between bg-white'
                        >
                            <div>

                                <div className='w-full h-[250px]'>
                                    <Image 
                                        src={data.img}
                                        alt={`Consulting services ${index+1}`}
                                        className='w-full h-full object-cover rounded-2xl'
                                    />
                                </div>
                                <CardHeader
                                    className='pb-4 text-gray-600'
                                >
                                    <Typography
                                        typo="header-5-semibold"
                                        className='w-[97%] !leading-snug'
                                    >
                                        {data.title}
                                    </Typography>
                                </CardHeader>
                                <CardContent>
                                    <Typography
                                        typo="body-small-regular"
                                        className='!text-[15px] !leading-relaxed text-gray-500'
                                    >
                                        {data.description}
                                    </Typography>
                                </CardContent>
                            </div>
                            <CardFooter className='flex flex-col justify-end items-start'>
                                <Button
                                    variant="ghost"
                                    className='p-0 flex items-center text-gray-600 hover:bg-transparent'
                                >
                                    <span>Learn more</span>
                                    <ArrowRight />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default LicensingRenewalServices