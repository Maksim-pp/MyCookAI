import { useAppDispatch } from 'src/store'
import userSlice from 'src/store/userSlice'
import { Form } from 'src/widgets/form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { HOME_PATH } from 'src/shared';

export const SignUp = () => {

    const dispatch= useAppDispatch()
    const {setUser} = userSlice
    const navigate= useNavigate()

    const handleRegister = (email:string, password:string)=>{
        const auth = getAuth();
        console.log(auth);
        
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                }));
                navigate(HOME_PATH)
            })
            .catch(console.error)
    }

  return (
    <Form 
        title='Регистрация'
        handleClick={handleRegister}
    />
  )
}
