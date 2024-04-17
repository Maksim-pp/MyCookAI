import axios from 'axios';
import recipeSlice from '../recipeSlice';
import { AppDispatch } from './../index';

export const fetchRecipes = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(recipeSlice.recipesFetching())
        const response = await axios.get('https://dummyjson.com/recipes')
        dispatch(recipeSlice.recipesFetchingSuccess(response.data.recipes))
    } catch(e:any) {
        dispatch(recipeSlice.recipesFetchingError(e.message))
    }
}