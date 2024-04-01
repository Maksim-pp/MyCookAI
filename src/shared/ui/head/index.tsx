import { FC } from 'react'
import { IHeadProps } from 'src/shared'

export const Head:FC<IHeadProps> = ({children, className}) => {
  return (
    <div className={className}>
        {children}
    </div>
  )
}
