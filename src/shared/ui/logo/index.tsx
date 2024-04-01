import { FC } from 'react'
import LogoImg from 'src/app/assets/images/logo.png'
import { ILogoProps } from 'src/shared'

export const Logo:FC<ILogoProps> = ({className}) => {
  return (
    <img src={LogoImg} alt="Лого" className={className}/>
  )
}
