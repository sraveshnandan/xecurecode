import { footerMenu01, footerMenu02, footerMenu03 } from "@/constants";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import EmailSubscribeForm from "./EmailSubscribeForm";

type Props = {};

const Footer = (props: Props) => {
  const subscribed = () => {};
  return (
    <div className="w-full mt-4 px-2  ">
      {/* Get started for free card  */}
      <div className="w-full  py-8  px-4 rounded-xl shadow-2xl shadow-black/20 bg-glass   flex  md:flex-row flex-col gap-4 items-center">
        {/* Text section  */}
        <div className="md:w-1/2 w-full">
          <span className="flex md:text-4xl text-xl  font-semibold  flex-row  items-center gap-2">
            We are hiring!
          </span>
          <span className="text-gray-500 mt-2 lining-nums-2 line-clamp-2">
            we are looking for potential developers to hire.Work with us get
            paid for each projects.
          </span>
        </div>
        {/* CTA section  */}
        <div className="items-center pr-4   justify-end flex  flex-grow">
          <Link
            href={`/Cariers`}
            className="bg-secondry px-5 py-2 hover:shadow-2xl hover:shadow-secondry  rounded-full"
          >
            Apply now
          </Link>
        </div>
      </div>

      {/* Footer Links section  */}
      <div className="w-full flex gap-4  my-4 md:flex-row  flex-col items-center">
        {/* left container  */}
        <div className="md:flex-grow w-full md:p-8 p-2 bg-glass/10 rounded-lg">
          {/* logo container  */}
          <div className="border-b-[1px] pb-4  border-white/50 mb-4 ">
            {/* Logo Section  */}
            <Link
              href={"/"}
              className="flex-row ml:w-1/4 ml-2  flex gap-2 items-center"
            >
              {/* <Image
                alt="company-logo"
                src={"/images/xecurecode_circle.png"}
                width={55}
                height={55}
                className="object-cover"
              /> */}

              {/* tagline  */}
              <span className="text-lg font-semibold ">XecureCode</span>
            </Link>
            <span className="text-[14px]">Next gen Software Development</span>
          </div>

          {/* Menu Section  */}
          <div className="w-full py-4 md:justify-between gap-4 md:items-start flex  justify-evenly flex-row ">
            {/* Company  */}
            <div className="flex  flex-col">
              <span className="text-lg font-semibold mb-2">Company</span>
              {footerMenu01.map((item, index) => (
                <Link
                  className="text-white/50 hover:text-white duration-300 transition-all my-1 text-[16px]"
                  href={item.link}
                  key={index}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Legal  */}
            <div className="flex flex-col">
              <span className="text-lg font-semibold mb-2">Legal</span>
              {footerMenu02.map((item, index) => (
                <Link
                  className="text-white/50 hover:text-white duration-300 transition-all my-1 text-[16px]"
                  href={item.link}
                  key={index}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* Support  */}
            <div className="flex flex-col">
              <span className="text-lg font-semibold mb-2">Support</span>
              {footerMenu03.map((item, index) => (
                <Link
                  className="text-[16px] text-white/50 hover:text-white duration-300 transition-all my-1"
                  href={item.link}
                  key={index}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* right container  */}
        <div className="md:w-2/5 w-full relative md:h-[437px]  h-[450px]  mf:h-[435px]">
          {/* Newsletter section  */}
          <div className=" bg-glass/10 rounded-lg px-2 sm:py-4 py-4  mf:p-4">
            <span className="mf:text-xl text-lg line-clamp-1 mb-4 md:mb-2  w-full font-semibold">
              Join our newsletter
            </span>
            {/* input container  */}
            <EmailSubscribeForm />
          </div>

          {/* social links section  */}

          <div className="flex absolute bottom-0  flex-row justify-around gap-2 w-full items-end ">
            {/* Linkedin  */}
            <Link
              href={""}
              className="w-1/3 h-36 bg-glass/10 py-12 rounded-lg items-center flex justify-center"
            >
              <LinkedinIcon className="hover:text-blue-500" size={50} />
            </Link>
            {/* Instagram  */}
            <Link
              href={""}
              className="w-1/3 bg-glass/10 h-36 py-12 rounded-lg items-center flex justify-center"
            >
              <InstagramIcon className="hover:text-red-500" size={50} />
            </Link>
            {/* Twitter  */}
            <Link
              href={""}
              className="w-1/3 h-36 bg-glass/10 py-12 rounded-lg items-center flex justify-center"
            >
              <TwitterIcon className="hover:text-secondry" size={50} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section  */}
      <div className="w-full text-center mt-8">
        <span className="text-gray-500">
          @2024 XecureCode. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
