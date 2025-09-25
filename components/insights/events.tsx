import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { Card, CardContent, CardHeader } from '../ui/card';
import Typography from '../shared/typography';
import { Button } from '../ui/button';
import { ArrowRight, Calendar, Plus } from 'lucide-react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { insights_events } from '@/constants';

function Events() {
  // Filter events and check if any exist
  const events = insights_events.filter(data => data.header === "Events");
  const hasEvents = events.length > 0;

  return (
    <div className='w-full py-6'>
      {hasEvents ? (
        <Carousel
          className="w-full" 
          plugins={[
            Autoplay({
              delay: 2000
            })
          ]}
        >
          <div className="relative">
            <CarouselContent className="flex gap-16">
              {events.map((data, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card
                      className='w-[700px] p-2 flex justify-between items-stretch gap-2 bg-white'
                    >
                      <div className='rale flex flex-col gap-2'>
                        <CardHeader className='flex flex-col gap-1'>
                          <span className='text-[13px] font-normal text-gray-600'>{data.header}</span>
                          <Typography
                            typo="header-4-semibold"
                            className='!text-[1.5rem] text-[#53565A] !leading-tight line-clamp-3'
                          >
                            {data.title}
                          </Typography>
                        </CardHeader>
                        <CardContent className="pb-3 flex flex-col gap-6">
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
                      <div className='min-w-[47%] h-[320px]'>
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
        </Carousel>
      ) : (
        <div className='py-12 flex flex-col items-center justify-center text-center max-w-md mx-auto'>
          <div className='mb-6 p-4 bg-gray-100 rounded-full'>
            <Calendar className='w-12 h-12 text-gray-400' />
          </div>
          
          <Typography
            typo="header-4-semibold"
            className='text-gray-700 mb-3'
          >
            No events scheduled
          </Typography>
          
          <Typography
            typo="body-medium-regular"
            className='text-gray-500 mb-8 leading-relaxed'
          >
            There are currently no upcoming events. Check back later for updates on our latest events, workshops, and gatherings.
          </Typography>
          
          <Card className='w-full bg-blue-50 border-blue-200 mb-8'>
            <CardContent className='p-4'>
              <Typography
                typo="body-small-medium"
                className='text-blue-800 mb-2'
              >
                Want to stay updated?
              </Typography>
              <Typography
                typo="body-small-regular"
                className='text-blue-700'
              >
                Subscribe to our newsletter to be the first to know about new events.
              </Typography>
            </CardContent>
          </Card>

        </div>
      )}
    </div>
  )
}

export default Events