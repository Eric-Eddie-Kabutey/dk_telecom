'use client';
import React, { useEffect, useState } from 'react'
import Typography from '../shared/typography';
import { case_studies } from '@/constants';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import Image from 'next/image';

function HomeCaseStudies() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
      if (!api) return;

      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());

      api.on("select", () => {
          setCurrent(api.selectedScrollSnap());
      });

      return () => {
          api.off("select", () => {
              setCurrent(api.selectedScrollSnap());
          });
      };
  }, [api]);
  return (
    <div className='w-full py-12'>
      <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col sm:gap-4'>
        <div className='w-full flex flex-col items-center gap-4'>
          <Typography
              typo="body-medium-regular"
              className='text-app-primary'
          >
              Case Studies
          </Typography>
          <Typography
              typo="header-3-medium"
              className='text-gray-600 sm:!text-[2.2rem] text-center !leading-snug'
          >
              Real Results: Stories of Success
          </Typography>
        </div>
        <div className='w-full py-8'>
                <Carousel
                    className="w-full" 
                    setApi={setApi}
                >
                    <div className="relative">
                    <CarouselContent className="flex xl:gap-12 md:gap-44 sm:gap-20 gap-48">
                        {case_studies.map((data, index) => (
                                <CarouselItem key={index} className="pl-1 lg:basis-1/2">
                                    <div className="p-1">
                                        <Card
                                            className='xl:w-[650px] w-[650px] p-2 flex justify-between items-stretch gap-3 bg-white'
                                        >
                                            <div className='rale flex flex-col justify-between gap-2'>
                                                <CardHeader className='md:pb-5 pb-0 flex flex-col'>
                                                    <span className='text-[13px] font-normal text-red-600'>{data.header}</span>
                                                    <Typography
                                                        typo="header-4-medium"
                                                        className='!text-[1.5rem] text-[#53565A] !leading-tight md:line-clamp-4 line-clamp-3'
                                                    >
                                                        {data.title}
                                                    </Typography>
                                                </CardHeader>
                                                <CardContent className="py-0 flex flex-col xl:gap-2 gap-3">
                                                    <Typography
                                                        typo="body-small-regular"
                                                        className='pops !font-light !leading-normal line-clamp-3'
                                                    >
                                                        {data.description}
                                                    </Typography>
                                                    <Button
                                                        variant="primary"
                                                        className='w-fit !py-2 !px-4 font-normal !text-sm rounded-full'
                                                    >
                                                        Download
                                                    </Button>
                                                </CardContent>
                                            </div>
                                            <div className='min-w-[47%] xl:h-[320px] h-[250px]'>
                                                <Image
                                                    src={data.img}
                                                    alt={`Insights ${index+1}`}
                                                    className='w-full h-full object-cover rounded-xl'
                                                />
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                        ))}
                    </CarouselContent>
                    </div>
                    <div className="flex items-center justify-between gap-6 mt-4">
                    <div className="flex items-center gap-4">
                        <CarouselPrevious className="relative top-0 left-0 translate-x-0 translate-y-0" />
                        <CarouselNext className="relative top-0 right-0 translate-x-0 translate-y-0" />
                    </div>
                    
                    <div className="flex items-center gap-2">
                        {Array.from({ length: count }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`w-16 h-[5px] rounded-full transition-colors ${
                            index === current ? 'bg-primary' : 'bg-gray-300'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                        ))}
                    </div>
                    </div>
                </Carousel>
            </div>
      </section>
    </div>
  )
}

export default HomeCaseStudies