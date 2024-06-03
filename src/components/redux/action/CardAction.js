import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const cardAct = createAsyncThunk('card', async (payload) => {
    const responce = await axios.get("https://dummyjson.com/carts")
    return responce.data
})