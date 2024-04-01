import { FC, useState } from 'react'
import styles from './styles.module.scss'
import { Button } from 'src/shared'

export const Counter:FC = () => {
  const [count, setCount] = useState(1)

  const Increment = ()=>{
    setCount(count + 1)
  }

  const Decrement = ()=>{
    setCount(count - 1)
  }

  return (
    <div className={styles.block}>
        <Button className={styles.block__button} onClick={Decrement}>-</Button>
        <span className={styles.block__count}>{count}</span>
        <Button className={styles.block__button} onClick={Increment}>+</Button>
    </div>
  )
}
