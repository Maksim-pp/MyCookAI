import { FC } from 'react'
import styles from './styles.module.scss'
import { Icon } from 'src/shared'
import { useLocation } from 'react-router-dom'


export const Recipe:FC= () => {
    const location = useLocation()
    const {name, image, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, cuisine} = location.state
  return (
    <div className={styles.block} >
        <img src={image} alt="Фото еды" className={styles.block__img}/>
        <h1 className={styles.block__h1}>{name}</h1>
        <div className={styles.block__time}>
            <div className={styles.block__time__item}>
                <Icon icon='knife' className={styles.block__time__item__icon}/>
                <p className={styles.block__time__item__text}>Подготовка {prepTimeMinutes} мин.</p>
            </div>
            <div className={styles.block__time__item}>
                <Icon icon='chef-hat' className={styles.block__time__item__icon}/>
                <p className={styles.block__time__item__text}>Готовка <br />{cookTimeMinutes} мин.</p>
            </div>
            <div className={styles.block__time__item}>
                <Icon icon='time' className={styles.block__time__item__icon}/>
                <p className={styles.block__time__item__text}>Всего <br />{prepTimeMinutes + cookTimeMinutes} мин.</p>
            </div>
            <div className={styles.block__time__item}>
                <Icon icon='location' className={styles.block__time__item__icon}/>
                <p className={styles.block__time__item__text}>{cuisine}</p>
            </div>
        </div>
        <div className={styles.block__head}>
            <Icon icon='salad' className={styles.block__head__icon}/>
            <p className={styles.block__head__text}>Ингредиенты</p>
        </div>
        <div className={styles.block__item}>
            {
                ingredients.map((el:any)=>(
                    <p className={styles.block__item__el}>{el}</p>
                ))
            }
        </div>
        <div className={styles.block__head}>
            <Icon icon='corolla' className={styles.block__head__icon}/>
            <p className={styles.block__head__text}>Утварь</p>
        </div>
        <div className={styles.block__item}>
            {}
        </div>
        <div className={styles.block__head}>
            <Icon icon='preparation' className={styles.block__head__icon}/>
            <p className={styles.block__head__text}>Инструкция</p>
        </div>
        <div className={styles.block__item}>
            <ol className={styles.block__item__ol}>
                {instructions.map((el:any)=>(
                    <li className={styles.block__item__ol__li}>{el}</li>
                ))}
            </ol>
        </div>
    </div>
  )
}
