import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserAct = createAsyncThunk('getUserAct', async (payload) => {
    const responce = await axios.get('https://jsonplaceholder.typicode.com/comments', payload)
    return responce.data
})
