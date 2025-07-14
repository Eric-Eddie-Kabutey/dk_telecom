'use client';
import React from 'react'
import Typography from '../shared/typography'
import insiderImg from "@/public/assets/images/careers/insider_img.png";
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';


function CareersInsider() {
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
    <div className='w-full py-16'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col lg:gap-10 gap-4'>
            <Typography
                typo="header-4-semibold"
                className='text-gray-600'
            >
                Become an Insider
            </Typography>
            <div className='w-full flex md:flex-row flex-col justify-between items-stretch lg:gap-44 gap-10'>
                <div className='flex-1 md:max-w-[400px] flex flex-col gap-16'>
                    <Typography
                        typo="body-medium-regular"
                        className='text-gray-600'
                    >
                        Want to join us one day? Heirs Technologies Insiders are future team members who stay connected with us, 
                        get a peek into our culture, and are the first to hear about job openings.
                    </Typography>
                    <div className='w-[50%] mx-auto h-fit'>
                        <Image 
                            src={insiderImg}
                            alt='Insider image'
                            className='w-full h-full'
                        />
                    </div>
                </div>
                <div className='flex-1 '>
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
                            <FormField
                                control={form?.control}
                                name="first_name"
                                render={({ field }) => (
                                    <FormItem className='sm:flex-1 w-full flex flex-col gap-0'>
                                        <FormLabel className=' font-normal'>Educational Qualification*</FormLabel>
                                        <FormControl className="py-">
                                            <Input className="!py-6 text-gray-500 rounded-full bg-[#F3F4F6] border-gray-100" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <div className='flex sm:flex-row flex-col justify-between items-center sm:gap-5 gap-8'>
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
                                            <FormLabel className=' font-normal'>Your Phone*</FormLabel>
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
                                        <FormLabel className=' font-normal'>Tell us briefly about yourself</FormLabel>
                                        <FormControl className="py-">
                                            <Input className="!py-6 text-gray-500 rounded-full bg-[#F3F4F6] border-gray-100" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            
                            <Button
                                variant="primary"
                                className='w-fit md:py-2 !px-8 text-lg !rounded-full'
                            >
                                Submit
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default CareersInsider