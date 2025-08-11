'use client';
import React from 'react'
import Typography from '../shared/typography'
import { motion } from "framer-motion";
import { clients_logo } from '@/constants';
import Image from 'next/image';

function Partners() {
  const infiniteLogos = [...clients_logo, ...clients_logo, ...clients_logo, ...clients_logo];

  return (
    <div className='w-full py-12'>
      <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-3 overflow-hidden'>
        <div className='max-w-[750px] flex flex-col gap-4 text-gray-600'>
          <Typography typo="header-4-semibold">
            Our Partners
          </Typography>
          <Typography typo="body-medium-regular">
            We&apos;re proud to collaborate with organizations that share our vision for innovation, connectivity, and 
            community growth. These partnerships help us deliver more value to our customers and expand our impact 
            across The Gambia and beyond.
          </Typography>
        </div>

        <div className='w-full py-12 flex flex-col gap-10'>
          <motion.div
            className="flex space-x-16 w-max"
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {infiniteLogos.map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="w-fit h-10 flex items-center">
                <Image
                  src={logo.img}
                  alt={`Brand logo ${index}`}
                  className="w-full h-full filter grayscale"
                />
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex space-x-16 w-max"
            animate={{ x: ["-50%", "0%"] }} 
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {infiniteLogos.map((logo, index) => (
              <div key={`${logo.id}-bottom-${index}`} className="w-fit h-10 flex items-center">
                <Image
                  src={logo.img}
                  alt={`Brand logo ${index}`}
                  className="w-full h-full filter grayscale"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Partners;
