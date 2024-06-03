import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./feature/UserSlice";
import CommentReducer from './feature/getUserSlice'
import CardReducer from './feature/CardSlice'
import SingleProductSlice from './feature/postSIngleProduct'
import { postReducer, categoriesReducer } from "./feature/postSlice";
import SingleCartReducer from './feature/SingleCartSlice'
import QuotesReducer from './feature/QuotesSlice'
import { RecipesReducer, SingalRecipesReducer } from './feature/recipesSlice'

const store = configureStore({
    reducer: {
        user: UserReducer,
        comment: CommentReducer,
        card: CardReducer,
        postc: postReducer,
        singleprod: SingleProductSlice,
        category: categoriesReducer,
        cartId: SingleCartReducer,
        quotes: QuotesReducer,
        foodStore: RecipesReducer,
        SingalRecipe: SingalRecipesReducer,

    }
})
export default store