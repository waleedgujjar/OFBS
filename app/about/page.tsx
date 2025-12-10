"use client";

import IntroStorySection from "@/components/IntroStorySection";
import AboutPage2 from "@/components/AboutPage2";
import FeaturePillarsSection from "@/components/Feature";
import AchievementsSection from "@/components/Achievements";
import MissionVisionSection from "@/components/Mission";
import OFBSNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      <OFBSNavbar/>
      <IntroStorySection />
      <AboutPage2 />
      <FeaturePillarsSection />
      <AchievementsSection />
      <MissionVisionSection />
      <Footer/>
    </div>
  );
};

export default About;
