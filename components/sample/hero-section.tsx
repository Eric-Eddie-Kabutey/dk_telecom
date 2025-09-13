import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const partners = [
  { name: "SOS Children's Villages", src: "/assets/logos/sos-logo.png", width: 180, height: 42 },
  { name: "BSTH Group", src: "/assets/logos/etsth-logo.png", width: 100, height: 50 },
  { name: "Brussels Airlines", src: "/assets/logos/brussels-logo.png", width: 200, height: 35 },
  { name: "Turkish Airlines", src: "/assets/logos/turkish-airline-logo.png", width: 190, height: 35 },
];

export function HeroSection() {
  return (
    <>
      {/* The main section container is relative to act as a positioning context */}
      <section className="relative w-full pt-20 md:pt-28 pb-[440px] md:pb-48 overflow-hidden">
        <div className="max-container 2xl:w-[85%] w-[95%] mx-auto px-4">
          {/* A grid for the content layout. We only define the left column. */}
          {/* The right side will be handled by the absolutely positioned visual container. */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* tower mobile*/}
              <div className='block md:hidden absolute inset-y-10 inset-x-10 w-full h-90 -z-10'>
                <Image
                  src="/assets/icons/radio-tower-mobile.png"
                  alt=""
                  fill
                  className="object-fit "
                />
            </div>    
            
            {/* tower desktop */}
            <div className='hidden md:block absolute top-10 bottom-10  w-full h-90 -z-10'>
                <Image
                  src="/assets/icons/radio-tower.png"
                  alt=""
                  fill
                  className="object-fit "
                />
              </div>
            <div className="lg:text-left">
              {/* Faint Radio Tower behind the text */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Proudly Gambian.
                <br />
                Powered by innovation.
                <br />
                Committed to you.
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
                Connecting Every Corner of The Gambia, One Home, One Business, One Heart at a Time.
              </p>
              <Button size="lg" className="mt-8 bg-blue-700 hover:bg-blue-800 rounded-lg">
                Get Connected Today
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            {/* The right grid column is intentionally empty to reserve space */}
            <div></div> 
          </div>
        </div>

        {/* --- THIS IS THE CORRECTED VISUAL ASSEMBLY CONTAINER --- */}
        {/* It's positioned absolutely on desktop, and is part of the flow on mobile */}
        {/* hand holding DK wallet */}
        <div className="absolute  bottom-10  w-full h-80 z-[-1]">
          <Image
            src="/assets/icons/hand-holding-wallet.png"
            alt="Hand holding DK wallet"
            fill
            className="object-contain"
          />
        </div>

        {/* blue layer */}
        <div className="absolute -right-60 bottom-[-340px] w-full h-full pointer-events-none z-[-5] ">
          <Image
            src="/assets/icons/hero-bg-blue.png"
            alt=""
            fill
            className="object-cover object-left"
          />
        </div>

        {/* sky-blue layer */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
          <Image
            src="/assets/icons/hero-bg-sky.png"
            alt=""
            fill
            className="object-cover object-left"
          />
        </div>
        
      </section>

      {/* Partners Section (Overlapping) */}
      <section className="relative z-50 -mt-10 md:-mt-28">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
              We Work With
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-around gap-x-8 gap-y-6">
              {partners.map((partner) => (
                <Image
                  key={partner.name}
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  width={partner.width}
                  height={partner.height}
                  className="h-10 md:h-12 w-auto object-contain transition-opacity hover:opacity-80"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}