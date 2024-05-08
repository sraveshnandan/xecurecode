import Link from "next/link";
import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="w-full  text-white flex items-center justify-center h-screen">
      <div className="under"></div>
      <div className=" z-50 flex flex-col items-center justify-center gap-4">
        <span className="font-medium text-7xl">Future of Softwares</span>
        <span className="font-medium text-7xl">with XecureCode</span>
        <span className="text-lg text-gray-400">
          Software development with cutting edge technology.
        </span>
        <Link
          className="border-2 border-gray-400 hover:bg-secondry hover:border-transparent hover:shadow-2xl hover:shadow-secondry rounded-full px-5 py-2 text-lg"
          href={"/"}
        >
          Explore now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
