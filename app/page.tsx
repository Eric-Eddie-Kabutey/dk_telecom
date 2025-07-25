'use client';
import Hero from "@/components/home/Hero";
import HomeClients from "@/components/home/clients";
import HomeAbout from "@/components/home/home-about";
import HomeCaseStudies from "@/components/home/home-case-studies";
import BookNow from "@/components/reusable/book-now";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import dklogo from "@/public/assets/images/dk_logo.png"
import Image from "next/image";
import BlogPost from "@/components/home/blog-posts";
import InternetServices from "@/components/home/internet-services";

export default function Home() {
  // Floating DK TalentHub Card
  const [minimized, setMinimized] = useState(false);
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent navigation if clicking minimize button
    if ((e.target as HTMLElement).closest('.dk-talent-minimize')) return;
    window.location.href = '/dk-talent';
  };

  return (
    <div className="relative bg-[#F6F6F6]">
      <Hero />
      <HomeClients />
      <HomeAbout />
      <InternetServices />
      {/* <OurServices /> */}
      <HomeCaseStudies />
      {/* <Packages /> */}
      <BlogPost />
      {/* <Testimonial /> */}
      <BookNow />

      <div
        className={`fixed bottom-24 right-6 z-50 transition-all duration-700 ${minimized ? 'w-52 h-12' : 'w-80 h-32'} bg-white shadow-lg rounded-xl flex items-center cursor-pointer border border-gray-200 animate-[floatY_2.5s_ease-in-out_infinite]`}
        onClick={handleCardClick}
        style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}
      >
        <style>{`
          @keyframes floatY {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-16px); }
          }
        `}</style>
        <div className="flex items-center w-full h-full px-4">
          {!minimized && (
            <Image
              src={dklogo}
              alt="DK TalentHub"
              className="w-12 h-fit rounded-lg mr-4 object-cover"
              style={{ background: '#F6F6F6' }}
            />
          )}
          <div className="flex-1">
            <div className="flex justify-between items-center gap-2">
              <div className="font-bold text-app-primary text-lg">DK TalentHub</div>
              <button
                className="dk-talent-minimize p-2 rounded-full hover:bg-gray-100"
                onClick={e => {
                  e.stopPropagation();
                  setMinimized(m => !m);
                }}
                aria-label={minimized ? 'Expand card' : 'Minimize card'}
                type="button"
              >
                {minimized ? (
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M5 8l5 5 5-5" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ) : (
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M15 12l-5-5-5 5" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
              </button>
            </div>
            {!minimized && (
              <div className="text-gray-600 text-sm mt-1">
                Elevate your career with DK TalentHub. Explore courses, connect with mentors, and unlock new opportunities.
              </div>
            )}
          </div>
          
        </div>
      </div>

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
