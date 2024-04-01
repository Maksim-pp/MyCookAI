import  { FC } from 'react'
import { Head, Icon } from 'src/shared'
import styles from './styles.module.scss'

export const HeadShopList:FC = () => {
  return (
    <Head className={styles.block}>
        <Icon icon='shopping-list' className={styles.block__icon}/>
        Список покупок для рецепта
    </Head>
  )
}
