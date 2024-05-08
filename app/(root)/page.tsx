import { HeroSection } from "@/components";
import { SignOutButton, UserButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div className="w-full  h-screen text-white">
      {/* Hero Section  */}
      <HeroSection />
    </div>
  );
};

export default HomePage;
