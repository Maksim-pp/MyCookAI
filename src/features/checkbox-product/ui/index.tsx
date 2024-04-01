import { FC, useState } from 'react'
import { ICheckboxProductProps, Icon } from 'src/shared'
import styles from './styles.module.scss'

export const CheckboxProduct:FC<ICheckboxProductProps> = ({className}) => {
    const [isChecked, setIsCheck] = useState<boolean>(false)
    const clickHandler =()=>{
      setIsCheck(!isChecked);
    }

    const classes = className ? `${className} ${styles.checkbox}` : styles.checkbox;
    const checkboxClasses = isChecked ? `${classes} ${styles.checkbox_active}` : classes;

  return (
    <div className={checkboxClasses} onClick={clickHandler}>
      <Icon icon='check-mark' className={styles.checkbox__mark}/>
    </div>
  )
}