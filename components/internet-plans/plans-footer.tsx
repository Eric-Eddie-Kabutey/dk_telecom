'use client';
import { Facebook, Instagram, X } from 'lucide-react'
import React from 'react'
import Typography from '../shared/typography'

function PlansFooter() {
  return (
    <div className='w-full py-12 bg-black'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-4 '>
            <div className='flex justify-center gap-3'>
                <button className='text-white'>
                    <Instagram size={20} />
                </button>
                <button className='text-white'>
                    <X size={22} />
                </button>
                <button className='text-white'>
                    <Facebook size={20} />
                </button>
            </div>
            <div className='flex justify-center items-center gap-4 text-white'>
                <Typography
                    typo="body-small-medium"
                >
                    Terms & Conditions
                </Typography>
                <Typography
                    typo="body-small-medium"
                >
                    Help Center
                </Typography>
            </div>
            <div className='text-sm text-gray-400 text-center'>© MTN Group Management Services (Pty) Ltd, All right reserved</div>
        </section>
    </div>
  )
}

export default PlansFooter