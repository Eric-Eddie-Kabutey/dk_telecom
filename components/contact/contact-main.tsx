'use client';
import React from 'react'
import Typography from '../shared/typography'

function ContactMain() {
  return (
    <div className='w-full py-12 bg-[#f6f6f6]'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex justify-between gap-12'>
            <div className='flex-1'></div>
            <div className='w-[40%] flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>
                    <Typography
                        typo="body-medium-medium"
                        className='text-app-primary'
                    >Contact Us</Typography>
                    <Typography>
                        Talk with our team.
                    </Typography>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ContactMain