import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const RecipeAction = createAsyncThunk('recipe', async () => {
    const responce = await axios.get('https://dummyjson.com/recipes')
    return responce.data
})

export const SingleRecipiAction = createAsyncThunk('singal', async (id) => {
    const responce = await axios.get(`https://dummyjson.com/recipes/${id}`)
    return responce.data
})