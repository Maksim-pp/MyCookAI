import  { FC } from 'react' 
import styles from './styles.module.scss'
import { RecipesBlock } from 'src/widgets/recipes-block-library-page'

export const RecipesPage:FC = () => {
  return (
    <div className={styles.block}>
        <RecipesBlock />
    </div>
  )
}
