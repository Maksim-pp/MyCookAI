import { FC } from "react"
import { NavLink } from "react-router-dom"
import { LOGIN } from "src/shared"
import { SignUp } from "src/widgets/SignUp"
import styles from './styles.module.scss'

export const Registration:FC = () => {

  return (
    <div className={styles.block}>
      <h1 className={styles.block__h1}>Регистрация</h1>
      <SignUp />
      <p className={styles.block__p}>
        Уже есть аккаунт?<br /><NavLink to={LOGIN} className={styles.block__p__link}>Войти</NavLink>
      </p>
    </div>
  )
}
