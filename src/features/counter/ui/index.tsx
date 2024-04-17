import { FC } from 'react'
import styles from './styles.module.scss'
import { Button } from 'src/shared'

interface ICounterProps {
  count: number
  Decrement:()=> void
  Increment: () => void
}

export const Counter: FC<ICounterProps> = ({count, Decrement, Increment}) => {

  return (
    <div className={styles.block}>
      <Button className={styles.block__button} onClick={Decrement}>-</Button>
      <span className={styles.block__count}>{count}</span>
      <Button className={styles.block__button} onClick={Increment}>+</Button>
    </div>
  )
}
