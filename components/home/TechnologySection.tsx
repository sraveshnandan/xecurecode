import { technologies } from '@/constants'
import Image from 'next/image'
import React from 'react'

const TechnologySection = () => {
  return (
    <div id='technology' className='my-8 p-2 flex items-center flex-col'>
      <span className='text-primary self-center text-2xl font-semibold border-b-2 pb-2 border-b-primary/40'>Technology we use</span>

      <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 my-8'>
        {technologies.map((item, index) => (
          <div key={index} className='text-center border  p-4 rounded-md flex bg-gray-200   flex-col gap-2'>
            {/* logo  */}
            <div className='self-center'><Image src={item.image} alt='logo' width={100} height={100} /></div>
            <span className='text-2xl'>{item.name}</span>
            <span className='text-sm my-2 text-justify line-clamp-5'>{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechnologySection