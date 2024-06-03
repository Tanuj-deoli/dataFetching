import { axiosInstance } from "./action";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postActsingle = createAsyncThunk('post',async (id)=>{
    const responce = await axiosInstance.get(`products/${id}`)
    return responce.data
})