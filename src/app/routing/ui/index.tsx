import { FC, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { HomePage } from "src/pages/home-page"
import { LoginPage } from "src/pages/login"
import { Registration } from "src/pages/registration"
import {HOME_PATH, LOGIN, REGISTER,} from "src/shared"
import { useAppDispatch,  } from "src/store"
import { fetchRecipes } from "src/store/reducers/ActionCreators"


export const Routing:FC = () => {

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecipes())
  }, [])


  return (
    <div>
      <Routes>
        <Route  path={REGISTER} element={<Registration />} />
        <Route path={LOGIN} element={<LoginPage/>} />
        <Route path={HOME_PATH} element={<HomePage />} />
      </Routes>
    </div>
  )
}