import { createSlice } from "@reduxjs/toolkit";
import {UserAct} from "../action/UserAction";

const initialState={
    userList:[],
    error:'',
    isLoading:false
}

const userReducer = createSlice({
    name:'user',
    initialState,
    extraReducers:(builder)=>{
     builder.addCase(UserAct.pending,(state)=>{
        state.isLoading=true
        state.userList=[]
        state.error=''
     })
     builder.addCase(UserAct.fulfilled,(state,action)=>{
        state.isLoading=false
        state.userList=action.payload
     })
     builder.addCase(UserAct.rejected,(state,action)=>{
        state.isLoading=false
        state.error=action.error.message
     })
    }
})
export default userReducer.reducer