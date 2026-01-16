import { createSlice } from "@reduxjs/toolkit";

const postSlice= createSlice({
    name:"post",
    initialState:{
        loading:false,
        data:[],
        error:null
    },
    reducers:{
        fetchPostRequest(state){
            state.loading=true;
            state.error=null;
        },
        fetchPostSuccess(state,action){
            state.loading=false;
            state.data=action.payload
        },
        fetchPostError(state,action){
            state.loading=false;
            state.error= action.payload
        }
    }
});
export const {fetchPostRequest,fetchPostSuccess,fetchPostError}=postSlice.actions
export default postSlice.reducer;