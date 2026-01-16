import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem("user") ||null
const loginSlice=createSlice({
    name:"login",
    initialState:{
        loading:false,
        user:storedUser,
        error:null
    },
    reducers:{
        fetchLoginRequest(state){
            state.loading= true;
            state.error= null;

        },
        fetchLoginSuccess(state,action){
            state.loading=false;
            state.user=action.payload
        },
        fetchLoginFailure(state,action){
            state.loading=false;
            state.user=null;
            state.error=action.payload
        },
        logoutRequest(state){
            localStorage.removeItem("user")
            localStorage.removeItem("LoggedIn")
            localStorage.setItem("isLoggedIn","N")
            state.loading=false;
            state.user=null;

        }
    }


});
export const {fetchLoginRequest,fetchLoginSuccess,fetchLoginFailure,logoutRequest}= loginSlice.actions
export default loginSlice.reducer
