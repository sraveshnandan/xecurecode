import { services } from '@/constants'
import Image from 'next/image'
import React from 'react'

const ServicesSection = () => {
    return (
        <div id='services' className='w-full flex flex-col  min-h-screen items-center py-16 '>
            <span className='text-2xl text-primary font-semibold'>We provide top class services.</span>

            <div className='grid w-full mt-8 p-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 border'>
                {services.map((item, index) => (
                    <div className='p-2 h-48  overflow-hidden relative border flex flex-col m-2 bg-pattern rounded-md  group' key={index}>
                            <Image src={item.icon} alt='service imag' fill={true} className='w-full h-full object-center'/>
                        <div className='absolute z-20 bottom-3 bg-white/50 backdrop-blur-md rounded-md shadow-md shadow-black/50 p-2'>
                            {item.tech_stack.map((item, index) => (
                                <span className='rounded-full text-white text-[8px] md:text-md  px-2 py-1 font-semibold transition-all duration-300 hover:scale-75 cursor-pointer  border m-1 border-primary' key={index}>{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServicesSection