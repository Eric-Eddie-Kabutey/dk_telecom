'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Button } from '../ui/button';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { testimonial_clients } from '@/constants';
import { Card, CardContent, CardFooter } from '../ui/card';
import Image from 'next/image';
import { Pause } from 'lucide-react';

function BookNow() {
  return (
    <div className='w-full flex lg:flex-row flex-col justify-between '>
        <section className='book-bg  pt-10 pb-16 flex-1 flex justify-end'>
            <div className='pops lg:w-[450px] w-[90%] sm:pr-20 pr-6 flex flex-col justify-between gap-6 text-white'>
                <Typography
                    typo="body-small-regular"
                    className='text-right'
                >
                    Book a consultation
                </Typography>
                <Typography
                    typo="header-5-regular"
                    className='text-right !leading-snug'
                >
                    Discover how our services can drive your digital transformation
                </Typography>
                <Button
                    variant="primary"
                    className='w-fit mt-6 ml-auto font-light bg-white hover:bg-gray-100 text-black'
                >
                    Book now
                </Button>
            </div>
        </section>
        {/* <section className='flex-1 pt-10 pb-16 bg-[#E7E7E7]'>
            <div className='pops lg:w-[450px] w-[90%] sm:pl-20 pl-6 flex flex-col justify-between gap-6'>
                <Typography
                    typo="body-small-regular"
                    className=''
                >
                    Support
                </Typography>
                <Typography
                    typo="header-5-regular"
                    className=' !leading-snug'
                >
                    Need help? Click Support to connect with our team and find the solutions you need.
                </Typography>
                <Button
                    variant="primary"
                    className='w-fit mt-6 font-light opacity-[0.5]'
                >
                    Contact us
                </Button>
            </div>
        </section> */}
        <div className='hidden flex-1 mx-auto xs:flex flex-col gap-6 bg-white overflow-hidden'>
            <Carousel 
                plugins={[
                    Autoplay({
                        delay: 3000
                    })
                ]}
                className="w-full "
            >
                <CarouselContent>
                    {testimonial_clients.map((data, index) => (
                        <CarouselItem key={data.id}>
                            <Card
                                className='w-full h-full sm:p-4 flex md:flex-row flex-col justify-between sm:items-stretch sm:gap-8 gap-4 border-none bg-white'
                            >
                                <div className='md:hidden block md:w-[40%] w-full relative'>
                                    <div className='w-full md:h-full xs:h-[250px] h-[200px]'>
                                        <Image
                                            src={data.img}
                                            alt={`Testimonial ${index+1}`}
                                            className='w-full h-full object-cover rounded-xl'
                                        />
                                    </div>
                                </div>
                                <div className='sm:flex-1 w-full flex flex-col justify-between items-center xs:gap-3 text-center'>
                                    <CardContent className='w-full sm:pt-6 pt-3 sm:pb-6 pb-2 flex flex-col items-center sm:gap-6 gap-3'>
                                        <Pause size={16} color='#165AA1' fill='#165AA1' />
                                        <Typography
                                            typo="body-large-regular"
                                            className='!text-center text-gray-600 !leading-normal'
                                        >
                                            {data.description}
                                        </Typography>
                                    </CardContent>
                                    <CardFooter className='w-full flex flex-col'>
                                        <Typography
                                            typo="body-medium-semibold"
                                        >
                                            {data.name}
                                        </Typography>
                                        <Typography
                                            typo="body-medium-regular"
                                            className='text-gray-500'
                                        >
                                            {data.position}
                                        </Typography>
                                    </CardFooter>
                                </div>
                                <div className='md:block hidden sm:w-[40%] w-full sm:max-h-[320px] relative'>
                                    <div className='w-full sm:h-full'>
                                        <Image 
                                            src={data.img}
                                            alt={`Testimonial ${index+1}`}
                                            className='w-full h-full object-cover rounded-xl'
                                        />
                                    </div>
                                </div>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious className='md:block hidden' />
                <CarouselNext className='md:block hidden' /> */}
            </Carousel>
        </div>
    </div>
  )
}

export default BookNow