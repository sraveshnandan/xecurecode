import { services } from '@/constants'
import React from 'react'

const WhyChooseUsSection = () => {
    return (
        <section className=' md:w-[90%] w-full p-2 mx-auto border py-4 my-4 flex md:flex-row flex-col '>

            {/* text section  */}

            <div className='w-full flex flex-col md:w-1/2'>
                <span className='text-4xl'>Why</span>
                <span className='text-primary font-semibold text-4xl'>XecureCode ?</span>

                <span className='my-2 font-semibold opacity-55'>"A software solution provider, serving you all the tech needs just in time."</span>

                <span className='text-sm font-semibold'>As a trusted software development company, our technology partnership is built on trust, benefits, and accountability. Experience seamless, creative, and hassle-free innovation with us.</span>
            </div>


            {/* cards section  */}

            <div className='grid'></div>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                {
                    
                }
            </div>
        </section>
    )
}

export default WhyChooseUsSection