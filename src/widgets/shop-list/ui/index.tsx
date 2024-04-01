import  { FC, useState } from 'react'
import styles from './styles.module.scss'
import { AddButtonProduct } from 'src/entities/add-button-product'
import { DeleteButton, Field } from 'src/shared'
import { Counter } from 'src/features/counter'
import { CheckboxProduct } from 'src/features/checkbox-product'

export const ShopList:FC = () => {

  const [productList, setProductList] = useState<{id: number}[]>([])
  
  const addProduct =()=>{
    setProductList((prev) => [...prev, {id: Date.now()}])
  }
  const deleted = (id: number)=> {
    setProductList((prev)=> prev.filter((el)=> el.id !== id))
  }

  return (
    <div className={styles.block}>
      <div className={styles.block__list}>
        <h1 className={styles.block__list__h1}>Список продуктов</h1>
        <div className={styles.block__list__ul}>
          <AddButtonProduct addButtonsProduct={addProduct} />
          {
            productList.map((el)=>(
              <div key={el.id} className={styles.block__list__ul__item}>
                <CheckboxProduct className={styles.block__list__ul__item__checkbox} />
                <Field className={styles.block__list__ul__item__field} placeholder='Впишите продукт' maxLength={13}/>
                <Counter />
                <DeleteButton click={()=>{deleted(el.id)}}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}