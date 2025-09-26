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
import { motion, AnimatePresence } from "framer-motion";
import { problemsData } from "@/data/problem-data";
import Autoplay from "embla-carousel-autoplay";



export function SolvingProblems() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };
    
    api.on("select", handleSelect);
    
    // Cleanup
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const activeSolution = problemsData[selectedIndex]?.solution;

  return (
    <section className="ibm bg-indigo-50 py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex-grow h-px bg-indigo-200"></div>
            <div className="flex-shrink-0 rounded-full p-[1px] bg-gradient-to-br from-yellow-400 to-indigo-400">
              <div className="bg-white rounded-full px-4 py-[2px]">
                <span className="py-[0.5px] text-[11px] font-medium uppercase tracking-widest text-[#140C55]">
                  Solving Real Problems
                </span>
              </div>
            </div>
            
            <div className="flex-grow h-px bg-indigo-200"></div>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-indigo-900 leading-tight">
            We Tackle the Most Complex Technology Problems for Organizations Everywhere.
          </h2>
        </div>

        {/* Problems Carousel */}
        <Carousel setApi={setApi} opts={{ align: "center", loop: true }} className="relative w-full max-w-4xl mx-auto"
          plugins={[
            Autoplay({
              delay: 2000
            })
          ]}
        >
          <CarouselContent>
            {problemsData.map((item, index) => (
              <CarouselItem key={item.id} className="basis-full md:basis-[90%]">
                <motion.div
                  className="p-1"
                  animate={{ 
                    opacity: index === selectedIndex ? 1 : 0.4,
                    scale: index === selectedIndex ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-full bg-gray-100">
                      <item.problem.icon className="h-8 w-8 text-gray-400" />
                    </div>
                    <p className="text-lg md:text-lg font-medium text-gray-800">
                      {item.problem.text}
                    </p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute inset-0 hidden sm:flex justify-between items-center z-10 pointer-events-none px-0 md:-px-12">
            <CarouselPrevious className="relative h-12 w-12 rounded-full bg-indigo-900 text-white border-none shadow-lg hover:bg-indigo-800 pointer-events-auto" />
            <CarouselNext className="relative h-12 w-12 rounded-full bg-indigo-900 text-white border-none shadow-lg hover:bg-indigo-800 pointer-events-auto" />
          </div>
        </Carousel>
        
        {/* Animated Solution Card */}
        <div className="max-w-2xl mx-auto mt-6 md:mt-12"> {/* Fixed height container to prevent layout shift */}
          <AnimatePresence mode="wait">
            {activeSolution && (
              <motion.div
                key={selectedIndex} // Key is crucial for AnimatePresence to detect changes
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="bg-indigo-900 text-white rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6"
              >
                <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-full bg-yellow-400/10">
                  <activeSolution.icon className="h-8 w-8 text-yellow-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-300">
                    {activeSolution.title}
                  </h3>
                  <p className="mt-1 text-indigo-200">
                    {activeSolution.description}
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