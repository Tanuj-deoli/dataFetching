import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const Quotes = createAsyncThunk('quotes', async () => {
    const responce = await axios.get('https://dummyjson.com/quotes')
    return responce.data
})