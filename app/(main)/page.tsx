import { CompanyHero } from "@/components/home/Hero";
import { CaseStudySlider } from "@/components/home/CaseStudySlider";
import { SolvingProblems } from "@/components/home/SolvingProblems";
import { TestimonialSliderSection } from "@/components/home/TestimonialSection";
import { CtaSection } from "@/components/home/CtaSection";
import { Impact } from "@/components/home/Impact";
import { ClientsLogo } from "@/components/home/ClientsLogo";
import { NextGen } from "@/components/home/NextGen";
import { KeyPillarsSection } from "@/components/home/KeyPillarsSection";
import MainFloating from "@/reusable/floating";


export default function Home() {
  return (
    <div>
      {/* company hero */}
      <CompanyHero />

      {/* The next generation  */}      
      <NextGen />

      {/* our impact */}     
      <Impact />      

      {/* clients logo */}    
      <ClientsLogo />     

      {/* case studies slider */}
      <CaseStudySlider />

      {/* Key pillars */}      
      <KeyPillarsSection />

      {/* solving problems */}
      <SolvingProblems />

      {/* testimonial sliderSection */}
      <TestimonialSliderSection />

      {/* CTA */}
      <CtaSection /> 
      <MainFloating />
      {/* <FloatingContactButton />     */}
    </div>
  );
}
