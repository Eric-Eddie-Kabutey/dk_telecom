import { Button } from "@/components/ui/button";
import { ContentCard } from "@/components/shared/content-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Mock data for the blog posts.
const blogPostsData = [
  {
    id: 1,
    href: "/blog/branch-efficiency",
    imageUrl: "/assets/images/home/case-study-1.png", 
    imageAlt: "Financial traders analyzing data on multiple screens.",
    tag: "Financial Sector",
    title: "Revolutionizing Branch Efficiency for a Leading Bank",
    description: "Our client is a prominent banking institution with an extensive network of over 200 physical branches...",
  },
  {
    id: 2,
    href: "/blog/it-talent",
    imageUrl: "/assets/images/home/case-study-2.png",
    imageAlt: "The flag of The Gambia waving in the wind.",
    tag: "Press Release",
    title: "Elevating IT Talent Solutions for Enhanced Client Success",
    description: "A deep dive into how we source and deploy top-tier IT talent to boost our clients' operational capabilities.",
  },
  {
    id: 3,
    href: "/blog/upcoming-events",
    imageUrl: "/assets/images/home/case-study-4.png",
    imageAlt: "A view of a resort or residential area with palm trees.",
    tag: "Events",
    title: "Join Us at the Annual Tech Summit 2024",
    description: "We're excited to announce our participation in the upcoming tech summit. Visit our booth to learn about our latest innovations.",
  },
  {
    id: 4,
    href: "/blog/new-service",
    imageUrl: "/assets/images/home/case-study-3.png",
    imageAlt: "The exterior of a modern bank building.",
    tag: "Product Update",
    title: "Introducing Our New Fiber+ Plans for Businesses",
    description: "Discover the next generation of business internet with unparalleled speed and reliability, designed for the modern enterprise.",
  },
];

export function BlogSection() {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="max-container 2xl:w-[85%] w-[95%] mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Section Header with Navigation */}
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-12">
            <div className="max-w-xl">
              <p className="font-semibold text-blue-600 mb-2">Blog Posts</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Take a tour of our latest blog posts, press releases, case studies, and upcoming events.
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <CarouselPrevious className="relative left-0 top-0 translate-y-0 h-12 w-12 rounded-full bg-white shadow-md border text-gray-700 hover:bg-gray-100" />
              <CarouselNext className="relative right-0 top-0 translate-y-0 h-12 w-12 rounded-full bg-white shadow-md border text-gray-700 hover:bg-gray-100" />
            </div>
          </div>

          {/* Carousel Content */}
          <CarouselContent className="-ml-4">
            {blogPostsData.map((post) => (
              <CarouselItem key={post.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <ContentCard {...post} />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-700 hover:bg-blue-800 rounded-lg">
              View more
            </Button>
          </div>
        </Carousel>
      </div>
    </section>
  );
}