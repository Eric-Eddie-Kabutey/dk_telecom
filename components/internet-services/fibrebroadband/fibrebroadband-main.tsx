'use client';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card';
import { Facebook, Twitter } from 'lucide-react';
import { useRouter } from 'next/navigation'
import logo from "@/public/assets/images/dk_logo_white.png";
import React from 'react'
import Image from 'next/image';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

function FibreBroadBandMain() {
    const router = useRouter();
  return (
    <div className='w-full py-12'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-6'>
            <div className='flex flex-col gap-4'>
                <Button
                    variant="primary"
                    onClick={() => router.back()}
                    className='w-fit !py-2 !px-4 text-base uppercase rounded-none'
                >
                    Back
                </Button>
                <Typography
                    typo="header-4-semibold"
                    className='!font-bold'

                >
                    Fiber Broadband for ...
                </Typography>
                <div className='flex items-center gap-4'>
                    <Typography
                        typo="body-medium-medium"
                        className='text-gray-500'
                    >Share</Typography>
                    <button className='text-gray-500'>
                        <Facebook size={22} />
                    </button>
                    <button className='text-[#969696]'>
                        <Twitter size={22} fill='#969696' />
                    </button>
                </div>
            </div>
            <div className='lg:w-[1000px] w-full lg:h-[440px] pt-8 flex lg:flex-row flex-col justify-between'>
                <Card className='xl:w-[450px] lg:w-[400px] w-full lg:h-full h-[400px] relative rounded-[1.8rem]'>
                    <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10 rounded-[1.8rem]"></div>
                    <div className='w-full h-full flex flex-col justify-center items-center bg-app-deep-blue rounded-[1.8rem]'>
                        <Image 
                            src={logo}
                            alt='DK Logo'
                            className='w-[80%] h-fit'
                        />
                    </div>
                </Card>
                <Card className='lg:w-[650px] w-full lg:-ml-16 lg:mt-0 -mt-32 p-5 flex flex-col gap-8 bg-white z-[20] rounded-[1.8rem]'>
                    <div className='flex justify-end'>
                        <Button 
                            variant="primary"
                            className='w-fit !py-1.5 flex justify-end items-center'
                        >
                            Fiber Broadband for ...
                        </Button>
                    </div>
                    <div className='w-[70%] flex sm:flex-row flex-col justify-between items-center gap-4'>
                        <div className='sm:w-[40%] w-full'>
                            <Select>
                                <SelectTrigger className="w-full border-black">
                                    <SelectValue placeholder="Free Installation" />
                                </SelectTrigger>
                                <SelectContent className='border-black'>
                                    <SelectGroup>
                                        <SelectLabel>Free Installation</SelectLabel>
                                        <SelectItem value="apple">Free Installation</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='sm:flex-1 w-full'>
                            <Select>
                                <SelectTrigger className="w-full border-black">
                                    <SelectValue placeholder="Select preferred price" />
                                </SelectTrigger>
                                <SelectContent className='border-black'>
                                    <SelectGroup>
                                        <SelectLabel>Select preferred price</SelectLabel>
                                        <SelectItem value="apple">1002.12 GB @ GHC 1000</SelectItem>
                                        <SelectItem value="apple">1002.12 GB @ GHC 1000</SelectItem>
                                        <SelectItem value="apple">1002.12 GB @ GHC 1000</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className='w-full pt-4 flex sm:flex-row flex-col justify-between items-center gap-4'>
                        <Button
                            variant="primary"
                            className='sm:flex-1 w-full'
                        >
                            Buy now
                        </Button>
                        <Button
                            variant="outline"
                            className='sm:flex-1 w-full'
                        >
                            Add to cart
                        </Button>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <Typography
                            typo="header-5-semibold"
                        >
                            Description
                        </Typography>
                        <Typography
                            typo="body-medium-regular"
                            className='text-gray-400'
                        >
                            MTN&apos;s Broadband is a high-speed Fiber broadband service for businesses. It is a reliable 
                            connectivity solution with speeds to meet the growing business needs which improve efficiency and 
                            productivity. The service features uninterrupted internet access, which can help businesses avoid 
                            downtime and lost productivity.
                        </Typography>
                    </div>
                </Card>
            </div>
        </section>
    </div>
  )
}

export default FibreBroadBandMain