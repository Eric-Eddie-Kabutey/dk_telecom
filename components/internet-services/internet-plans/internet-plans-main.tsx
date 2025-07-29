'use client';
import React from 'react'
import internetImg from "@/public/assets/images/internet-services/internet-main.jpg"
import Image from 'next/image'
import Typography from '@/components/shared/typography'
import { Compass } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function InternetPlansMain() {
    const router = useRouter();
  return (
    <div className='w-full sm:py-24 py-16 bg-app-deep-blue'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex lg:flex-row flex-col justify-between xl:gap-44 gap-20 text-white'>
            <div className='flex-1 flex flex-col sm:gap-20 gap-12'>
                <Typography
                    typo="header-3-regular"
                    className='!leading-normal'
                >
                    Enjoy fast and reliable internet in your home with MTN Fiber Broadband.
                </Typography>
                <div className='w-full flex flex-col gap-4'>
                    <Typography
                        typo="header-4-semibold"
                    >
                        Get 10GB data bonus when you buy today.
                    </Typography>
                    <Typography
                        typo="header-4-semibold"
                    >
                        Let's get you connected
                    </Typography>
                    <div className='flex flex-col gap-2'>
                        <Typography
                            typo="body-medium-semibold"
                            className='uppercase'
                        >
                            Check coverage in your area
                        </Typography>
                        <div className='xs:w-[90%] flex justify-betweenitems-center gap-2'>
                            <div className='flex-1  rounded-md'>
                                <input 
                                    onClick={() => router.push("/internet-plans/typolocation")}
                                    placeholder='Enter home location'
                                    className='w-full px-4 py-3 bg-white text-gray-500 outline-none focus:outline-none focus:ring-0 rounded-lg'
                                />
                            </div>
                            <div className='w-fit flex flex-col'>
                                <button
                                    className='w- !px-4 !py-3 tex-2xl bg-black rounded-md'>
                                    <Compass size={23} />
                                </button>
                                <span className='text-[9px]'>My Location</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 text-sm space-x-4'>
                        Are you a business?
                        <Link href="/internet-plans/fibrebroadband"
                            className='font-semibold'
                        >Get started</Link>
                    </div>
                </div>
            </div>
            <div className='flex-1'>
                <div className='xl:w-[500px] lg:w-[350px] sm:w-[500px] xs:w-[400px] w-[300px] xl:h-[500px] lg:h-[350px] sm:h-[500px] xs:h-[400px] h-[300px] lg:mx-0 mx-auto'>
                    <Image 
                        src={internetImg}
                        alt='Internet image'
                        className='w-full h-full object-cover rounded-full'
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default InternetPlansMain