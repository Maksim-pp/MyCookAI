import { FC } from 'react'
import { Button, Icon } from '..'
import styles from './styles.module.scss'


export const ButtonNext:FC = () => {
  return (
    <Button className={styles.button}>
        <Icon icon='arrow' className={styles.button__icon}/>
    </Button>
  )
}
