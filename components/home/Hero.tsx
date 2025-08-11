'use client';
import React from 'react'
import Image from 'next/image';
import Typography from '../shared/typography';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { hero_images } from '@/constants';
import Autoplay from 'embla-carousel-autoplay';

function HomeHero() {
  return (
    <div className='w-full'>
        <section className='w-[95%] max-h-[700px] h-[90vh] relative mx-auto'>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-black/90 z-10 rounded-[1.2rem]"></div>
           <Carousel 
                plugins={[
                    Autoplay({
                        delay:2000
                    })
                ]}
                className="w-full max-h-[700px]"
            >
                <CarouselContent>
                    {hero_images.map((data, index) => (
                        <CarouselItem key={index+1}>
                            <div className='w-full h-[90vh] max-h-[700px]'>
                                <Image 
                                    src={data}
                                    alt='Hero image 1'
                                    className='w-full h-full object-cover object-top rounded-[1.2rem]'
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            
            <div className='pops absolute bottom-16 inset-x-0 max-container 2xl:w-[85%] w-[95%] flex flex-col gap-6 text-white z-20'>
                <div className='flex flex-col '>
                    <Typography
                        typo="header-2-medium"
                        className='!leading-11 md:!text-[3rem]'
                    >   Proudly Gambian. Powered 
                    </Typography>
                    <Typography
                        typo="header-2-medium"
                        className='!leading-11 md:!text-[3rem]'
                    >
                        by innovation. Committed to you. 
                    </Typography>
                </div>
                <Typography
                    typo="body-large-regular"
                >
                    Connecting Every Corner of The Gambia—One Home, One Business, One Heart at a Time.
                </Typography>
                <Button
                    variant="primary"
                    className='w-fit py-3 px-5 font-medium'
                >
                    <span>Get Connected Today</span>
                    <ArrowRight />
                </Button>
            </div>
        </section>
    </div>
  )
}

export default HomeHero
