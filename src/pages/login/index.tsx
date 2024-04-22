import { NavLink } from 'react-router-dom'
import { REGISTER } from 'src/shared'
import { Login } from 'src/widgets/login'
import styles from './styles.module.scss'

export const LoginPage = () => {
  return (
    <div className={styles.block}>
      <h1 className={styles.block__h1}>Войти</h1>
      <Login />
      <p className={styles.block__p}>У вас еще нет аккаунта?<br /><NavLink to={REGISTER} className={styles.block__p__link}>Зарегистрироваться</NavLink></p>
    </div>
  )
}
