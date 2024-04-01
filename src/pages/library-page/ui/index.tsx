import { FC } from 'react'
import styles from './styles.module.scss'
import { Banners } from 'src/widgets/buttons-library-page'

export const LibraryPage:FC = () => {
  return (
    <div className={styles.block}>
      <Banners />
    </div>
  )
}
