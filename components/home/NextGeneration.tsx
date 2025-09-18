import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeaderPillLine from "../shared/HeaderPillLine";
import { ArrowUpRight } from "lucide-react";

export function NextGeneration() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950 via-indigo-950 to-black text-white py-20 md:py-28">
          <div className="container mx-auto px-6">
              {/* section header pill line */}
              <HeaderPillLine icon={true} text="Next-Gen Telecommunications" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left Column: Visual Content */}
          <div className="flex justify-center">
            <Image
              src="/images/company/next-gen-telecom.png"
              alt="An abstract visual representing next-generation telecommunications technology"
              width={600}
              height={600}
              className="rounded-2xl w-full h-auto max-w-md"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col text-center lg:text-left">           
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Your number one internet service provider.
            </h2>

            <div className="mt-8 space-y-6 text-lg text-blue-200/90 max-w-2xl mx-auto lg:mx-0">
              <p>
                At DK Telecom LTD, we’re dedicated to bridging the gap between innovation and connectivity.
              </p>
              <p>
                With our cutting-edge technology and unwavering commitment to customer satisfaction, we’re redefining telecommunications.
              </p>
              <p>
                From seamless network solutions to personalised customer care, we’re here to empower your digital journey.
              </p>
              <p>
                Join us as we pave the way for a connected future.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-12">
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-lg w-full sm:w-auto">
                Get Connected Today
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-blue-400/50 hover:bg-blue-400/10 text-white rounded-lg w-full sm:w-auto">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}