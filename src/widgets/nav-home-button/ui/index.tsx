import { FC } from 'react'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'
import { ButtonNext, CREATE_RECIPE_PATH } from 'src/shared'
import Foto from 'src/app/assets/images/picture-of-food-1.png'

export const NavButton: FC = () => {
    return (
        <div className={styles.block}>
            <img src={Foto} alt="" className={styles.block__img} />
            <h1 className={styles.block__h1}>Создать рецепт</h1>
            <NavLink to={CREATE_RECIPE_PATH} className={styles.block__link}>
                <ButtonNext />
            </NavLink>
        </div>
    )
}
