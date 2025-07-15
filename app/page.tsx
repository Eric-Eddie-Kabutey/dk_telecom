import Hero from "@/components/home/Hero";
import HomeClients from "@/components/home/clients";
import HomeAbout from "@/components/home/home-about";
import OurServices from "@/components/home/our-services";
import HomeCaseStudies from "@/components/home/home-case-studies";
import Testimonial from "@/components/home/testimonial";
import BookNow from "@/components/reusable/book-now";
import Packages from "@/components/home/packages";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative bg-[#F6F6F6]">
      <Hero />
      <HomeClients />
      <HomeAbout />
      <OurServices />
      <HomeCaseStudies />
      <Packages />
      <Testimonial />
      <BookNow />
      <a
        href="https://wa.me/233243333333"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}
