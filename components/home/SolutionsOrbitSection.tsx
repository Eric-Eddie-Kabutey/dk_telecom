// components/SolutionsOrbitSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// --- Configuration for Orbits ---
const ORBIT_COUNT = 5;
const START_RADIUS = 175; // Half of the first orbit's diameter
const ORBIT_INCREMENT = 75; // Space between each orbit

// --- Data for Sectors ---
// orbitIndex: 0 = innermost, 4 = outermost
const sectors = [
  { name: "For Agriculture", orbitIndex: 0, angle: 60, size: "w-8 h-8", color: "bg-yellow-400", textPos: 'bottom-8' },
  { name: "For Healthcare", orbitIndex: 1, angle: 45, size: "w-10 h-10", color: "bg-orange-400", textPos: 'bottom-9' },
  { name: "For Government & Public Sector", orbitIndex: 1, angle: 220, size: "w-16 h-16", color: "bg-gradient-to-br from-orange-400 to-yellow-500", textPos: 'bottom-12' },
  { name: "For Telecommunications & IT", orbitIndex: 2, angle: 200, size: "w-6 h-6", color: "bg-red-500", textPos: 'bottom-7' },
  { name: "For Transportation & Logistics", orbitIndex: 2, angle: 10, size: "w-12 h-12", color: "bg-orange-500", textPos: 'bottom-10' },
  { name: "For Education", orbitIndex: 3, angle: 280, size: "w-10 h-10", color: "bg-sky-400", textPos: 'bottom-9' },
  { name: "For Media & Entertainment", orbitIndex: 3, angle: 130, size: "w-20 h-20", color: "bg-gradient-to-br from-gray-700 to-gray-900", textPos: 'bottom-14' },
  { name: "For Financial Services", subtext: "(Banking, Fintech, Insurance)", orbitIndex: 4, angle: 315, size: "w-24 h-24", color: "bg-gradient-to-br from-cyan-400 to-blue-600", textPos: 'bottom-16' },
  { name: "For Manufacturing & Industry 4.0", orbitIndex: 4, angle: 110, size: "w-12 h-12", color: "bg-gradient-to-br from-red-500 to-purple-600", textPos: 'bottom-10' },
  { name: "For Retail & E-commerce", orbitIndex: 4, angle: 180, size: "w-20 h-20", color: "bg-gradient-to-br from-purple-500 to-indigo-600", textPos: 'bottom-14' },
];


export function SolutionsOrbitSection() {
  return (
    <section className="relative w-full flex items-center justify-center bg-[#160C64] text-white py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 [background-image:radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:2rem_2rem]"></div>
      
      <div className="flex flex-col items-center gap-12 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex-grow h-px bg-indigo-500/50"></div>
            <div className="flex-shrink-0 rounded-full p-[2px] bg-gradient-to-br from-yellow-400 to-indigo-400">
              <div className="bg-indigo-900/80 rounded-full px-6 py-2">
                <span className="text-sm font-medium uppercase tracking-widest text-white">
                  Our Solutions
                </span>
              </div>
            </div>
            <div className="flex-grow h-px bg-indigo-500/50"></div>
          </div>
          <p className="text-xl text-indigo-200/90">
            Tailored technology services to accelerate your business growth
          </p>
        </div>

        {/* Main Orbital Container */}
        <div className="relative w-[1000px] h-[1000px] scale-[0.4] sm:scale-50 md:scale-75 lg:scale-90">
          
          {/* Central Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#160C64] backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 z-20">
            <Image src="/assets/images/dk_logo_white.png" alt="DK Telecom Ltd Logo" width={150} height={40} />
            <p className="mt-4 text-sm text-indigo-200/80">
              Empowering Your IT Infrastructure with Scalable, Secure, and Digital Reliable Solutions
            </p>
            <Link href="/solutions" className="mt-4 inline-flex items-center gap-2 font-semibold text-sm hover:text-yellow-300 transition-colors">
              Discover More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          {/* Orbit Rings with thin gradient borders */}
          {Array.from({ length: ORBIT_COUNT }).map((_, index) => {
            const size = (START_RADIUS + (index * ORBIT_INCREMENT)) * 2;
            return (
              <div
                key={`ring-${index}`}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-[1px] bg-transparent  z-10 border border-yellow-400/60"
                style={{ width: `${size}px`, height: `${size}px` }}
              >
                {/* The inner div creates the empty space, making the parent look like a border */}
                <div className="w-full h-full bg-transparent rounded-full"></div>
              </div>
            );
          })}

          {/* Planets (Sectors) - positioned using transforms */}
          {sectors.map((sector, index) => {
            const orbitRadius = START_RADIUS + (sector.orbitIndex * ORBIT_INCREMENT);
            return (
              <div
                key={`sector-arm-${index}`}
                className="absolute top-1/2 left-1/2"
                style={{ transform: `rotate(${sector.angle}deg)` }}
              >
                <div
                  className="group relative"
                  style={{ transform: `translateY(-${orbitRadius}px)` }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ transform: `rotate(-${sector.angle}deg)` }}
                  >
                    <div className={`flex-shrink-0 rounded-full shadow-lg shadow-black/30 transition-all duration-300 group-hover:scale-110 ${sector.size} ${sector.color}`}></div>
                    <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 text-center ${sector.textPos}`}>
                      <p className="font-bold text-xs text-indigo-100/80">{sector.name}</p>
                      {sector.subtext && <p className="text-[10px] text-indigo-200/60">{sector.subtext}</p>}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}