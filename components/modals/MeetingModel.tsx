import React, { Dispatch, SetStateAction } from 'react'

type Props = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const MeetingModel = ({ isOpen, setIsOpen }: Props) => {
    return isOpen && (
        <div className='bg-transparent flex items-center justify-center backdrop-blur-sm  fixed z-50 top-0 overflow-hidden w-full h-screen '>

            <div className='md:w-[80%] lg:w-[60%] w-[150%] p-2 bg-white rounded-md h-screen lg:h-[550px] shadow-md shadow-black/40 relative'>

                <div onClick={() => setIsOpen(false)} className='absolute bg-primary text-center px-3 py-2 text-white rounded-md font-medium cursor-pointer bottom-2 left-2'>
                    <span >Close</span>
                </div>


                <iframe src="https://calendly.com/xecurecode/schedule-a-project-introduction-meeting-with-sravesh" frameBorder="0" width="100%" height="500px" allowFullScreen></iframe>

            </div>
        </div>
    )
}

export default MeetingModel