import { createSlice } from "@reduxjs/toolkit";
import {getUserAct} from "../action/getUserAction";

const initialState ={
    getUserComment:[],
    isloading:false,
    error:''
}

const userComment = createSlice({
    name:'userComment',
    initialState,
    extraReducers:(builder)=>{
       builder.addCase(getUserAct.pending,(state)=>{
        state.isloading=true
        state.getUserComment=[]
        state.error=''
       })
       builder.addCase(getUserAct.fulfilled,(state,action)=>{
        state.isloading=false
        state.getUserComment=action.payload
       })
       builder.addCase(getUserAct.rejected,(state,action)=>{
        state.isloading=false
        state.getUserComment=[]
        state.error=action.error.message
       })
    }
}) 
export default userComment.reducer