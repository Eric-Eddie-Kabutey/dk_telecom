"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Data for the client logos
const clientLogos = [
  { src: "/assets/logos/sos-logo.png", alt: "SOS Children's Villages Logo", width: 200, height: 45 },
  { src: "/assets/logos/etsth-logo.png", alt: "BSTH Group Logo", width: 100, height: 50 },
  { src: "/assets/logos/brussels-logo.png", alt: "Brussels Airlines Logo", width: 220, height: 40 },
  { src: "/assets/logos/turkish-airline-logo.png", alt: "Turkish Airlines Logo", width: 210, height: 40 },
];

const marqueeVariants: Variants = {
  animate: {
    x: [0, -1090], 
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

export function ClientsLogo() {
  return (    
    <section className="bg-indigo-50 py-10 md:py-18 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex-grow h-px bg-indigo-200"></div>
            <div className="flex-shrink-0 rounded-full p-[2px] bg-gradient-to-br from-yellow-400 to-indigo-400">
              <div className="bg-white rounded-full px-6 py-2">
                <span className="text-sm font-medium uppercase tracking-widest text-indigo-900">
                  Our Clients
                </span>
              </div>
            </div>
            <div className="flex-grow h-px bg-indigo-200"></div>
          </div>
          <p className="text-xl text-indigo-900/80">
            Trusted by the Millions Worldwide
          </p>
        </div>
      </div>
              
      {/* This container defines the visible area and applies the mask */}
      <div className="relative mt-16 h-24 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <motion.div
            className="absolute left-0 flex items-center gap-16" // Positioned absolutely to move within the masked area
            variants={marqueeVariants}
            animate="animate"
          >
            {/* We render the logos twice for a seamless loop */}
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div key={index} className="flex-shrink-0" aria-hidden={index >= clientLogos.length}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
    </section>
  );
}