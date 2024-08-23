import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode,
    className?: string,
    loading?: boolean
}

const Button: FC<Props> = ({ children, loading, className, ...rest }: Props) => {

    return (
        <button {...rest} className={`${twMerge("text-md text-white font-semibold px-5 py-3 bg-primary rounded-md", className)}`}>{loading ? "please wait..." : children}</button>
    )
}

export default Button