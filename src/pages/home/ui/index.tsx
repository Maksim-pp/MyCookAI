import { FC, useState } from 'react'
import styles from './styles.module.scss'
import { Logo, Preloader, RECIPES } from 'src/shared'
import { NavButton } from 'src/widgets/nav-home-button'
import { SwiperSliderRecipes } from 'src/widgets/swiper-recipes'
import { SwiperSliderCountries } from 'src/widgets/swiper-countries'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from 'src/store'

export const Home: FC = () => {
  const { recipes, error, isLoading } = useAppSelector((state) => state.recipes)

  
  const [selectRecipes, setSelectRecipes] = useState(recipes)
  const clickHandler = (cuisine: string | undefined) => {
    console.log(setSelectRecipes(recipes.filter(el => el.cuisine == cuisine)))
  }

  return (
    <div className={styles.block}>
      <Logo className={styles.block__logo} />
      <NavButton />
      <h1 className={styles.block__h1}>Ваши рецепты</h1>
      <SwiperSliderRecipes />
      <h1 className={styles.block__h1}>Блюда по странам</h1>
      <SwiperSliderCountries clickHandler={clickHandler} />
      {isLoading && <Preloader />}
      {error && <h1>{error}</h1>}
      {
        selectRecipes.map(el => (
          <NavLink to={`${RECIPES}` + el.name} state={{
            name: el.name,
            image: el.image,
            ingredients: el.ingredients,
            instructions: el.instructions,
            prepTimeMinutes: el.prepTimeMinutes,
            cookTimeMinutes: el.cookTimeMinutes,
            cuisine: el.cuisine,
          }} key={el.id} className={styles.block__filter}>
            <img src={el.image} alt="" className={styles.block__filter__img} />
            <p className={styles.block__filter__text}>{el.cuisine}: <span className={styles.block__filter__text__span}>{el.name}</span></p>
          </NavLink>
        ))
      }
    </div>
  )
}