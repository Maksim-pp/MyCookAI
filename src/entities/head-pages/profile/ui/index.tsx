import  { FC } from 'react'
import { Head, Icon } from 'src/shared'
import styles from './styles.module.scss'

export const HeadProfile:FC = () => {
  return (
    <Head className={styles.block}>
        <Icon icon='about' className={styles.block__icon}/>
        Профиль
    </Head>
  )
}
