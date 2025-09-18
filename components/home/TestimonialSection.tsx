"use client";

import { useState, useEffect } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonialsData } from "@/data/testimonial-mock";


export function TestimonialSliderSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };
    
    api.on("select", handleSelect);
    
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="relative w-full"
        >
          <CarouselContent className="-ml-8">
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="pl-8 basis-full md:basis-3/4 lg:basis-2/3">
                <motion.div
                  className="p-1 h-full"
                  animate={{
                    opacity: index === selectedIndex ? 1 : 0.3,
                    scale: index === selectedIndex ? 1 : 0.9,
                    x: index === selectedIndex ? 0 : (index < selectedIndex ? -20 : 20),
                  }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="bg-cyan-50/50 rounded-2xl p-10 md:p-12 text-center h-full flex flex-col justify-center items-center">
                    <blockquote className="text-xl md:text-2xl font-medium text-indigo-900 leading-relaxed">
                      &quot; {testimonial.quote} &quot;
                    </blockquote>
                    <footer className="mt-8">
                      <p className="text-lg font-bold text-indigo-900">{testimonial.name}</p>
                      <p className="text-md text-gray-600">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </footer>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Custom Navigation */}
          <div className="absolute inset-x-0 bottom-[-60px] md:bottom-1/2 md:translate-y-1/2 flex justify-center md:justify-between items-center z-10 pointer-events-none">
            <CarouselPrevious className="relative h-14 w-14 rounded-full bg-indigo-900 text-white border-none shadow-lg hover:bg-indigo-800 pointer-events-auto disabled:opacity-50 md:static">
              <ArrowLeft className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="relative h-14 w-14 rounded-full bg-indigo-900 text-white border-none shadow-lg hover:bg-indigo-800 pointer-events-auto disabled:opacity-50 md:static">
              <ArrowRight className="h-6 w-6" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
}