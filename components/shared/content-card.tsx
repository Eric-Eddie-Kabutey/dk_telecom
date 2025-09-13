import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface ContentCardProps {
  href: string;
  imageUrl: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
}

export function ContentCard({ href, imageUrl, imageAlt, tag, title, description }: ContentCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative aspect-video">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-3 left-3">
             <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-blue-700 font-medium border-gray-300">
                {tag}
             </Badge>
          </div>
        </div>
        
        {/* Text Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}