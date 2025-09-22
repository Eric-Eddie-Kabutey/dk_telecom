import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Smartphone, Signal, Gauge, Globe, ChevronsUp } from "lucide-react";

// Data for the stats cards to keep the component clean
const statsData = [
  {
    id: 1,
    icon: Smartphone,
    label: "Connected Device",
    value: "50M+",
    description: "Trusted worldwide",
  },
  {
    id: 2,
    icon: Signal,
    label: "Network Uptime",
    value: "99.9%",
    description: "Guaranteed reliability",
  },
  {
    id: 3,
    icon: Gauge,
    label: "Max Speed",
    value: "10Gbps",
    description: "Wide Range Reach",
  },
  {
    id: 4,
    icon: Globe,
    label: "Cities Covered",
    value: "500+",
    description: "Industry Expertise",
  },
];

export function Impact() {
  return (
    <section className="bg-[#130B54]  text-white py-20 md:py-28 px-6">
      {/* bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950 via-indigo-950 to-black */}
      <div className="max-container px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
                      <div className="flex-grow h-px bg-blue-700/50"></div>
                      {/* pill header */}
                      <div className="flex-shrink-0 rounded-full p-[2px] bg-gradient-to-br from-yellow-400 to-indigo-400">
              <div className="bg-[#14125A] rounded-full px-6 py-2">
                <span className="text-sm font-medium uppercase tracking-widest text-white">
                  Our Impact
                </span>
              </div>
            </div>           
            <div className="flex-grow h-px bg-blue-700/50"></div>
          </div>
          <h2 className="max-w-3xl mx-auto text-4xl md:text-5xl font-medium tracking-tight leading-10">
           High-speed Internet Around <br /> The Gambia.
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  2xl:grid-cols-4 gap-8 2xl:gap-6 mt-16">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              // Gradient border effect
              className="rounded-2xl p-[1px] bg-gradient-to-br from-yellow-400/40 via-indigo-500/0 to-indigo-500/40"
            >
              <div className="rounded-[15px] bg-indigo-950/70 backdrop-blur-md h-full w-full 2xl:w-[300px] p-6 2xl:px-2  md:text-start flex flex-col">
                <div className="flex items-center  justify-center lg:justify-start gap-2 text-yellow-300/80 mb-6">
                  <stat.icon className="h-4 lg:h-12 w-4 lg:w-12 2xl:h-10 2xl:w-10" />
                  <span className="text-lg lg:text-xl font-medium text-blue-200">{stat.label}</span>
                </div>
                
                <div className="my-auto flex items-center justify-center lg:justify-start gap-2 text-yellow-300">
                  <ChevronsUp className="h-8 lg:h-12 w-8 lg:w-12 2xl:h-10 2xl:w-10 opacity-50" />
                  <AnimatedNumber 
                    value={stat.value} 
                    className="text-6xl font-bold tracking-tighter"
                  />
                </div>
                
                <p className="mt-6 text-sm lg:text-lg text-blue-300/70">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}