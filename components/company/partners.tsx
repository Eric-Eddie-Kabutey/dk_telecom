'use client';
import React from 'react'
import Typography from '../shared/typography'
import { motion } from "framer-motion";
import { clients_logo } from '@/constants';
import Image from 'next/image';

function Partners() {
    const tripleLogos = [...clients_logo, ...clients_logo, ...clients_logo];
  return (
    <div className='w-full py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-3 overflow-hidden'>
            <div className='max-w-[750px] flex flex-col gap-4 text-gray-600'>
                <Typography
                    typo="header-4-semibold"
                >
                    Our Partners
                </Typography>
                <Typography
                    typo="body-medium-regular"
                >
                    At Heirs Technologies, we collaborate with industry-leading partners to deliver top-notch services and 
                    solutions. Our partnerships with global technology giants enable us to provide our clients with the best 
                    resources and insights needed to achieve their goals.
                </Typography>
            </div>
            <motion.div
                className="py-12 flex space-x-16"
                animate={{ x: ["0", "-33.3333%"] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
                {tripleLogos.map((logo, index) => (
                <div key={logo.id} className="lg:min-w-32 min-w-16 h-fit flex items-center md:justify-center text-gray-500">
                    <Image
                    src={logo.img}
                    alt={`Brand logo ${index}`}
                    className="w-full h-full filter  grayscale"
                    />
                </div>
                ))}
            </motion.div>
            <motion.div
                className="pb-12 flex space-x-16"
                animate={{ x: ["0", "33.3333%"] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
                {tripleLogos.map((logo, index) => (
                <div key={logo.id} className="lg:min-w-32 min-w-16 h-fit flex items-center md:justify-center text-gray-500">
                    <Image
                    src={logo.img}
                    alt={`Brand logo ${index}`}
                    className="w-full h-full filter grayscale"
                    />
                </div>
                ))}
            </motion.div>
        </section>
    </div>
  )
}

export default Partners