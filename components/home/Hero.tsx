import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CompanyHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950 via-indigo-950 to-black py-20 px-6 overflow-hidden">
      <div className="flex flex-col items-center text-center gap-12 z-10">
        
        {/* News Alert Banner */}
        <Link 
          href="#" 
          className="group inline-flex items-center gap-4 rounded-full border border-blue-400/30 bg-white/10 px-2 md:px-4 py-2 text-xs backdrop-blur-sm transition-colors hover:bg-white/20"
          aria-label="News Alert: Pay your internet bills with DK Pay. Learn More."
        >
                  
                  <p className="text-[#87F4F9] text-xs">NEWS ALERT!!!</p>
          <p className="font-medium text-blue-100">PAY YOUR INTERNET BILLS WITH DK PAY.</p>
          <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#F8D653] group-hover:text-white transition-colors">
            LEARN MORE
            <ArrowRight className="h-3 w-3" />
          </span>
        </Link>
        
        {/* Main Text Content */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
            Proudly Gambian Owned.
            <br />
            Committed to you.
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Connecting Every Corner of The Gambia,
            <br className="hidden sm:block" />
            One Home, One Business, One Heart at a Time.
          </p>
        </div>
        
        {/* Video Visual Content */}
        <div className="w-full max-w-4xl mt-8">
          <video
            className="w-full h-auto rounded-lg"
            autoPlay
            loop
            muted
            playsInline // Important for iOS devices
            aria-label="A visual representation of data flowing between users and servers through the internet."
          >
            <source src="/assets/videos/hero-visual.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
      </div>
    </section>
  );
}