import { createSlice } from "@reduxjs/toolkit";
import { SingleCartAction } from "../action/SingleCartAction";


const initialState = {
    isLoading: false,
    SingleCart: [],
    error: ''
}

const singlecart = createSlice({
    name: 'Single-cart',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(SingleCartAction.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(SingleCartAction.fulfilled, (state, action) => {
            state.SingleCart = action.payload
        })
        builder.addCase(SingleCartAction.rejected, (state, action) => {
            state.error = action.error
        })
    }
})

export default singlecart.reducer