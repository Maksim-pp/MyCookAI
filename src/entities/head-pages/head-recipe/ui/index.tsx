import  { FC } from 'react'
import { Head, Icon, RECIPES,  } from 'src/shared'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'

export const HeadRecipe:FC = () => {
  return (
    <Head  className={styles.block}>
        <NavLink to={RECIPES} className={styles.block__link}>
          <Icon icon='prev' className={styles.block__link__icon}/>
        </NavLink>
        <Icon icon='book' className={styles.block__icon}/>
        Рецепт
    </Head>
  )
}
