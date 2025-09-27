"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudiesData } from "@/data/case-studies-mock";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";


function CaseStudyCard({ study }: { study: typeof caseStudiesData[0] }) {
  
  return (
    // The card is now a single relative container
    <div className="group relative h-full flex flex-col">
        {/* The right-side colored border */}
        {/* <div className="absolute top-0 right-0 h-full w-1.5 bg-gradient-to-b from-yellow-400 to-yellow-500"></div> */}

        <div className="relative aspect-[4/3]">
            <Image
            src={study.imageUrl}
            alt={study.imageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
            />
            <div className="absolute bottom-3 left-3">
            <span className="bg-white/80 backdrop-blur-sm text-blue-600 font-semibold text-xs px-3 py-1 rounded-full">
                {study.tag}
            </span>
            </div>
        </div>
        <div className="py-6 flex-grow flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
            {study.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3">
            {study.description}
            </p>
            <Link href={study.href} className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-800 self-start">
                Read More
            </Link>
        </div>
    </div>
  );
}


// --- Main Section Component ---
export function CaseStudySlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    console.log("API initialized");
    console.log("Scroll snap list length:", api.scrollSnapList().length);
    console.log("Current slide:", api.selectedScrollSnap());

    const updateState = () => {
      const newCount = api.scrollSnapList().length;
      const newCurrent = api.selectedScrollSnap();
      
      console.log("Count:", newCount, "Current:", newCurrent);
      
      setCount(newCount);
      setCurrent(newCurrent);
    };

    // Set initial state
    updateState();

    api.on("select", updateState);
    api.on("slidesChanged", updateState);

    return () => {
      api.off("select", updateState);
      api.off("slidesChanged", updateState);
    };
  }, [api]);
  return (
    <section className="ibm bg-indigo-50 py-20 md:py-28 px-6">
      <div className="max-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="flex items-center justify-center mb-6">
            <div className="flex-grow h-px bg-indigo-200"></div>
            <div className="flex-shrink-0 rounded-full p-[1px] bg-gradient-to-br from-yellow-400 to-indigo-400">
              <div className="bg-white rounded-full px-4 py-[2px]">
                <span className="py-[0.5px] text-[11px] font-medium uppercase tracking-widest text-[#140C55]">
                  Our Case Study
                </span>
              </div>
            </div>
            <div className="flex-grow h-px bg-indigo-200"></div>
          </div>
          <h2 className="text-xl md:text-2xl font-medium text-[#140C55]">
            Real Results: Stories of Success
          </h2>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000
            })
          ]}
          className="md:mx-16"
        >
          <CarouselContent className="-ml-4">
             {caseStudiesData.map((study) => (
                    <CarouselItem key={study.id} className="pl-8 basis-full sm:basis-3/4 md:basis-1/2 lg:basis-1/3">
                        <div className="relative h-full pr-8">
                            <CaseStudyCard study={study} />
                            {/* The right-side colored border */}
                            <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-yellow-400 to-indigo-400"></div>
                        </div>
                    </CarouselItem>
                    ))}
          </CarouselContent>
                              
            <div className=" absolute inset-y-0 hidden sm:flex items-center justify-between w-full pointer-events-none">
                <CarouselPrevious className="h-12 w-12 rounded-full bg-indigo-900 text-white border-none shadow-lg hover:bg-indigo-800 pointer-events-auto ml-4">
                    <ArrowLeft className="h-6 w-6" />
                </CarouselPrevious>
                <CarouselNext className="h-12 w-12 rounded-full bg-indigo-900 text-white border-none shadow-lg hover:bg-indigo-800 pointer-events-auto mr-4">
                    <ArrowRight className="h-6 w-6" />
                </CarouselNext>
            </div>
            <div className="w-full pt-6 flex justify-end items-center gap-6">
              {/* <div className="w-[50%]"></div> */}
              <div className=" flex justify-end items-center gap-2 ">
                  {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={` h-[8px] rounded-full transition-colors ${
                        index === current ? 'w-10 bg-app-primary' : 'w-[8px] bg-black'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
              </div>
            </div>
        </Carousel>

      </div>
    </section>
  );
}