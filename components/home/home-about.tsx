'use client';
import React from 'react'
import about_map from "@/public/assets/images/home/map-bac-2.png";
import Image from 'next/image';
import Typography from '../shared/typography';

function HomeAbout() {
  return (
    <div className='w-full py-16 bg-[#F6F6F6]'>
        <section className='lg:block flex flex-col relative max-container 2xl:w-[85%] w-[95%] lg:h-[500px] mx-auto'>
            {/* <div className="absolute top-0 left-0 w-full h-full bg-white/60 z-10 rounded-[1.2rem]"></div> */}
            <div className='w-full flex justify-end'>
                <div className=' xl:w-[70%] lg:w-[55%] md:h-[450px] h-[350px] flex justify-end'>
                    <Image 
                        src={about_map}
                        alt='About map'
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
            <div className='pops lg:absolute inset-0 md:max-w-[550px] flex flex-col justify-center gap-6 z-[10]'>
                <Typography
                    typo="body-medium-regular"
                    className='text-app-primary'
                >
                    About Us
                </Typography>
                <Typography
                    typo="header-3-medium"
                    className='text-gray-600 md:!text-[2.2rem]  !leading-snug'
                >
                    Innovating Today for Africa’s Digital Future
                </Typography>
                <Typography
                    typo="body-medium-regular"
                    className='w-[90%] !font-extralight'
                >
                    Heirs Technologies is Africa's premier technology company dedicated to delivering cutting-edge solutions tailored for the African market. We are revolutionising the technology landscape with a strong pipeline of technical engineers to support Africa’s digital transformation.
                </Typography>
            </div>
        </section>
    </div>
  )
}

export default HomeAbout