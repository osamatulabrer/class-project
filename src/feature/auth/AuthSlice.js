import { createSlice } from "@reduxjs/toolkit"




const initialState = null


export const  authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logInUser: (state,action)=>{
            state = action.payload
        }
    }

})

export default authSlice.reducer;

export const {logInUser} = authSlice.actions;