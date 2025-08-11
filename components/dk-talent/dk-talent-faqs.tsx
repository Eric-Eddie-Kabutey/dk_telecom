'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion-faqs';

const talent_faqs = [
    {
        id: "1",
        question: `Who can join the Talent Hub?`,
        answer: `Anyone looking to grow their skills or explore a career in tech and telecom.`,
    },
    {
        id: "2",
        question: `Is there a cost?`,
        answer: `Some programs are free; others come with affordable fees or sponsorships.`,
    },
    {
        id: "3",
        question: `Will I get a job after training?`,
        answer: `We offer placement support, but outcomes depend on your performance and market needs.`,
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
                    At DK TalentHub, we believe in equipping individuals and organisations with the tools to excel in today&apos;s 
                    technology-driven world. Our Supplementary Technical Engineering Programme is designed to bridge skill 
                    gaps, foster innovation, and create future-ready professionals.
                </Typography>
                <div className='pt-6'>
                    <Button 
                        variant="primary"
                        className='w-fit '
                    >
                        Contact us
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
                                className='text-lg font-smeibold'
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