import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        name: <string>'',
        surname: <string>'',
        age: <string>'',
        gender: <string>'',
    },
    reducers: {
        changeHandlerName: (state, {payload}:PayloadAction<string>) =>{
            state.name = payload
        },
        changeHandlerSurname: (state, {payload}:PayloadAction<string>) =>{
            state.surname = payload
        },
        changeHandlerAge: (state, {payload}:PayloadAction<string>) =>{
            state.age = payload
        },
        changeHandlerGender: (state, {payload}:PayloadAction<string>) =>{
            state.gender = payload
        },
    }
})

export default profileSlice

export const profileReducer = profileSlice.reducer