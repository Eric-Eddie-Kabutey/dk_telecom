'use client';
import React, { useEffect, useState } from 'react'
import Typography from '../shared/typography'
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Card, CardContent, CardHeader } from '../ui/card';
import { insights_events } from '@/constant';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs-team';
import CaseStudies from './case-studies';
import Reports from './reports';
import Blog from './blog';
import Events from './events';
import { useRouter, useSearchParams } from 'next/navigation';

function InsightsMain() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const [activeTab, setActiveTab] = useState('case-studies');
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab && ['case-studies', 'blog', 'events', 'reports'].includes(tab)) {
            setActiveTab(tab);
        }
    }, [searchParams]);

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

    const handleTabChange = (value: string) => {
        setActiveTab(value);
        // Update URL without page reload
        router.replace(`?tab=${value}`, { scroll: false });
    };

    const getTitleText = () => {
        switch (activeTab) {
            case 'blog':
                return 'Latest blog';
            case 'events':
                return 'Events';
            case 'case-studies':
                return 'Case studies';
            case 'reports':
                return 'Reports';
            default:
                return 'Insights';
        }
    };

  return (
    <div className='w-full py-12 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-6'>
            <div className='md:w-[600px] w-full mx-auto flex flex-col items-center gap-4'>
                <Typography
                    typo="header-3-semibold"
                    className='text-center text-[#53565A]'
                >
                    {getTitleText()}
                </Typography>
                <Typography
                    typo="body-large-medium"
                    className='text-center text-[#53565A]'
                >
                    Take a tour of our latest blog posts, press releases, case studies, and upcoming events.
                </Typography>
            </div>
            <div className='w-full py-8'>
                <Carousel 
                    className="w-full" 
                    setApi={setApi}
                >
                    <div className="relative">
                    <CarouselContent className="flex gap-44">
                        {insights_events.map((data, index) => (
                            data.header === "Latest blog" && (
                                <CarouselItem key={index} className="pl-1 lg:basis-1/2">
                                    <div className="p-1">
                                        <Card
                                            className='xl:w-[800px] w-[650px] p-2 flex justify-between items-stretch gap-3 bg-white'
                                        >
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
                                                        className='!py-2 !px-4 font-normal !text-sm rounded-full'
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

            <div className='py-8'>
                <Tabs
                    value={activeTab}
                    onValueChange={handleTabChange}
                    defaultValue="case-studies"
                    className='pt-8'
                >
                    <TabsList className='w-full overflow-auto'>
                        <div className='flex flex-nowrap gap-2'>
                            <TabsTrigger
                                value="case-studies"
                            >Case studies</TabsTrigger>
                            <TabsTrigger
                                value="blog"
                            >Blog</TabsTrigger>
                            <TabsTrigger
                                value="events"
                            >Events</TabsTrigger>
                            <TabsTrigger 
                                value="reports"
                            >Reports</TabsTrigger>
                        </div>
                    </TabsList>

                    <TabsContent value="case-studies">
                        <CaseStudies />
                    </TabsContent>
                    <TabsContent value="blog">
                        <Blog />
                    </TabsContent>
                    <TabsContent value="events">
                        <Events />
                    </TabsContent>
                    <TabsContent value="reports">
                        <Reports />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    </div>
  )
}

export default InsightsMain