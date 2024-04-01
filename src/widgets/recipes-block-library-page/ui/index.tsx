import { FC } from 'react'
import styles from './styles.module.scss'
import { Recipes } from 'src/entities/library-page/recipes'
import { HeadRecipes } from 'src/entities/head-pages/head-recipes-library-page'

export const RecipesBlock:FC = () => {
  return (
    <div className={styles.block}>
        <HeadRecipes />
        <Recipes />
    </div>
  )
}
