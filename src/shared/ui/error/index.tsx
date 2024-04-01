import { FC } from 'react'
import styles from './styles.module.scss'
import { Icon } from '..'

export const Error:FC = () => {
  return (
    <div className={styles.block}>
        <Icon icon='error' className={styles.block__icon}/>
        <div className={styles.block__text}>Извините, какие-то неполадки</div>
    </div>
  )
}
