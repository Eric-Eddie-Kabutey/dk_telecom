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


// --- Local CaseStudyCard Component ---
function CaseStudyCard({ study }: { study: typeof caseStudiesData[0] }) {
  return (
    <Link href={study.href} className="group block h-full">
      <div className="rounded-2xl p-[1px] bg-gradient-to-br from-yellow-400/80 via-indigo-500/0 to-indigo-500/80 h-full">
        <div className="bg-white rounded-[15px] shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:shadow-xl">
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
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
              {study.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3">
              {study.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}


// --- Main Section Component ---
export function CaseStudySlider() {
  return (
    <section className="bg-indigo-50 py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
          className="relative"
        >
          <CarouselContent className="-ml-4">
            {caseStudiesData.map((study) => (
              <CarouselItem key={study.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <CaseStudyCard study={study} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Custom Navigation */}
          <div className="hidden lg:block">
            <div className="absolute inset-0 flex justify-between items-center z-10 pointer-events-none">
              <CarouselPrevious className="relative -left-6 h-12 w-12 rounded-full bg-[#140C55] text-white border-none shadow-lg hover:bg-indigo-800 pointer-events-auto">
                <ArrowLeft className="h-6 w-6" />
              </CarouselPrevious>
              <CarouselNext className="relative -right-6 h-12 w-12 rounded-full bg-[#140C55] text-white border-none shadow-lg hover:bg-indigo-800 pointer-events-auto">
                <ArrowRight className="h-6 w-6" />
              </CarouselNext>
            </div>
          </div>
        </Carousel>

      </div>
    </section>
  );
}