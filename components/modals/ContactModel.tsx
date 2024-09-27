
"use client"
import Image from 'next/image'
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import Button from '../shared/Button'
import { X } from 'lucide-react'
import { toast } from 'sonner'

type Props = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
}

const ContactModel = ({ isOpen, setIsOpen }: Props) => {
    const [formData, setformData] = useState({
        name: "",
        email: "",
        mobile: "",
        services: "",
        query: ""
    })


    const handleFormSubmit = async (ev: FormEvent) => {
        ev.preventDefault()
        try {
            setIsOpen(false)
            return toast.success("Your query is submitted successfully.")


        } catch (error) {

        }

    }


    return isOpen && (
        <div className='bg-transparent flex items-center justify-center backdrop-blur-sm  fixed z-50 top-0 overflow-hidden w-full h-screen '>

            <div className='bg-white lg:w-[70%] rounded-md overflow-hidden w-[90%] p-2 flex flex-col md:flex-row shadow-md shadow-black/40'>
                {/* logo section  */}
                <div className='w-1/2 hidden bg-black p-12 rounded-l-lg md:flex flex-col text-white items-center justify-center'>
                    <Image src={"/images/logo_white.svg"} width={150} height={150} alt='logo' />
                    <span className='mt-4 text-3xl font-semibold'>XecureCode</span>
                    <span className='mt-4 text-sm opacity-70 font-medium'>Next gen software development.</span>
                </div>

                <form onSubmit={handleFormSubmit} className='w-full relative rounded-r-lg border-2  p-2 items-start md:w-12 flex-grow flex flex-col'>

                    <div onClick={() => setIsOpen(false)} className='absolute cursor-pointer hover:bg-gray-200 rounded-full p-2 text-red top-2 right-2'>
                        <X />
                    </div>
                    <span className='text-2xl font-medium'>Get in touch with us</span>

                    <div className='mt-2'>
                        <input value={formData.name} required className='p-2 mb-2 w-full  font-medium border-b-2 pb-3' type="text" placeholder='enter your name' onChange={(ev) => setformData(prev => ({ ...prev, name: ev.target.value }))} />

                        <input value={formData.email} required className='p-2 mb-2  w-full font-medium border-b-2 pb-3' type="email" placeholder='enter your email' onChange={(ev) => setformData(prev => ({ ...prev, email: ev.target.value }))} />

                        <input value={formData.mobile} required className='p-2 mb-2 w-full font-medium border-b-2 pb-3' type="text" placeholder='e.g: +91 9126126126' onChange={(ev) => setformData(prev => ({ ...prev, mobile: ev.target.value }))} />


                        {/* services  */}

                        <select className='w-full p-2 font-semibold mb-2' onChange={(ev) => setformData(prev => ({ ...prev, services: ev.target.value }))}>
                            <option value="Full Stack Development">Full Stack Development</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Adminstrative Application">Adminstrative Application</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Others">Others</option>
                        </select>

                        <textarea placeholder='How can we help you?' className='border-2 rounded-md p-2 w-full' onChange={(ev) => setformData(prev => ({ ...prev, query: ev.target.value }))}>

                        </textarea>

                        <Button type='submit' className='w-full mt-4'>Submit</Button>
                    </div>
                </form>

            </div >
        </div >
    )
}

export default ContactModel