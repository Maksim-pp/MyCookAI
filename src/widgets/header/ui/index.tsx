import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'
import { CREATE_RECIPE_PATH, HOME_PATH, Icon, LIBRARY_PATH, PROFILE_PATH, SHOP_LIST_PATH } from 'src/shared'

export const Header:FC = () => {
  const classes = (isActive: boolean) =>
      isActive ? `${styles.link} ${styles.link_active}` : `${styles.link}`;

  return (
    <nav className={styles.nav}>
      <NavLink to={HOME_PATH} className={({isActive})=> classes(isActive)}>
        <Icon icon='home' className={styles.link__icon}/>
      </NavLink>
      <NavLink to={SHOP_LIST_PATH} className={({isActive})=> classes(isActive)}>
        <Icon icon='shopping-list' className={styles.link__icon}/>
      </NavLink>
      <NavLink to={CREATE_RECIPE_PATH} className={({isActive})=> classes(isActive)}>
        <Icon icon='plus' className={styles.link__icon}/>
      </NavLink>
      <NavLink to={LIBRARY_PATH} className={({isActive})=> classes(isActive)}>
        <Icon icon='book' className={styles.link__icon}/>
      </NavLink>
      <NavLink to={PROFILE_PATH} className={({isActive})=> classes(isActive)}>
        <Icon icon='account' className={styles.link__icon}/>
      </NavLink>
    </nav>
  )
}
