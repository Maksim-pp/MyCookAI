import { FC, useState } from 'react'
import styles from './styles.module.scss'
import { LOGIN, Logo, Preloader, RECIPES, useAuth } from 'src/shared'
import { NavButton } from 'src/widgets/nav-home-button'
import { SwiperSliderRecipes } from 'src/widgets/swiper-recipes'
import { SwiperSliderCountries } from 'src/widgets/swiper-countries'
import { NavLink, Navigate, } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/store'
import userSlice from 'src/store/userSlice'
import { IRecipes } from 'src/entities/lib'

export const Home: FC = () => {
  const { recipes, error, isLoading } = useAppSelector((state) => state.recipes)
  const dispatch= useAppDispatch()
  const {removeUser} = userSlice
  const {isAuth, email} = useAuth()
  
  const [selectRecipes, setSelectRecipes] = useState<IRecipes[]>([])
  const clickHandler = (cuisine: string | undefined) => {
    setSelectRecipes(recipes.filter(el => el.cuisine == cuisine))
  }
  
  return  isAuth ? (
    <div className={styles.block}>
      <div className={styles.block__head}>
        <Logo className={styles.block__logo} />
      <button className={styles.block__signup} onClick={()=>dispatch(removeUser())}>Выйти<br />{email}</button>
      </div>
      
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
  ) :(
    <Navigate to={LOGIN}/>
  )
}