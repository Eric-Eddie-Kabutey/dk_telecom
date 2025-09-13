import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContentCard } from "@/components/shared/content-card";

// Data for our case studies.
const caseStudiesData = [
  {
    id: 1,
    href: "/case-studies/leading-bank",
    imageUrl: "/assets/images/home/case-study-1.png",
    imageAlt: "Financial traders analyzing data on multiple screens.",
    tag: "Financial Sector",
    title: "Revolutionizing Branch Efficiency for a Leading Bank",
    description: "Our client is a prominent banking institution with an extensive network of over 200 physical branches...",
  },
  {
    id: 2,
    href: "/case-studies/it-talent",
    imageUrl: "/assets/images/home/case-study-2.png",
    imageAlt: "The flag of The Gambia waving in the wind.",
    tag: "Financial Sector",
    title: "Elevating IT Talent Solutions for Enhanced Client Success",
    description: "Our client is a prominent banking institution with an extensive network of over 200 physical branches...",
  },
  {
    id: 3,
    href: "/case-studies/branch-efficiency-2",
    imageUrl: "/assets/images/home/case-study-3.png",
    imageAlt: "The exterior of a modern bank building.",
    tag: "Financial Sector",
    title: "Revolutionizing Branch Efficiency for a Leading Bank",
    description: "Our client is a prominent banking institution with an extensive network of over 200 physical branches...",
  },
  {
    id: 4,
    href: "/case-studies/it-talent-2",
    imageUrl: "/assets/images/home/case-study-4.png",
    imageAlt: "A view of a resort or residential area with palm trees.",
    tag: "Financial Sector",
    title: "Elevating IT Talent Solutions for Enhanced Client Success",
    description: "Our client is a prominent banking institution with an extensive network of over 200 physical branches...",
  },
];

export function CaseStudiesSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-container 2xl:w-[85%] w-[95%] mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="font-semibold text-blue-600 mb-2">Case Studies</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Real Results: Stories of Success
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {caseStudiesData.map((study) => (
            <ContentCard
              key={study.id}
              href={study.href}
              imageUrl={study.imageUrl}
              imageAlt={study.imageAlt}
              tag={study.tag}
              title={study.title}
              description={study.description}
            />
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center mt-12">
          <Link href="/case-studies" className="inline-flex items-center gap-1.5 font-semibold text-blue-600 hover:text-blue-800 transition-colors">
            View More
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}