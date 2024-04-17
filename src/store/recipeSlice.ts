import { IRecipes } from './../entities/lib/types/recipes-api-types';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: <IRecipes[]>[],
        isLoading: false,
        error: '',
    },
    reducers: {
        recipesFetching(state){
            state.isLoading= true;
        },
        recipesFetchingSuccess(state, {payload}:PayloadAction<IRecipes[]>){
            state.isLoading= false;
            state.error = '';
            state.recipes = payload
        },
        recipesFetchingError(state , {payload}:PayloadAction<string>){
            state.isLoading = false;
            state.error = payload
        },
        addRecipe(state, {payload}:PayloadAction<IRecipes>){
            state.recipes = [payload, ...state.recipes]
        },
    }
})

export default recipesSlice.actions

export const recipeReducer = recipesSlice.reducer