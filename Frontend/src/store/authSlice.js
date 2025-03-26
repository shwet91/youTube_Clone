import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : {} , 
    refreshToken : "",
    accessToken : ""
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        login : (state , action) => {
            state.status = true,
            state.refreshToken = action.payload.refreshToken
            state.accessToken = action.payload.accessToken
            state.userData = action.payload.data 
        },
        logout : (state) => {
            state.status = false,
            state.userData = {}
        }
    }
})

export const { login , logout } = authSlice.actions
export default authSlice.reducer;