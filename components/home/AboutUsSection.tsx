import { LucideQuote, QuoteIcon } from "lucide-react"
import Image from "next/image"

const AboutUsSection = () => {
  return (
    <div id="about-us" className="my-8 w-full px-4 sm:px-2  flex flex-col items-center">
      <span className='text-primary self-center text-2xl font-semibold border-b-2 pb-4 border-b-primary/40'>About us</span>

      <div className="flex-grow w-full p-2 gap-8 my-8  flex md:flex-row flex-col">

        <div className=" w-full lg:w-[45%] ">
          <span className="text-lg font-semibold leading-5 max-w-[80%] text-neutral-500"> <b><QuoteIcon size={40} className="text-primary/60 m-2" /></b> <b className="text-2xl  font-medium text-primary">XecureCode</b> is a full stack software development and IT/ITs services dedicated to building a vivrant software and digital solutions. Our mission is to harnes the rich talent pool of Bihar, and providing top notch <b>Software development services</b>, <b>IT adminstrations, digital marketing</b> and Data operations servivce to startups, small and medium size businessess and as well as global enterprises. </span>
        </div>







        {/* logo  */}
        <div className="md:w-1/2 flex-grow lg:w-[40%] group duration-500 transition-all hover:scale-105 hover:shadow-md shadow-black/40 rotate-2 hover:rotate-0 w-full flex flex-col  bg-neutral-200 rounded-md my-8 md:p-12 p-8 sm:my-0 items-center ">
          <div className="w-full h-[55%]  flex items-center justify-center">
            <Image src={"/images/logo_black.svg"} className="aspect-square group-hover:drop-shadow-lg  group-hover:scale-90 duration-700 transition-all" height={200} width={200} alt="Logo" />
          </div>

          <span className="text-4xl font-semibold group-hover:text-primary text-neutral-400">XecureCode</span>
          <span className="sm:text-md text-[10px] opacity-55 font-semibold">We are the leading tech solution provider.</span>
        </div>


      </div>
    </div>
  )
}

export default AboutUsSection