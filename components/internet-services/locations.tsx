import Image from "next/image";

// The list of locations.
const locations = [
  "Bakau", "Banjul", "Basse", "Brikama", "Brufut", "Brusub", "Bundung",
  "Faraba", "Busumbala", "Gunjur", "Kartong", "Kotu", "Kerewan",
  "Numuyel", "Nyofeleh", "Salagi", "Sanyang", "Serrekunda", "Sinchu",
  "Tanji", "Tippa", "Garage", "Yundum"
];

export function Locations() {
  return (
    <section className="bg-cyan-50/40 py-16 md:py-24">
      <div className="max-container 2xl:w-[85%] w-[95%] mx-auto px-4">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
          {/* Left Column: Title */}
          <div>
            <p className="font-semibold text-blue-600 mb-2">Our Coverage</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Serving you everywhere, across cities & beyond
            </h2>
          </div>
          {/* Right Column: Description */}
          <div className="flex items-center">
            <p className="text-gray-600 leading-relaxed">
              Our Internet Service covers the whole Greater Banjul Area, Most parts of the West Coast Region and the whole of Basse (URR). We are working on expanding our coverage to every part of the country soon!
              We have 29 towers and 103 access points across the nation, which makes our coverage wide and accessible around all the listed areas below:
            </p>
          </div>
        </div>

        {/* Coverage Card */}
        <div className="relative bg-[#F6F6F6] backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-8 z-[2]">
          <Image
              src="/assets/icons/internet-services/location-background.png"
              alt=""
              aria-hidden="true"
              fill
              className="object-contain object-center pointer-events-none"
            />
          </div>
          
          {/* Locations Grid */}
          <div className="relative z-10 flex flex-wrap gap-4">
            {locations.map((location) => (
              <div key={location}>
                <Image
                  // The placeholder path is generated dynamically.
                  // We use toLowerCase() for consistent filename matching.
                  src={`/assets/icons/internet-services/${location.toLowerCase()}.png`}
                  alt={`Coverage area: ${location}`}
                  width={130} 
                  height={44}  
                  className="h-11 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}