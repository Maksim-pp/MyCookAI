import  { FC,  } from 'react'
import styles from './styles.module.scss'
import { fetchRecipes } from 'src/entities/lib'
import { NavLink } from 'react-router-dom'
import { RECIPES } from 'src/shared'

export const Recipes:FC = () => {
    const {recipes} = fetchRecipes()
    
  return (
    <div className={styles.block}>
        {
            recipes.map((el)=> (
                <NavLink to={`${RECIPES}`+ el.name } state={{
                    name: el.name,
                    image: el.image,
                    ingredients: el.ingredients,
                    instructions: el.instructions,
                    prepTimeMinutes: el.prepTimeMinutes,
                    cookTimeMinutes: el.cookTimeMinutes,
                    servings: el.servings,
                    difficulty: el.difficulty,
                    cuisine: el.cuisine,
                }} key={el.id} className={styles.block__item}>
                    <img src={el.image} alt="Фото еды" className={styles.block__item__img}/>
                    <p  className={styles.block__item__text}>{el.name}</p>
                </NavLink>
            ))
        }
    </div>
  )
}
