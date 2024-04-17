import  { FC } from 'react'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'
import { Preloader, RECIPES } from 'src/shared'
import { useAppSelector } from 'src/store'

export const Recipes:FC = () => {
  const {recipes, error,isLoading} = useAppSelector((state)=> state.recipes)


  return (
    <div className={styles.block}>
        {isLoading && <Preloader />}
        {error && <h1>{error}</h1>}
        {
            recipes.map((el)=> (
                <NavLink to={`${RECIPES}`+ el.name } state={{
                    name: el.name,
                    image: el.image,
                    ingredients: el.ingredients,
                    instructions: el.instructions,
                    prepTimeMinutes: el.prepTimeMinutes,
                    cookTimeMinutes: el.cookTimeMinutes,
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
