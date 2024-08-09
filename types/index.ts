import { strict } from "assert"
import { LucideIcon } from "lucide-react"

export interface InavMenu {
    name: string,
    link?: string,
    id?: string
}

export interface IcomapnyDetails {
    email: string,
    call: string,
    address: string,
    socialLinks: { icon: LucideIcon, link: string }[]
}