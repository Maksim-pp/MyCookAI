import { useAppSelector } from "src/store";

export function useAuth(){
    const {email, id, token} = useAppSelector((state)=> state.user)

    return {
        isAuth: !!email,
        email,
        id,
        token,
    }
}