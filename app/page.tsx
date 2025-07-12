import Hero from "@/components/home/Hero";
import HomeClients from "@/components/home/clients";
import HomeAbout from "@/components/home/home-about";
import OurServices from "@/components/home/our-services";
import HomeCaseStudies from "@/components/home/home-case-studies";
import Testimonial from "@/components/home/testimonial";
import BookNow from "@/components/reusable/book-now";
import Packages from "@/components/home/packages";

export default function Home() {
  return (
    <div className="bg-[#F6F6F6]">
      <Hero />
      <HomeClients />
      <HomeAbout />
      <OurServices />
      <HomeCaseStudies />
      <Packages />
      <Testimonial />
      <BookNow />
    </div>
  );
}
