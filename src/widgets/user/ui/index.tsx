import { FC } from 'react'
import { Field, Icon } from 'src/shared'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from 'src/store'
import profileSlice from 'src/store/profilSlice'

export const User:FC = () => {
    const {age,gender, name,surname} = useAppSelector((state)=>state.profile)
    const {changeHandlerAge, changeHandlerGender, changeHandlerName,changeHandlerSurname} = profileSlice.actions
    const dispatch = useAppDispatch()

  return (
    <div className={styles.block}>
        <div className={styles.block__user}>
            <Icon icon='nameUser' className={styles.block__user__icon}/>
            <Field type='text' className={styles.block__user__field} placeholder='Имя' maxLength={14} value={name} 
                changeHandler={(event)=>dispatch(changeHandlerName(event.target.value))}/>
            <Icon icon='pen' className={styles.block__user__icon}/>
        </div>
        <div className={styles.block__user}>
            <Icon icon='nameUser' className={styles.block__user__icon}/>
            <Field type='text' className={styles.block__user__field} placeholder='Фамилия' maxLength={14} value={surname} 
                changeHandler={(event)=>dispatch(changeHandlerSurname(event.target.value))}/>
            <Icon icon='pen' className={styles.block__user__icon} />
        </div>
        <div className={styles.block__user}>
            <Icon icon='age' className={styles.block__user__icon}/>
            <Field type='number' className={styles.block__user__field} placeholder='Ваш возраст' maxLength={2} value={age} 
                changeHandler={(event)=>dispatch(changeHandlerAge(event.target.value))} />
            <Icon icon='pen' className={styles.block__user__icon}/>
        </div>
        <div className={styles.block__user}>
            <Icon icon='gender' className={styles.block__user__icon}/>
            <Field type='text' className={styles.block__user__field} placeholder='Ваш пол' value={gender} 
                changeHandler={(event)=>dispatch(changeHandlerGender(event.target.value))} />
            <Icon icon='pen' className={styles.block__user__icon}/>
        </div>
    </div>
  )
}
