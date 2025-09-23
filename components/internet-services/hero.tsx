"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { BranchLocation } from "../shared/marquee/BranchLocation";


export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center py-20 md:py-28 px-6 overflow-hidden">
      
      {/* Blue Radial Gradient Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] md:h-[70vh] bg-blue-300/50 rounded-full blur-3xl -z-1"></div>

      {/* Text Content */}
      <div className="z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
          Made For <span className="italic font-serif">You</span>
          <br />
          Easy, Fast and Smart Payments.
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
          Tailored technology services to accelerate your business growth
        </p>
        <Button size="lg" className="mt-8 bg-[#130B54] hover:bg-[#120B54] rounded-lg h-12 px-8">
          Get Started
          <ArrowUpRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Visual Content: Multi-Row Marquee */}
      <div className="relative w-full max-h-container mt-20 space-y-4">
         {/* Fade-out effect using mask-image */}
         <div className="absolute inset-0 z-20 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"></div>
         
        <BranchLocation /> 
        {/* <Marquee items={locationsRow1} direction="left" speed="normal" />
         <Marquee items={locationsRow2} direction="right" speed="normal" />
         <Marquee items={locationsRow3} direction="left" speed="normal" /> */}
      </div>

    </section>
  );
}