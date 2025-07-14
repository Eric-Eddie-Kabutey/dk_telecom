'use client';
import React from 'react'
import Typography from '../shared/typography'
import service_1 from "@/public/assets/icons/business_icon.png"
import service_2 from "@/public/assets/icons/service_icon.png"
import service_3 from "@/public/assets/icons/license_icon.png"
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const services = [
    {
        id: "1",
        icon: service_1,
        href: "/it-consulting",
        title: "Business Transformation & Consulting",
        description: `Drive your business forward with strategic IT consulting`,
    },
    {
        id: "2",
        icon: service_2,
        href: "/managed-services",
        title: "Managed Services",
        description: `AI-powered solutions that connect people and technology seamlessly`,
    },
    {
        id: "3",
        icon: service_3,
        href: "/bpo",
        title: "OEM Licenses & Renewals",
        description: `We streamline and simplify your operations`,
    },
]

function ServicesMain() {
    const router = useRouter()
  return (
    <div className='w-full py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-8'>
            <div className='flex flex-col gap-3 text-gray-600'>
                <Typography
                    typo="header-2-semibold"
                >
                    Our Services
                </Typography>
                <Typography
                    typo="body-medium-regular"
                >
                    World class expertise, local accessibility...
                </Typography>
            </div>
            <div className='w-[60%] py-8 grid grid-cols-3 gap-4'>
                {services.map((data, index) => (
                    <Card
                        key={data.id}
                        className='py-4 group hover:border-red-500'
                    >
                        <CardHeader className='h-40 mx-2 flex flex-col items-center bg-[#F3F4F6] rounded-lg'>
                            <div className='w-[50%] h-fit mx-auto'>
                                <Image 
                                    src={data.icon}
                                    alt={`Service ${index+1}`}
                                    className='w-full h-full'
                                />
                            </div>
                        </CardHeader>
                        <CardContent className='pt-3 pb-4 flex flex-col gap-3'>
                            <Typography
                                typo="body-medium-regular"
                                className='text-gray-600'
                            >
                                {data.title}
                            </Typography>
                            <Typography
                                typo="body-small-regular"
                                className='!leading-normal text-gray-600'
                            >
                                {data.description}
                            </Typography>
                        </CardContent>
                        <CardFooter className='pb-0 flex flex-col items-start justify-end'>
                            <Button
                                variant="ghost"
                                onClick={() => router.push(data.href)}
                                className='p-0 flex items-center text-gray-500 font-normal group-hover:text-red-500 hover:bg-transparen'
                            >
                                <span>Learn more</span>
                                <ArrowRight />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default ServicesMain