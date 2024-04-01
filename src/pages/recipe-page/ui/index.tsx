import  { FC } from 'react' 
import styles from './styles.module.scss'
import { RecipeBlock } from 'src/widgets/recipe-block'

export const RecipePage:FC = () => {
  return (
    <div className={styles.block}>
        <RecipeBlock />
    </div>
  )
}
