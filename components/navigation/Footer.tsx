import { companyContactDetails, services } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../shared/Button'
import SubscribForm from './SubscribForm'

const Footer = () => {
  return (

    <footer className='bg-secondry overflow-hidden bg-pattern flex flex-col py-2 text-white  rounded-md '>

      <div className=' mx-auto grid md:w-[80%] w-full xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 place-content-evenly  '>
        {/* logo  */}
        <div className='flex w-full items-center  sm:p-4 p-8 md:p-2 justify-center  flex-col'>
          <Image src={"/images/logo_white.svg"} className='object-cover  mt-2 transition-all duration-700 hover:scale-110 cursor-pointer' alt='logo' width={50} height={50} />
          <span className='text-xl font-semibold'>XecureCode</span>
          <span className='text-sm my-2 text-justify text-wrap'>Where inovation meets experties! We are not just an IT company, we are your digital partner on your journey to redefine possibilities, immerse yourselft in a world of cutting edge solutions. Where each lines of code we write is a step towards tranforming your digital aspirations into reality.</span>
          {/* contact details  */}
          <div className=' my-2 flex flex-col items-start'>
            <div className='flex flex-row items-center gap-2'>
              <span className='text-primary'>Address:</span>
              <span className='font-semibold line-clamp-1'>{companyContactDetails.address}</span>
            </div>

            <div className='flex text-center flex-row items-center gap-2'>
              <span className='text-primary'>Email:</span>
              <span className='font-semibold'>{companyContactDetails.email}</span>
            </div>
            <div className='flex flex-row items-center text-center gap-2'>
              <span className='text-primary'>Call:</span>
              <span className='font-semibold'>{companyContactDetails.call}</span>
            </div>
          </div>



        </div>
        {/* Services  */}
        <div className='w-full items-center py-4 flex flex-col '>
          <span className='text-2xl font-semibold my-4 '>Services</span>

          {
            services.map((item, index) => (
              <Link className='text-sm transition-all duration-300 hover:scale-95 hover:text-primary my-1' key={index} href={"#services"}>{item.name}</Link>
            ))
          }

        </div>


        {/* Services  */}
        <div className='w-full items-center py-4  flex flex-col '>
          <span className='text-2xl font-semibold my-4 '>Importents links</span>

          {
            services.map((item, index) => (
              <Link className='text-sm transition-all duration-300 hover:scale-95 hover:text-primary my-1' key={index} href={"#services"}>{item.name}</Link>
            ))
          }

        </div>


        {/* subscribe scetion  */}

        <div className='md:w-full w-[80%] mx-auto flex items-center  flex-col py-4'>

          <span className='text-2xl font-semibold my-4'>Subscribe our newsletter</span>

          <SubscribForm />
          {/* social links  */}
          <div className='flex mt-8 flex-row items-center gap-3'>
            {
              companyContactDetails.socialLinks.map((item, index) => (
                <Link key={index} className='transition-all duration-500 hover:text-primary hover:scale-105' href={item.link}><item.icon /></Link>
              ))
            }
          </div>
        </div>
      </div>


      <span className='text-center mt-4 font-medium opacity-60'>© All rights reserved by <Link href={"/"} className='text-primary font-semibold'>XecureCode</Link></span>



      {/* copyright section  */}




    </footer>




  )
}

export default Footer