import { FC } from 'react'
import { ICheckboxProductProps, Icon } from 'src/shared'
import styles from './styles.module.scss'

export const CheckboxProduct:FC<ICheckboxProductProps> = ({isChecked, className, clickHandler}) => {

    const classes = className ? `${className} ${styles.checkbox}` : styles.checkbox;
    const checkboxClasses = isChecked ? `${classes} ${styles.checkbox_active}` : classes;

  return (
    <div className={checkboxClasses} onClick={clickHandler}>
      <Icon icon='checkMark' className={styles.checkbox__mark}/>
    </div>
  )
}