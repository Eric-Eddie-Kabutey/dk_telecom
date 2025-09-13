import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

const features = ["Affordable Internet", "Fast", "Reliable"];

export function AboutSection() {
  return (
    <section className="bg-gray-50/50 py-16 md:py-24">
      <div className="max-container 2xl:w-[85%] w-[95%] mx-auto px-4">
        
        {/* Top Section: Text Content (remains the same) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 md:mb-16">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <p className="font-semibold text-blue-700">
              Welcome to DK Telecoms
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your number one <br /> internet service provider.
            </h2>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-2">
              {features.map((feature) => (
                <Badge 
                  key={feature} 
                  variant="outline" 
                  className="bg-white text-gray-700 py-2 px-4 text-sm rounded-lg border-gray-200"
                >
                  {feature}
                </Badge>
              ))}
              <Badge 
                variant="outline" 
                className="bg-white p-2.5 rounded-lg border-gray-200"
              >
                <Plus className="h-4 w-4 text-gray-600" />
              </Badge>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-gray-600 leading-relaxed text-center lg:text-left">
              At DK Telecom LTD, we’re dedicated to bridging the gap between innovation and connectivity. With our cutting-edge technology and unwavering commitment to customer satisfaction, we’re redefining telecommunications. From seamless network solutions to personalized customer care, we’re here to empower your digital journey. Join us as we pave the way for a connected future.
            </p>
          </div>
        </div>

        {/*  Bottom Section with a single banner image */}
        <div className="relative aspect-[16/8] md:aspect-[16/6] w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/images/home/about-banner.png" 
            alt="Banner showing the globe with a Gambian flag border against a blue sky."
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

      </div>
    </section>
  );
}