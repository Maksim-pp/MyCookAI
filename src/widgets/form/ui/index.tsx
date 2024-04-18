import { FC, useState } from 'react'
import styles from './styles.module.scss'

interface IForm {
    title: string,
    handleClick: (email:string, pass:string) => void
}

export const Form:FC<IForm> = ({title, handleClick}) => {
    const [email, setEmail]=useState('')
    const [pass, setPass]=useState('')

  return (
    <div className={styles.block}>
        <input 
            className={styles.block__input}
            type="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='email'
        />
        <input 
            className={styles.block__input}
            type="password" 
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
            placeholder='password'
        />

        <button 
            onClick={()=>handleClick(email, pass)}
            className={styles.block__button}>
            {title}
        </button>
    </div>
  )
}
