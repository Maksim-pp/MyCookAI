import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        token: null,
        id: null,
    },
    reducers: {
        setUser(state, {payload}:PayloadAction<any>) {
            state.email = payload.email;
            state.token = payload.token;
            state.id = payload.id;
        },
        removeUser(state){
            state.email = null;
            state.token = null;
            state.id =null;
        }
    },
})

export default userSlice.actions

export const userReducer = userSlice.reducer