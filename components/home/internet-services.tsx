'use client';
import React from 'react'
import Typography from '../shared/typography'
import { internet_services } from '@/constants';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { ArrowRight, ArrowUp } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';

function InternetServices() {
    // const [activeCardId, setActiveCardId] = useState<string | null>(our_services[0]?.id || null);

    // useEffect(() => {
    //     if (our_services.length > 0 && !activeCardId) {
    //         setActiveCardId(our_services[0].id);
    //     }
    // }, []);


    return (
        <div className='w-full pb-20'>
            <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col md:gap-10 gap-6'>
                <div className='w-full pb-4 flex flex-col items-center gap-5'>
                    <Typography
                        typo="header-3-medium"
                        className='text-gray-600'
                    >
                        Internet Services
                    </Typography>
                    <Typography
                        typo="body-medium-regular"
                        className='text-gray-600 text-center'
                    >
                        Tailored technology services to accelerate your business growth
                    </Typography>
                </div>
                <div className='flex-1 lg:pr-4 flex flex-col md:gap-12 gap-8 lg:border-r border-dashed'>
                    <div className='w-full mx-auto grid md:grid-cols-4 grid-cols-2 xl:gap-16 md:gap-4 sm:gap-10 gap-4 '>
                        {internet_services.map((data, index) => (
                            <Link key={data.id} href={data.href}>
                                <Card className='lg:p-3 p-2 flex flex-col justify-between gap-2 group relative overflow-hidden transition-all duration-300'>
                                    
                                    <div className='absolute bottom-0 left-0 w-full h-0 bg-[#175aa1] group-hover:h-full transition-all duration-300 ease-in-out'></div>
                                    <div className='flex flex-col relative z-10'>
                                        <CardHeader className='w-full lg:h-[150px] md:h-[120px] xs:h-[150px] h-[120px] p-0'>
                                            <Image 
                                                src={data.img}
                                                alt={`service ${index+1}`}
                                                className='w-full h-full object-cover rounded-lg'
                                            />
                                        </CardHeader>
                                        <CardContent className='px-0 pt-4 xl:pb-2 pb-0 flex flex-col'>
                                            <Typography 
                                                typo="body-large-semibold"
                                                className='pb-2 !leading-none group-hover:text-white'>{data.title}</Typography>
                                                <Typography
                                                    typo="body-small-regular"
                                                    className='text-gray-500  line-clamp-1 group-hover:text-gray-200'
                                                >
                                                    {data.sub_title}
                                                </Typography>
                                        </CardContent>
                                    </div>
                                    <CardFooter className='px-0 xl:pb-3 pb-1 flex flex-row justify-end items-center z-[10]'>
                                        {/* <StarRating rating={5} /> */}
                                        <button
                                            type='button'
                                            className='p-1 border rounded-full bg-white'
                                        >
                                            <ArrowUp size={18} />
                                        </button>
                                    </CardFooter>
                                </Card>
                            </Link>
                        ))}
                    </div>
                    <style>{`
                      @keyframes beep {
                        0%, 100% { opacity: 1; transform: scale(1); }
                        20% { opacity: 0.5; transform: scale(1.08); }
                        40% { opacity: 1; transform: scale(1); }
                      }
                    `}</style>
                    <Button
                        variant="primary"
                        className='w-fit mx-auto animate-[beep_1.2s_ease-in-out_infinite]'
                    >
                        Other Solutions
                        <ArrowRight />
                    </Button>
                </div>  
            </section>
        </div>
    )
}

export default InternetServices