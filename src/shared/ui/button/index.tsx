import { FC } from "react"
import { IButtonProps } from "src/shared"

export const Button:FC<IButtonProps> = ({children, className, onClick}) => {
  return (
    <button className={className} onClick={onClick}>{children}</button>
  )
}
