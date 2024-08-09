"use client"
import Image from 'next/image'
import Link from 'next/link'
import Button from '../shared/Button'
import { NavMenu } from '@/constants'
import { MenuIcon, XIcon } from 'lucide-react'
import { useState } from 'react'

const Header = () => {

  const [menuOpen, setmenuOpen] = useState(false)
  return (
    <nav className={`flex sticky md:mt-3 top-0 left-0 right-0 flex-row m-1 md:m-0 p-1 lg:p-3 xl:p-4 glassBg ${menuOpen ? "rounded-t-xl " : "rounded-xl"} items-center justify-between`}>
      {/* logo  */}
      <Link href={"/"} className=' flex group flex-row items-center m-1 gap-2'>
        <Image className='group-hover:hue-rotate-90 w-12 h-12' src={"/images/logo_black.svg"} alt='logo' width={60} height={60} />
        <div className='flex flex-col   font-semibold '>
          <span className='text-black duration-500 transition-all hover:text-primary text-lg'>XecureCode</span>
          <span className='text-secondry my-0 text-[10px]'>Agency ✦</span>
        </div>
      </Link>
      {/* menu and CTA  */}
      <div className='flex-grow   xl:gap-4 gap-2 items-center justify-end flex   h-full'>
        {
          menuOpen && (
            <div className='z-50 w-full md:w-[35%] flex flex-col items-center gap-4  right-0  top-14 p-12 absolute h-[calc(50vh)] md:h-[calc(40vh)] mt-1 rounded-b-xl bg-white shadow-md shadow-black/60'>
              {
                NavMenu.map((item, index) => (
                  <Link onClick={() => {
                    setTimeout(() => {
                      return setmenuOpen(false)
                    }, 500)
                  }} className='font-semibold hover:scale-105  duration-700 transition-all hover:text-primary' key={index} href={item.link || "/"}>{item.name}</Link>
                ))
              }
              {/* cta in smaller screen  */}
              <Button className='rounded-full flex md:hidden text-sm md:py-2 transition-all duration-700  hover:scale-90'>Shedule a meeting</Button>

            </div>
          )
        }
        <div className=' lg:flex flex-row hidden items-center xl:gap-4 gap-3'>
          {
            NavMenu.map((item, index) => (
              <Link className='font-semibold hover:scale-105  duration-700 transition-all hover:text-primary' key={index} href={item.link || "/"}>{item.name}</Link>
            ))
          }

        </div>
        {/* button  */}
        <Button className='rounded-full hidden md:flex text-sm md:py-2 transition-all duration-700  hover:scale-90'>Shedule a meeting</Button>
        {
          menuOpen ? <XIcon onClick={() => setmenuOpen(prev => !prev)} className='mx-2 lg:hidden' /> : <MenuIcon onClick={() => setmenuOpen(prev => !prev)} className='mx-2 lg:hidden' />
        }
      </div>





    </nav >
  )
}

export default Header