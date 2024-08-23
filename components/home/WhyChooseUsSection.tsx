import { whyCards } from '@/constants'
import { Dot, ServerCrash } from 'lucide-react'

const WhyChooseUsSection = () => {
    return (
        <div className='flex items-center flex-col my-8'>
            <span className='text-primary self-center text-2xl font-semibold border-b-2 pb-2 border-b-primary/40'>Why choose us</span>
            <section className=' z-0 min-h-[calc(100vh-50vh)] p-4 xl:p-0  w-full  mx-auto items-center   flex lg:flex-row flex-col '>
                <div className='w-full flex py-12 flex-grow flex-col items-center md:items-start  lg:w-1/2 mb-8'>
                    <span className='text-4xl'>Why</span>
                    <span className='text-primary font-semibold my-2 text-4xl'>XecureCode ?</span>

                    <span className='my-2 font-semibold opacity-55 lg:max-w-[80%]'>&quot;A software solution provider, serving you all the tech needs just in time.&quot;</span>

                    <span className='text-sm font-semibold lg:max-w-[80%]'>As a trusted software development company, our technology partnership is built on trust, benefits, and accountability. Experience seamless, creative, and hassle-free innovation with us.</span>
                </div>


                {/* cards section  */}


                <div className='grid lg:w-2/3 gap-4 w-full mt-8 sm:mt-0 p-2 sm:grid-cols-2 lg:grid-cols-2  md:grid-cols-3 grid-cols-1'>
                    {
                        whyCards.map((item, index) => (
                            <div className='p-2 shadow-md shadow-gray-200 rounded-md  min-h-40 bg-gray-200 relative ' key={index}>
                                <div className='absolute bg-primary w-12 h-12 rounded-b-md flex items-center justify-center top-0 right-0 text-white text-md font-semibold'>
                                    <span>{index + 1}</span>
                                </div>

                                <ServerCrash size={25} className='text-primary m-2 ' />

                                <div className='mt-4 md:mt-2 mb-2 text-xl border-l-2  border-x-primary pl-2 font-semibold w-[80%]'>
                                    <span className='line-clamp-2'>{item.name}</span>
                                </div>

                                <div className='my-4 md:my-2 py-2'>
                                    {item.lists.map((item, index) => (
                                        <span className='max-w-[90%] flex items-center gap-1  line-clamp-1 md:my-1' key={index}><Dot size={40} />{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default WhyChooseUsSection