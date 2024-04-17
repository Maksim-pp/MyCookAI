import { HTMLAttributes, ReactNode } from "react"

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement>{
    className: string
    children: string | ReactNode
    onClick?:(e:any)=>void
}