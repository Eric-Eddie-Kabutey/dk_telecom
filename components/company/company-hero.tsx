'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Typography from '../shared/typography'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import company_hero from "@/public/assets/images/company/company-1.png"
import globeImg from "@/public/assets/images/company/globe.png"
import { company_slides } from '@/constants'
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../ui/card'

function CompanyHero() {
    const [selectedCulture, setSelectedCulture] = useState(company_slides[0].id);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        
        const cycleImages = () => {
            setIsAnimating(true);
            
            setSelectedCulture(prev => {
                const currentIndex = company_slides.findIndex(culture => culture.id === prev);
                let nextIndex = currentIndex + 1;
                
                if (nextIndex >= company_slides.length) {
                    nextIndex = 0;
                    
                    timeoutId = setTimeout(() => {
                        setIsAnimating(false);
                        setSelectedCulture(company_slides[nextIndex].id);
                    }, 1000);
                }
                
                return company_slides[nextIndex].id;
            });

            setTimeout(() => setIsAnimating(false), 500);
        };

        const intervalId = setInterval(cycleImages, 3000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, []);

  return (
    <div className='w-full'>
        <section className='w-[95%] max-h-[700px] h-[90vh] relative mx-auto z-10'>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 to-black/80 z-10 rounded-[1.2rem]"></div>
            <div className='w-full h-full'>
                <Image
                    src={company_hero}
                    alt='Hero image 1'
                    className='w-full h-full object-cover rounded-[1.2rem]'
                />
            </div>
            <div className='pops absolute bottom-16 inset-x-0 max-container 2xl:w-[85%] w-[95%] flex flex-col gap-6 text-white z-20'>
                <div className='flex flex-col '>
                    <Typography
                        typo="header-2-medium"
                        className='!leading-11 md:!text-[3rem]'
                    >
                        About Us
                    </Typography>
                </div>
                <Typography
                    typo="body-medium-light"
                    className='max-w-[680px]'
                >
                    Heirs Technologies is more than a technology provider - we are architects of Africa&apos;s digital future . 
                    With a deep understanding of the continent&apos;s unique business landscape, we deliver innovative, tailored 
                    solutions that empower organisations to thrive in an ever - evolving digital economy
                </Typography>
                <Button
                    variant="primary"
                    className='w-fit mt-4 py-3 px-5 font-medium'
                >
                    <span>Explore more</span>
                    <ArrowRight />
                </Button>
            </div>
        </section>
        <div className='w-full -mt-60 relative pt-80 pb-12 bg-[#3D3D3D] overflow-hidden'>
            <div className='md:w-[650px] sm:w-[500px] w-[80%] h-fit absolute top-24 -right-32'>
                <div className='w-full h-full relative'>
                    <Image 
                        src={globeImg}
                        alt='Globe Image'
                        className='w-full h-full '
                    />
                    <div className={`
                        absolute inset-0 
                        bg-[#3D3D3D]/60
                        flex items-center justify-center
                    `}></div>
                </div>
            </div>
            <div className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
                <div className='max-w-[590px] flex flex-col gap-8 '>
                    <div className='flex flex-col text-white z-[50]'>
                        <Typography
                            typo="header-3-semibold"
                        >
                            Aligned with
                        </Typography>
                        <Typography
                            typo="header-3-semibold"
                        >
                            Africapitalism
                        </Typography>
                    </div>
                    <Typography
                        typo="body-medium-regular"
                        className='text-gray-300 z-[50]'
                    >
                        Africapitalism is the economic philosophy developed by our Founder, Mr. Tony O. Elumelu, CFR, and is 
                        predicated on the belief that Africa&apos;s private sector can and must play a leading role in the 
                        continent&apos;s development. At the core of our mission lies the aspiration to establish Heirs 
                        Technologies as a sustainable investment fostering economic prosperity and social wealth across Africa. 
                        This commitment is encapsulated in our tagline: &apos;World class expertise, local accessibility.&apos;
                    </Typography>
                </div>

                <div className='w-full py-16 grid grid-cols-9 gap-4'>
                    <AnimatePresence initial={false}>
                    {company_slides.map((data) => (
                        <motion.div
                            key={`Culture-${data.id}`}
                            layout
                            initial={{ opacity: 0.7 }}
                            animate={{ 
                                opacity: selectedCulture === data.id ? 1 : 0.9,
                            }}
                            transition={{
                                layout: { 
                                    type: "spring", 
                                    stiffness: 100,
                                    damping: 20,
                                    duration: 1
                                },
                                opacity: { duration: 0.7 }
                            }}
                            className={`${selectedCulture === data.id ? "col-span-5" : "col-span-1"} h-[450px]`}
                            onClick={() => {
                                if (!isAnimating) {
                                    setIsAnimating(true);
                                    setSelectedCulture(data.id);
                                    setTimeout(() => setIsAnimating(false), 1000);
                                }
                            }}
                        >
                            <Card className={`
                                h-full w-full relative overflow-hidden 
                                cursor-pointer rounded-[1.4rem] border-[3px] border-white
                                ${isAnimating ? 'pointer-events-none' : ''}
                            `}>
                                <Image 
                                    src={data.img}
                                    alt={`Culture ${data.id}`}
                                    className='object-cover'
                                    fill
                                    priority={selectedCulture === data.id}
                                />
                            </Card>
                        </motion.div>
                    ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompanyHero