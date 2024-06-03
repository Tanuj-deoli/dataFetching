import { postAct, productsCat } from "../action/postAction";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isloading: false,
    listComment: [],
    error: ''
}

const PostSlice = createSlice({
    name: 'postdata',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(postAct.pending, (state) => {
            state.isloading = true
        })
        builder.addCase(postAct.fulfilled, (state, action) => {
            state.isloading = false
            state.listComment = action.payload
        })
        builder.addCase(postAct.rejected, (state, action) => {
            state.isloading = false
            state.error = action.error
        })
    }

})


//category

const categoriesinitialState = {
    isloading: false,
    categorydata: [],
    error: ''
}

const categories = createSlice({
    name: 'category',
    initialState: categoriesinitialState,
    extraReducers: (builder) => {
        builder.addCase(productsCat.pending, (state) => {
            state.isloading = true
        })
        builder.addCase(productsCat.fulfilled, (state, action) => {
            state.isloading = false
            state.categorydata = action.payload
        })
        builder.addCase(productsCat.rejected, (state, action) => {
            state.isloading = false
            state.error = action.error
        })
    }

})


export const postReducer = PostSlice.reducer;
export const categoriesReducer = categories.reducer;