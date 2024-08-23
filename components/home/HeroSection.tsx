"use client"
import { Canvas } from "@react-three/fiber"
import Button from "../shared/Button"


const HeroSection = () => {
  return (

    <div id='home' className='flex items-center justify-center md:h-[calc(100vh)] h-[calc(70vh)] bg-pattern'>
      <div className="w-[90%] md:w-[80%] text-wrap flex flex-col items-center justify-center">
        <span className="md:text-5xl lg:text-6xl text-center text-3xl sm:text-3xl my-2 lg:my-4 font-semibold  text-secondry">Welcome to XecureCode</span>
        <span className=" max-w-[80%] lg:max-w-[50%] lg:my-2 line-clamp-2 text-center text-[14px]  lg:text-lg font-semibold   text-secondry/80 ">We provide custom software deevlopment sevices, with cuting edge new technologies at affordable prices.</span>
        {/* cta button  */}
        <Button onClick={() => { console.log(" get in touch btn clicked.") }} className="my-4 rounded-md py-3 ">Get in touch</Button>
      </div>

    </div>


  )
}

export default HeroSection