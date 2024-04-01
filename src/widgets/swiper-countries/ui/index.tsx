import { FC } from 'react'
import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { country } from 'src/shared'
import { ISwiperCountriesProps } from 'src/widgets/lib'


export const SwiperSliderCountries: FC<ISwiperCountriesProps> = ({clickHandler}) => {
    return (
        <Swiper
            className={styles.block}
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            onSlideChange={() => console.log()}
            onSwiper={() => console.log()}
            autoplay={{
                delay: 3500
            }}
        >
            {
                country.map((el) => (
                    <SwiperSlide key={el.key} className={styles.block__item} onClick={()=>clickHandler(el.key)}>
                        <img src={el.image} alt="Страна" className={styles.block__item__img} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
