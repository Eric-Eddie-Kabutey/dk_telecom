"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";

// --- Data for Locations ---
const locationsRow1 = [ "Bakau", "Banjul", "Basse", "Brikama", "Brufut", "Brusub", "Bundung", "Faraba" ];
const locationsRow2 = [ "Busumbala", "Gunjur", "Kartong", "Kotu", "Kerewan", "Faraba", "Numuyel", "Yundum" ];
const locationsRow3 = [ "Nyofeleh", "Salagi", "Sanyang", "Serrekunda", "Sinchu", "Tanji", "Tippa", "Garage" ];

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: "normal" | "slow" | "fast";
}

const Marquee = ({ items, direction = "left", speed = "normal" }: MarqueeProps) => {
  const duration = speed === "fast" ? 20 : speed === "slow" ? 80 : 40;
  
  const marqueeVariants: Variants = {
    animate: {
      x: direction === "left" ? "-100%" : "100%",
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex-shrink-0 mx-2">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg shadow-sm">
                <MapPin className="h-4 w-4 text-red-500" />
                <span className="font-medium">{item}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};


export function PaymentsHeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center py-20 px-6 overflow-hidden">
      
      {/* Blue Radial Gradient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-blue-200/50 rounded-full blur-3xl -z-1"></div>

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
        <Button size="lg" className="mt-8 bg-blue-700 hover:bg-blue-800 rounded-lg h-12 px-8">
          Get Started
          <ArrowUpRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Visual Content: Multi-Row Marquee */}
      <div className="relative w-full max-w-7xl mt-20 space-y-4">
         {/* Fade-out effect using mask-image */}
         <div className="absolute inset-0 z-20 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"></div>
         
         <Marquee items={locationsRow1} direction="left" speed="normal" />
         <Marquee items={locationsRow2} direction="right" speed="normal" />
         <Marquee items={locationsRow3} direction="left" speed="normal" />
      </div>

    </section>
  );
}