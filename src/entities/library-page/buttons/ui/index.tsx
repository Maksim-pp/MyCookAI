import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'
import {  ButtonNext, button } from 'src/shared'

export const BannersButtons:FC = () => {
  return (
    <div className={styles.block}>
      {
        button.map((el) =>(
          <div key={el.id} className={styles.block__item}>
            <img src={el.img} alt="" className={styles.block__item__img}/>
            <h1 className={styles.block__item__h1}>{el.text}</h1>
            <NavLink to={el.path} className={styles.block__item__link}>
              <ButtonNext />
            </NavLink>
          </div>
        ))
      }
    </div>
  )
}
