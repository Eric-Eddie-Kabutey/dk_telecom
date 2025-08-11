'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Facebook, Instagram, Linkedin, X } from 'lucide-react';

function ContactDetails() {
  return (
    <div className='w-full py-16 bg-app-black-bg'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-6'>
            
            <div className='w-full pb-12 flex sm:flex-row flex-col justify-between gap-8'>
                <div className='flex-1 flex flex-col gap-5 text-white'>
                    <Typography
                    typo="header-3-semibold"
                    className='text-white'
                >
                    Head Office
                </Typography>
                    <div className='flex flex-col gap-2'>
                        <Typography
                            typo="body-medium-regular"
                        >DK Telecom, Bijilo – The Gambia</Typography>
                        <Typography
                            typo="body-medium-regular"
                        >Monday to Saturday | 9:00 AM – 5:00 PM</Typography>
                        
                    </div>
                    {/* <div className='flex items-center gap-4'>
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
                    </div> */}
                </div>
                <div className='flex-1 flex flex-col gap-5 text-white'>
                    <Typography
                        typo="header-3-semibold"
                        className='text-white'
                    >
                        Reach us on:
                    </Typography>
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center gap-3'>
                            <Typography
                                typo="body-medium-semibold"
                            >Phone:</Typography>
                            <Typography
                                typo="body-medium-regular"
                            >+220 954 4000 </Typography>

                        </div>
                        <div className='flex items-center gap-3'>
                            <Typography
                                typo="body-medium-semibold"
                            >Call Center:</Typography>
                            <Typography
                                typo="body-medium-regular"
                            >1331</Typography>

                        </div>
                        <div className='flex items-center gap-3'>
                            <Typography
                                typo="body-medium-semibold"
                            >Email:</Typography>
                            <Typography
                                typo="body-medium-regular"
                            >info@dktelecom.gm</Typography>

                        </div>
                        <div className='flex items-center gap-3'>
                            <Typography
                                typo="body-medium-semibold"
                            >WhatsApp:</Typography>
                            <Typography
                                typo="body-medium-regular"
                            >+220 954 4000</Typography>

                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='w-full sm:h-[400px] h-[300px] rounded-2xl overflow-hidden'>
                <iframe
                  title="Heirs Technologies Lagos Office Map"
                src="https://www.google.com/maps?q=Banjul,+Gambia&output=embed"
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