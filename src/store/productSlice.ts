import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IProduct{
    id: number, 
    count: number,
    isChecked: boolean,
    value: string
}

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: <IProduct[]>[],
        
    },
    reducers: {
        addProduct: state => {
            state.products = [{ id: Date.now(), count: 1, isChecked: false, value: ''}, ...state.products]
        },
        removeProduct: (state, {payload}: PayloadAction<number>) => {
            state.products = state.products.filter((el) => el.id !== payload)
        },
        increment: (state, {payload}: PayloadAction<number>) =>{
            state.products.forEach((el)=>{
                if(el.id === payload){
                    el.count = el.count + 1
                }
            })
        },
        decrement: (state, {payload}: PayloadAction<number>) =>{
            state.products.forEach((el)=>{
                if(el.id === payload){
                    el.count = el.count - 1
                }
            })
        },
        setIsChecked: (state, {payload}: PayloadAction<number>)=>{
            state.products.forEach((el)=>{
                if(el.id === payload){
                    el.isChecked = !el.isChecked
                }
            })
        },
        changeHandlerNameProduct: (state, {payload:{id, newValue}}: PayloadAction<{id: number, newValue: string}>)=> {
            state.products.forEach((el)=>{
                if(el.id === id){
                    el.value = newValue
                }
            })
        }
    }
})

export default  productSlice

export const productReducer = productSlice.reducer