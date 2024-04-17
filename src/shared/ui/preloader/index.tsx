import { FC } from "react"
import styles from './styles.module.scss'

export const Preloader:FC = () => {
  return (
    <span className={styles.loader}></span>
  )
}
