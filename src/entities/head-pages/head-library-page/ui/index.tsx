import  { FC } from 'react'
import { Head, Icon } from 'src/shared'
import styles from './styles.module.scss'

export const HeadLibrary:FC = () => {
  return (
    <Head className={styles.block}>
        <Icon icon='book' className={styles.block__icon}/>
        Личный кабинет
    </Head>
  )
}
