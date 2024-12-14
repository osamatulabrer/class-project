import { configureStore } from "@reduxjs/toolkit";
import productsSlice from '../feature/products/ProductsSlice.jsx'
import categoriesSlice from '../feature/categories/CategorySlice.js'

const store = configureStore({
    reducer:{
        product:productsSlice,
        category:categoriesSlice,
    }
})
export default store