'use client';
import React, { useEffect, useState } from 'react'
import Typography from '../shared/typography'
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { insights_events } from '@/constants'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

function BlogPost() {
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
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-6'>
            <div className='md:w-[500px] w-full mx-auto flex flex-col items-center gap-4'>
                <Typography
                    typo="header-3-semibold"
                    className='text-center text-[#53565A]'
                >
                    Blog Posts
                </Typography>
                <Typography
                    typo="body-medium-regular"
                    className='text-center text-gray-500 '
                >
                    Take a tour of our latest blog posts, press releases, case studies, and upcoming events.
                </Typography>
            </div>
            <div className='w-full py-8'>
                <Carousel className="w-full" setApi={setApi}>
                    <div className="relative">
                        <CarouselContent className="flex gap-44">
                            {insights_events.map((data, index) => (
                                data.header === "Latest blog" && (
                                    <CarouselItem key={index} className="pl-1 lg:basis-1/2">
                                        <div className="p-1">
                                            <Card className='xl:w-[800px]   w-[650px] p-2 flex justify-between items-stretch gap-3 bg-white'>
                                                <div className='rale flex flex-col gap-3'>
                                                    <CardHeader className='xl:pb-6 pb-3 flex flex-col gap-1'>
                                                        <span className='text-[13px] font-normal text-red-600'>{data.header}</span>
                                                        <Typography
                                                            typo="header-4-semibold"
                                                            className='!text-[1.8rem] text-[#53565A] !leading-tight line-clamp-3'
                                                        >
                                                            {data.title}
                                                        </Typography>
                                                    </CardHeader>
                                                    <CardContent className="flex flex-col xl:gap-6 gap-3">
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
                                                            <span>Read more</span>
                                                            <ArrowRight />
                                                        </Button>
                                                    </CardContent>
                                                </div>
                                                <div className='min-w-[47%] xl:h-[350px] h-[300px]'>
                                                    <Image
                                                        src={data.img}
                                                        alt={`Insights ${index+1}`}
                                                        className='w-full h-full object-cover rounded-xl'
                                                    />
                                                </div>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                )
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

export default BlogPost