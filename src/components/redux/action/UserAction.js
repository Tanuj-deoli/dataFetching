import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const UserAct=createAsyncThunk('useraction',async (payload)=>{
    const responce = await axios.get('https://jsonplaceholder.typicode.com/posts',payload)
    return responce.data
}) 