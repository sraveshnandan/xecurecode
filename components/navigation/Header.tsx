import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../shared/Button'
import { NavMenu } from '@/constants'

const Header = () => {
  return (
    <nav className='flex sticky top-0 left-0 right-0 flex-row m-2 p-3 glassBg rounded-full items-center justify-between'>
      {/* logo  */}
      <Link href={"/"} className=' flex group flex-row items-center gap-2'>
        <Image className='group-hover:hue-rotate-90' src={"/images/logo_black.svg"} alt='logo' width={60} height={60} />
        <div className='flex flex-col   font-semibold '>
          <span className='text-black duration-500 transition-all hover:text-primary text-lg'>XecureCode</span>
          <span className='text-secondry my-0 text-[10px]'>Agency ✦</span>
        </div>
      </Link>
      {/* menu and CTA  */}
      <div className='flex-grow  gap-4 items-center justify-end flex   h-full'>
        <div className=' flex flex-row items-center gap-4'>
          {
            NavMenu.map((item, index) => (
              <Link className='font-semibold hover:scale-105  duration-700 transition-all hover:text-primary' key={index} href={item.link || "/"}>{item.name}</Link>
            ))
          }

        </div>
        {/* button  */}
        <Button className='rounded-full py-2 transition-all duration-700  hover:scale-90'>Shedule a meeting</Button>
      </div>

    </nav>
  )
}

export default Header