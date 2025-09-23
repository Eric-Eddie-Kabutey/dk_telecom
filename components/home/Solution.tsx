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
import { AnimatePresence, motion } from "framer-motion";
import { problemsData } from "@/data/problem-data"; // Assuming data is in this file
import { ArrowLeft, ArrowRight } from "lucide-react";

export function Solution() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    const handleSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const activeSolution = problemsData[selectedIndex];

  return (
    <section className="bg-indigo-50 py-20 md:py-28 overflow-hidden">
      <div className="max-container px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="flex-grow h-px bg-indigo-200"></div>
              <div className="flex-shrink-0 rounded-full p-[2px] bg-gradient-to-br from-yellow-400 to-indigo-400">
                <div className="bg-white rounded-full px-6 py-2">
                  <span className="text-sm font-medium uppercase tracking-widest text-indigo-900">
                    Solving Real Problems
                  </span>
                </div>
              </div>
              <div className="flex-grow h-px bg-indigo-200"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-indigo-900 leading-tight">
              We Tackle the Most Complex Technology Problems for Organizations Everywhere.
            </h2>
        </div>

        {/* This outer relative container is the positioning anchor */}
        <div className="relative">
          <Carousel 
            setApi={setApi} 
            opts={{ align: "center", loop: true }} 
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {problemsData.map((item, index) => (
                <CarouselItem key={item.id} className="basis-full md:basis-[85%] lg:basis-[75%]">
                  <motion.div
                    className="p-1"
                    animate={{ scale: index === selectedIndex ? 1 : 0.9 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col sm:flex-row items-center  gap-2 llg:gap-6">
                      <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-full bg-gray-100">
                        <item.problem.icon className="h-8 w-8 text-gray-400" />
                      </div>
                      <p className="text-lg font-medium text-gray-800 text-center sm:text-left">
                        {item.problem.text}
                      </p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* REFINED Navigation Buttons - MOVED INSIDE CAROUSEL */}
            <div className="absolute inset-0  flex items-center gap-2 lg:gap-4 z-10">
              <CarouselPrevious className="h-12 w-12 rounded-full bg-indigo-900 text-white border-none shadow-lg hover:bg-indigo-800" >
                  <ArrowLeft className="h-6 w-6" />
              </CarouselPrevious>
              <CarouselNext className="h-12 w-12 rounded-full bg-indigo-900 text-white border-none shadow-lg hover:bg-indigo-800" >
                  <ArrowRight className="h-6 w-6" />
              </CarouselNext>
            </div>
          </Carousel>
          
          {/* Gradient Overlays for Peek Effect - This can stay outside */}
          <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
            <div className="w-1/4 h-full bg-gradient-to-r from-indigo-50 to-transparent"></div>
            <div className="w-1/4 h-full bg-gradient-to-l from-indigo-50 to-transparent"></div>
          </div>
        </div>
        
        {/* Animated Solution Card */}
        <div className="max-w-2xl mx-auto mt-28 h-[140px]">
          <AnimatePresence mode="wait">
            {activeSolution && (
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="bg-indigo-900 text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6"
              >
                <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-full bg-yellow-400/10">
                  <activeSolution.solution.icon className="h-8 w-8 text-yellow-300" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-yellow-300">
                    {activeSolution.solution.title}
                  </h3>
                  <p className="mt-1 text-indigo-200">
                    {activeSolution.solution.description}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}