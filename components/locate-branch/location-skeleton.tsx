const LocationCardSkeleton = () => (
  <div className="py-6 border-b border-gray-200">
    <div className="space-y-3">
      <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
      <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
      <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
      <div className="h-10 w-32 bg-gray-300 rounded-lg mt-2"></div>
    </div>
  </div>
);


export function LocationsSkeleton() {
  return (
    <section className="bg-white">
      <div className="max-container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Location List Skeleton */}
          <div className="lg:col-span-1">
            <div className="h-8 w-1/3 bg-gray-300 rounded mb-6 animate-pulse"></div>
            <div className="h-12 w-full bg-gray-300 rounded-lg mb-8 animate-pulse"></div>
            
            <div className="animate-pulse">
              <LocationCardSkeleton />
              <LocationCardSkeleton />
              <LocationCardSkeleton />
              <LocationCardSkeleton />
            </div>
          </div>

          {/* Right Column: Map Skeleton */}
          <div className="lg:col-span-2 min-h-[500px] md:min-h-[600px] bg-gray-300 rounded-lg animate-pulse relative">
            {/* Mock Map Controls */}
            <div className="absolute top-4 left-4 w-10 h-20 bg-white/50 rounded-lg shadow-lg"></div>
            
            {/* Mock Map Pins (Optional, but adds realism) */}
            <div className="absolute top-[30%] left-[25%] h-6 w-6 rounded-full bg-blue-400/50"></div>
            <div className="absolute top-[40%] left-[20%] h-6 w-6 rounded-full bg-blue-400/50"></div>
            <div className="absolute top-[35%] left-[35%] h-6 w-6 rounded-full bg-blue-400/50"></div>
            <div className="absolute top-[55%] left-[45%] h-6 w-6 rounded-full bg-blue-400/50"></div>
            <div className="absolute top-[70%] left-[30%] h-6 w-6 rounded-full bg-blue-400/50"></div>
             <div className="absolute top-[45%] left-[65%] h-6 w-6 rounded-full bg-blue-400/50"></div>
          </div>

        </div>
      </div>
    </section>
  );
}