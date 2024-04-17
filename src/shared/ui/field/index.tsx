import { FC } from 'react'
import { IFieldProps } from 'src/shared'

export const Field:FC<IFieldProps> = ({className,placeholder, maxLength, type, value, changeHandler}) => {
  return (
    <input type={type} placeholder={placeholder} className={className} maxLength={maxLength} value={value} onChange={changeHandler}/>
  )
}
