"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const stackingImages = [
  { src: "/assets/icons/stack-1.png", alt: "Base layer of the technology stack" },
  { src: "/assets/icons/stack-2.png", alt: "Connectivity layer" },
  { src: "/assets/icons/stack-3.png", alt: "Security layer" },
  { src: "/assets/icons/stack-4.png", alt: "Reliability layer" },
];

const HeaderPillLine = ({ text }: { text: string }) => (
    <div className="flex items-center gap-4">
      <div className="flex-grow h-px bg-[#130B54]"></div>
      <div className="flex-shrink-0 flex items-center gap-2 border border-blue-400/30 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
        <Zap className="h-4 w-4 text-yellow-300" />
        <span className="text-sm font-medium uppercase tracking-wider text-blue-100">{text}</span>
      </div>
      <div className="flex-grow h-px bg-[#130B54]"></div>
    </div>
);

export function NextGeneration() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  
  // Animation logic remains the same
  const scaleImage2 = useTransform(scrollYProgress, [0, 0.25], [0.5, 1]);
  const opacityImage2 = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const yImage2 = useTransform(scrollYProgress, [0, 0.25], ["25%", "0%"]);

  const scaleImage3 = useTransform(scrollYProgress, [0.25, 0.5], [0.5, 1]);
  const opacityImage3 = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const yImage3 = useTransform(scrollYProgress, [0.25, 0.5], ["25%", "0%"]);

  const scaleImage4 = useTransform(scrollYProgress, [0.5, 0.75], [0.5, 1]);
  const opacityImage4 = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);
  const yImage4 = useTransform(scrollYProgress, [0.5, 0.75], ["25%", "0%"]);

  const stackY = useTransform(scrollYProgress, [0.75, 1], ["0%", "-100%"]);

  return (
    <section 
      ref={targetRef} 
      className="relative lg:h-[400vh] bg-[#130B54] text-white py-16"
    >

      {/* mobile */}
       {/* Right Column: Text Content */}
      <div className="container mx-auto text-center py-6 px-4 lg:hidden">  
        {/* The Header Pill is now at the top of the content area */}
            <HeaderPillLine text="Next-Gen Telecommunications" />
                    <h2 className="text-3xl  font-semibold tracking-tight mt-12">
                        Your number one internet service provider.
                    </h2>
                    <div className="mt-8 space-y-6 text-lg text-blue-200/90">
                        <p>At DK Telecom LTD, we’re dedicated to bridging the gap between innovation and connectivity.</p>
                        <p>With our cutting-edge technology and unwavering commitment to customer satisfaction, we’re redefining telecommunications.</p>
                        <p>From seamless network solutions to personalised customer care, we’re here to empower your digital journey.</p>
                        <p>Join us as we pave the way for a connected future.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-12">
                        <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-lg w-full sm:w-auto">
                            Get Connected Today <ArrowUpRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent border-blue-400/50 hover:bg-blue-400/10 text-white rounded-lg w-full sm:w-auto">
                            Download Brochure
                        </Button>
                    </div>
                </div>

      {/* desktop  */}
      <div className="hidden sticky top-0 h-screen lg:flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6">
            {/* The Header Pill is now at the top of the content area */}
            <HeaderPillLine text="Next-Gen Telecommunications" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center mt-12">
            
                {/* Left Column: Visual Content */}
                <div className="hidden lg:block relative h-[500px]">
                    <motion.div style={{ y: stackY }} className="absolute inset-0 flex items-center justify-center">
                        {/* Layer 1 (Base) */}
                        <motion.div 
                            className="absolute w-full h-full max-w-md"
                            style={{ opacity: useTransform(scrollYProgress, [0.20, 0.25], [1, 0]) }}
                        >
                            <Image src={stackingImages[0].src} alt={stackingImages[0].alt} fill className="object-contain" />
                        </motion.div>

                        {/* Layer 2 (Connectivity) */}
                        <motion.div 
                            style={{ scale: scaleImage2, opacity: opacityImage2, y: yImage2 }}
                            className="absolute w-full h-full max-w-md z-10"
                        >
                            <Image src={stackingImages[1].src} alt={stackingImages[1].alt} fill className="object-contain" />
                        </motion.div>

                        {/* Layer 3 (Security) */}
                        <motion.div 
                            style={{ scale: scaleImage3, opacity: opacityImage3, y: yImage3 }}
                            className="absolute w-full h-full max-w-md z-20"
                        >
                            <Image src={stackingImages[2].src} alt={stackingImages[2].alt} fill className="object-contain" />
                        </motion.div>

                        {/* Layer 4 (Reliability) */}
                        <motion.div 
                            style={{ scale: scaleImage4, opacity: opacityImage4, y: yImage4 }}
                            className="absolute w-full h-full max-w-md z-30"
                        >
                            <Image src={stackingImages[3].src} alt={stackingImages[3].alt} fill className="object-contain" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right Column: Text Content */}
                <div className="relative">              
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                        Your number one internet service provider.
                    </h2>
                    <div className="mt-8 space-y-6 text-lg text-blue-200/90">
                        <p>At DK Telecom LTD, we’re dedicated to bridging the gap between innovation and connectivity.</p>
                        <p>With our cutting-edge technology and unwavering commitment to customer satisfaction, we’re redefining telecommunications.</p>
                        <p>From seamless network solutions to personalised customer care, we’re here to empower your digital journey.</p>
                        <p>Join us as we pave the way for a connected future.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-12">
                        <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-lg w-full sm:w-auto">
                            Get Connected Today <ArrowUpRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent border-blue-400/50 hover:bg-blue-400/10 text-white rounded-lg w-full sm:w-auto">
                            Download Brochure
                        </Button>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
}