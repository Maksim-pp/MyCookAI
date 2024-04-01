import { FC } from 'react'
import styles from './styles.module.scss'
import { fetchRecipes } from 'src/entities/lib'
import { NavLink } from 'react-router-dom'
import { RECIPES } from 'src/shared'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Autoplay } from 'swiper/modules'

export const SwiperSliderRecipes: FC = () => {
    const { recipes } = fetchRecipes()
    
    return (
        <Swiper className={styles.block}
            modules={[Autoplay]}
            
            slidesPerView={2}
            onSlideChange={() => console.log()}
            onSwiper={() => console.log()}
            autoplay={{
                delay: 2000
            }}
            >
            {
                recipes.map((el) => (
                    <SwiperSlide key={el.id} className={styles.block__slide}>
                        <NavLink
                            to={`${RECIPES}` + el.name}
                            state={{
                                name: el.name,
                                image: el.image,
                                ingredients: el.ingredients,
                                instructions: el.instructions,
                                prepTimeMinutes: el.prepTimeMinutes,
                                cookTimeMinutes: el.cookTimeMinutes,
                                servings: el.servings,
                                difficulty: el.difficulty,
                                cuisine: el.cuisine,
                            }} className={styles.block__slide__item}>
                            <img src={el.image} alt="Фото еды" className={styles.block__slide__item__img} />
                        </NavLink>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
