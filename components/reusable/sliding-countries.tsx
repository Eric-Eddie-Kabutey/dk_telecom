import { country_flags } from '@/constants';
import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import Typography from '../shared/typography';


function SlidingCountries() {
    const tripleLogos = [...country_flags, ...country_flags, ...country_flags];
  return (
    <div className='w-full overflow-hidden'>
        <motion.div
          className="flex space-x-4 w-max"
          animate={{ x: ["0", "-33.3333%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {tripleLogos.map((logo, index) => (
            <div key={logo.id} className='flex items-center gap-2'>
                <div key={index} className="lg:w-8 w-4 flex items-center md:justify-center">
                    <Image
                        src={logo.img}
                        alt="Brand logo"
                    />
                </div>
                <Typography
                    typo="body-small-medium"
                    className='text-white'
                >{logo.country}</Typography>
            </div>
          ))}
        </motion.div>
    </div>
  )
}

export default SlidingCountries