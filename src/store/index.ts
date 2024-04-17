import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productReducer } from './productSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { recipeReducer } from './recipeSlice';
import { profileReducer } from './profilSlice';

const rootReducer = combineReducers({
    product: productReducer,
    recipes: recipeReducer,
    profile: profileReducer,
})

const store = configureStore({
    reducer: rootReducer,
})


export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState>= useSelector;

export default store
