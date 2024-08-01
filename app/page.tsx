import { AboutUsSection, HeroSection, Loader } from "@/components";
import { Suspense } from "react";



const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <HeroSection />
      <AboutUsSection />
    </Suspense>
  );
}

export default Home
