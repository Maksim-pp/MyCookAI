import { FC } from 'react'
import { User } from 'src/widgets/user'
import styles from './styles.module.scss'
import { HeadProfile } from 'src/entities/head-pages/profile'

export const Profile:FC = () => {
  return (
    <div className={styles.block}>
      <HeadProfile />
      <User />
    </div>
  )
}
