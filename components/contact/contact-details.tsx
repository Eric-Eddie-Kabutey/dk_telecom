'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Facebook, Instagram, Linkedin, X } from 'lucide-react';

function ContactDetails() {
  return (
    <div className='w-full py-16 bg-app-black-bg'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-6'>
            <div className='flex flex-col gap-4'>
                <Typography
                    typo="body-medium-medium"
                    className='text-app-primary'
                >Contact details</Typography>
                <Typography
                    typo="header-3-semibold"
                    className='text-white'
                >
                    Contact details
                </Typography>
            </div>
            <div className='w-full pb-12 flex sm:flex-row flex-col justify-between gap-8'>
                <div className='flex-1 flex flex-col gap-5 text-white'>
                    <Typography
                        typo="header-5-regular"
                    >
                        Head Office:
                    </Typography>
                    <div className='flex flex-col gap-2'>
                        <Typography
                            typo="body-medium-regular"
                        >support@heirstechnologies.com</Typography>
                        <Typography
                            typo="body-medium-regular"
                        >+234-0201 888 9719</Typography>
                        <Typography
                            typo="body-medium-regular"
                        >220B, Ikorodu Road, Palmgroove, Lagos</Typography>
                    </div>
                    <div className='flex items-center gap-4'>
                        <button type='button'>
                            <Facebook size={20} />
                        </button>
                        <button type='button'>
                            <Instagram size={20} />
                        </button>
                        <button type='button'>
                            <Linkedin size={20} />
                        </button>
                        <button type='button'>
                            <X size={20} />
                        </button>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-5 text-white'>
                    <Typography
                        typo="header-5-regular"
                    >
                        Abuja Office:
                    </Typography>
                    <div className='flex flex-col gap-2'>
                        <Typography
                            typo="body-medium-regular"
                        >+234 703 312 3358</Typography>
                        <div className='flex flex-col'>
                            <Typography
                                typo="body-medium-regular"
                            >2nd floor, Churchgate Tower, Plot 473 Constitution Avenue,</Typography>
                            <Typography
                                typo="body-medium-regular"
                            >Central Business District, Abuja 900211,</Typography>
                            <Typography
                                typo="body-medium-regular"
                            >Federal Capital Territory</Typography>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='w-full sm:h-[400px] h-[300px] rounded-2xl overflow-hidden'>
                <iframe
                  title="Heirs Technologies Lagos Office Map"
                  src="https://www.google.com/maps?q=220B,+Ikorodu+Road,+Palmgroove,+Lagos&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    </div>
  )
}

export default ContactDetails