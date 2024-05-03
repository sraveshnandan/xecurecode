"use client";
import { topMenuItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { MenuLink } from "..";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type Props = {};

const NavBar = (props: Props) => {
  const [showMenu, setshowMenu] = useState<boolean>(false);
  return (
    <div className="flex items-center  justify-between py-2 ">
      {/* Logo Section  */}
      <Link
        href={"/"}
        className="flex-row ml:w-1/4 ml-2  flex gap-2 items-center"
      >
        <Image
          alt="company-logo"
          src={"/images/xecurecode_circle.png"}
          width={55}
          height={55}
          className="object-cover"
        />
        <span className="text-lg font-semibold ">XecureCode</span>
      </Link>

      {/* Menu section  */}
      <div className="flex-grow xl:items-center  xl:justify-center  hidden  mf:flex">
        {topMenuItems &&
          topMenuItems.map((item, index) => (
            <MenuLink name={item.name} link={item.name} key={index} />
          ))}
      </div>
      {/* mobile menu  */}
      {showMenu && (
        <div className="flex-grow overflow-y-scroll flex-col  items-center backdrop-blur-sm  bg-glass pt-14  top-0 right-0 w-3/4 h-screen  transition-all duration-300 absolute flex">
          <button
            className="absolute left-4 top-4  font-semibold text-red-600 shadow-2xl"
            onClick={() => setshowMenu((prev) => !prev)}
          >
            <X />
          </button>
          {topMenuItems &&
            topMenuItems.map((item, index) => (
              <button
                onClick={() => {
                  setTimeout(() => {
                    setshowMenu((prev) => !prev);
                  }, 1000);
                }}
                className="my-2  w-3/4"
                key={index}
              >
                <MenuLink w={"w-full"} name={item.name} link={item.name} />
              </button>
            ))}

          {/* Extra CTA  */}

          <Link
            className="hover:bg-glass border-[1] duration-500 transition-all shadow-2xl hover:shadow-secondry border-white py-2 px-5 rounded-full"
            href={"/login"}
          >
            login
          </Link>
          <Link
            className="bg-secondry border-[1]  flex  duration-500 transition-all shadow-2xl hover:shadow-secondry border-white py-2 px-5  rounded-full"
            href={"/register"}
          >
            Get Started
          </Link>
        </div>
      )}

      {/* CTA section  */}
      <div className="flex flex-row items-center w-fit  flex-grow justify-end pr-4  gap-4  ">
        <Link
          className="hover:bg-glass border-[1] duration-500 transition-all shadow-2xl hover:shadow-secondry hidden sm:flex  text-sm border-white py-2 px-5 rounded-full"
          href={"/login"}
        >
          login
        </Link>
        <Link
          className="bg-glass border-[1]  md:flex hidden duration-500 transition-all shadow-2xl hover:shadow-secondry border-white py-2 px-5 text-sm  rounded-full"
          href={"/register"}
        >
          Carear
        </Link>

        <button
          onClick={() => setshowMenu((prev) => !prev)}
          className="mf:hidden flex hover:bg-glass p-2 rounded-md shadow-2xl shadow-secondry"
        >
          <Menu />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
