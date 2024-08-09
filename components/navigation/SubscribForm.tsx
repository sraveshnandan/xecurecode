"use client"
import { FormEvent, memo, useEffect, useState } from 'react'
import Button from '../shared/Button'
import { toast } from 'sonner'


const SubscribForm = () => {
    const [email, setemail] = useState<string>("");
    const [loading, setloading] = useState(false)
    const handleSubscribeAction = async (ev: FormEvent) => {
        ev.preventDefault();
        setloading(true)
        try {
            //    subscription action 
            toast.success("You have successfully subscribe our newsletter.");
            setemail("")
        } catch (error: any) {
            return toast.error(error.message)
        } finally {
            setemail("");
            setloading(false)
        }

    }

    useEffect(() => {
        console.log("form render")

    }, [])
    return (
        <form onSubmit={handleSubscribeAction} className='flex w-full flex-col gap-2'>
            <input value={email} onChange={(ev) => setemail(ev.target.value)} placeholder='email address' type='email' required className=' p-2 rounded-md mb-2 ring-2 bg-secondry/40 ' />
            <Button loading={loading} type='submit' className='py-2'>
                Subscribe
            </Button>
        </form>
    )
}

export default memo(SubscribForm)