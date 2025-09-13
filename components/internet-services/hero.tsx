import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function HighSpeedInternetHero() {
  return (
    <section className="bg-cyan-50/40 py-20 md:py-28">
      <div className="max-container 2xl:w-[85%] w-[95%] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              High-Speed Internet
              <br />
              Around The Gambia
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We are the bolt in the ISP arena. Our internet speed is trusted for all your home and office uses. Download, stream or upload any file size effortlessly. Because we are part of the average Gambia circle, we tailor our prices to suit your abilities. Affordable internet services for everyone. Our target is to connect every home, business and office in the country!
            </p>
            <Button size="lg" className="mt-8 bg-blue-700 hover:bg-blue-800 rounded-lg">
              Get Connected Today
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Column: Image Content */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/images/internet-services/hero-illustration.png" 
              alt="Illustration of people using high-speed internet around the globe"
              width={500}
              height={500}
              className="w-full h-auto max-w-md lg:max-w-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}