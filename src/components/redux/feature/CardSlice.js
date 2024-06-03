import { createSlice } from "@reduxjs/toolkit";
import { cardAct } from "../action/CardAction";

const initialState={
    isloading:false,
    cardlist:[],
    error:''
}

const cardSlice=createSlice({
    name:'card',
    initialState,
    extraReducers:(builder)=>{
    builder.addCase(cardAct.pending,(state)=>{
        // state.cardlist=[]
        state.isloading=true
        state.error=''
    })
    builder.addCase(cardAct.fulfilled,(state,action)=>{
        state.cardlist=action.payload
        state.error=''
        state.isloading=false
    })
    builder.addCase(cardAct.rejected,(state,action)=>{
        // state.cardlist=[]
        state.error=action.error
        state.isloading=false
    })
    }
})
export default cardSlice.reducer