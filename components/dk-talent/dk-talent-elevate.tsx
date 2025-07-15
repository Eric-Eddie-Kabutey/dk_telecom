'use client';
import React, { useEffect, useState } from 'react'
import Typography from '../shared/typography'
import { elevates_images } from '@/constants';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '../ui/card';

function DkkTalentElevate() {
    const [selectedCulture, setSelectedCulture] = useState(elevates_images[0].id);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        
        const cycleImages = () => {
            setIsAnimating(true);
            
            setSelectedCulture(prev => {
                const currentIndex = elevates_images.findIndex(culture => culture.id === prev);
                let nextIndex = currentIndex + 1;
                
                if (nextIndex >= elevates_images.length) {
                    nextIndex = 0;
                    
                    timeoutId = setTimeout(() => {
                        setIsAnimating(false);
                        setSelectedCulture(elevates_images[nextIndex].id);
                    }, 1000);
                }
                
                return elevates_images[nextIndex].id;
            });

            setTimeout(() => setIsAnimating(false), 500);
        };

        const intervalId = setInterval(cycleImages, 3000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, [elevates_images]);

  return (
    <div className='w-full lg:py-20 py-16   '>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto'>
            <div className='w-full flex md:flex-row flex-col justify-between gap-2'>
                <Typography
                    typo="header-4-semibold"
                    className='flex-1'
                >
                    Are you ready to elevate your career in technology?
                </Typography>
                <Typography
                    className='flex-1'
                >
                    At i-Academy, we believe in the power of education to change lives. Our comprehensive training programs 
                    are built with the understanding that real-world experience, combined with expert-led instruction, leads 
                    to true mastery. From foundational IT skills to advanced technical support, our courses are designed to 
                    equip you with the tools you need to thrive in today's dynamic tech environment.
                </Typography>
            </div>
            <div className='w-full py-16 grid grid-cols-9 gap-4'>
                    <AnimatePresence initial={false}>
                    {elevates_images.map((data) => (
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
                            className={`${selectedCulture === data.id ? "col-span-5" : "col-span-1"} sm:h-[450px] h-[350px]`}
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
        </section>
    </div>
  )
}

export default DkkTalentElevate