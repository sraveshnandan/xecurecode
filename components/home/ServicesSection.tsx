import { services } from '@/constants'
import Image from 'next/image'
import React from 'react'

const ServicesSection = () => {
    return (
        <div id='services' className='w-full flex flex-col  min-h-screen items-center py-16 '>
            <span className='text-primary text-2xl font-semibold border-b-2 pb-2 border-b-primary/40'>We provide top class services.</span>

            <div className='grid w-full mt-8 p-2 grid-cols-1 xl:grid-cols-3 md:grid-cols-2 '>
                {services.map((item, index) => (
                    <div className='p-2 min-h-64 lg:h-72 group   overflow-hidden relative border flex flex-col m-2 bg-pattern rounded-lg  group' key={index}>
                        {/* banner  */}
                        <Image src={item.icon} alt='service imag' fill={true} className='w-full h-full object-center duration-500 opacity-90 transition-all hover:scale-110 cursor-pointer' />
                        {/* text section  */}
                        <div className='absolute group-hover:h-[90%] transition-transform duration-1000 cursor-pointer right-0 left-0 mx-2 rounded-lg bottom-2 bg-gradient-to-t from-black/40 to-neutral-900 flex-col text-white text-xl font-semibold p-2 group-hover: pt-3'>
                            <span>{item.name}</span>

                            <div className='hidden mt-4 group-hover:flex'>
                                <span className='text-sm line-clamp-4 font-medium'>{item.description}</span>
                            </div>
                            <div className='xl:my-2 m-1 group-hover:absolute bottom-0 flex flex-row flex-wrap'>{
                                item.tech_stack.map((item, index) => (
                                    <span className='text-sm border-2 font-medium border-neutral-300 rounded-full px-3 py-1 xl:m-2 m-1 ' key={index}>{item}</span>
                                ))
                            }</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServicesSection