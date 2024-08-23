import { AboutUsSection, HeroSection, Loader } from "@/components";
import ServicesSection from "@/components/home/ServicesSection";
import Teamsection from "@/components/home/Teamsection";
import TechnologySection from "@/components/home/TechnologySection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import { Suspense } from "react";



const Home = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <Teamsection />
      <TechnologySection />
      <WhyChooseUsSection />
    </Suspense>
  );
}

export default Home
