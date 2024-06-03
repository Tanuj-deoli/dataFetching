import { Quotes } from "../action/QuotesAction";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isloading: false,
    quotesList: [],
    error: ''
}

const QuotesSlice = createSlice({
    name: 'quotes',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(Quotes.pending, (state) => {
            state.isloading = true
            state.error = ''
            state.quotesList = []
        })
        builder.addCase(Quotes.fulfilled, (state, action) => {
            state.quotesList = action.payload
            state.error = ''
            state.isloading = false
        })
        builder.addCase(Quotes.rejected, (state, action) => {
            state.error = action.error
            state.isloading = false
            state.quotesList = []
        })
    }
})
export default QuotesSlice.reducer