"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudiesData } from "@/data/case-studies-mock";


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
            className="object-cover transition-transform duration-300 group-hover:scale-105"
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
  return (
    <section className="bg-indigo-50 py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex-grow h-px bg-indigo-200"></div>
            <div className="flex-shrink-0 rounded-full p-[2px] bg-gradient-to-br from-yellow-400 to-indigo-400">
              <div className="bg-white rounded-full px-6 py-2">
                <span className="text-sm font-medium uppercase tracking-widest text-[#140C55]">
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
          opts={{
            align: "start",
            loop: true,
          }}
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
                              
            <div className="absolute inset-y-0 flex items-center justify-between w-full pointer-events-none">
                <CarouselPrevious className="h-12 w-12 rounded-full bg-indigo-900 text-white border-none shadow-lg hover:bg-indigo-800 pointer-events-auto ml-4">
                    <ArrowLeft className="h-6 w-6" />
                </CarouselPrevious>
                <CarouselNext className="h-12 w-12 rounded-full bg-indigo-900 text-white border-none shadow-lg hover:bg-indigo-800 pointer-events-auto mr-4">
                    <ArrowRight className="h-6 w-6" />
                </CarouselNext>
            </div>
        </Carousel>

      </div>
    </section>
  );
}