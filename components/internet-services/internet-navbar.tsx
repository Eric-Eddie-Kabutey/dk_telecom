'use client';
import React, { useState } from 'react'
import logo from "@/public/assets/images/dk_logo_white.png";
import Link from 'next/link';
import Image from 'next/image';
import { InternetSheet } from './internet-sheet';
import { AlignJustify } from 'lucide-react';

function InternetNavbar() {
    const [openSheet, setOpenSheet] = useState(false);
    
  return (
    <div className='w-full py-4 bg-app-deep-blue'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex justify-between items-center gap-6'>
            <Link href="/"
                className='w-hit h-8'
            >
                <Image 
                    src={logo}
                    alt='DK Logo'
                    className='w-full h-full'
                />
            </Link>
            <button
                type='button'
                onClick={() => setOpenSheet(true)}
                className='text-white'
            >
                <AlignJustify />
            </button>
        </section>
        <InternetSheet 
            open={openSheet}
            setOpen={setOpenSheet}
        />
    </div>
  )
}

export default InternetNavbar