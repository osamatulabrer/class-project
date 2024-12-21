import { configureStore } from "@reduxjs/toolkit";
import productsSlice from '../feature/products/ProductsSlice.jsx'
import categoriesSlice from '../feature/categories/CategorySlice.js'
import  authSlice  from "../feature/auth/AuthSlice.js";


const store = configureStore({
    reducer:{
        product:productsSlice,
        category:categoriesSlice,
        auth:authSlice
    }
   
    
})


export default store