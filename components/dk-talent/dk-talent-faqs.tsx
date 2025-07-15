'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion-faqs';

const talent_faqs = [
    {
        id: "1",
        question: `How can I enroll into i-Academy?`,
        answer: `Fill and submit the online application form - Take and pass all assessment tests - Complete enrolment/onboarding 
                    on the LMS and begin your learning journey.`,
    },
    {
        id: "2",
        question: `What do I need to be able to learn?`,
        answer: `Access to a functional laptop (minimum of Intel Core i5 8th generation or newer, 8 GB RAM) with good 
                    internet connectivity is a necessity.`,
    },
    {
        id: "3",
        question: `When will classes for this Cohort start?`,
        answer: `Classes for this cohort will start in March 2025. It is also important to check your email frequently 
                because various information will be duly communicated with applicants and successful candidates.`,
    },
    {
        id: "4",
        question: `How long is the Supplementary Technical Engineering Program (STEP)?`,
        answer: `The duration of the Supplementary Technical Engineering Program (STEP) 2025 is 3 months.`,
    },
    {
        id: "5",
        question: `How much is the tuition fee?`,
        answer: `It is FREE!`,
    },
    {
        id: "6",
        question: `Will I get a Certificate at the end of the training?`,
        answer: `Yes. Upon successful completion of the 3 months training, participants will gain a certificate of completion 
                    and participation. If you’re interested in taking the main certification exam (which is a paid exam), 
                    Heirs Technologies provides access to discounted exam vouchers.`,
    },
    {
        id: "7",
        question: `Will I receive any assistance in securing a job after completion of the program?`,
        answer: `You will be placed in our Talent Pool to be considered if job opportunities arise.`,
    },
    {
        id: "8",
        question: `How and where will the classes take place?`,
        answer: `Classes will be hybrid for those in Lagos (4 days remote,1 day onsite held at Heirs Technologies training 
                    centre from 9 am – 12 noon), and fully virtual for those out of Lagos. Your attendance and participation 
                    will be monitored both online and onsite. So, take your lessons seriously and participate in all your 
                    learning activities and assessments.`,
    },
]

function DkTalentFaqs() {
  return (
    <div className='w-full py-12 bg-app-gray-color'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
                <Typography
                    typo="body-medium-medium"
                    className=' text-app-primary uppercase'
                >
                    faqs
                </Typography>
                <Typography
                    typo="header-4-semibold"
                    className='text-gray-600'
                >
                    Frequently Asked Questions
                </Typography>
                <Typography
                    typo="body-medium-regular"
                    className='text-gray-600'
                >
                    At i-academy, we believe in equipping individuals and organisations with the tools to excel in today&apos;s 
                    technology-driven world. Our Supplementary Technical Engineering Programme is designed to bridge skill 
                    gaps, foster innovation, and create future-ready professionals.
                </Typography>
                <div className='pt-6'>
                    <Button 
                        variant="primary"
                        className='w-fit '
                    >
                        Get expert advice
                        <ArrowRight />
                    </Button>
                </div>
            </div>
            <div className='w-full py-6'>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full flex flex-col gap-3"
                    defaultValue="item-1"
                >
                    {talent_faqs.map((data, index) => (
                        <AccordionItem
                            key={data.id} 
                            value={`item-${index+1}`}
                            className='px-6 rounded-xl bg-white'
                        >
                            <AccordionTrigger
                                className='text-base font-normal'
                            >{data.question}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p className='text-base'>
                                    {data.answer}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    </div>
  )
}

export default DkTalentFaqs