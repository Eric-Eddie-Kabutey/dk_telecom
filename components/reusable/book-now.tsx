'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Button } from '../ui/button';

function BookNow() {
  return (
    <div className='w-full flex sm:flex-row flex-col justify-between '>
        <section className='book-bg  pt-10 pb-16 flex-1 flex justify-end'>
            <div className='pops lg:w-[450px] w-[90%] sm:pr-20 pr-6 flex flex-col justify-between gap-6 text-white'>
                <Typography
                    typo="body-small-regular"
                    className='text-right'
                >
                    Book a consultation
                </Typography>
                <Typography
                    typo="header-5-regular"
                    className='text-right !leading-snug'
                >
                    Discover how our services can drive your digital transformation
                </Typography>
                <Button
                    variant="primary"
                    className='w-fit mt-6 ml-auto font-light bg-white hover:bg-gray-100 text-black'
                >
                    Book now
                </Button>
            </div>
        </section>
        <section className='flex-1 pt-10 pb-16 bg-[#E7E7E7]'>
            <div className='pops lg:w-[450px] w-[90%] sm:pl-20 pl-6 flex flex-col justify-between gap-6'>
                <Typography
                    typo="body-small-regular"
                    className=''
                >
                    Support
                </Typography>
                <Typography
                    typo="header-5-regular"
                    className=' !leading-snug'
                >
                    Need help? Click Support to connect with our team and find the solutions you need.
                </Typography>
                <Button
                    variant="primary"
                    className='w-fit mt-6 font-light opacity-[0.5]'
                >
                    Contact us
                </Button>
            </div>
        </section>
    </div>
  )
}

export default BookNow