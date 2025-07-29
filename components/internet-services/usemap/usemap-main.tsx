'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

function UsemapMain() {
    const router = useRouter()
  return (
    <div className='w-full py-12'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-16'>
            <div className='w-full flex flex-col gap-6'>
                <Button
                    variant="primary"
                    onClick={() => router.back()}
                    className='w-fit !py-2 !px-4 text-base uppercase rounded-none'
                >
                    Back
                </Button>
                <div className='w-full flex justify-between gap-6'>
                    <div className='flex flex-col gap-2'>
                        <Typography
                            typo="header-5-semibold"
                        >No fibre coverage</Typography>
                        <Typography
                            typo="body-medium-regular"
                        >
                            Drag pin to change location
                        </Typography>
                    </div>
                    <div className='md:block hidden w-[400px] h-fit py-6 border-2 rounded-md'></div>
                </div>
                <div className='sm:w-[450px] w-full flex flex-col gap-4'>
                    <div className='w-[90%] flex justify-between items-center'>
                        <div className='flex items-center gap-4'>
                            <MapPin color='#282781' size={18} />
                            <Typography
                                typo="body-small-semibold"
                                className='!font-bold'
                            >
                                8MQQ+525 - Sunyani
                            </Typography>
                        </div>
                        <Typography
                            typo="body-small-semibold"
                            className='px-2 py-0.5 border uppercase border-black rounded-full'
                        >
                            Search
                        </Typography>
                    </div>
                    <Button
                        variant="primary"
                        className='w-full bg-app-deep-blue'
                    >
                        Notify me when my area is connected
                    </Button>
                </div>
            </div>

            <div className='w-full xl:h-[500px] lg:h-[400px] h-[300px]'>
                <iframe
                    title="Banjul Office Location"
                    src="https://maps.google.com/maps?width=100%&height=500&hl=en&q=Your%20Address+(Your%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "0.5rem" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    </div>
  )
}

export default UsemapMain