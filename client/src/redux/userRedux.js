import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name: "user",
    initialState:{
        currentUser : null,
        isFetching:false, 
        error:false,
    },
    reducers: {
       loginStart:(state)=>{
        state.isFetching=true
       },
       loginSuccess:(state, action)=>{
        state.isFetching=false;
        state.currentUser=action.payload
       },
       loginFailure:(state)=>{
        state.isFetching=false;
        state.error=true;
       },
       logout: (state) => {
        state.currentUser = null;
      },
      clearError: (state) => {
        state.error = null;
      },
    },
});


export const {loginStart, loginSuccess, loginFailure, logout, clearError} = userSlice.actions;
export default userSlice.reducer;



