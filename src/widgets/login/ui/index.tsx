import { FC } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from 'src/store'
import userSlice from 'src/store/userSlice'
import { Form } from 'src/widgets/form';
import { useNavigate } from 'react-router-dom';
import { HOME_PATH } from 'src/shared';


export const Login:FC = () => {
    const dispatch= useAppDispatch()
    const {setUser} = userSlice
    const navigate= useNavigate()

    const handleLogin = (email:string, password:string)=>{
        const auth = getAuth();
        
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            dispatch(setUser({
                email: user.email,
                id: user.uid,
            }));
            navigate(HOME_PATH)
        })
            .catch(()=>alert('Не существует такого пользователя'))
    }


  return (
    <div>
        <Form 
        title='Войти'
        handleClick={handleLogin}/>
    </div>
  )
}
