import React, { Attributes, DOMAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    children: ReactNode,
    className?: string,
    rest?: DOMAttributes<HTMLButtonElement>


}

const Button = ({ children, className, ...rest }: Props) => {

    return (
        <button {...rest} className={`${twMerge("text-md text-white font-semibold px-5 py-3 bg-primary rounded-md", className)}`}>{children}</button>
    )
}

export default Button