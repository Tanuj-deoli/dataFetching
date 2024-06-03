import { RecipeAction, SingleRecipiAction } from "../action/recipesAction";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isloading: false,
    recipeList: [],
    error: ''
}

const RecipeSlice = createSlice({
    name: 'recipes',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(RecipeAction.pending, (state, action) => {
            state.isloading = true
            state.recipeList = []
            state.error = ''
        })
        builder.addCase(RecipeAction.fulfilled, (state, action) => {
            state.isloading = false
            state.recipeList = action.payload
            state.error = ''
        })
        builder.addCase(RecipeAction.rejected, (state, action) => {
            state.isloading = false
            state.recipeList = []
            state.error = action.error
        })
    }
})


const SingleRecipiState = {
    isloading: false,
    singalrecipeList: [],
    error: ''
}

const SingalRecipeSlice = createSlice({
    name: 'recipes',
    initialState: SingleRecipiState,
    extraReducers: (builder) => {
        builder.addCase(SingleRecipiAction.pending, (state, action) => {
            state.isloading = true
            state.singalrecipeList = []
            state.error = ''
        })
        builder.addCase(SingleRecipiAction.fulfilled, (state, action) => {
            state.isloading = false
            state.singalrecipeList = action.payload
            state.error = ''
        })
        builder.addCase(SingleRecipiAction.rejected, (state, action) => {
            state.isloading = false
            state.singalrecipeList = []
            state.error = action.error
        })
    }
})
export const RecipesReducer = RecipeSlice.reducer
export const SingalRecipesReducer = SingalRecipeSlice.reducer