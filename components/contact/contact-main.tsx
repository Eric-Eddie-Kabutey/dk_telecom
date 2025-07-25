'use client';
import React from 'react'
import Typography from '../shared/typography'
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import contactImg from "@/public/assets/images/careers/contactImg.jpg"
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

function ContactMain() {
    const form = useForm({
        defaultValues: {
            first_name: "",
            last_name: "",
            type_of_aid: "",
            contact_info: "",
            description: "",
        },
    });
  return (
    <div className='w-full py-12 bg-[#f6f6f6]'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto '>
            <div className='w-full flex justify-between items-center gap-12'>
                <div className='flex-1 hidden lg:flex flex-col'>
                    <div className='xl:w-[80%] w-full xl:h-[600px] h-[500px]'>
                        <Image 
                            src={contactImg}
                            alt='Contact image'
                            className='w-full h-full object-cover rounded-full'
                        />
                    </div>
                </div>
                <div className='xl:w-[40%] lg:w-[50%] w-full flex flex-col gap-4'>
                    <div className='flex flex-col gap-4'>
                        <Typography
                            typo="body-medium-medium"
                            className='text-app-primary'
                        >Contact Us</Typography>
                        <Typography
                            typo="header-4-semibold"
                            className='text-gray-700'
                        >
                            Talk with our team.
                        </Typography>
                    </div>
                    <div className='w-full p-6 bg-white rounded-xl'>
                        <Form {...form}>
                            <form className='flex flex-col lg:gap-8 sm:gap-10 gap-8 text-gray-700'>
                                <div className='flex sm:flex-row flex-col justify-between items-center sm:gap-5 gap-8'>
                                    <FormField
                                        control={form?.control}
                                        name="first_name"
                                        render={({ field }) => (
                                            <FormItem className='sm:flex-1 w-full flex flex-col gap-0'>
                                                <FormLabel className=' font-normal'>First Name</FormLabel>
                                                <FormControl className="py-">
                                                    <Input className="!py-6 text-gray-500 rounded-full bg-[#F3F4F6] border-gray-100" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form?.control}
                                        name="first_name"
                                        render={({ field }) => (
                                            <FormItem
                                                className='sm:flex-1 w-full flex flex-col gap-0'
                                            >
                                            <FormLabel className=' font-normal'>Last Name </FormLabel>
                                            <FormControl className=" ">
                                                <Input className="!py-6 text-gray-500 rounded-full bg-[#F3F4F6] border-gray-100" {...field} />
                                            </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className='flex sm:flex-row flex-col justify-between items-center sm:gap-5 gap-8'>
                                    <FormField
                                        control={form?.control}
                                        name="first_name"
                                        render={({ field }) => (
                                            <FormItem className='sm:flex-1 w-full flex flex-col gap-0'>
                                                <FormLabel className=' font-normal'>Company Name*</FormLabel>
                                                <FormControl className="py-">
                                                    <Input className="!py-6 text-gray-500 rounded-full bg-[#F3F4F6] border-gray-100" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form?.control}
                                        name="first_name"
                                        render={({ field }) => (
                                            <FormItem className='sm:flex-1 w-full flex flex-col gap-0'>
                                                <FormLabel className=' font-normal'>Designation*</FormLabel>
                                                <FormControl className="py-">
                                                    <Input className="!py-6 text-gray-500 rounded-full bg-[#F3F4F6] border-gray-100" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form?.control}
                                    name="first_name"
                                    render={({ field }) => (
                                        <FormItem className='sm:flex-1 w-full flex flex-col gap-0'>
                                            <FormLabel className=' font-normal'>Email*</FormLabel>
                                            <FormControl className="py-">
                                                <Input className="!py-6 text-gray-500 rounded-full bg-[#F3F4F6] border-gray-100" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                
                                <FormField
                                    control={form?.control}
                                    name="first_name"
                                    render={({ field }) => (
                                        <FormItem className='sm:flex-1 w-full flex flex-col gap-0'>
                                            <FormLabel className=' font-normal'>Your business need*</FormLabel>
                                            <FormControl className="py-">
                                                <Input className="!py-6 text-gray-500 rounded-full bg-[#F3F4F6] border-gray-100" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <div className="flex items-center gap-3">
                                    <Checkbox id="terms-2" defaultChecked 
                                        className='data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700'
                                    />
                                    <p className="text-muted-foreground text-sm">
                                        By clicking on Submit, you are agreeing that Heirs Technologies can store your personal 
                                        information and send you communications on job openings, events, recruitment activity, 
                                        and other information it considers relevant to you in accordance with our privacy policy.
                                    </p>
                                </div>
                                
                                
                                <Button
                                    variant="primary"
                                    className='w-fit md:py-2 !px-8 text-lg !rounded-full'
                                >
                                    Submit
                                    <ArrowRight />
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ContactMain