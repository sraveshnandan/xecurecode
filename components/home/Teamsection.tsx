import { teams } from '@/constants'
import { Linkedin, LinkedinIcon, LucideTwitter, Mail, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Teamsection = () => {
  return (
    <div id='teams' className='flex flex-col items-center gap-4 my-8'>
      <span className='text-primary self-center text-2xl font-semibold border-b-2 pb-2 border-b-primary/40'>Meet our passionate team</span>

      <div className='grid grid-cols-1 sm:grid-cols-2 my-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {
          teams.map((item, index) => (
            <div key={index} className='bg-gray-100 group m-4 hover:shadow-md shadow-black/40 cursor-pointer flex items-center flex-col gap-2  p-4 rounded-full hover:rounded-md'>
              {/* avatar */}
              <div className='w-44 h-44 flex items-center justify-center overflow-hidden rounded-full'>
                <Image src={item.avatar} alt='avatar' width={176} height={176} className='aspect-square object-cover' />
              </div>
              {/* details */}
              <div className='hidden group-hover:flex flex-col'>
                <span className='text-lg font-semibold'>{item.name}</span>
                <span className='text-[10px] font-semibold opacity-60'>{item.role}</span>

                {/* social links */}
                <div className='w-full self-center justify-center flex flex-row gap-4 p-2 items-center'>
                  <Link className='transition-all duration-500 hover:text-primary' href={`mailto:${item.mail}`} target='_blank'><Mail /></Link>
                  <Link className='transition-all duration-500 hover:text-primary' href={`${item.twitter}`} target='_blank'><Twitter /></Link>
                  <Link className='transition-all duration-500 hover:text-primary' href={`${item.linkdin}`} target='_blank'><LinkedinIcon /></Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Teamsection
