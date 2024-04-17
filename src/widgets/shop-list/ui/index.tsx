import  { FC } from 'react'
import styles from './styles.module.scss'
import { AddButtonProduct } from 'src/entities/add-button-product'
import { DeleteButton, Field } from 'src/shared'
import { Counter } from 'src/features/counter'
import { CheckboxProduct } from 'src/features/checkbox-product'
import productSlice from 'src/store/productSlice'
import { useAppDispatch, useAppSelector } from 'src/store'


export const ShopList:FC = () => {

  const {products} = useAppSelector(state=> state.product)
  const {addProduct, removeProduct, decrement,increment, setIsChecked, changeHandlerNameProduct}= productSlice.actions
  const dispatch = useAppDispatch()

  
  return (
    <div className={styles.block}>
      <div className={styles.block__list}>
        <h1 className={styles.block__list__h1}>Список продуктов</h1>
        <div className={styles.block__list__ul}>
          <AddButtonProduct addButtonsProduct={()=>dispatch(addProduct())} />
          {
            products.map((el)=>(
              <div key={el.id} className={styles.block__list__ul__item}>
                <CheckboxProduct 
                  className={styles.block__list__ul__item__checkbox} 
                  isChecked={el.isChecked} 
                  clickHandler={()=>dispatch(setIsChecked(el.id))}
                />
                <Field 
                  type='text' 
                  className={styles.block__list__ul__item__field} 
                  placeholder='Впишите продукт' 
                  maxLength={13} 
                  value={el.value}
                  changeHandler={(e)=>dispatch(changeHandlerNameProduct({id: el.id, newValue: e.target.value}))}
                />
                <Counter 
                  count={el.count} 
                  Decrement={()=>dispatch(decrement(el.id))} 
                  Increment={()=>dispatch(increment(el.id))}
                  />
                <DeleteButton click={()=>dispatch(removeProduct(el.id))}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}  