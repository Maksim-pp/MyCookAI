import { FC } from "react"
import styles from './styles.module.scss'
import { HeadLibrary } from "src/entities/head-pages/head-library-page"
import { BannersButtons } from "src/entities/library-page/buttons"

export const Banners:FC = () => {
  return (
    <div className={styles.block}>
      <HeadLibrary />
      <BannersButtons />
    </div>
  )
}
