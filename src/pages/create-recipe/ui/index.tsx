import { FC, useState } from 'react'
import styles from './styles.module.scss'
import NoFoto from 'src/app/assets/images/foto-none.png'
import Logo from 'src/app/assets/images/logo.png'
import { Button, Field, Icon, RECIPES,  } from 'src/shared'
import { IRecipes, } from 'src/entities/lib'
import { useAppDispatch } from 'src/store'
import recipeSlice from 'src/store/recipeSlice'
import { NavLink } from 'react-router-dom'



export const CreateRecipe: FC = () => {
  const {addRecipe} = recipeSlice
  const dispatch = useAppDispatch()

  const [image, setImage] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [cuisine, setCuisine] = useState<string>('')
  const [prepTimeMinutes, setPrepTimeMinutes] = useState<string>('')
  const [cookTimeMinutes, setCookTimeMinutes] = useState<string>('')
  const [ingredient, setIngredient] = useState<string>('')
  const [ingredients, setIngredients] = useState<any>([])
  const [instruction, setInstruction] = useState<string>('')
  const [instructions, setInstructions] = useState<any>([])
  const id = Date.now()

  const recipesData: IRecipes = {
    id: Date.now(),
    image: image,
    name: name,
    cuisine: cuisine,
    prepTimeMinutes: Number(prepTimeMinutes),
    cookTimeMinutes: Number(cookTimeMinutes),
    ingredients: ingredients,
    instructions: instructions,
  }

  const newRecipe = () => {
    dispatch(addRecipe(recipesData))
  }

  const onChangeIngredients =()=>{
    setIngredients([...ingredients, [ingredient]])
    setIngredient('')
  }
  const onChangeInstructions =()=>{
    setInstructions([...instructions, [instruction]])
    setInstruction('')
  }
  
  const changeHandlerImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value)
  }
  const changeHandlerName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const changeHandlerCuisine = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCuisine(event.target.value)
  }
  const changeHandlerPrepTimeMinutes = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrepTimeMinutes(event.target.value)
  }
  const changeHandlerCookTimeMinutes = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCookTimeMinutes(event.target.value)
  }
  const changeHandlerIngredient = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIngredient(event.target.value)
  }
  const changeHandlerInstruction = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInstruction(event.target.value)
  }

  

  return (
    <div className={styles.block}>
      <img src={Logo} alt="лого" className={styles.block__logo} />
      <div className={styles.block__foto}>
        <img src={NoFoto} alt="Фото" className={styles.block__foto__img} />
        <Field className={styles.block__foto__field} type='text' placeholder='Запишите URL фото' changeHandler={changeHandlerImage} value={image} />
      </div>
      <Field className={styles.block__h1} type='text' placeholder='Запишите название блюда' changeHandler={changeHandlerName} value={name} />
      <div className={styles.block__info}>
        <div className={styles.block__info__text}>
          <Icon icon='knife' className={styles.icon} />
          <Field type='number' placeholder='Подготовка мин.' className={styles.block__info__text__time} changeHandler={changeHandlerPrepTimeMinutes} value={prepTimeMinutes} />
        </div>
        <div className={styles.block__info__text}>
          <Icon icon='microwave-preparations' className={styles.icon} />
          <Field type='number' placeholder='Готовка мин.' className={styles.block__info__text__time} changeHandler={changeHandlerCookTimeMinutes} value={cookTimeMinutes} />
        </div>
        <div className={styles.block__info__text}>
          <Icon icon='location' className={styles.icon} />
          <Field type='text' placeholder='Страна' className={styles.block__info__text__time} changeHandler={changeHandlerCuisine} value={cuisine} />
        </div>
      </div>
      <div className={styles.block__textarea}>
        <Icon icon='salad' className={styles.icon} />
        <div className={styles.ingredients}>
          {
            ingredients.map((el:any)=>(
              <p key={el} className={styles.ingredients__ingredient}>{el}</p>
            ))
          }
        </div>
        <textarea className={styles.block__textarea__text} placeholder='Ингредиенты' cols={40} rows={6} onChange={changeHandlerIngredient} value={ingredient} />
        <Button className={styles.block__button__arr} onClick={onChangeIngredients}>Добавить Ингредиент</Button>
      </div>
      <div className={styles.block__textarea}>
        <Icon icon='cooking-plates' className={styles.icon} />
        <ol className={styles.ol}>
          {
            instructions.map((el:any)=>(
              <li key={el} className={styles.ol__li}>{el}</li>
          ))
          }
        </ol>
        <textarea className={styles.block__textarea__text} placeholder='Инструкция' cols={40} rows={6} onChange={changeHandlerInstruction} value={instruction} />
        <Button className={styles.block__button__arr} onClick={onChangeInstructions}>Добавить Инструкцию</Button>
      </div>
      
      <NavLink to={RECIPES}>
        <Button className={styles.block__button} onClick={newRecipe}>Создать Рецепт</Button>
      </NavLink>
    </div>
  )
}
