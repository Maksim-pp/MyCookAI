import  { FC } from 'react'
import { HeadRecipe } from 'src/entities/head-pages/head-recipe'
import { Recipe } from 'src/entities/library-page/recipe'

export const RecipeBlock:FC = () => {
  return (
    <div>
        <HeadRecipe />
        <Recipe />
    </div>
  )
}
