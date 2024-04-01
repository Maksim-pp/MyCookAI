import { FC } from 'react'
import { IFieldProps } from 'src/shared'

export const Field:FC<IFieldProps> = ({className,placeholder, maxLength}) => {
  return (
    <input type="text" placeholder={placeholder} className={className} maxLength={maxLength}/>
  )
}
