import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const SingleCartAction = createAsyncThunk('cart', async (id) => {
    const responce = await axios.get(`https://dummyjson.com/carts/${id}`)
    return responce.data
})