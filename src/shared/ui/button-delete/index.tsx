import  { FC } from 'react'
import styles from './styles.module.scss'
import { Button, Icon } from '..'
import { IDeleteProps } from 'src/shared'

export const DeleteButton:FC<IDeleteProps> = ({click}) => {
  return (
    <Button className={styles.button} onClick={click}>
        <Icon icon='delete' className={styles.button__icon}/>
    </Button>
  )
}
