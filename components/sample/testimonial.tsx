import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Data for the testimonials.
const testimonialsData = [
  {
    id: 1,
    name: "Daniel Thompson",
    date: "October 5, 2023",
    avatarUrl: "/assets/images/home/user-profile.png",
    comment: "Amazing service! They paid attention to every detail and delivered ahead of schedule. The only issue was a minor bug in the software, but they fixed it quickly. I appreciate their dedication!",
    rating: 5,
  },
  {
    id: 2,
    name: "Samantha Miller",
    date: "September 28, 2023",
    avatarUrl: "/assets/images/home/user-profile.png",
    comment: "Working with them was a seamless experience. The connectivity is rock-solid, and their customer support is always responsive and helpful. Highly recommended for any business.",
    rating: 5,
  },
  {
    id: 3,
    name: "Alex Rodriguez",
    date: "September 15, 2023",
    avatarUrl: "/assets/images/home/user-profile.png",
    comment: "The speed and reliability are unmatched in this area. We've seen a significant boost in our productivity since switching. A truly professional team and a top-tier service.",
    rating: 5,
  },
    {
    id: 4,
    name: "Emily Chen",
    date: "August 22, 2023",
    avatarUrl: "/assets/images/home/user-profile.png",
    comment: "From installation to daily use, everything has been perfect. The team explained everything clearly, and we haven't had a single outage. A five-star experience all around.",
    rating: 5,
  },
];


export function TestimonialsSection() {
  return (
    <section className="bg-blue-50/70 py-16 md:py-24 overflow-hidden">
      <div className="max-container 2xl:w-[85%] w-[95%] mx-auto px-4">
        
       {/* The <Carousel> component now wraps everything that needs its context */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="font-semibold text-blue-600 mb-2">Happy story from our customers</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Loved by thousands <br />
                <span className="text-gray-400">of Users</span>
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed self-center max-w-md">
              Hear the beautiful story from our worldwide customers that have been using DKTelecoms around the world without lost connections.
            </p>
          </div>

          {/* Testimonials Carousel Content */}
          <CarouselContent className="-ml-4">
            {testimonialsData.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="rounded-2xl shadow-sm border-gray-200 h-full">
                    <CardContent className="flex flex-col h-full p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Image
                          src={testimonial.avatarUrl}
                          alt={`Avatar of ${testimonial.name}`}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-6 mb-4 flex-grow">
                        {testimonial.comment}
                      </p>
                      <div className="flex items-center gap-1 mt-auto">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Section Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-8">
              <div className="flex items-center gap-4">
                  <p className="text-5xl font-bold text-gray-800">4.8/5</p>
                  <p className="text-sm text-gray-600 max-w-[200px]">
                      500+ happy customers based on compliments and customer reviews
                  </p>
              </div>
              
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 rounded-lg hidden md:inline-flex">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              {/* Mobile Carousel Navigation is now INSIDE the Carousel component */}
              <div className="flex md:hidden items-center gap-4">
                  <CarouselPrevious className="relative left-0 top-0 translate-y-0" />
                  <CarouselNext className="relative right-0 top-0 translate-y-0" />
              </div>
          </div>
        </Carousel> {/* The <Carousel> component now closes here */}

      </div>
    </section>
  );
}