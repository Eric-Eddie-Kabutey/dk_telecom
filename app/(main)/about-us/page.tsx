import Navbar from "@/components/shared/Navbar"
import FooterSection from "@/components/shared/Footer";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import ValuesSection from "./components/ValuesSection";
import TeamSection from "./components/TeamSection";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="font-[family-name:var(--font-geist-sans)]">
        <HeroSection />
        <main className="max-w-container mx-auto px-4 py-12">
          <MissionSection />
          <ValuesSection />
          <TeamSection />
        </main>
      </div>
      <FooterSection />
    </>
  );
}

export default AboutUsPage