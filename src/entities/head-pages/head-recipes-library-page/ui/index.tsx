import  { FC } from 'react'
import { Head, Icon, LIBRARY_PATH } from 'src/shared'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'

export const HeadRecipes:FC = () => {
  return (
    <Head  className={styles.block}>
        <NavLink to={LIBRARY_PATH} className={styles.block__link}>
          <Icon icon='prev' className={styles.block__link__icon}/>
        </NavLink>
        <Icon icon='book' className={styles.block__icon}/>
        Мои рецепты
    </Head>
  )
}
