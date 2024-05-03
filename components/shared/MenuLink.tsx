"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  name: string;
  link: string;
  w?: string;
};

const MenuLink = ({ name, link, w }: Props) => {
  const pathname = usePathname();
  const activeClass = `py-2 duration-300 mx-1 xl:mx-2 ml:text-sm text-lg px-5  transition-all bg-glass mx-1 ${w}  rounded-full shadow-2xl`;
  const inactiveClass =
    "py-2 duration-300 ml:text-sm text-lg mx-1 xl:mx-2 transition-all lg:px-2 hover:bg-glass mx-1 hover:rounded-full shadow-2xl";
  return (
    <Link
      className={pathname === `/${link}` ? activeClass : inactiveClass}
      href={link}
    >
      {name}
    </Link>
  );
};

export default MenuLink;
