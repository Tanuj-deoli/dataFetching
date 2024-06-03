import { axiosInstance } from "./action";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postAct = createAsyncThunk('post', async () => {
    const responce = await axiosInstance.get('products')
    return responce.data
})
export const productsCat = createAsyncThunk('category', async () => {
    const responce = await axiosInstance.get('products/categories')
    return responce.data
})