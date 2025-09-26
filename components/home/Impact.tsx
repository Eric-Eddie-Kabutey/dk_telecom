
'use client';
import { AnimatedNumber } from "@/components/animate/AnimatedNumber";
import { CellSignalFull, DeviceMobileCamera, GlobeSimple, Speedometer } from "@phosphor-icons/react";

const statsData = [
  { id: 1, icon: CellSignalFull, label: "Network Uptime", value: "99.9%", description: "Always-on, reliable connectivity" },
  { id: 2, icon: Speedometer, label: "Max Speed", value: "10Gbps", description: "High-performance internet speeds" },
  { id: 3, icon: GlobeSimple, label: "Areas Covered", value: "500+", description: "Extensive nationwide coverage" },
  { id: 4, icon: DeviceMobileCamera, label: "Connected Device", value: "15K+", description: "Thousands of devices supported" },
];

export function Impact() {
  return (
    <section className="ibm bg-[#130B54] text-white py-20 md:py-28 px-6">
      <div className="max-container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="flex-grow h-px bg-blue-700/50"></div>
            <div className="flex-shrink-0 rounded-full p-[2px] bg-gradient-to-br from-yellow-400 to-indigo-400">
              <div className="bg-[#14125A] rounded-full px-6 py-2">
                <span className="text-sm font-medium uppercase tracking-widest text-white">Our Impact</span>
              </div>
            </div>
            <div className="flex-grow h-px bg-blue-700/50"></div>
          </div>
          <h2 className="max-w-3xl mx-auto text-4xl md:text-5xl font-medium tracking-tight leading-10">
           High-speed Internet Around <br /> The Gambia.
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-8 2xl:gap-6 mt-16">
          {statsData.map((stat) => (
            <div key={stat.id} className="rounded-2xl p-[1px] bg-gradient-to-br from-yellow-400/40 via-indigo-500/0 to-indigo-500/40">
              <div className="rounded-[15px] bg-indigo-950/70 backdrop-blur-md h-full w-full 2xl:w-[300px] p-6 2xl:px-2 md:text-start flex flex-col">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-yellow-300/80 mb-6">
                  <stat.icon className="h-4 lg:h-8 w-4 lg:w-8 2xl:h-10 2xl:w-10" weight="light" />
                  <span className="text-lg lg:text-lg font-regular text-blue-200">{stat.label}</span>
                </div>
                <div className="my-auto flex items-center justify-center lg:justify-start gap-2 text-yellow-300">
                  {/* <ChevronsUp className="h-8 lg:h-12 w-8 lg:w-12 2xl:h-10 2xl:w-10 opacity-50" /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                  </svg>

                  <AnimatedNumber value={stat.value} className="text-6xl font-regular tracking-tighter" />
                </div>
                <p className="mt-6 text-sm lg:text-lg text-gray-300/70">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}