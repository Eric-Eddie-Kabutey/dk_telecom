'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { CircleCheck } from 'lucide-react';

const pricing = [
    {
        id: "1",
        title: "Starter",
        sub_title: "Essential features for newcomers, with limited transcription and basic support.",
        monthly: "D2,500",
        yearly: "80.87",
        availability: "Free 14 days. Cancel at any time",
        includes: [
            "5Mbps Shared Bandwidth",
            "Free installations",
            "Router",
            "Handpicked vendors",
            "Premium support",
            "24/7 helpdesk support",
        ],
    },
    {
        id: "2",
        title: "Premium",
        sub_title: "Essential features for newcomers, with limited transcription and basic support.",
        monthly: "D3,500",
        yearly: "80.87",
        availability: "Premium option",
        includes: [
            "7Mbps Shared Bandwidth",
            "Free installations",
            "Router",
            "Handpicked vendors",
            "Premium support",
            "24/7 helpdesk support",
        ],
    },
    {
        id: "3",
        title: "Superior",
        sub_title: "Essential features for newcomers, with limited transcription and basic support.",
        monthly: "D5,000",
        yearly: "80.87",
        availability: "Endless Availability",
        includes: [
            "5Mbps Shared Bandwidth",
            "Free installations",
            "Router",
            "Handpicked vendors",
            "Premium support",
            "24/7 helpdesk support",
        ],
    },
]

function Packages() {
  return (
    <div className='w-full py-20 bg-white'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-12'>
            <div className='flex flex-col items-center gap-3'>
                <Typography
                    typo="header-3-medium"
                >
                    Plans and Pricing
                </Typography>
                <Typography
                    typo="body-medium-regular"
                    className='text-gray-500 text-center'
                >
                    Receive unlimited credits when you pay yearly, and save on our plan
                </Typography>
                <div className='w-fit p-1.5 flex items-center gap-3 bg-gray-100 rounded-md'>
                    <Button
                        variant="primary"
                        className='bg-gray-100 text-black hover:bg-gray-100'
                    >
                        Monthly
                    </Button>
                    <Button
                        variant="primary"
                        className='!py-4 bg-white text-black hover:bg-gray-50 rounded-md'
                    >
                        Yearly-saves up to 60%
                    </Button>
                </div>
            </div>
            <div className='w-full grid md:grid-cols-3 xl:gap-10 gap-4'>
                {pricing.map(data => (
                    <Card key={data.id} className={`p- flex flex-col gap-3 text-white ${data.title === "Basic" && "border-app-primary"} shadow-none bg-app-secondary`}>
                        <CardHeader className='pb-0 flex flex-col gap-1'>
                            <div className='w-full flex justify-between items-center'>
                                <Typography
                                    typo="header-5-semibold"
                                >{data.title}</Typography>
                                {data.title === "Premium" && (
                                    <Button
                                        variant="outline"
                                        className='!py-1 text-base text-app-primary hover:bg-gray-300'
                                    >
                                        Most Popular
                                    </Button>
                                )}
                            </div>
                            <Typography
                                typo="body-medium-regular"
                                className='text-gray-200'
                            >{data.sub_title}</Typography>
                        </CardHeader>
                        <CardContent className='flex flex-col gap-3'>
                            <Typography
                                typo="header-5-semibold"
                            >
                                {data.monthly} <span className='text-gray-300 text-base font-medium'> /monthly</span>
                            </Typography>
                            <Button
                                variant="outline"
                                className='w-full !py-3 text-base hover:bg-gray-200 text-app-primary'
                            >Get started</Button>
                            <Typography
                                typo="body-medium-medium"
                                className='text-gray-200'
                            >
                                {data.availability}
                            </Typography>
                            <div className='flex flex-col gap-2'>
                                <Typography
                                    typo="body-large-semibold"
                                    className=''
                                >
                                    Features include:
                                </Typography>
                                <ul className='flex flex-col gap-2'>
                                    {data.includes.map(include => (
                                        <li key={include} className='flex items-center gap-2 text-gray-200'>
                                            <CircleCheck size={18} />
                                            <span className='text-base'>{include}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Packages