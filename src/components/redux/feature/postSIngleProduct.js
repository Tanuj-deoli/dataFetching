import { createSlice } from "@reduxjs/toolkit";
import { postActsingle } from "../action/postSingleproduct";

const initialState={
    isloading:false,
    listComments:[],
    error:''
}

const PostSingleSlice=createSlice({
    name:'postdata',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(postActsingle.pending,(state)=>{
            state.isloading=true
        })
        builder.addCase(postActsingle.fulfilled,(state,action)=>{
            state.isloading=false
            state.listComments=action.payload
        })
        builder.addCase(postActsingle.rejected,(state,action)=>{
            state.isloading=false
            state.error=action.error
        })
    }

})
export default PostSingleSlice.reducer