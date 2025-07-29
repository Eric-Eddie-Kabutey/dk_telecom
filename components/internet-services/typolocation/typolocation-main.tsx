'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator';
import { MapPin, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

const nearbys = [
        "Sunyani, Ghana", 
        "Sunyani Airport, New road, Sunyani, Ghana",
        "Sunyani Municipal, Ghana",
        "Sunyani COCOBOD, Sunyani, Ghana",
        "Sunyani Road, Kumasi, Ghana",
        "Sunyani Kumasi Road, Kumasi, Ghana",
    ]

function TypolocationMain() {
    const router = useRouter();

  return (
    <div className='w-full h-[100vh] py-16'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto '>
            <div className='sm:w-[450px] w-full flex flex-col gap-12'>
                <Button
                    variant="primary"
                    onClick={() => router.back()}
                    className='w-fit !py-2 !px-4 text-base uppercase rounded-none'
                >
                    Back
                </Button>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-2'>
                        <Typography
                            typo="header-5-semibold"
                            className='!font-bold'
                        >
                            Where do you want broadband?
                        </Typography>
                        <Typography
                            typo="body-medium-regular"
                        >
                            Start typing to find the location
                        </Typography>

                    </div>
                    <Separator />
                </div>
                <div className='w-full p-3 flex justify-between items-center bg-gray-100 border border-gray-700 rounded-md'>
                    <input 
                        placeholder='Enter location here'
                        className='w-full outline-none focus:outline-none focus:ring-0 bg-gray-100' 
                    />
                    <button type='button'>
                        <X size={18} />
                    </button>
                </div>
                <div className='w-full flex flex-col border-b'>
                    {nearbys.map(data => (
                        <button 
                            key={data}
                            onClick={() => router.push("/internet-plans/usemap")}
                            className='py-3 flex items-center gap-3 border-t'
                        >
                            <MapPin size={20} />
                            <Typography
                                typo="body-small-semibold"
                                className='!text-sm'
                            >
                                {data}
                            </Typography>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default TypolocationMain