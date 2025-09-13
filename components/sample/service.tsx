import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

// Data for the service cards
const serviceCards = [
  {
    id: "plans",
    src: "/assets/images/home/internet-plans.png", 
    alt: "Card showcasing internet plans with features like 500 Mbps and unlimited data.",
  },
  {
    id: "payments",
    src: "/assets/images/home/internet-payments.png", 
    alt: "Card showing a person using their phone for internet payments.",
  },
  {
    id: "installations",
    src: "/assets/images/home/internet-installations.png", 
    alt: "Card displaying a new internet router for installations.",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-container 2xl:w-[85%] w-[95%] mx-auto px-4">
        {/* Section Header (remains the same) */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="font-semibold text-blue-600 mb-2">Internet Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Made For You:
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-400 mt-1">
            Easy, Fast and Smart Payments.
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Tailored technology services to accelerate your business growth
          </p>
        </div>

        {/* REFACTORED: Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 md:mb-16">
          {serviceCards.map((card) => (
            <div key={card.id} className="rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <Image
                src={card.src}
                alt={card.alt}
                width={400} // IMPORTANT: Use the actual width of your image asset
                height={550} // IMPORTANT: Use the actual height of your image asset
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        {/* CTA Button (remains the same) */}
        <div className="text-center">
          <Button size="lg" className="bg-blue-700 hover:bg-blue-800 rounded-lg">
            View Other Solutions
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}