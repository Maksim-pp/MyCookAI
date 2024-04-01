import { FC, useState } from 'react'
import styles from './styles.module.scss'
import { Button, Icon } from 'src/shared'
import { IAddButtonsProps } from 'src/entities/lib/types/add-button-product-types'

export const AddButtonProduct: FC<IAddButtonsProps> = ({addButtonsProduct}) => {

    return (
        <Button className={styles.button} onClick={addButtonsProduct}>
            <Icon icon='loading' className={styles.button__icon} />
            Добавить продукт
            <Icon icon='uicons' className={styles.button__icon} />
        </Button>
    )
}
