// components/HeroSection.tsx

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

// Partner logos data
const partners = [
  { name: "SOS Children's Villages", src: "/assets/logos/sos-logo.png", width: 150, height: 35 },
  { name: "BSTH Group", src: "/assets/logos/etsth-logo.png", width: 80, height: 40 },
  { name: "Brussels Airlines", src: "/assets/logos/brussels-logo.png", width: 170, height: 30 },
  { name: "Turkish Airlines", src: "/assets/logos/turkish-airline-logo.png", width: 160, height: 30 },
];

export function HeroSection() {
  return (
    <>
      <section className="relative w-full bg-white pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        {/* Blue Background Shape */}
        <div className="absolute top-0 right-0 h-3/4 w-full lg:h-full lg:w-2/3 bg-blue-700 clip-path-mobile lg:clip-path-desktop z-0" />
        
        {/* Faint Radio Tower Background */}
        <Image
          src="/assets/icons/radio-tower.png" 
          alt=""
          aria-hidden="true"
          width={600}
          height={600}
          className="absolute top-1/2 left-1/2 lg:left-1/4 -translate-x-1/2 -translate-y-1/2 opacity-10 z-[1] pointer-events-none"
        />

        <div className="container relative z-10 mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Side: Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Proudly Gambian.
                <br />
                Powered by innovation.
                <br />
                Committed to you.
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                Connecting Every Corner of The Gambia, One Home, One Business, One Heart at a Time.
              </p>
              <Button size="lg" className="mt-8 bg-blue-700 hover:bg-blue-800">
                Get Connected Today
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Right Side: Image Content */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm md:max-w-md">
                <Image
                  src="/assets/icons/hand-phone.png" // Replace with your hand+phone image
                  alt="Hand holding a smartphone with the app"
                  width={500}
                  height={1000}
                  className="w-full h-auto"
                />
                <Image
                  src="/assets/icons/c-logo.png" // Replace with your C logo
                  alt="Company C Logo"
                  width={80}
                  height={80}
                  className="absolute top-[15%] -right-[5%] md:top-[20%] md:right-0 w-16 h-16 md:w-20 md:h-20 animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section (Overlapping) */}
      <section className="relative z-20 -mt-16 md:-mt-24">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
              We Work With
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-around gap-x-8 gap-y-6">
              {partners.map((partner) => (
                <Image
                  key={partner.name}
                  src={partner.src} // Make sure these paths are correct
                  alt={`${partner.name} logo`}
                  width={partner.width}
                  height={partner.height}
                  className="h-7 md:h-8 w-auto object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}