"use client";

import { Button } from "@/components/ui/button";
import {  ArrowUpRight, Zap } from "lucide-react";
import NextGenOrbit from "./NextGenOrbit";

// --- Data for the corner "planets" ---
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cornerOrbits = [
  { text: "Connectivity", position: "top-0 left-0 -translate-x-1/2 -translate-y-1/2" },
  { text: "Security", position: "top-0 right-0 translate-x-1/2 -translate-y-1/2" },
  { text: "Reliability", position: "bottom-0 left-0 -translate-x-1/2 translate-y-1/2" },
  { text: "Scalability", position: "bottom-0 right-0 translate-x-1/2 translate-y-1/2" },
];

const HeaderPillLine = ({ text }: { text: string }) => (
    <div className="max-w-4xl mx-auto flex items-center">
      <div className="flex-grow h-px bg-blue-700/50"></div>
      <div className="flex-shrink-0 flex items-center gap-2 border border-blue-400/30 bg-white/10 px-4 py-4 rounded-lg backdrop-blur-sm">
        <Zap className="h-4 w-4 text-yellow-300" />
        <p className="text-sm md:text-2xl font-medium uppercase tracking-wider text-blue-100">{text}</p>
      </div>
      <div className="flex-grow h-px bg-blue-700/50"></div>
    </div>
);

export function NextGen() {
    const pdfUrl = "/docs/dk-telecom-company-profile-2025.pdf";
    
  const content = (
    <>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
        Your number one internet service provider.
      </h2>
      <div className="mt-8 space-y-6 text-lg text-blue-200/90 max-w-2xl mx-auto lg:mx-0">
        <p>At DK Telecom LTD, we’re dedicated to bridging the gap between innovation and connectivity.</p>
        <p>With our cutting-edge technology and unwavering commitment to customer satisfaction, we’re redefining telecommunications.</p>
        <p>From seamless network solutions to personalised customer care, we’re here to empower your digital journey.</p>
        <p>Join us as we pave the way for a connected future.</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-12">
        <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-lg w-full sm:w-auto">
          Get Connected Today <ArrowUpRight className="ml-2 h-5 w-5" />
        </Button>
              <Button size="lg" variant="outline"
                  onClick={() => window.open(pdfUrl, "_blank")}
                  className="bg-transparent border-blue-400/50 hover:bg-blue-400/10 text-white rounded-lg w-full sm:w-auto">
                Download Brochure
        </Button>
      </div>
    </>
  );

  return (
    <section className="bg-[#130B54] text-white py-20 md:py-28 px-4">
      <div className="max-container px-6">
        <HeaderPillLine text="Next-Gen Telecommunications" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mt-16 lg:mt-24">
          
          {/* Left Column: New Orbital Square Visual */}
          <NextGenOrbit />

          {/* Right Column: Text Content */}
          <div className="text-center lg:text-left">
            {content}
          </div>

        </div>
      </div>
    </section>
  );
}